<template>
    <div>
        <footer>
            <div id="primeiro" class="p-4 text-center bg-[var(--cor-Principal)] border-t-[1px] border-white/30 mt-4">
                <p class="text-white">
                    Desenvolvido por <a href="https://github.com/RosiestSloth" target="_blank" rel="noopener" class="duration-100 ease hover:text-white/70">Vinicius</a> |
                    &copy; Todos os direitos reservados
                </p>
            </div>
            <div id="segundo" class="bg-[var(--cor-Principal)] p-4 flex flex-col justify-center items-center sm:relative w-full h-28 border-t border-white/40">
                <div id="titulo" class="absolute left-4 hidden sm:block">
                    <h1 id="titulo_footer" class="">
                        Vinicius
                    </h1>
                </div>
                <div id="links" class="sm:absolute sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:top-1/2 sm:left-1/2 flex gap-2">
                    <NuxtLink 
                    class="hover:text-white duration-100 ease bg-white/50 hover:bg-white/30 p-1 rounded-sm border-1 border-white/80 hover:border-white/30" 
                    to="/About"
                    >
                        Sobre mim
                    </NuxtLink>
                    <NuxtLink
                    class="hover:text-white duration-100 ease bg-white/50 hover:bg-white/30 p-1 rounded-sm border-1 border-white/80 hover:border-white/30"
                    to="/Works"
                    >
                        Meus Trabalhos
                    </NuxtLink>
                </div>

                <nav id="redes" class="flex sm:absolute sm:right-4 sm:gap-2">
                    <a href="https://www.tiktok.com/@vinicius___santos329?lang=pt-BR" target="_blank" rel="noopener"><TikTokIcon
                        class="transform hover:-scale-[1.1] size-10 p-1 duration-100 ease hover:bg-black/20 rounded-md"
                        /></a>
                    <a href="https://api.whatsapp.com/send/?phone=%2B5562992846807&text&type=phone_number&app_absent=0"
                        target="_blank" rel="noopener"><WhatsappIcon 
                        class="transform hover:-scale-[1.1] size-10 p-1 duration-100 ease hover:bg-black/20 rounded-md"
                        /></a>
                    <a href="https://www.instagram.com/vinicius___santos1?igsh=cHlrMGN0cWthZXAy&utm_source=qr"
                        target="_blank" rel="noopener"><InstagramIcon 
                        class="transform hover:-scale-[1.1] size-10 p-1 duration-100 ease hover:bg-black/20 rounded-md"
                        /></a>
                    <a href="https://github.com/RosiestSloth" target="_blank" rel="noopener"><GithubIcon 
                        class="transform hover:-scale-[1.1] size-10 p-1 duration-100 ease hover:bg-black/20 rounded-md"
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