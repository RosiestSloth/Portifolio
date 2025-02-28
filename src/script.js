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

    // Organizar fotos no mosaico
    document.addEventListener("DOMContentLoaded", function () {
        const mosaic = document.querySelector(".mosaic");
        const images = document.querySelectorAll(".mosaic img");

        // Função para ajustar o layout
        function adjustLayout() {
            const containerWidth = mosaic.offsetWidth; // Largura do contêiner pai
            const containerHeight = mosaic.offsetHeight; // Altura do contêiner pai
            const gap = 10; // Espaçamento entre os itens
            const columns = Math.floor(containerWidth / 200); // Número de colunas baseado na largura do contêiner
            const columnWidth = (containerWidth - (gap * (columns - 1))) / columns; // Largura de cada coluna
            const heights = new Array(columns).fill(0); // Array para armazenar as alturas das colunas

            // Resetar o layout
            mosaic.style.position = "relative";
            images.forEach((img) => {
                const aspectRatio = img.naturalWidth / img.naturalHeight; // Proporção da imagem
                const width = columnWidth; // Largura da coluna
                const height = width / aspectRatio; // Altura calculada com base na proporção

                // Definir o tamanho do contêiner da imagem
                img.parentElement.style.position = "absolute";
                img.parentElement.style.width = `${width}px`;
                img.parentElement.style.height = `${height}px`;

                // Posicionar a imagem
                const minHeight = Math.min(...heights); // Menor altura atual
                const columnIndex = heights.indexOf(minHeight); // Índice da coluna com menor altura

                img.parentElement.style.top = `${minHeight}px`;
                img.parentElement.style.left = `${columnIndex * (columnWidth + gap)}px`;

                // Atualizar a altura da coluna
                heights[columnIndex] += height + gap;
            });

            // Ajustar a altura do contêiner principal para cobrir o conteúdo
            mosaic.style.height = `${Math.max(...heights)}px`;
        }

        // Ajustar o layout ao carregar a página e ao redimensionar a janela
        window.addEventListener("load", adjustLayout);
        window.addEventListener("resize", adjustLayout);
    });