<template>
    <div class="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all group">
        <h3 class="text-xl font-bold mb-4 text-[var(--variacao5)]">{{ title }}</h3>
        <p class="text-gray-300 mb-4">{{ description }}</p>
        <a 
            :href="link"
            class="inline-flex items-center text-[var(--variacao3)] hover:text-[var(--variacao3)]/50 transition-colors"
        >
            Mais detalhes
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </a>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    link: String
})
</script> 