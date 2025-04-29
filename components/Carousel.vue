<template>
    <div>
        <Carousel v-bind="carouselConfig">
            <Slide class="rounded-md h-full">
                <div class="w-full h-full p-4 bg-gray-200 bg-[url(/imgs/resolucao_problemas.png)] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:z-0">
                    <div class="relative z-10">
                        <h4 class="w-full text-center text-[var(--cor-Principal)] text-3xl md:text-4xl">
                            Resolução de Problemas
                        </h4>
                        <p class="text-white text-lg md:text-xl">
                            Capacidade de identificar e solucionar desafios técnicos de forma eficiente, garantindo o bom funcionamento dos projetos.
                        </p>
                    </div>
                </div>
            </Slide>
            <Slide class="rounded-md">
                <div class="w-full p-4 bg-gray-300 h-full">
                    <h4>
                      Aprendizado Contínuo
                    </h4>
                    <p>
                      Curioso e autodidata, sempre buscando aprimorar habilidades e aprender novas tecnologias para acompanhar as tendências do mercado.
                    </p>
                </div>
            </Slide>
            <Slide>
                <div class="w-full p-4 bg-gray-400 h-full">
                    <h4>
                      Organização e Planejamento
                    </h4>
                    <p>
                      Uso de ferramentas como Notion para estruturar estudos, projetos e tarefas, garantindo produtividade e eficiência.
                    </p>
                </div>
            </Slide>
            <Slide class="rounded-md">
              <div class="w-full p-4 bg-gray-400 h-full">
                <h4>
                  Trabalho em Equipe
                </h4>
                <p>
                  Facilidade em colaborar com times e contribuir em projetos de código aberto, promovendo um ambiente de troca de conhecimento.
                </p>
              </div>
            </Slide>
            <Slide class="rounded-md">
              <h4>
                Pensamento Crítico
              </h4>
              <p>
                Reflexão sobre questões sociais e ambientais, trazendo uma abordagem consciente e responsável para os projetos.
              </p>
            </Slide>
        
            <template #addons>
            <Navigation />
            <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="js">
    import { ref, onMounted } from 'vue'
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    const carouselConfig = ref({
        wrapAround: true,
        autoplay: 20000000,
        gap: 10,
        height: 200,
        width: '100%',
        pauseAutoplayOnHover: true,
        snapAlign: 'start',
        itemsToShow: 1,
        breakpoints: {
            1024: {
                itemsToShow: 2
            }
        }
    })
</script>