import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import Stepper from './Stepper.vue'

const localeProvide = { [LOCALE_INJECTION_KEY]: en }

const steps = [
    { id: 'step-1', title: 'Account' },
    { id: 'step-2', title: 'Profile', description: 'Set up your profile' },
    { id: 'step-3', title: 'Confirm' },
]

describe('Stepper', () => {
    it('renders all steps', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        const items = wrapper.findAll('[role="listitem"]')
        expect(items).toHaveLength(3)
    })

    it('shows step titles', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        expect(wrapper.text()).toContain('Account')
        expect(wrapper.text()).toContain('Profile')
        expect(wrapper.text()).toContain('Confirm')
    })

    it('has role="list" and aria-label', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        expect(wrapper.attributes('role')).toBe('list')
        expect(wrapper.attributes('aria-label')).toBe('Progress steps')
    })

    it('marks active step with bg-brutal-primary', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 1 },
            global: { provide: localeProvide },
        })
        const buttons = wrapper.findAll('button')
        const activeButton = buttons[1]
        expect(activeButton.classes()).toContain('bg-brutal-primary')
    })

    it('shows completed check icon for completed steps', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 2 },
            global: { provide: localeProvide },
        })
        const buttons = wrapper.findAll('button')
        const completedButton = buttons[0]
        expect(completedButton.find('svg').exists()).toBe(true)
    })

    it('shows step numbers for non-completed steps', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        const buttons = wrapper.findAll('button')
        expect(buttons[0].text()).toContain('1')
        expect(buttons[1].text()).toContain('2')
        expect(buttons[2].text()).toContain('3')
    })

    it('applies upcoming state classes to future steps', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        const buttons = wrapper.findAll('button')
        const upcomingButton = buttons[2]
        expect(upcomingButton.classes()).toContain('bg-brutal-bg')
        expect(upcomingButton.classes()).toContain('opacity-60')
    })

    it('applies completed state classes to completed steps', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 2 },
            global: { provide: localeProvide },
        })
        const buttons = wrapper.findAll('button')
        const completedButton = buttons[0]
        expect(completedButton.classes()).toContain('bg-brutal-success')
    })

    it('renders descriptions when provided', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        expect(wrapper.text()).toContain('Set up your profile')
    })

    it('emits update:modelValue on step click', async () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        const buttons = wrapper.findAll('button')
        await buttons[1].trigger('click')
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([1])
    })

    it('emits step-click on step click', async () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        const buttons = wrapper.findAll('button')
        await buttons[2].trigger('click')
        expect(wrapper.emitted('step-click')).toBeTruthy()
        expect(wrapper.emitted('step-click')![0]).toEqual([2])
    })

    it('applies custom class', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0, class: 'my-stepper' },
            global: { provide: localeProvide },
        })
        expect(wrapper.classes()).toContain('my-stepper')
    })

    it('renders horizontal layout by default', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0 },
            global: { provide: localeProvide },
        })
        expect(wrapper.classes()).toContain('flex')
        expect(wrapper.classes()).toContain('flex-row')
    })

    it('renders vertical layout when orientation is vertical', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 0, orientation: 'vertical' },
            global: { provide: localeProvide },
        })
        expect(wrapper.classes()).toContain('flex')
        expect(wrapper.classes()).toContain('flex-col')
    })

    it('sets aria-current on active step', () => {
        const wrapper = mount(Stepper, {
            props: { steps, modelValue: 1 },
            global: { provide: localeProvide },
        })
        const items = wrapper.findAll('[role="listitem"]')
        expect(items[0].attributes('aria-current')).toBeUndefined()
        expect(items[1].attributes('aria-current')).toBe('step')
        expect(items[2].attributes('aria-current')).toBeUndefined()
    })
})
