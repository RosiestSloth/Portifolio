<template>
    <header class="p-8 bg-[var(--cor-Principal)]">
        <div class="flex items-center relative h-10">
            <h1 class="hidden lg:block text-white absolute left-2">
                Vinicius
            </h1>
            <nav aria-label="Navegação Desktop" class="flex items-center justify-between w-full max-w-xl h-12 rounded-md mx-auto bg-[var(--conteiners)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <NuxtLink
                    class="group flex items-center font-chamadas gap-2 hover:text-white duration-100 ease-in w-full hover:bg-[var(--hover)] h-12 rounded-l-md pl-2"
                    to="/"
                    >
                    <HomeIcon
                        class="sm:block hidden stroke-black fill-black/20 group-hover:stroke-white group-hover:fill-white/20 size-8 duration-100 ease-in"
                    />
                    <p class="w-full text-center sm:w-auto">Home</p>
                </NuxtLink>
                <NuxtLink
                    class="group flex items-center gap-2 hover:text-white text-center duration-100 ease-in w-full hover:bg-[var(--hover)] h-12 before:w-[1px] before:h-[40px] before:bg-black/50"
                    to="/About"
                    >
                    <AboutIcon
                        class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"
                    />
                    <p class="w-full text-center sm:w-auto">Sobre</p>
                </NuxtLink>
                <NuxtLink
                    class="group flex items-center gap-2 hover:text-white duration-100 ease-in w-full hover:bg-[var(--hover)] h-12 before:w-[1px] before:h-[40px] before:bg-black/50 pr-2"
                    to="/Works"
                    >
                    <WorksIcon class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"/>
                    <p class="w-full text-center sm:w-auto">Trabalhos</p>
                </NuxtLink>
                <NuxtLink
                    class="group flex items-center gap-2 hover:text-white duration-100 ease-in w-full hover:bg-[var(--hover)] h-12 rounded-r-md before:w-[1px] before:h-[40px] before:bg-black/50"
                    to="/Photos"
                    >
                    <PhotosIcon class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"/>
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
</script>