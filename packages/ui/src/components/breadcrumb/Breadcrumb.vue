<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

interface BreadcrumbProps {
    class?: string
}

const props = withDefaults(defineProps<BreadcrumbProps>(), {
    class: '',
})

const { t } = useLocale()
</script>

<template>
    <nav :aria-label="t('breadcrumb.label')" :class="props.class">
        <slot />
    </nav>
</template>
