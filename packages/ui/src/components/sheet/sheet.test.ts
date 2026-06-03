import { mount } from '@vue/test-utils'
import SheetContent from './SheetContent.vue'
import SheetHeader from './SheetHeader.vue'
import SheetFooter from './SheetFooter.vue'
import SheetTitle from './SheetTitle.vue'
import SheetDescription from './SheetDescription.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('SheetContent', () => {
    const contentStubs = {
        DialogPortal: primitiveStub,
        DialogOverlay: primitiveStub,
        DialogContent: {
            template: '<div data-testid="sheet-content"><slot /></div>',
        },
        DialogClose: primitiveStub,
    }

    it('renders with default side (right) variant classes', () => {
        const wrapper = mount(SheetContent, {
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="sheet-content"]')
        expect(content.classes()).toContain('border-3')
        expect(content.classes()).toContain('border-brutal')
        expect(content.classes()).toContain('bg-brutal-bg')
        expect(content.classes()).toContain('text-brutal-fg')
        expect(content.classes()).toContain('right-0')
        expect(content.classes()).toContain('border-l-3')
    })

    it('renders with top side variant classes', () => {
        const wrapper = mount(SheetContent, {
            props: { side: 'top' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="sheet-content"]')
        expect(content.classes()).toContain('top-0')
        expect(content.classes()).toContain('border-b-3')
    })

    it('renders with bottom side variant classes', () => {
        const wrapper = mount(SheetContent, {
            props: { side: 'bottom' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="sheet-content"]')
        expect(content.classes()).toContain('bottom-0')
        expect(content.classes()).toContain('border-t-3')
    })

    it('renders with left side variant classes', () => {
        const wrapper = mount(SheetContent, {
            props: { side: 'left' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="sheet-content"]')
        expect(content.classes()).toContain('left-0')
        expect(content.classes()).toContain('border-r-3')
    })

    it('renders with right side variant classes', () => {
        const wrapper = mount(SheetContent, {
            props: { side: 'right' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="sheet-content"]')
        expect(content.classes()).toContain('right-0')
        expect(content.classes()).toContain('border-l-3')
    })

    it('applies custom class', () => {
        const wrapper = mount(SheetContent, {
            props: { class: 'custom-sheet' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="sheet-content"]')
        expect(content.classes()).toContain('custom-sheet')
    })
})

describe('SheetHeader', () => {
    it('renders slot content', () => {
        const wrapper = mount(SheetHeader, {
            slots: { default: 'Header text' },
        })
        expect(wrapper.text()).toBe('Header text')
    })

    it('applies custom class', () => {
        const wrapper = mount(SheetHeader, {
            props: { class: 'custom-header' },
        })
        expect(wrapper.classes()).toContain('custom-header')
    })
})

describe('SheetFooter', () => {
    it('renders slot content', () => {
        const wrapper = mount(SheetFooter, {
            slots: { default: 'Footer text' },
        })
        expect(wrapper.text()).toBe('Footer text')
    })

    it('applies custom class', () => {
        const wrapper = mount(SheetFooter, {
            props: { class: 'custom-footer' },
        })
        expect(wrapper.classes()).toContain('custom-footer')
    })
})

describe('SheetTitle', () => {
    it('renders slot content', () => {
        const wrapper = mount(SheetTitle, {
            slots: { default: 'Title text' },
            global: { stubs: { DialogTitle: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Title text')
    })

    it('applies custom class', () => {
        const wrapper = mount(SheetTitle, {
            props: { class: 'custom-title' },
            global: { stubs: { DialogTitle: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-title')
    })
})

describe('SheetDescription', () => {
    it('renders slot content', () => {
        const wrapper = mount(SheetDescription, {
            slots: { default: 'Description text' },
            global: { stubs: { DialogDescription: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Description text')
    })

    it('applies custom class', () => {
        const wrapper = mount(SheetDescription, {
            props: { class: 'custom-desc' },
            global: { stubs: { DialogDescription: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-desc')
    })
})
