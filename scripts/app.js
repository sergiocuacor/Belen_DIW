document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle para la navegación
        navLinks.classList.toggle('active');

        // Animación de los enlaces
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animación del icono hamburguesa
        hamburger.classList.toggle('toggle');
        const spans = hamburger.querySelectorAll('span');
        spans[0].classList.toggle('toggle1');
        spans[1].classList.toggle('toggle2');
        spans[2].classList.toggle('toggle3');
    });

    // Cerrar el menú al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
            const spans = hamburger.querySelectorAll('span');
            spans[0].classList.remove('toggle1');
            spans[1].classList.remove('toggle2');
            spans[2].classList.remove('toggle3');
            
            links.forEach(link => {
                link.style.animation = '';
            });
        });
    });
});