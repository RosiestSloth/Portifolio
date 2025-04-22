<template>
    <header class="p-8 bg-[var(--cor-Principal)]">
        <div class="flex items-center justify-center">
            <h1>
                Vinicius
            </h1>
            <nav aria-label="Navegação Desktop" class="flex items-center justify-between w-[450px] rounded-md mx-auto bg-[var(--conteiners)]">
                <a class="group flex items-center font-chamadas gap-2 hover:text-white duration-100 ease-in w-full hover:bg-[var(--hover)] h-[50px] rounded-l-md pl-2" href="/index.html"><HomeIcon class="sm:block hidden stroke-black fill-black/20 group-hover:stroke-white group-hover:fill-white/20 size-8 duration-100 ease-in" /> Home</a>
                <a href="/pages/About.html" class="group flex items-center gap-2 hover:text-white text-center duration-100 ease-in w-full hover:bg-[var(--hover)] h-[50px] before:w-[1px] before:h-[40px] before:bg-black/50">
                    <AboutIcon class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"/> Sobre
                </a>
                <a href="/pages/Works.html" class="group flex items-center gap-2 hover:text-white duration-100 ease-in w-full hover:bg-[var(--hover)] h-[50px] before:w-[1px] before:h-[40px] before:bg-black/50">
                    <WorksIcon class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"/> Trabalhos
                </a>
                <a href="/pages/Photos.html" class="group flex items-center gap-2 hover:text-white duration-100 ease-in w-full hover:bg-[var(--hover)] h-[50px] rounded-r-md before:w-[1px] before:h-[40px] before:bg-black/50">
                    <PhotosIcon class="sm:block hidden stroke-black fill-black group-hover:stroke-white group-hover:fill-white size-8 duration-100 ease-in"/> Fotos</a>
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