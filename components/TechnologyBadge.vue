<template>
    <div 
        class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/15 transition-colors rounded-full text-sm group cursor-default"
        :title="label"
    >
        <div v-if="icon" class="w-4 h-4 relative">
            <img 
                :src="`/svgs/icons/${icon}.svg`"
                :alt="`Ícone ${label}`"
                class="w-full h-full object-contain group-hover:scale-110 transition-transform rounded-full"
            />
        </div>
        <span class="text-gray-200">{{ label }}</span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    icon?: string;
    label: string;
}

defineProps<Props>();
</script>

<style scoped>
.group:hover img {
    filter: brightness(1.2);
}
</style>