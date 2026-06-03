import { mount, type MountingOptions } from '@vue/test-utils'
import { h, type Component } from 'vue'

export function mountComponent(
    component: Component,
    options?: MountingOptions<Record<string, unknown>>
) {
    return mount(component, {
        ...options,
    })
}

export function mountWithSlots(
    component: Component,
    slots: Record<string, string | Component>,
    options?: MountingOptions<Record<string, unknown>>
) {
    return mountComponent(component, {
        ...options,
        slots,
    })
}

export function createSlotComponent(content: string) {
    return {
        name: 'SlotComponent',
        render() {
            return h('span', content)
        },
    }
}
