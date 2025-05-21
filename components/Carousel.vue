<template>
    <div>
        <Carousel v-bind="carouselConfig">
            <Slide class="w-full h-full p-4 bg-gray-200 bg-[url(/imgs/resolucao_problemas.png)] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/70 before:z-0 rounded-md border-4 border-gray-300">
              <div class="relative z-10 rounded-md flex flex-col justify-between h-full p-6">
                  <h4 class="w-full text-center text-[var(--conteiners)] text-3xl md:text-4xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      Resolução de Problemas 
                  </h4>
                  <p class="text-white text-lg md:text-xl">
                      Capacidade de identificar e solucionar desafios técnicos de forma eficiente, garantindo o bom funcionamento dos projetos.
                  </p>
              </div>
            </Slide>
              <Slide class="w-full h-full p-4 bg-gray-200 bg-[url(/imgs/Aprendizado.png)] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/70 before:z-0 rounded-md border-4 border-gray-300">
              <div class="relative z-10 rounded-md flex flex-col justify-between h-full p-6">
                  <h4 class="w-full text-center text-[var(--conteiners)] text-3xl md:text-4xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    Aprendizado Contínuo
                  </h4>
                  <p class="text-white text-lg md:text-xl">
                    Curioso e autodidata, sempre buscando aprimorar habilidades e aprender novas tecnologias para acompanhar as tendências do mercado.
                  </p>
              </div>
            </Slide>
            <Slide class="w-full h-full p-4 bg-[url(/imgs/Organizacao.png)] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/70 before:z-0 rounded-md border-4 border-gray-300">
                <div class="relative z-10 rounded-md flex flex-col justify-between h-full p-6">
                    <h4 class="w-full text-center text-[var(--conteiners)] text-3xl md:text-4xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      Organização e Planejamento
                    </h4>
                    <p class="text-white text-lg md:text-xl">
                      Uso de ferramentas como Notion para estruturar estudos, projetos e tarefas, garantindo produtividade e eficiência.
                    </p>
                </div>
            </Slide>
            <Slide class="w-full h-full p-4 bg-[url(/imgs/Trabalho_em_Equipe.png)] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/70 before:z-0 rounded-md border-4 border-gray-300">
              <div class="relative z-10 rounded-md flex flex-col justify-between h-full p-6">
                <h4 class="w-full text-center text-[var(--conteiners)] text-3xl md:text-4xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Trabalho em Equipe
                </h4>
                <p class="text-white text-lg md:text-xl">
                  Facilidade em colaborar com times e contribuir em projetos de código aberto, promovendo um ambiente de troca de conhecimento.
                </p>
              </div>
            </Slide>

            <Slide class="w-full h-full p-4 bg-[url(/imgs/Pensamento_Critico.png)] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/70 before:z-0 rounded-md border-4 border-gray-300">
              <div class="relative z-10 rounded-md flex flex-col justify-between h-full p-6">
                <h4 class="w-full text-center text-[var(--conteiners)] text-3xl md:text-4xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  Pensamento Crítico
                </h4>
                <p class="text-white text-lg md:text-xl">
                  Reflexão sobre questões sociais e ambientais, trazendo uma abordagem consciente e responsável para os projetos.
                </p>
              </div>
            </Slide>
        
            <template #addons>
            <Navigation />
            <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="js">
  import { ref } from 'vue'
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  const carouselConfig = ref({
    i18n: {
      ariaNextSlide: 'Próximo slide',
      ariaPreviousSlide: 'Slide anterior',
      iconArrowRight: 'Seta para a direita',
      iconArrowLeft: 'Seta para a esquerda'
    },
    wrapAround: true,
    autoplay: 20000000,
    gap: 10,
    height: 200,
    width: '100%',
    pauseAutoplayOnHover: true,
    itemsToShow: 1,
  })
</script>