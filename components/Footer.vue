<template>
    <div>
        <footer>
        <div id="primeiro" class="p-4 text-center bg-[var(--cor-Principal)] border-t-[1px] border-white/30 mt-4">
            <p class="text-white">
                Desenvolvido por <a href="https://github.com/RosiestSloth" target="_blank" rel="noopener" class="duration-100 ease hover:text-white/70">Vinicius</a> |
                &copy; Todos os direitos reservados
            </p>
        </div>
        <div id="segundo" class="bg-[var(--cor-Principal)] p-4 flex md:justify-between md:flex-row flex-col">
            <div id="titulo" class="flex-1">
                <h1>
                    Vinicius
                </h1>
            </div>
            <div id="links" class="flex-2">
                <a href="/pages/About.html">Sobre mim</a>
                <a href="/pages/Works.html">Meus Trabalhos</a>
            </div>

            <nav id="redes" class="flex flex-1 gap-4">
                <a href="https://www.tiktok.com/@vinicius___santos329?lang=pt-BR" target="_blank" rel="noopener"><TikTokIcon
                    class="transform hover:-scale-[1.1] w-4 h-4 duration-100 ease hover:bg-black/20 rounded-md"
                    /></a>
                <a href="https://api.whatsapp.com/send/?phone=%2B5562992846807&text&type=phone_number&app_absent=0"
                    target="_blank" rel="noopener"><WhatsappIcon 
                    class="transform hover:-scale-[1.1] w-4 h-4 duration-100 ease hover:bg-black/20 rounded-md"
                    /></a>
                <a href="https://www.instagram.com/vinicius___santos1?igsh=cHlrMGN0cWthZXAy&utm_source=qr"
                    target="_blank" rel="noopener"><InstagramIcon 
                    class="transform hover:-scale-[1.1] w-4 h-4 duration-100 ease hover:bg-black/20 rounded-md"
                    /></a>
                <a href="https://github.com/RosiestSloth" target="_blank" rel="noopener"><GithubIcon 
                    class="transform hover:-scale-[1.1] w-4 h-4 duration-100 ease hover:bg-black/20 rounded-md"
                /></a>
            </nav>
        </div>
    </footer>
    </div>
</template>

<script setup>
    import GithubIcon from '../public/svgs/GitHub.svg';
    import InstagramIcon from '../public/svgs/Instagram.svg';
    import LinkedInIcon from '../public/svgs/Linkedin.svg';
    import TikTokIcon from '../public/svgs/TikTok.svg';
    import WhatsappIcon from '../public/svgs/WhatsApp.svg';
</script>