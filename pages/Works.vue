<template>
    <Header />
    <main class="container mx-auto px-4 py-8 max-w-6xl">
        <article class="space-y-12">
            <!-- Correspondente Vianopolino -->
            <section class="bg-white/5 rounded-xl p-6 backdrop-blur-sm space-y-6">
                <h3 class="text-3xl font-bold md:text-4xl text-[var(--cor-Principal)]">
                    Correspondente Vianopolino
                </h3>
                
                <div class="relative rounded-lg overflow-hidden">
                    <img 
                        src="/imgs/CorrespondenteVianopolino/CorrespondenteVianopolino.png" 
                        loading="lazy" 
                        alt="Site Correspondente Vianopolino"
                        class="w-full object-cover"
                    >
                </div>

                <div class="space-y-4 text-gray-300">
                    <p>
                        O <a href="https://www.correspondentevianopolino.com.br/site/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="text-blue-400 hover:text-blue-300 transition-colors"
                        >Correspondente Vianopolino</a> é um site de notícias da minha cidade natal, Vianópolis. Neste projeto, meu principal desafio foi realizar o redesign completo do site, aplicando princípios fundamentais de acessibilidade, usabilidade e segurança, a fim de melhorar a experiência dos leitores e a confiabilidade da plataforma.
                    </p>
                    
                    <div class="flex flex-col md:flex-row gap-6 items-center">
                        <TechnologyBadge icon="wordpress" label="WordPress" />
                        <TechnologyBadge icon="astra" label="Astra" />
                        <TechnologyBadge icon="spectra" label="Spectra" />
                        <TechnologyBadge icon="gutenberg" label="Gutenberg" />
                        <TechnologyBadge icon="wordfence" label="Wordfence" />
                    </div>

                    <div class="grid md:grid-cols-2 gap-4 mt-6">
                        <img 
                            src="/imgs/CorrespondenteVianopolino/Site_Antes.jpeg" 
                            loading="lazy" 
                            alt="Correspondente Vianopolino antes do meu trabalho"
                            class="rounded-lg"
                        >
                        <img 
                            src="/imgs/CorrespondenteVianopolino/Site_Depois.jpeg" 
                            loading="lazy" 
                            alt="Correspondente Vianopolino depois do meu trabalho"
                            class="rounded-lg"
                        >
                    </div>
                </div>
            </section>

            <!-- FeedBack Analytics -->
            <section class="bg-white/5 rounded-xl p-6 backdrop-blur-sm space-y-6">
                <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    FeedBack Analytics
                </h3>

                <div class="relative rounded-lg overflow-hidden">
                    <img 
                        src="/imgs/FeedbackAnalytics_1.png" 
                        loading="lazy" 
                        alt="FeedBack Analytics Interface"
                        class="w-full object-cover"
                    >
                </div>

                <div class="space-y-4 text-gray-300">
                    <p>O projeto <strong>FeedBack Analytics</strong> surgiu de uma inquietação: por que tantas empresas parecem pedir feedback apenas para ignorá-lo em seguida?</p>

                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white/10 p-4 rounded-lg">
                            <h4 class="text-xl font-semibold mb-2">Principais Responsabilidades</h4>
                            <ul class="list-disc list-inside space-y-2">
                                <li>Design de Interface (UI)</li>
                                <li>Experiência do Usuário (UX)</li>
                                <li>Desenvolvimento Front-end</li>
                            </ul>
                        </div>

                        <div class="bg-white/10 p-4 rounded-lg">
                            <h4 class="text-xl font-semibold mb-2">Tecnologias Utilizadas</h4>
                            <div class="flex flex-wrap gap-2">
                                <TechnologyBadge icon="ai" label="IA" />
                                <TechnologyBadge icon="qrcode" label="QR Code" />
                                <TechnologyBadge icon="whatsapp" label="WhatsApp" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Trajetória JavaScript -->
            <section class="bg-white/5 rounded-xl p-6 backdrop-blur-sm space-y-6">
                <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Trajetória JavaScript
                </h3>
                <div class="relative rounded-lg overflow-hidden">
                    <img 
                        src="/imgs/TrajetoriaJS.png" 
                        loading="lazy" 
                        alt="Trajetória JavaScript projeto"
                        class="w-full object-cover"
                    >
                </div>
                <p>
                    O projeto Trajetória JavaScript foi criado com o objetivo de auxiliar pessoas que, assim como eu, estão iniciando na área de desenvolvimento web. JavaScript é uma das linguagens mais utilizadas no setor, e por isso, decidi desenvolver este site para compartilhar conhecimento e ajudar outros a trilharem esse caminho com mais facilidade.
                    <br><br>
                    Durante o desenvolvimento dos exercícios, aprofundei meus conhecimentos em <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>. Além disso, refinei minhas habilidades no uso de frameworks. Para este projeto, optei pelo <strong>Nuxt.js</strong> juntamente com <strong>TypeScript</strong>, que proporciona uma estrutura robusta e prática, facilitando a criação e organização do projeto.
                </p>
                <p>
                    Os 10 primeiros exercícios de <strong>JavaScript</strong> foram um marco importante na minha jornada de aprendizado. Encarei alguns desafios com determinação e, ao superá-los, senti uma grande satisfação. A cada exercício concluído, minha confiança e compreensão da linguagem cresciam, tornando a experiência ainda mais enriquecedora.
                </p>
                <p>
                    O projeto <strong>Trajetória JavaScript</strong> ainda está em desenvolvimento... 
                </p>
            </section>

            <!-- Projetos Educacionais -->
            <h2 class="text-3xl font-bold text-center mt-12 mb-8">Projetos Educacionais</h2>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Projeto Android -->
                <section class="bg-white/5 rounded-xl p-6 backdrop-blur-sm space-y-6">
                    <h3 class="text-2xl font-bold mb-4">
                        Projeto Android
                    </h3>
                    <img id="ProjetoAndroid" src="/imgs/ProjetoAndroid.png" loading="lazy" alt="Projeto Android por Curso em Vídeo">
                    <p>
                        O <strong>Projeto Android</strong> foi desenvolvido com intuito educacional e sem fins lucrativos. 
                    </p>
                    <p>
                        Criado por <strong>Gustavo Guanabara</strong> para o <a href="https://www.cursoemvideo.com/" target="_blank" rel="noopener noreferrer">CursoemVideo</a>, esse projeto faz parte do curso de HTML5 e CSS3. Durante o curso, pude aprofundar minhas habilidades em desenvolvimento Web Front-End, e esse foi o meu primeiro projeto dentro da formação. 
                    </p>
                    <p>
                        Minha experiência no desenvolvimento foi bastante satisfatória, proporcionando um aprendizado valioso e reforçando meus conhecimentos na área.
                    </p>
                </section>

                <!-- Projeto Cordel -->
                <section class="bg-white/5 rounded-xl p-6 backdrop-blur-sm space-y-6">
                    <h3 class="text-2xl font-bold mb-4">
                        Projeto Cordel
                    </h3>
                    <img src="/imgs/Projeto_Cordel.png" loading="lazy" alt="Projeto Cordel por Curso em Vídeo" id="ProjetoCordel_img">

                    <p>
                        O <strong>Projeto Cordel</strong> foi desenvolvido com intuito educacional e sem fins lucrativos.<br><br>
                        Criado por <strong>Gustavo Guanabara</strong> para o <a href="https://www.cursoemvideo.com/" target="_blank" rel="noopener noreferrer">CursoemVideo</a>, esse projeto faz parte do curso de <strong>HTML5</strong> e <strong>CSS3</strong>. Durante o curso, pude aprofundar minhas habilidades em <strong>desenvolvimento Web Front-End</strong>, e esse foi o meu primeiro projeto dentro da formação. <br><br>
                        Minha experiência no desenvolvimento foi bastante satisfatória, proporcionando um aprendizado valioso e reforçando meus conhecimentos na área.
                    </p>
                </section>
            </div>
        </article>
    </main>
    <Footer />
</template>

<script setup>
import { ref } from 'vue'
import TechnologyBadge from '../components/TechnologyBadge.vue'
</script>