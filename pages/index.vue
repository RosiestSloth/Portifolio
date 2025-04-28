<template>
    <Header />
    <main class="m-auto xl:mx-8 sm:p-4 p-2 text-white">
      <article>
        <section>
          <h2
            id="titulos_secoes"
            class="text-[var(--cor-Principal)] leading-10 md:leading-14 xl:leading-18"
          >
            Desenvolvedor Front-End <br>e Designer Web
          </h2>
          <p class="my-4 text-sm">
            Olá! Sou Vinicius, desenvolvedor focado em criar interfaces práticas e atrativas. Utilizo
            <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e
            <strong>TypeScript</strong> para construir experiências digitais funcionais e intuitivas. Além
            disso, tenho experiência em <strong>Figma</strong>, transformando ideias em interfaces envolventes e
            eficientes.
          </p>
          <p class="leading-[10px]">
            <small class="text-xs">Saiba mais</small> <br />
            <NuxtLink
              to="/About"
              class="size-full flex items-center justify-center w-40 xl:w-45 bg-[var(--conteiners)] hover:bg-[var(--hover)] rounded-sm p-1 xl:p-2 border-white border-1"
            >
              <AboutIcon /> Sobre mim
            </NuxtLink>
          </p>
          <div class="foto-1"></div>
        </section>
  
        <section>
          <!-- Sites construídos em WordPress-->
          <h3 class="text-[var(--cor-Principal)] my-6" id="titulos_secoes_h3">
            Construindo sites em WordPress
          </h3>
          <p class="text-sm">
            Aprendi a desenvolver sites em <strong>WordPress</strong>, <strong>personalizando temas</strong>,
            <strong>configurando plugins</strong> e <strong>ajustando layouts com CSS</strong>. Isso aprimorou
            minhas habilidades em front-end, permitindo criar interfaces mais funcionais e atraentes.
          </p>
  
          <!-- Sites construídos em frameworks -->
          <h3 class="text-[var(--cor-Principal)] my-6" id="titulos_secoes_h3">
            Construindo sites em Frameworks
          </h3>
          <p class="text-sm">
            Sou desenvolvedor web com experiência em frameworks como <strong>React.js</strong> e
            <strong>Nuxt.js</strong>, criando interfaces dinâmicas e otimizadas. Utilizo <strong>Tailwind
              CSS</strong> para designs responsivos e eficientes, e <strong>TypeScript</strong> para escrever
            códigos mais seguros e escaláveis. Estou sempre em busca de novas tecnologias para melhorar a
            qualidade e a performance das minhas aplicações.
          </p>
  
          <!-- Design no Figma-->
          <h3 class="text-[var(--cor-Principal)] my-6" id="titulos_secoes_h3">
            Design no Figma
          </h3>
          <p class="text-sm">
            Tenho experiência em design de interfaces no <strong>Figma</strong>, criando layouts intuitivos e
            visualmente agradáveis. Busco sempre <strong>uma boa experiência para o usuário</strong>,
            trabalhando com componentes reutilizáveis e responsivos. Meu foco é transformar ideias em designs
            funcionais, alinhados com as necessidades dos usuários e objetivos do projeto, sempre com atenção
            aos detalhes e consistência visual.
          </p>
        </section>
  
        <section class="conteiner_carrousel">
          <h2 class="text-[var(--cor-Principal)] my-6" id="titulos_secoes_h3">
            Soft Skills
          </h2>
          <div class="container mx-auto px-4">
            <Carousel v-bind="carouselConfig">
                <Slide>
                    <div class="w-full p-4 bg-gray-200 h-full bg-[url(/imgs/resolucao_problemas.png)] ">
                        <h4 class="w-full text-center">
                            Resolução de Problemas
                        </h4>
                        <p>
                            Capacidade de identificar e solucionar desafios técnicos de forma eficiente, garantindo o bom funcionamento dos projetos.
                        </p>
                    </div>
                </Slide>
                <Slide>
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
                <Slide>
                  <div class="w-full p-4 bg-gray-400 h-full">
                    <h4>
                      Trabalho em Equipe
                    </h4>
                    <p>
                      Facilidade em colaborar com times e contribuir em projetos de código aberto, promovendo um ambiente de troca de conhecimento.
                    </p>
                  </div>
                </Slide>
                <Slide>
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
        </section>
      </article>
    </main>
    <Footer />
</template>
  
<script setup lang="js">
    import AboutIcon from '@/public/svgs/About.svg'
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    const carouselConfig = {
        itemsToShow: 1,
        wrapAround: true,
        autoplay: 5000,
        gap: 10,
        height: 200,
        width: '100%',
        pauseAutoplayOnHover: true,
    }
</script>