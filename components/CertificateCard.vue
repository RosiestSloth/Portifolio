<template>
    <div class="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
        <div class="flex justify-between items-start mb-3">
            <h4 class="text-xl text-[var(--variacao4)] font-semibold">{{ certificate.title }}</h4>
            <a 
                v-if="certificate.downloadUrl"
                :href="certificate.downloadUrl"
                download
                class="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
                :title="'Baixar certificado ' + certificate.title"
            >
                <FilesIcon class="size-5 fill-white group-hover:fill-white/50 transition-colors" />
            </a>
        </div>
        
        <div class="space-y-2 text-sm text-gray-300">
            <p class="flex items-center gap-2">
                <strong>Instituição:</strong> {{ certificate.institution }}
            </p>
            <p class="flex items-center gap-2">
                <strong>Status:</strong> 
                <span :class="{ 'text-green-400': certificate.status === 'Concluído', 'text-yellow-400': certificate.status !== 'Concluído' }">
                    {{ certificate.status }}
                </span>
            </p>
        </div>
    </div>
</template>

<script setup>
import FilesIcon from '../public/svgs/Files.svg'

defineProps({
    certificate: {
        type: Object,
        required: true,
        validator: (value) => {
            return ['title', 'institution', 'status'].every(key => key in value)
        }
    }
})
</script> 