import { mount } from '@vue/test-utils'
import PopoverContent from './PopoverContent.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('PopoverContent', () => {
    const contentStubs = {
        PopoverPortal: primitiveStub,
        PopoverContent: {
            template: '<div data-testid="popover-content"><slot /></div>',
        },
    }

    it('renders with default classes', () => {
        const wrapper = mount(PopoverContent, {
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="popover-content"]')
        expect(content.classes()).toContain('border-3')
        expect(content.classes()).toContain('border-brutal')
        expect(content.classes()).toContain('shadow-brutal')
        expect(content.classes()).toContain('bg-brutal-bg')
        expect(content.classes()).toContain('text-brutal-fg')
        expect(content.classes()).toContain('z-50')
    })

    it('applies custom class', () => {
        const wrapper = mount(PopoverContent, {
            props: { class: 'custom-popover' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="popover-content"]')
        expect(content.classes()).toContain('custom-popover')
    })
})
