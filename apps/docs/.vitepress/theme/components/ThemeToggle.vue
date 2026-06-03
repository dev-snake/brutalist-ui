<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { Sun, Moon } from 'lucide-vue-next'
import { cn } from '../lib/utils'

interface Props {
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    class: '',
})

const { isDark } = useData()

function toggleAppearance() {
    const toggle = document.querySelector('.VPSwitchAppearance') as HTMLElement | null
    if (toggle) {
        toggle.click()
    }
}

const buttonClass = computed(() =>
    cn(
        'inline-flex items-center justify-center h-10 w-10 border-3 border-brutal bg-brutal-bg shadow-brutal',
        'hover:bg-brutal-accent hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        'transition-all duration-150',
        props.class,
    ),
)
</script>

<template>
    <button
        type="button"
        :class="buttonClass"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleAppearance"
    >
        <Sun v-if="isDark" :size="18" :stroke-width="2.5" class="text-brutal-fg" />
        <Moon v-else :size="18" :stroke-width="2.5" class="text-brutal-fg" />
    </button>
</template>
