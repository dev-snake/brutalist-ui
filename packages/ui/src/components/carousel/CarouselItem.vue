<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../lib/utils';

interface CarouselItemProps {
    class?: string;
}

const props = withDefaults(defineProps<CarouselItemProps>(), {});

const itemClass = computed(() =>
    cn('flex-none w-full h-full', props.class)
);
</script>

<template>
    <div :class="itemClass">
        <slot />
    </div>
</template>
