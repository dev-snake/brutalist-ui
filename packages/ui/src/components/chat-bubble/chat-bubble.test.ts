import { mount } from '@vue/test-utils'
import ChatBubble from './ChatBubble.vue'

describe('ChatBubble', () => {
    it('renders received message by default', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '1', content: 'Hello there' },
            },
        })
        expect(wrapper.text()).toContain('Hello there')
        const bubble = wrapper.find('.px-4')
        expect(bubble.classes()).toContain('bg-brutal-bg')
    })

    it('renders sent message with primary bg', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '2', content: 'Hi back', variant: 'sent' },
            },
        })
        const bubble = wrapper.find('.px-4')
        expect(bubble.classes()).toContain('bg-brutal-primary')
    })

    it('renders system message', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '3', content: 'User joined', variant: 'system' },
            },
        })
        const bubble = wrapper.find('.px-4')
        expect(bubble.classes()).toContain('bg-brutal-muted')
        expect(bubble.classes()).toContain('border-dashed')
        expect(bubble.classes()).toContain('shadow-none')
    })

    it('shows avatar when showAvatar is true', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '4', content: 'Hey', name: 'Alice' },
                showAvatar: true,
            },
        })
        const avatar = wrapper.find('[title="Alice"]')
        expect(avatar.exists()).toBe(true)
    })

    it('hides avatar when showAvatar is false', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '5', content: 'Hey', name: 'Alice' },
                showAvatar: false,
            },
        })
        const avatar = wrapper.find('[title="Alice"]')
        expect(avatar.exists()).toBe(false)
    })

    it('shows name when provided', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '6', content: 'Hello', name: 'Bob' },
            },
        })
        expect(wrapper.text()).toContain('Bob')
    })

    it('shows timestamp when provided', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '7', content: 'Hello', timestamp: '10:30 AM' },
            },
        })
        expect(wrapper.text()).toContain('10:30 AM')
    })

    it('applies custom class', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '8', content: 'Hello' },
                class: 'my-bubble',
            },
        })
        const bubble = wrapper.find('.px-4')
        expect(bubble.classes()).toContain('my-bubble')
    })

    it('avatar shows initials when no image', () => {
        const wrapper = mount(ChatBubble, {
            props: {
                message: { id: '9', content: 'Hello', name: 'Alice' },
            },
        })
        const avatar = wrapper.find('[title="Alice"]')
        expect(avatar.text()).toBe('AL')
    })
})
