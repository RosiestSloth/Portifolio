const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggleButton && menu) {
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('open');
        toggleButton.classList.toggle('ativo');
    });
}


let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    if (slides.length === 0 || !slidesContainer) return;

    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}


function mudarSlide(direcao) {
    mostrarSlide(slideIndex + direcao);
}

// Inicializa o carrossel com o primeiro slide
mostrarSlide(slideIndex);

