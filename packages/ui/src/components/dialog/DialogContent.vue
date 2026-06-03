<script setup lang="ts">
import { computed } from 'vue'
import {
    DialogPortal as DialogPortalPrimitive,
    DialogContent as DialogContentPrimitive,
    DialogClose as DialogClosePrimitive,
} from 'reka-ui'
import { X } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import DialogOverlay from './DialogOverlay.vue'
import { useLocale } from '@/composables/useLocale'

interface DialogContentProps {
    showCloseButton?: boolean
    forceMount?: boolean
    class?: string
}

const props = withDefaults(defineProps<DialogContentProps>(), {
    showCloseButton: true,
    forceMount: undefined,
    class: '',
})

const { t } = useLocale()

const contentClasses = computed(() =>
    cn(
        'fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]',
        'w-full max-w-lg p-6',
        'bg-brutal-bg text-brutal-fg border-3 border-brutal shadow-brutal-xl rounded-brutal',
        'duration-200',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
        'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        props.class
    )
)

const closeClasses = computed(() =>
    cn(
        'absolute right-4 top-4',
        'h-8 w-8 flex items-center justify-center',
        'border-3 border-brutal bg-brutal-bg text-brutal-fg',
        'shadow-brutal-sm',
        'transition-all duration-150',
        'hover:bg-brutal-destructive hover:text-brutal-fg',
        'hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5',
        'active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
        'focus:outline-none focus:ring-2 focus:ring-brutal-ring focus:ring-offset-2'
    )
)
</script>

<template>
    <DialogPortalPrimitive>
        <DialogOverlay />
        <DialogContentPrimitive :class="contentClasses" :force-mount="props.forceMount">
            <slot />
            <DialogClosePrimitive v-if="showCloseButton" :class="closeClasses">
                <X class="h-4 w-4 stroke-[3]" />
                <span class="sr-only">{{ t('dialog.close') }}</span>
            </DialogClosePrimitive>
        </DialogContentPrimitive>
    </DialogPortalPrimitive>
</template>
