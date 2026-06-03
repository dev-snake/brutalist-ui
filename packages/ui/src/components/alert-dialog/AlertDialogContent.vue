<script setup lang="ts">
import { computed } from 'vue'
import {
    AlertDialogPortal as AlertDialogPortalPrimitive,
    AlertDialogOverlay as AlertDialogOverlayPrimitive,
    AlertDialogContent as AlertDialogContentPrimitive,
} from 'reka-ui'
import { cn } from '../../lib/utils'

interface AlertDialogContentProps {
    class?: string
}

const props = defineProps<AlertDialogContentProps>()

const overlayClasses = computed(() =>
    cn(
        'fixed inset-0 z-50 bg-brutal-overlay',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
    )
)

const contentClasses = computed(() =>
    cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4',
        'bg-brutal-bg p-6 text-brutal-fg border-brutal border-3 shadow-brutal-xl rounded-brutal',
        'duration-200',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-1/2',
        'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-1/2',
        props.class
    )
)
</script>

<template>
    <AlertDialogPortalPrimitive>
        <AlertDialogOverlayPrimitive :class="overlayClasses" />
        <AlertDialogContentPrimitive :class="contentClasses">
            <slot />
        </AlertDialogContentPrimitive>
    </AlertDialogPortalPrimitive>
</template>
