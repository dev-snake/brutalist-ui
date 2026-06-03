import type { InjectionKey, Ref } from 'vue'
import type { VariantProps } from 'class-variance-authority'
import { toggleVariants } from '../toggle/toggle-variants'

type ToggleVariantProps = VariantProps<typeof toggleVariants>

export const toggleGroupKey: InjectionKey<{
    variant: Ref<NonNullable<ToggleVariantProps['variant']> | undefined>
    size: Ref<NonNullable<ToggleVariantProps['size']> | undefined>
}> = Symbol('toggleGroup')
