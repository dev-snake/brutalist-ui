# 架构蓝图：CVA 组件模式

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brutal-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none',
  {
    variants: {
      variant: {
        default: 'bg-brutal-bg text-brutal-fg border-3 border-brutal shadow-brutal hover:bg-brutal-muted',
        primary: 'bg-brutal-primary text-white border-3 border-brutal shadow-brutal hover:bg-brutal-primary/90',
        secondary: 'bg-brutal-secondary text-black border-3 border-brutal shadow-brutal hover:bg-brutal-secondary/90',
        outline: 'bg-transparent text-brutal-fg border-3 border-brutal hover:bg-brutal-muted',
        ghost: 'hover:bg-brutal-muted text-brutal-fg border-3 border-transparent',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 px-3 py-1',
        lg: 'h-14 px-8 py-3',
        icon: 'h-11 w-11 p-0',
      }
    },
    defaultVariants: { variant: 'default', size: 'default' }
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

interface Props {
  variant?: NonNullable<ButtonVariants['variant']>
  size?: NonNullable<ButtonVariants['size']>
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const classes = computed(() =>
  cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)
)
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
```
