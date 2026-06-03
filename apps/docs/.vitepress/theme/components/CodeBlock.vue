<script setup lang="ts">
import { computed } from 'vue'
import CopyButton from './CopyButton.vue'
import { cn } from '../lib/utils'

interface Props {
    code?: string
    language?: string
    class?: string
    preClassName?: string
    copyButtonClassName?: string
}

const props = withDefaults(defineProps<Props>(), {
    code: '',
    language: '',
    class: '',
    preClassName: '',
    copyButtonClassName: '',
})

const codeText = computed(() => props.code)

const wrapperClass = computed(() => cn('relative group codeblock-wrapper', props.class))

const copyClass = computed(() =>
    cn(
        'absolute top-2 right-2 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 focus:opacity-100',
        'border-2 border-brutal shadow-brutal-sm',
        props.copyButtonClassName,
    ),
)

const preClass = computed(() =>
    cn(
        'bg-gray-900 text-gray-100 p-4 pt-8 border-3 border-brutal shadow-brutal overflow-x-auto font-mono text-sm',
        props.preClassName,
    ),
)
</script>

<template>
    <div :class="wrapperClass">
        <CopyButton
            v-if="codeText"
            :text="codeText"
            :class="copyClass"
        />
        <span
            v-if="language"
            class="absolute top-2 left-3 text-[0.6rem] font-black text-brutal-accent uppercase tracking-[0.12em] z-10"
        >
            {{ language }}
        </span>
        <pre :class="preClass"><code><slot>{{ code }}</slot></code></pre>
    </div>
</template>
