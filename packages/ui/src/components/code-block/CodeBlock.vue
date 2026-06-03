<script setup lang="ts">
import { computed } from 'vue'
import CopyToClipboard from '../copy-to-clipboard/CopyToClipboard.vue'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import { codeBlockRootVariants, codeBlockHeaderVariants, codeBlockLanguageVariants, codeBlockBodyVariants, codeBlockLineNumbersVariants, codeBlockCopyButtonVariants } from './code-block-variants'

interface CodeBlockProps {
    code: string
    language?: string
    filename?: string
    showLineNumbers?: boolean
    class?: string
}

const props = withDefaults(defineProps<CodeBlockProps>(), {
    language: 'plaintext',
    filename: '',
    showLineNumbers: false,
    class: '',
})

const lines = computed(() => {
    return props.code.split('\n')
})

const { t } = useLocale()

const rootClasses = computed(() =>
    cn(codeBlockRootVariants(), props.class)
)
</script>

<template>
    <div :class="rootClasses">
        <div :class="codeBlockHeaderVariants()">
            <div class="flex items-center gap-2">
                <span :class="codeBlockLanguageVariants()">
                    {{ language }}
                </span>
                <span v-if="filename" class="text-brutal-fg/80 font-black">
                    {{ filename }}
                </span>
            </div>
            <CopyToClipboard
                :text="code"
                :class="codeBlockCopyButtonVariants()"
            >
                <template #default="{ copied }">
                    <span>{{ copied ? t('codeBlock.copied') : t('codeBlock.copy') }}</span>
                </template>
            </CopyToClipboard>
        </div>

        <div :class="codeBlockBodyVariants()">
            <div
                v-if="showLineNumbers"
                :class="codeBlockLineNumbersVariants()"
            >
                <span v-for="(_, i) in lines" :key="i">{{ i + 1 }}</span>
            </div>

            <pre class="flex-1 min-w-0 m-0"><code class="block whitespace-pre font-bold"><slot v-if="$slots.default"></slot><template v-else>{{ code }}</template></code></pre>
        </div>
    </div>
</template>
