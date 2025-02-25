const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
menu.classList.toggle('open');
toggleButton.classList.toggle('ativo');
});


// script.js
let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Ajusta o índice para permitir navegação infinita
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // Move os slides
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function mudarSlide(direcao) {
    mostrarSlide(slideIndex + direcao);
}

// Inicializa o carrossel com o primeiro slide
mostrarSlide(slideIndex);