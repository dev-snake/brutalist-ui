import { mount } from '@vue/test-utils'
import DialogOverlay from './DialogOverlay.vue'
import DialogContent from './DialogContent.vue'
import DialogHeader from './DialogHeader.vue'
import DialogFooter from './DialogFooter.vue'
import DialogTitle from './DialogTitle.vue'
import DialogDescription from './DialogDescription.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('DialogOverlay', () => {
    it('renders with default classes', () => {
        const wrapper = mount(DialogOverlay, {
            global: { stubs: { DialogOverlay: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('fixed')
        expect(wrapper.classes()).toContain('inset-0')
        expect(wrapper.classes()).toContain('z-50')
        expect(wrapper.classes()).toContain('bg-brutal-overlay')
    })

    it('applies custom class', () => {
        const wrapper = mount(DialogOverlay, {
            props: { class: 'custom-overlay' },
            global: { stubs: { DialogOverlay: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-overlay')
    })
})

describe('DialogContent', () => {
    const contentStubs = {
        DialogPortal: primitiveStub,
        DialogOverlay: primitiveStub,
        DialogContent: {
            template: '<div data-testid="dialog-content"><slot /></div>',
        },
        DialogClose: primitiveStub,
    }

    it('renders with brutal styling classes', () => {
        const wrapper = mount(DialogContent, {
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="dialog-content"]')
        expect(content.classes()).toContain('border-3')
        expect(content.classes()).toContain('border-brutal')
        expect(content.classes()).toContain('shadow-brutal-xl')
        expect(content.classes()).toContain('bg-brutal-bg')
        expect(content.classes()).toContain('text-brutal-fg')
    })

    it('applies custom class', () => {
        const wrapper = mount(DialogContent, {
            props: { class: 'custom-content' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="dialog-content"]')
        expect(content.classes()).toContain('custom-content')
    })
})

describe('DialogHeader', () => {
    it('renders slot content', () => {
        const wrapper = mount(DialogHeader, {
            slots: { default: 'Header text' },
        })
        expect(wrapper.text()).toBe('Header text')
    })

    it('applies custom class', () => {
        const wrapper = mount(DialogHeader, {
            props: { class: 'custom-header' },
        })
        expect(wrapper.classes()).toContain('custom-header')
    })
})

describe('DialogFooter', () => {
    it('renders slot content', () => {
        const wrapper = mount(DialogFooter, {
            slots: { default: 'Footer text' },
        })
        expect(wrapper.text()).toBe('Footer text')
    })

    it('applies custom class', () => {
        const wrapper = mount(DialogFooter, {
            props: { class: 'custom-footer' },
        })
        expect(wrapper.classes()).toContain('custom-footer')
    })
})

describe('DialogTitle', () => {
    it('renders slot content', () => {
        const wrapper = mount(DialogTitle, {
            slots: { default: 'Title text' },
            global: { stubs: { DialogTitle: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Title text')
    })

    it('applies custom class', () => {
        const wrapper = mount(DialogTitle, {
            props: { class: 'custom-title' },
            global: { stubs: { DialogTitle: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-title')
    })
})

describe('DialogDescription', () => {
    it('renders slot content', () => {
        const wrapper = mount(DialogDescription, {
            slots: { default: 'Description text' },
            global: { stubs: { DialogDescription: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Description text')
    })

    it('applies custom class', () => {
        const wrapper = mount(DialogDescription, {
            props: { class: 'custom-desc' },
            global: { stubs: { DialogDescription: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-desc')
    })
})
