document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuLateral = document.getElementById('menuLateral');
    const conteudoPrincipal = document.querySelector('.conteudo-principal');

    // Verifica se estamos em uma tela pequena
    function isMobile() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    // Alterna o menu
    function toggleMenu() {
        if (isMobile()) {
            // Em mobile, usamos uma classe de visibilidade
            menuLateral.classList.toggle('visivel');
        } else {
            // Em desktop, usamos uma classe no container principal
            conteudoPrincipal.classList.toggle('menu-escondido');
        }

        // Alterna o ícone do botão
        const icon = menuToggle.querySelector('i');
        if (menuLateral.classList.contains('visivel') || !conteudoPrincipal.classList.contains('menu-escondido')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Evento de clique no botão
    menuToggle.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em um link (apenas mobile)
    const menuLinks = menuLateral.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (isMobile()) {
                toggleMenu();
            }
        });
    });

    // Fecha o menu ao redimensionar para desktop
    window.addEventListener('resize', function () {
        if (!isMobile()) {
            menuLateral.classList.remove('visivel');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});