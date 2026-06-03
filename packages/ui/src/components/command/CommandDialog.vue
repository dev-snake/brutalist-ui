<script setup lang="ts">
import { computed } from 'vue'
import { DialogRoot, DialogPortal, DialogOverlay, DialogContent, DialogTitle, DialogDescription } from 'reka-ui'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Command from './Command.vue'

interface CommandDialogProps {
    open?: boolean
    title?: string
    description?: string
    class?: string
}

const props = withDefaults(defineProps<CommandDialogProps>(), {
    open: false,
    title: undefined,
    description: undefined,
    class: '',
})

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('command.dialogTitle'))
const resolvedDescription = computed(() => props.description ?? t('command.dialogDescription'))

const emit = defineEmits<{ 'update:open': [value: boolean] }>()

const overlayClasses = computed(() =>
    cn(
        'fixed inset-0 z-50 bg-brutal-overlay',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
    )
)

const contentClasses = computed(() =>
    cn(
        'fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]',
        'w-full max-w-lg overflow-hidden p-0',
        'bg-brutal-bg text-brutal-fg border-3 border-brutal shadow-brutal-xl rounded-brutal',
        'duration-200',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        props.class
    )
)
</script>

<template>
    <DialogRoot :open="props.open" @update:open="emit('update:open', $event)">
        <DialogPortal>
            <DialogOverlay :class="overlayClasses" />
            <DialogContent :class="contentClasses">
                <div class="sr-only">
                    <DialogTitle>{{ resolvedTitle }}</DialogTitle>
                    <DialogDescription>{{ resolvedDescription }}</DialogDescription>
                </div>
                <Command class="[&_[data-slot=command-group-heading]]:px-2 [&_[data-slot=command-group-heading]]:font-black [&_[data-slot=command-group-heading]]:text-brutal-muted-foreground [&_[data-slot=command-group]]:px-2 [&_[data-slot=command-input]]:h-12 [&_[data-slot=command-item]]:px-3 [&_[data-slot=command-item]]:py-3">
                    <slot />
                </Command>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>
