import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import StepperSection from './StepperSection.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockSteps = [
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Set up your profile' },
    { title: 'Confirm', description: 'Review and confirm' },
]

describe('StepperSection', () => {
    it('renders with default props', () => {
        const wrapper = mount(StepperSection, { ...localeProvide })
        expect(wrapper.find('h2').exists()).toBe(true)
    })

    it('renders custom title', () => {
        const wrapper = mount(StepperSection, {
            props: { title: 'Setup Wizard' },
            ...localeProvide,
        })
        expect(wrapper.find('h2').text()).toBe('Setup Wizard')
    })

    it('renders steps via Stepper component', () => {
        const wrapper = mount(StepperSection, {
            props: { steps: mockSteps, currentStep: 0 },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Account')
        expect(wrapper.text()).toContain('Profile')
        expect(wrapper.text()).toContain('Confirm')
    })

    it('renders step descriptions', () => {
        const wrapper = mount(StepperSection, {
            props: { steps: mockSteps, currentStep: 0 },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Create your account')
        expect(wrapper.text()).toContain('Set up your profile')
    })

    it('renders navigation buttons', () => {
        const wrapper = mount(StepperSection, {
            props: { steps: mockSteps, currentStep: 1 },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        const buttonTexts = buttons.map(b => b.text())
        expect(buttonTexts.some(t => t.includes('Previous'))).toBe(true)
        expect(buttonTexts.some(t => t.includes('Next'))).toBe(true)
    })

    it('disables Previous button on first step', () => {
        const wrapper = mount(StepperSection, {
            props: { steps: mockSteps, currentStep: 0 },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        const prevButton = buttons.find(b => b.text().includes('Previous'))
        expect(prevButton?.attributes('disabled')).toBeDefined()
    })

    it('disables Next button on last step', () => {
        const wrapper = mount(StepperSection, {
            props: { steps: mockSteps, currentStep: 2 },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        const nextButton = buttons.find(b => b.text().includes('Next'))
        expect(nextButton?.attributes('disabled')).toBeDefined()
    })

    it('emits step-click when Previous is clicked', async () => {
        const wrapper = mount(StepperSection, {
            props: { steps: mockSteps, currentStep: 1 },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        const prevButton = buttons.find(b => b.text().includes('Previous'))
        await prevButton?.trigger('click')
        expect(wrapper.emitted('step-click')).toBeTruthy()
        expect(wrapper.emitted('step-click')![0]).toEqual([0])
    })

    it('emits step-click when Next is clicked', async () => {
        const wrapper = mount(StepperSection, {
            props: { steps: mockSteps, currentStep: 0 },
            ...localeProvide,
        })
        const buttons = wrapper.findAll('button')
        const nextButton = buttons.find(b => b.text().includes('Next'))
        await nextButton?.trigger('click')
        expect(wrapper.emitted('step-click')).toBeTruthy()
        expect(wrapper.emitted('step-click')![0]).toEqual([1])
    })

    it('renders with empty steps array', () => {
        const wrapper = mount(StepperSection, {
            props: { steps: [], currentStep: 0 },
            ...localeProvide,
        })
        expect(wrapper.find('h2').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(StepperSection, {
            props: { class: 'my-stepper-section' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-stepper-section')
    })

    it('renders header slot', () => {
        const wrapper = mount(StepperSection, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
        expect(wrapper.text()).toContain('Custom Header')
    })

    it('renders footer slot', () => {
        const wrapper = mount(StepperSection, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot for step content', () => {
        const wrapper = mount(StepperSection, {
            props: { steps: mockSteps, currentStep: 0 },
            slots: { default: '<div class="step-content">Step Content Here</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.step-content').exists()).toBe(true)
        expect(wrapper.text()).toContain('Step Content Here')
    })
})
