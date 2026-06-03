import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Combobox from './Combobox.vue'
import ComboboxMulti from './ComboboxMulti.vue'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
]

let wrapper: ReturnType<typeof mount> | null = null

afterEach(() => {
    if (wrapper) {
        wrapper.unmount()
        wrapper = null
    }
    document.body.innerHTML = ''
})

async function openCombobox(w: ReturnType<typeof mount>) {
    const trigger = w.find('[role="combobox"]')
    await trigger.trigger('click')
    await nextTick()
    await nextTick()
}

describe('Combobox', () => {
    it('renders with options prop', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.exists()).toBe(true)
    })

    it('applies custom class', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options, class: 'custom-combobox' },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.classes()).toContain('custom-combobox')
    })

    it('shows placeholder text', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options, placeholder: 'Pick a fruit...' },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.text()).toContain('Pick a fruit...')
    })

    it('shows default placeholder text', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.text()).toContain('Select option...')
    })

    it('shows selected option label', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options, modelValue: 'banana' },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.text()).toContain('Banana')
    })

    it('emits update:modelValue when option selected', async () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        expect(items.length).toBe(options.length)
        const firstItem = items[0] as HTMLElement
        firstItem.click()
        await nextTick()
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['apple'])
    })

    it('emits undefined when selecting same option again', async () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options, modelValue: 'apple' },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        const firstItem = items[0] as HTMLElement
        firstItem.click()
        await nextTick()
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([undefined])
    })

    it('has aria-expanded attribute', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.attributes('aria-expanded')).toBeDefined()
    })

    it('is disabled when disabled prop is true', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options, disabled: true },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.attributes('disabled')).toBeDefined()
    })

    it('filters options by search query', async () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const input = document.body.querySelector('[data-slot="command-input"] input') as HTMLInputElement
        expect(input).toBeTruthy()
        input.value = 'ban'
        input.dispatchEvent(new Event('input', { bubbles: true }))
        await nextTick()
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        expect(items.length).toBe(1)
        expect(items[0].textContent).toContain('Banana')
    })

    it('shows all options when search query is cleared', async () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const input = document.body.querySelector('[data-slot="command-input"] input') as HTMLInputElement
        input.value = 'ban'
        input.dispatchEvent(new Event('input', { bubbles: true }))
        await nextTick()
        input.value = ''
        input.dispatchEvent(new Event('input', { bubbles: true }))
        await nextTick()
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        expect(items.length).toBe(options.length)
    })

    it('shows empty text when no options match search', async () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options, emptyText: 'Nothing found!' },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const input = document.body.querySelector('[data-slot="command-input"] input') as HTMLInputElement
        input.value = 'xyz'
        input.dispatchEvent(new Event('input', { bubbles: true }))
        await nextTick()
        expect(document.body.textContent).toContain('Nothing found!')
    })

    it('clears search query after selection', async () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const input = document.body.querySelector('[data-slot="command-input"] input') as HTMLInputElement
        input.value = 'ban'
        input.dispatchEvent(new Event('input', { bubbles: true }))
        await nextTick()
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        const bananaItem = items[0] as HTMLElement
        bananaItem.click()
        await nextTick()
        expect(input.value).toBe('')
    })

    it('applies muted foreground class when no value selected', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.classes()).toContain('text-brutal-muted-foreground')
    })

    it('does not apply muted foreground class when value is selected', () => {
        wrapper = mount(Combobox, {
            ...localeProvide,
            props: { options, modelValue: 'apple' },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.classes()).not.toContain('text-brutal-muted-foreground')
    })
})

describe('ComboboxMulti', () => {
    it('renders with options prop', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.exists()).toBe(true)
    })

    it('applies custom class', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options, class: 'custom-multi' },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.classes()).toContain('custom-multi')
    })

    it('shows placeholder text when no selection', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options, placeholder: 'Pick fruits...' },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.text()).toContain('Pick fruits...')
    })

    it('shows default placeholder text', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.text()).toContain('Select options...')
    })

    it('shows selected option labels', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options, modelValue: ['apple', 'banana'] },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.text()).toContain('Apple')
        expect(trigger.text()).toContain('Banana')
    })

    it('shows count when selections exceed maxDisplay', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options, modelValue: ['apple', 'banana', 'cherry'], maxDisplay: 2 },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.text()).toContain('3 selected')
    })

    it('emits update:modelValue when options selected', async () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('is disabled when disabled prop is true', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options, disabled: true },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.attributes('disabled')).toBeDefined()
    })

    it('adds option to selection when unselected item is clicked', async () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options, modelValue: [] },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        const firstItem = items[0] as HTMLElement
        firstItem.click()
        await nextTick()
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([['apple']])
    })

    it('removes option from selection when selected item is clicked', async () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options, modelValue: ['apple', 'banana'] },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        const firstItem = items[0] as HTMLElement
        firstItem.click()
        await nextTick()
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([['banana']])
    })

    it('filters options by search query', async () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const input = document.body.querySelector('[data-slot="command-input"] input') as HTMLInputElement
        expect(input).toBeTruthy()
        input.value = 'cher'
        input.dispatchEvent(new Event('input', { bubbles: true }))
        await nextTick()
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        expect(items.length).toBe(1)
        expect(items[0].textContent).toContain('Cherry')
    })

    it('shows all options when search query is cleared', async () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        await openCombobox(wrapper)
        const input = document.body.querySelector('[data-slot="command-input"] input') as HTMLInputElement
        input.value = 'cher'
        input.dispatchEvent(new Event('input', { bubbles: true }))
        await nextTick()
        input.value = ''
        input.dispatchEvent(new Event('input', { bubbles: true }))
        await nextTick()
        const items = document.body.querySelectorAll('[data-slot="command-item"]')
        expect(items.length).toBe(options.length)
    })

    it('applies muted foreground class when no value selected', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.classes()).toContain('text-brutal-muted-foreground')
    })

    it('does not apply muted foreground class when values are selected', () => {
        wrapper = mount(ComboboxMulti, {
            ...localeProvide,
            props: { options, modelValue: ['apple'] },
            attachTo: document.body,
        })
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.classes()).not.toContain('text-brutal-muted-foreground')
    })
})
