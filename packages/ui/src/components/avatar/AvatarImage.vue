<script setup lang="ts">
import { computed } from 'vue'
import { AvatarImage as AvatarImagePrimitive } from 'reka-ui'
import { cn } from '../../lib/utils'

interface AvatarImageProps {
    src?: string
    alt?: string
    class?: string
}

const props = defineProps<AvatarImageProps>()

const classes = computed(() =>
    cn('aspect-square h-full w-full object-cover', props.class)
)
</script>

<template>
    <AvatarImagePrimitive v-if="src" :src="src" :alt="alt" :class="classes" />
</template>
