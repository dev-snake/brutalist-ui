import { mount } from '@vue/test-utils'
import AlertDialogContent from './AlertDialogContent.vue'
import AlertDialogHeader from './AlertDialogHeader.vue'
import AlertDialogFooter from './AlertDialogFooter.vue'
import AlertDialogTitle from './AlertDialogTitle.vue'
import AlertDialogDescription from './AlertDialogDescription.vue'
import AlertDialogAction from './AlertDialogAction.vue'
import AlertDialogCancel from './AlertDialogCancel.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('AlertDialogContent', () => {
    const contentStubs = {
        AlertDialogPortal: primitiveStub,
        AlertDialogOverlay: primitiveStub,
        AlertDialogContent: {
            template: '<div data-testid="alert-dialog-content"><slot /></div>',
        },
    }

    it('renders with brutal styling classes', () => {
        const wrapper = mount(AlertDialogContent, {
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="alert-dialog-content"]')
        expect(content.classes()).toContain('border-3')
        expect(content.classes()).toContain('border-brutal')
        expect(content.classes()).toContain('shadow-brutal-xl')
        expect(content.classes()).toContain('bg-brutal-bg')
        expect(content.classes()).toContain('text-brutal-fg')
        expect(content.classes()).toContain('rounded-brutal')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertDialogContent, {
            props: { class: 'custom-content' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="alert-dialog-content"]')
        expect(content.classes()).toContain('custom-content')
    })
})

describe('AlertDialogHeader', () => {
    it('renders slot content', () => {
        const wrapper = mount(AlertDialogHeader, {
            slots: { default: 'Header text' },
        })
        expect(wrapper.text()).toBe('Header text')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertDialogHeader, {
            props: { class: 'custom-header' },
        })
        expect(wrapper.classes()).toContain('custom-header')
    })
})

describe('AlertDialogFooter', () => {
    it('renders slot content', () => {
        const wrapper = mount(AlertDialogFooter, {
            slots: { default: 'Footer text' },
        })
        expect(wrapper.text()).toBe('Footer text')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertDialogFooter, {
            props: { class: 'custom-footer' },
        })
        expect(wrapper.classes()).toContain('custom-footer')
    })
})

describe('AlertDialogTitle', () => {
    it('renders slot content', () => {
        const wrapper = mount(AlertDialogTitle, {
            slots: { default: 'Title text' },
            global: { stubs: { AlertDialogTitle: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Title text')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertDialogTitle, {
            props: { class: 'custom-title' },
            global: { stubs: { AlertDialogTitle: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-title')
    })
})

describe('AlertDialogDescription', () => {
    it('renders slot content', () => {
        const wrapper = mount(AlertDialogDescription, {
            slots: { default: 'Description text' },
            global: { stubs: { AlertDialogDescription: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Description text')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertDialogDescription, {
            props: { class: 'custom-desc' },
            global: { stubs: { AlertDialogDescription: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-desc')
    })
})

describe('AlertDialogAction', () => {
    it('renders slot content', () => {
        const wrapper = mount(AlertDialogAction, {
            slots: { default: 'Confirm' },
            global: { stubs: { AlertDialogAction: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Confirm')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertDialogAction, {
            props: { class: 'custom-action' },
            global: { stubs: { AlertDialogAction: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-action')
    })

    it('renders with primary variant by default', () => {
        const wrapper = mount(AlertDialogAction, {
            global: { stubs: { AlertDialogAction: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('bg-brutal-primary')
    })
})

describe('AlertDialogCancel', () => {
    it('renders slot content', () => {
        const wrapper = mount(AlertDialogCancel, {
            slots: { default: 'Cancel' },
            global: { stubs: { AlertDialogCancel: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Cancel')
    })

    it('applies custom class', () => {
        const wrapper = mount(AlertDialogCancel, {
            props: { class: 'custom-cancel' },
            global: { stubs: { AlertDialogCancel: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-cancel')
    })

    it('renders with outline variant', () => {
        const wrapper = mount(AlertDialogCancel, {
            global: { stubs: { AlertDialogCancel: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('bg-transparent')
    })
})
