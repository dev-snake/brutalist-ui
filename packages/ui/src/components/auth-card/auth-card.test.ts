import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import AuthCard from './AuthCard.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('AuthCard', () => {
    it('renders with default props', () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Welcome back')
        expect(wrapper.text()).toContain('Sign in to your account to continue')
    })

    it('shows custom title', () => {
        const wrapper = mount(AuthCard, {
            props: { title: 'Create Account' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Create Account')
    })

    it('shows custom description', () => {
        const wrapper = mount(AuthCard, {
            props: { description: 'Sign up for a new account' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Sign up for a new account')
    })

    it('renders email and password inputs', () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        const inputs = wrapper.findAll('input')
        expect(inputs.length).toBe(2)
        expect(inputs[0].attributes('type')).toBe('email')
        expect(inputs[1].attributes('type')).toBe('password')
    })

    it('renders Google and GitHub buttons', () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Google')
        expect(wrapper.text()).toContain('GitHub')
    })

    it('emits googleClick when Google button is clicked', async () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        const buttons = wrapper.findAll('button')
        const googleButton = buttons.find(b => b.text().includes('Google'))
        expect(googleButton).toBeTruthy()
        await googleButton!.trigger('click')
        expect(wrapper.emitted('googleClick')).toBeTruthy()
        expect(wrapper.emitted('googleClick')!.length).toBe(1)
    })

    it('emits githubClick when GitHub button is clicked', async () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        const buttons = wrapper.findAll('button')
        const githubButton = buttons.find(b => b.text().includes('GitHub'))
        expect(githubButton).toBeTruthy()
        await githubButton!.trigger('click')
        expect(wrapper.emitted('githubClick')).toBeTruthy()
        expect(wrapper.emitted('githubClick')!.length).toBe(1)
    })

    it('emits forgotPassword when forgot password button is clicked', async () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        const buttons = wrapper.findAll('button')
        const forgotButton = buttons.find(b => b.text().includes('Forgot password?'))
        expect(forgotButton).toBeTruthy()
        await forgotButton!.trigger('click')
        expect(wrapper.emitted('forgotPassword')).toBeTruthy()
        expect(wrapper.emitted('forgotPassword')!.length).toBe(1)
    })

    it('emits loginSubmit when form is submitted', async () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        const form = wrapper.find('form')
        await form.trigger('submit')
        expect(wrapper.emitted('loginSubmit')).toBeTruthy()
        expect(wrapper.emitted('loginSubmit')!.length).toBe(1)
    })

    it('renders Sign In submit button', () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Sign In')
    })

    it('renders Register link', () => {
        const wrapper = mount(AuthCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Register')
    })

    it('applies custom class', () => {
        const wrapper = mount(AuthCard, {
            props: { class: 'my-auth' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-auth"]').exists()).toBe(true)
    })
})
