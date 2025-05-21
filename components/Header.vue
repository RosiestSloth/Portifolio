<template>
    <header class="p-8 bg-[var(--cor-Principal)]">
        <div class="flex items-center relative h-10">
            <h1 class="hidden lg:block text-white absolute left-2">
                Vinicius
            </h1>
            <nav aria-label="Navegação Desktop" class="flex items-center justify-between w-full max-w-xl h-12 rounded-md mx-auto bg-[var(--conteiners)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <NuxtLink
                    aria-label="Navegação para o Início"
                    class="group flex items-center font-chamadas gap-2 hover:text-white duration-100 ease-in w-full hover:bg-[var(--hover)] h-12 rounded-l-md pl-2"
                    to="/"
                    id="home-link"
                    :class="{ 'active': isHomeActive }"
                    @click="setActiveLink('home')"
                    >
                    <HomeIcon id="icon-home"
                        class="sm:block hidden stroke-black fill-black/20 group-hover:stroke-white group-hover:fill-white/20 size-8 duration-100 ease-in"
                    />
                    <p class="w-full text-center sm:w-auto">Home</p>
                </NuxtLink>
                <NuxtLink
                    aria-label="Navegação para a página Sobre mim"
                    class="group flex items-center gap-2 hover:text-white text-center duration-100 ease-in w-full hover:bg-[var(--hover)] h-12 before:w-[1px] before:h-[40px] before:bg-black/50"
                    to="/About"
                    id="about-link"
                    :class="{ 'active': isAboutActive }"
                    @click="setActiveLink('about')"
                    >
                    <AboutIcon id="icon" class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"/>
                    <p class="w-full text-center sm:w-auto">Sobre</p>
                </NuxtLink>
                <NuxtLink
                    aria-label="Navegação para a página Meus Trabalhos"
                    class="group flex items-center gap-2 hover:text-white duration-100 ease-in w-full hover:bg-[var(--hover)] h-12 before:w-[1px] before:h-[40px] before:bg-black/50 pr-2"
                    to="/Works"
                    id="works-link"
                    :class="{ 'active': isWorksActive }"
                    @click="setActiveLink('works')"
                    >
                    <WorksIcon id="icon" class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"/>
                    <p class="w-full text-center sm:w-auto">Trabalhos</p>
                </NuxtLink>
                <NuxtLink
                    aria-label="Navegação para a página Minhas Fotos"
                    class="group flex items-center gap-2 hover:text-white duration-100 ease-in w-full ml-[-1px] hover:bg-[var(--hover)] h-12 rounded-r-md before:w-[1px] before:h-[40px] before:bg-black/50"
                    to="/Photos"
                    id="photos-link"
                    :class="{ 'active': isPhotosActive }"
                    @click="setActiveLink('photos')"
                    >
                    <PhotosIcon id="icon" class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"/>
                    <p class="w-full text-center sm:w-auto">Fotos</p>
                </NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
    import HomeIcon from '../public/svgs/Home.svg';
    import AboutIcon from '../public/svgs/About.svg';
    import WorksIcon from '../public/svgs/Works.svg';
    import PhotosIcon from '../public/svgs/Photos.svg';
    import { ref, onMounted, computed } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    
    const isHomeActive = ref(false)
    const isAboutActive = ref(false)
    const isWorksActive = ref(false)
    const isPhotosActive = ref(false)

    const setActiveLink = (link) => {
        isHomeActive.value = link === 'home'
        isAboutActive.value = link === 'about'
        isWorksActive.value = link === 'works'
        isPhotosActive.value = link === 'photos'
    }

    onMounted(() => {
        const path = route.path
        if (path === '/') setActiveLink('home')
        else if (path === '/About') setActiveLink('about')
        else if (path === '/Works') setActiveLink('works')
        else if (path === '/Photos') setActiveLink('photos')
    })

    const backgroundClass = computed(() => {
        switch (route.path) {
            case '/':
                return 'bg-home'
            case '/About':
                return 'bg-about'
            case '/Works':
                return 'bg-works'
            case '/Photos':
                return 'bg-photos'
            default:
                return 'bg-default'
        }
    })
</script>

<style scoped>
    .active {
        background-color: var(--hover);
        color: white;
        pointer-events: none;
    }

    .active #icon {
        stroke: white;
        fill: white;
    }

    .active #icon-home {
        stroke: white;
        fill: rgba(255, 255, 255, 0.200);
    }
</style>