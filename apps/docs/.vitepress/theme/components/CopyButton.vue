<script setup lang="ts">
import { ref, computed } from 'vue'
import { Check, Copy } from 'lucide-vue-next'
import { cn } from '../lib/utils'

interface Props {
    text: string
    iconSize?: number
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    iconSize: 16,
    class: '',
})

const copied = ref(false)

async function handleCopy() {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
}

const buttonClass = computed(() =>
    cn(
        'inline-flex items-center justify-center border-2 border-brutal font-black text-xs',
        'transition-all duration-150',
        copied.value
            ? 'bg-brutal-accent text-black shadow-brutal-sm'
            : 'bg-brutal-secondary text-black shadow-brutal-sm hover:bg-brutal-accent hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        props.class,
    ),
)
</script>

<template>
    <button
        type="button"
        :class="buttonClass"
        :title="copied ? 'Copied!' : 'Copy to clipboard'"
        :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
        @click="handleCopy"
    >
        <Check v-if="copied" :size="iconSize" :stroke-width="3" />
        <Copy v-else :size="iconSize" :stroke-width="3" />
    </button>
</template>
