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

function clicouSlide(event) {
    let imagem = event.target; // A imagem que foi clicada
    let botao = event.currentTarget; // O botão que foi clicado

    // Verifica se a imagem já foi ampliada (para evitar redimensionamentos múltiplos)
    if (imagem.style.width === '50vw') return;

    // Aplica as transformações para maximizar a imagem
    imagem.style.width = '80vw';
    imagem.style.height = '80vh';
    imagem.style.position = 'fixed';
    imagem.style.top = '50%';
    imagem.style.left = '50%';
    imagem.style.transform = 'translate(-50%, -50%)';
    imagem.style.zIndex = '9999';
    imagem.style.transition = 'width 0.5s ease, height 0.5s ease';
    imagem.style.objectFit = 'contain';

    // Desabilita o pointerEvents de todos os botões
    document.querySelectorAll('.botaoMosaico').forEach((button) => {
        button.style.pointerEvents = 'none';
    });

    // Adiciona o evento de clique fora da imagem para restaurar
    const clickOutsideListener = function(event) {
        if (!imagem.contains(event.target)) { // Verifica se o clique foi fora da imagem
            restaurarImagem(imagem);
            document.removeEventListener('click', clickOutsideListener); // Remove o listener após o clique fora
        }
    };

    // Registra o evento de clique fora
    document.addEventListener('click', clickOutsideListener);
}

function restaurarImagem(imagem) {
    // Restaura o tamanho e a posição da imagem para o estado original
    imagem.style.width = '100%';
    imagem.style.height = '100%';
    imagem.style.position = '';
    imagem.style.top = '';
    imagem.style.left = '';
    imagem.style.zIndex = '';
    imagem.style.transition = 'width 0.5s ease, height 0.5s ease';
    imagem.style.transform = '';
    imagem.style.objectFit = '';

    // Habilita novamente os pointerEvents para todos os botões
    document.querySelectorAll('.botaoMosaico').forEach((button) => {
        button.style.pointerEvents = 'auto';
    });
}

// Organizar as imagens no layout de mosaico
document.addEventListener("DOMContentLoaded", function () {
    const mosaic = document.querySelector(".mosaic");  // Seleciona o contêiner do mosaico
    const buttons = document.querySelectorAll(".mosaic button");  // Seleciona todos os botões dentro do mosaico

    // Função para ajustar o layout do mosaico
    function adjustLayout() {
        const containerWidth = mosaic.offsetWidth; // Largura do contêiner principal
        const gap = 10; // Espaçamento entre as imagens
        const columns = Math.floor(containerWidth / 300); // Calcula o número de colunas baseado na largura do contêiner
        const columnWidth = (containerWidth - (gap * (columns - 1))) / columns; // Largura de cada coluna
        const heights = new Array(columns).fill(0); // Cria um array para armazenar as alturas das colunas

        // Reseta o layout antes de calcular novamente
        mosaic.style.position = "relative";

        buttons.forEach((button) => {
            const img = button.querySelector("img");  // Seleciona a imagem dentro de cada botão
            const aspectRatio = img.naturalWidth / img.naturalHeight; // Calcula a proporção da imagem
            const width = columnWidth; // A largura de cada coluna
            const height = width / aspectRatio; // A altura calculada com base na proporção

            // Define o tamanho do contêiner da imagem
            button.style.position = "absolute";
            button.style.width = `${width}px`;
            button.style.height = `${height}px`;

            // Encontrar a coluna com a menor altura para posicionar a imagem
            const minHeight = Math.min(...heights);
            const columnIndex = heights.indexOf(minHeight); // Índice da coluna com menor altura

            // Posiciona o botão na coluna correta
            button.style.top = `${minHeight}px`;
            button.style.left = `${columnIndex * (columnWidth + gap)}px`;

            // Atualiza a altura da coluna para refletir a nova imagem
            heights[columnIndex] += height + gap;
        });

        // Ajusta a altura do contêiner para cobrir o conteúdo
        mosaic.style.height = `${Math.max(...heights)}px`;
    }

    // Chama a função de ajuste de layout ao carregar a página
    window.addEventListener("load", adjustLayout);
    // Chama a função de ajuste de layout quando a janela for redimensionada
    window.addEventListener("resize", adjustLayout);
});

//Carregamento gradual das imagens para otimização
document.addEventListener("DOMContentLoaded", function () {
const imagens = document.querySelectorAll('img.fade-img');

imagens.forEach(img => {
    img.addEventListener('load', () => {
    img.classList.add('loaded');
    });

    // Caso a imagem já esteja no cache
    if (img.complete) {
    img.classList.add('loaded');
    }
});
});

