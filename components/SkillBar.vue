<template>
    <div class="space-y-2">
      <div class="flex justify-between items-center">
        <span class="font-medium text-[var(--variacao4)]">{{ skill }}</span>
        <span class="text-sm text-[var(--variacao5)]">{{ level }}%</span>
      </div>
      <div class="h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full bg-gradient-to-r from-[var(--variacao3)] to-[var(--variacao2)] transition-all duration-500"
          :style="{ width: `${level}%` }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    skill: {
      type: String,
      required: true
    },
    level: {
      type: [Number, String],
      required: true,
      validator: (value) => {
        const num = Number(value)
        return !isNaN(num) && num >= 0 && num <= 100
      }
    }
  })
  </script>
  