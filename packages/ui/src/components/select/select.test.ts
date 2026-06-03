import { mount } from '@vue/test-utils'
import SelectTrigger from './SelectTrigger.vue'
import SelectContent from './SelectContent.vue'
import SelectItem from './SelectItem.vue'
import SelectLabel from './SelectLabel.vue'
import SelectSeparator from './SelectSeparator.vue'
import SelectScrollUpButton from './SelectScrollUpButton.vue'
import SelectScrollDownButton from './SelectScrollDownButton.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('SelectTrigger', () => {
    it('renders with brutal styling classes', () => {
        const wrapper = mount(SelectTrigger, {
            global: { stubs: { SelectTrigger: primitiveStub, SelectIcon: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')
        expect(wrapper.classes()).toContain('shadow-brutal')
        expect(wrapper.classes()).toContain('bg-brutal-bg')
        expect(wrapper.classes()).toContain('text-brutal-fg')
        expect(wrapper.classes()).toContain('font-bold')
    })

    it('applies custom class', () => {
        const wrapper = mount(SelectTrigger, {
            props: { class: 'custom-trigger' },
            global: { stubs: { SelectTrigger: primitiveStub, SelectIcon: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-trigger')
    })
})

describe('SelectContent', () => {
    const contentStubs = {
        SelectPortal: primitiveStub,
        SelectContent: {
            template: '<div data-testid="select-content"><slot /></div>',
        },
        SelectViewport: primitiveStub,
        SelectScrollUpButton: primitiveStub,
        SelectScrollDownButton: primitiveStub,
    }

    it('renders with brutal styling classes', () => {
        const wrapper = mount(SelectContent, {
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="select-content"]')
        expect(content.classes()).toContain('border-3')
        expect(content.classes()).toContain('border-brutal')
        expect(content.classes()).toContain('shadow-brutal')
        expect(content.classes()).toContain('bg-brutal-bg')
        expect(content.classes()).toContain('text-brutal-fg')
    })

    it('applies custom class', () => {
        const wrapper = mount(SelectContent, {
            props: { class: 'custom-content' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="select-content"]')
        expect(content.classes()).toContain('custom-content')
    })
})

describe('SelectItem', () => {
    const itemStubs = {
        SelectItem: primitiveStub,
        SelectItemIndicator: primitiveStub,
        SelectItemText: primitiveStub,
    }

    it('renders slot content', () => {
        const wrapper = mount(SelectItem, {
            props: { value: 'test' },
            slots: { default: 'Item text' },
            global: { stubs: itemStubs },
        })
        expect(wrapper.text()).toBe('Item text')
    })

    it('applies custom class', () => {
        const wrapper = mount(SelectItem, {
            props: { value: 'test', class: 'custom-item' },
            global: { stubs: itemStubs },
        })
        expect(wrapper.classes()).toContain('custom-item')
    })
})

describe('SelectLabel', () => {
    it('renders slot content', () => {
        const wrapper = mount(SelectLabel, {
            slots: { default: 'Label text' },
            global: { stubs: { SelectLabel: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Label text')
    })

    it('applies custom class', () => {
        const wrapper = mount(SelectLabel, {
            props: { class: 'custom-label' },
            global: { stubs: { SelectLabel: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-label')
    })
})

describe('SelectSeparator', () => {
    it('renders with separator styling', () => {
        const wrapper = mount(SelectSeparator, {
            global: { stubs: { SelectSeparator: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('h-[3px]')
        expect(wrapper.classes()).toContain('bg-brutal-fg')
    })

    it('applies custom class', () => {
        const wrapper = mount(SelectSeparator, {
            props: { class: 'custom-sep' },
            global: { stubs: { SelectSeparator: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-sep')
    })
})

describe('SelectScrollUpButton', () => {
    it('renders with default classes', () => {
        const wrapper = mount(SelectScrollUpButton, {
            global: { stubs: { SelectScrollUpButton: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('flex')
        expect(wrapper.classes()).toContain('items-center')
        expect(wrapper.classes()).toContain('justify-center')
        expect(wrapper.classes()).toContain('bg-brutal-bg')
    })

    it('applies custom class', () => {
        const wrapper = mount(SelectScrollUpButton, {
            props: { class: 'custom-scroll-up' },
            global: { stubs: { SelectScrollUpButton: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-scroll-up')
    })
})

describe('SelectScrollDownButton', () => {
    it('renders with default classes', () => {
        const wrapper = mount(SelectScrollDownButton, {
            global: { stubs: { SelectScrollDownButton: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('flex')
        expect(wrapper.classes()).toContain('items-center')
        expect(wrapper.classes()).toContain('justify-center')
        expect(wrapper.classes()).toContain('bg-brutal-bg')
    })

    it('applies custom class', () => {
        const wrapper = mount(SelectScrollDownButton, {
            props: { class: 'custom-scroll-down' },
            global: { stubs: { SelectScrollDownButton: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-scroll-down')
    })
})
