let animaCompleta = false;

window.addEventListener('load', () => {
    if (!animaCompleta) {
        // Inicia a animação após 0.1 segundo
        setTimeout(() => {
            document.body.classList.add('animar');

            // Após 7 segundos da animação, aplica as classes e define a aba "Início" como ativa
            setTimeout(() => {
                // Exibe a navbar e o conteúdo estático
                document.body.classList.add('fim-viagem', 'aparecerNavbar');
                document.querySelector('.conteudo-final').style.display = 'block'; // Exibe o conteúdo estático
                document.querySelector('.navbar').style.display = 'block'; // Exibe a navbar

                // Define a aba "Início" como ativa após a animação
                const links = document.querySelectorAll('.navbar a');
                links.forEach(link => link.classList.remove('active'));

                // Supondo que o link "Início" tenha href="#Inicio"
                const linkInicio = document.querySelector('.navbar a[data-page="inicio"]');
                if (linkInicio) {
                    linkInicio.classList.add('active');
                }

                // Marca que a animação foi realizada
                animaCompleta = true;
            }, 7000); // Tempo para a animação do foguete (em milissegundos)

        }, 100); // Tempo de espera antes de iniciar a animação do foguete
    }
    // Função para carregar a página selecionada
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            loadPage(page);
        });
    });
});
// Função para carregar conteúdo dinamicamente
function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudo').innerHTML = data; // Carrega o conteúdo na div #conteudo
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
}