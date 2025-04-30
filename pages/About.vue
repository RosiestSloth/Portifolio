<template>
    <Header />
    <main class="container mx-auto px-4 py-8 max-w-6xl">
        <!-- Seção Hero -->
        <article class="space-y-12">
            <section class="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <div class="w-full md:w-1/2">
                    <div class="relative">
                        <img 
                            src="/imgs/ViniciusSantos.png" 
                            alt="Vinicius Santos"
                            class="rounded-lg shadow-xl w-full object-cover"
                        >
                        <div class="absolute bottom-4 right-4 flex gap-2 bg-white/10 backdrop-blur-md rounded-lg p-2">
                            <button class="px-3 py-1 rounded hover:bg-white/20 transition-colors">PT</button>
                            <button class="px-3 py-1 rounded hover:bg-white/20 transition-colors">EN</button>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/2 space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Vinicius Santos
                    </h1>
                    <p class="text-xl text-gray-300">
                        Desenvolvedor Front-End e Designer Front-End
                    </p>

                    <nav aria-label="Minhas redes sociais">
                        <ul class="flex gap-4">
                            <li>
                                <a 
                                    href="https://github.com/RosiestSloth" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <GitHubIcon class="size-6" /> 
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://linkedin.com/in/seu-perfil" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <LinkedInIcon class="size-6" /> 
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://www.instagram.com/vinicius___santos1" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <InstagramIcon class="size-6" /> 
                                    <span>Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <p class="text-gray-300 leading-relaxed">
                        Meu nome é Vinicius e sou um desenvolvedor de Vianópolis, apaixonado por simplificar desafios complexos em soluções eficientes e intuitivas. Meu trabalho abrange aplicações web, experiências interativas e a combinação entre tecnologia e design focado no usuário.
                    </p>
                </div>
            </section>

            <!-- Seção Trabalhos -->
            <section class="space-y-8">
                <h2 class="text-3xl font-bold text-center">Meus Trabalhos</h2>
                
                <div class="grid md:grid-cols-3 gap-6">
                    <WorkCard 
                        title="WordPress"
                        description="Adquiri muita experiência no desenvolvimento e na manutenção de sites em WordPress, atuando em projetos como o site Correspondente Vianopolino."
                        link="/pages/Works#wordpress"
                    />
                    <WorkCard 
                        title="Figma"
                        description="Durante o desenvolvimento de diversos protótipos de sites, aperfeiçoei minhas habilidades em design e experiência do usuário."
                        link="/pages/Works#figma"
                    />
                    <WorkCard 
                        title="Frameworks"
                        description="Adquiri muita experiência trabalhando com frameworks em projetos como o Follow-Up, com destaque para Tailwind CSS."
                        link="/pages/Works#frameworks"
                    />
                </div>
            </section>

            <!-- Seção Skills -->
            <section class="grid md:grid-cols-2 gap-8 bg-white/5 rounded-xl p-6">
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold">Hard Skills</h3>
                    <div class="space-y-4">
                        <SkillBar skill="React.js" level="80" />
                        <SkillBar skill="Vue" level="75" />
                        <SkillBar skill="Tailwind CSS" level="90" />
                        <SkillBar skill="WordPress" level="85" />
                        <SkillBar skill="Figma" level="80" />
                        <SkillBar skill="Git" level="75" />
                    </div>
                </div>

                <div class="space-y-6">
                    <h3 class="text-2xl font-bold">Soft Skills</h3>
                    <ul class="space-y-4">
                        <li v-for="skill in softSkills" :key="skill.name" class="flex items-center gap-2">
                            <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                            <strong>{{ skill.name }}:</strong> 
                            <span class="text-gray-300">{{ skill.description }}</span>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Seção Educação -->
            <section class="space-y-8">
                <h2 class="text-3xl font-bold text-center">Educação e Certificações</h2>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white/5 rounded-xl p-6">
                        <h3 class="text-2xl font-bold mb-4">Educação</h3>
                        <div class="space-y-4">
                            <h4 class="text-xl font-semibold">Bacharelado em Engenharia de Software</h4>
                            <p class="text-gray-300">UniEvangélica de Anápolis</p>
                            <p class="text-blue-400">5º Período (Em andamento)</p>
                        </div>
                    </div>

                    <div class="bg-white/5 rounded-xl p-6">
                        <h3 class="text-2xl font-bold mb-4">Certificações</h3>
                        <div class="space-y-6">
                            <CertificateCard 
                                v-for="cert in certificates" 
                                :key="cert.title"
                                :certificate="cert"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </main>
    <Footer />
</template>

<script setup>
import { ref } from 'vue'
import FilesIcon from '../public/svgs/Files.svg'
import GitHubIcon from '../public/svgs/GitHub.svg'
import LinkedInIcon from '../public/svgs/Linkedin.svg'
import InstagramIcon from '../public/svgs/Instagram.svg'
import WorkCard from '../components/WorkCard.vue'
import SkillBar from '../components/SkillBar.vue'
import CertificateCard from '../components/CertificateCard.vue'

const softSkills = ref([
    { name: 'Comunicação', description: 'Comunicação eficaz com times de desenvolvimento e equipe de design' },
    { name: 'Inteligência Emocional', description: 'Compreensão e gestão das emoções de forma eficiente' },
    { name: 'Adaptabilidade', description: 'Aprendizado e adaptação de novas Hard Skills e Soft Skills' },
    { name: 'Gestão de Tempo', description: 'Melhoria da produtividade e redução de estresse' },
    { name: 'Trabalho em Equipe', description: 'Colaboração eficiente em projetos de desenvolvimento' },
    { name: 'Empatia', description: 'Entendendo e compreendendo as necessidades das pessoas' },
])

const certificates = ref([
    {
        title: 'Python 1, 2 e 3',
        institution: 'Curso em Vídeo - Gustavo Guanabara',
        status: 'Concluído',
        downloadUrl: '../src/arquivos/PDFs/Python.zip'
    },
    {
        title: 'JavaScript',
        institution: 'Curso em Vídeo - Gustavo Guanabara',
        status: 'Concluído',
        downloadUrl: '../src/arquivos/PDFs/JavaScript.pdf'
    },
    // ... outros certificados
])
</script>