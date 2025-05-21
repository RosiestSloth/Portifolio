<template>
    <Header />
    <main class="container mx-auto px-4 py-8 max-w-6xl">
      <article class="space-y-12">
        <!-- Seção Hero -->
        <section class="bg-white/5 rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <div>
            <div class="w-full space-y-6">
              <h2 class="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-[var(--variacao4)] to-[var(--variacao5)] bg-clip-text text-transparent">
                Desenvolvedor Front-End <br>e Designer Web
              </h2>
              <p class="text-gray-300 leading-relaxed">
                Olá! Sou Vinicius, desenvolvedor focado em criar interfaces práticas e atrativas. Utilizo
                <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e
                <strong>TypeScript</strong> para construir experiências digitais funcionais e intuitivas. Além
                disso, tenho experiência em <strong>Figma</strong>, transformando ideias em interfaces envolventes e
                eficientes.
              </p>
              <NuxtLink
                to="/About"
                class="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-[var(--variacao3)]/70 hover:bg-[var(--variacao2)] transition-colors shadow-lg"
              >
                <AboutIcon class="size-8 group fill-white " /> 
                <span class="text-white group-hover:text-white/80 duration-100 ease-in">Sobre mim</span>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- Seção WordPress -->
        <section class="bg-white/5 rounded-xl p-4 md:p-6 backdrop-blur-sm space-y-6">
          <h3 class="text-3xl font-bold text-[var(--variacao4)]">
            Construindo sites em WordPress
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Aprendi a desenvolver sites em <strong>WordPress</strong>, <strong>personalizando temas</strong>,
            <strong>configurando plugins</strong> e <strong>ajustando layouts com CSS</strong>. Isso aprimorou
            minhas habilidades em front-end, permitindo criar interfaces mais funcionais e atraentes.
          </p>
        </section>

        <!-- Seção Frameworks -->
        <section class="bg-white/5 rounded-xl p-4 md:p-6 backdrop-blur-sm space-y-6">
          <h3 class="text-3xl font-bold text-[var(--variacao4)]">
            Construindo sites em Frameworks
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Sou desenvolvedor web com experiência em frameworks como <strong>React.js</strong> e
            <strong>Nuxt.js</strong>, criando interfaces dinâmicas e otimizadas. Utilizo <strong>Tailwind
              CSS</strong> para designs responsivos e eficientes, e <strong>TypeScript</strong> para escrever
            códigos mais seguros e escaláveis. Estou sempre em busca de novas tecnologias para melhorar a
            qualidade e a performance das minhas aplicações.
          </p>
        </section>

        <!-- Seção Figma -->
        <section class="bg-white/5 rounded-xl p-4 md:p-6 backdrop-blur-sm space-y-6">
          <h3 class="text-3xl font-bold text-[var(--variacao4)]">
            Design no Figma
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Tenho experiência em design de interfaces no <strong>Figma</strong>, criando layouts intuitivos e
            visualmente agradáveis. Busco sempre <strong>uma boa experiência para o usuário</strong>,
            trabalhando com componentes reutilizáveis e responsivos. Meu foco é transformar ideias em designs
            funcionais, alinhados com as necessidades dos usuários e objetivos do projeto, sempre com atenção
            aos detalhes e consistência visual.
          </p>
        </section>

        <!-- Seção Soft Skills -->
        <section class="bg-white/5 rounded-xl p-4 md:p-6 backdrop-blur-sm space-y-6">
          <h2 class="text-4xl font-bold text-center text-[var(--variacao4)]">
            Soft Skills
          </h2>
          <div class="container mx-auto">
            <Carousel />
          </div>
        </section>
      </article>
    </main>
    <Footer />
</template>

<script setup lang="js">
    import AboutIcon from '@/public/svgs/About.svg'
    import Carousel from '@/components/Carousel.vue'
</script>