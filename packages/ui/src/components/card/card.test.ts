import { mount } from '@vue/test-utils'
import Card from './Card.vue'
import CardHeader from './CardHeader.vue'
import CardTitle from './CardTitle.vue'
import CardDescription from './CardDescription.vue'
import CardContent from './CardContent.vue'
import CardFooter from './CardFooter.vue'

describe('Card', () => {
    it('renders with default variant and padding', () => {
        const wrapper = mount(Card)
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')
        expect(wrapper.classes()).toContain('shadow-brutal')
        expect(wrapper.classes()).toContain('p-5')
    })

    it('applies variant classes', async () => {
        const variants = ['default', 'elevated', 'flat', 'interactive', 'primary', 'secondary'] as const

        for (const variant of variants) {
            const wrapper = mount(Card, { props: { variant } })

            if (variant === 'default') {
                expect(wrapper.classes()).toContain('shadow-brutal')
            }
            if (variant === 'elevated') {
                expect(wrapper.classes()).toContain('shadow-brutal-lg')
            }
            if (variant === 'flat') {
                expect(wrapper.classes()).toContain('shadow-none')
            }
            if (variant === 'interactive') {
                expect(wrapper.classes()).toContain('shadow-brutal')
                expect(wrapper.classes()).toContain('cursor-pointer')
            }
            if (variant === 'primary') {
                expect(wrapper.classes()).toContain('shadow-brutal-primary')
                expect(wrapper.classes()).toContain('border-[var(--brutal-primary)]')
            }
            if (variant === 'secondary') {
                expect(wrapper.classes()).toContain('shadow-brutal-secondary')
                expect(wrapper.classes()).toContain('border-[var(--brutal-secondary)]')
            }
        }
    })

    it('applies padding classes', () => {
        const paddings = ['none', 'sm', 'default', 'lg'] as const
        const expected = ['p-0', 'p-3', 'p-5', 'p-8']

        paddings.forEach((padding, i) => {
            const wrapper = mount(Card, { props: { padding } })
            expect(wrapper.classes()).toContain(expected[i])
        })
    })

    it('renders slot content', () => {
        const wrapper = mount(Card, {
            slots: { default: '<p>Card content</p>' },
        })
        expect(wrapper.text()).toBe('Card content')
    })

    it('applies custom class', () => {
        const wrapper = mount(Card, { props: { class: 'my-custom' } })
        expect(wrapper.classes()).toContain('my-custom')
    })
})

describe('CardHeader', () => {
    it('renders slot content', () => {
        const wrapper = mount(CardHeader, {
            slots: { default: '<span>Header</span>' },
        })
        expect(wrapper.text()).toBe('Header')
    })

    it('applies custom class', () => {
        const wrapper = mount(CardHeader, { props: { class: 'my-header' } })
        expect(wrapper.classes()).toContain('my-header')
    })
})

describe('CardTitle', () => {
    it('renders slot content', () => {
        const wrapper = mount(CardTitle, {
            slots: { default: 'Title' },
        })
        expect(wrapper.text()).toBe('Title')
    })

    it('renders h3 element', () => {
        const wrapper = mount(CardTitle, {
            slots: { default: 'Title' },
        })
        expect(wrapper.element.tagName).toBe('H3')
    })

    it('applies custom class', () => {
        const wrapper = mount(CardTitle, { props: { class: 'my-title' } })
        expect(wrapper.classes()).toContain('my-title')
    })
})

describe('CardDescription', () => {
    it('renders slot content', () => {
        const wrapper = mount(CardDescription, {
            slots: { default: 'Description text' },
        })
        expect(wrapper.text()).toBe('Description text')
    })

    it('renders p element', () => {
        const wrapper = mount(CardDescription, {
            slots: { default: 'Desc' },
        })
        expect(wrapper.element.tagName).toBe('P')
    })

    it('applies custom class', () => {
        const wrapper = mount(CardDescription, { props: { class: 'my-desc' } })
        expect(wrapper.classes()).toContain('my-desc')
    })
})

describe('CardContent', () => {
    it('renders slot content', () => {
        const wrapper = mount(CardContent, {
            slots: { default: '<p>Body</p>' },
        })
        expect(wrapper.text()).toBe('Body')
    })

    it('applies custom class', () => {
        const wrapper = mount(CardContent, { props: { class: 'my-content' } })
        expect(wrapper.classes()).toContain('my-content')
    })
})

describe('CardFooter', () => {
    it('renders slot content', () => {
        const wrapper = mount(CardFooter, {
            slots: { default: '<button>Action</button>' },
        })
        expect(wrapper.text()).toBe('Action')
    })

    it('applies custom class', () => {
        const wrapper = mount(CardFooter, { props: { class: 'my-footer' } })
        expect(wrapper.classes()).toContain('my-footer')
    })
})
