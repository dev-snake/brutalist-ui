import { mount } from '@vue/test-utils'
import DropdownMenuContent from './DropdownMenuContent.vue'
import DropdownMenuItem from './DropdownMenuItem.vue'
import DropdownMenuCheckboxItem from './DropdownMenuCheckboxItem.vue'
import DropdownMenuRadioItem from './DropdownMenuRadioItem.vue'
import DropdownMenuLabel from './DropdownMenuLabel.vue'
import DropdownMenuSeparator from './DropdownMenuSeparator.vue'
import DropdownMenuShortcut from './DropdownMenuShortcut.vue'
import DropdownMenuSubTrigger from './DropdownMenuSubTrigger.vue'
import DropdownMenuSubContent from './DropdownMenuSubContent.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('DropdownMenuContent', () => {
    const contentStubs = {
        DropdownMenuPortal: primitiveStub,
        DropdownMenuContent: {
            template: '<div data-testid="dropdown-content"><slot /></div>',
        },
    }

    it('renders with brutal styling classes', () => {
        const wrapper = mount(DropdownMenuContent, {
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="dropdown-content"]')
        expect(content.classes()).toContain('border-3')
        expect(content.classes()).toContain('border-brutal')
        expect(content.classes()).toContain('shadow-brutal')
        expect(content.classes()).toContain('bg-brutal-bg')
        expect(content.classes()).toContain('text-brutal-fg')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuContent, {
            props: { class: 'custom-content' },
            global: { stubs: contentStubs },
        })
        const content = wrapper.find('[data-testid="dropdown-content"]')
        expect(content.classes()).toContain('custom-content')
    })
})

describe('DropdownMenuItem', () => {
    it('renders slot content', () => {
        const wrapper = mount(DropdownMenuItem, {
            slots: { default: 'Menu item' },
            global: { stubs: { DropdownMenuItem: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Menu item')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuItem, {
            props: { class: 'custom-item' },
            global: { stubs: { DropdownMenuItem: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-item')
    })
})

describe('DropdownMenuCheckboxItem', () => {
    const checkboxStubs = {
        DropdownMenuCheckboxItem: primitiveStub,
        DropdownMenuItemIndicator: primitiveStub,
    }

    it('renders slot content', () => {
        const wrapper = mount(DropdownMenuCheckboxItem, {
            slots: { default: 'Checkbox item' },
            global: { stubs: checkboxStubs },
        })
        expect(wrapper.text()).toBe('Checkbox item')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuCheckboxItem, {
            props: { class: 'custom-checkbox' },
            global: { stubs: checkboxStubs },
        })
        expect(wrapper.classes()).toContain('custom-checkbox')
    })
})

describe('DropdownMenuRadioItem', () => {
    const radioStubs = {
        DropdownMenuRadioItem: primitiveStub,
        DropdownMenuItemIndicator: primitiveStub,
    }

    it('renders slot content', () => {
        const wrapper = mount(DropdownMenuRadioItem, {
            props: { value: 'option1' },
            slots: { default: 'Radio item' },
            global: { stubs: radioStubs },
        })
        expect(wrapper.text()).toBe('Radio item')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuRadioItem, {
            props: { value: 'option1', class: 'custom-radio' },
            global: { stubs: radioStubs },
        })
        expect(wrapper.classes()).toContain('custom-radio')
    })
})

describe('DropdownMenuLabel', () => {
    it('renders slot content', () => {
        const wrapper = mount(DropdownMenuLabel, {
            slots: { default: 'Label text' },
            global: { stubs: { DropdownMenuLabel: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Label text')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuLabel, {
            props: { class: 'custom-label' },
            global: { stubs: { DropdownMenuLabel: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-label')
    })
})

describe('DropdownMenuSeparator', () => {
    it('renders with separator styling', () => {
        const wrapper = mount(DropdownMenuSeparator, {
            global: { stubs: { DropdownMenuSeparator: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('h-[3px]')
        expect(wrapper.classes()).toContain('bg-brutal-fg')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuSeparator, {
            props: { class: 'custom-sep' },
            global: { stubs: { DropdownMenuSeparator: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-sep')
    })
})

describe('DropdownMenuShortcut', () => {
    it('renders slot content', () => {
        const wrapper = mount(DropdownMenuShortcut, {
            slots: { default: '⌘K' },
        })
        expect(wrapper.text()).toBe('⌘K')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuShortcut, {
            props: { class: 'custom-shortcut' },
        })
        expect(wrapper.classes()).toContain('custom-shortcut')
    })
})

describe('DropdownMenuSubTrigger', () => {
    it('renders slot content', () => {
        const wrapper = mount(DropdownMenuSubTrigger, {
            slots: { default: 'Sub menu' },
            global: { stubs: { DropdownMenuSubTrigger: primitiveStub } },
        })
        expect(wrapper.text()).toContain('Sub menu')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuSubTrigger, {
            props: { class: 'custom-sub-trigger' },
            global: { stubs: { DropdownMenuSubTrigger: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-sub-trigger')
    })
})

describe('DropdownMenuSubContent', () => {
    it('renders with brutal styling classes', () => {
        const wrapper = mount(DropdownMenuSubContent, {
            global: { stubs: { DropdownMenuSubContent: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')
        expect(wrapper.classes()).toContain('shadow-brutal')
        expect(wrapper.classes()).toContain('bg-brutal-bg')
        expect(wrapper.classes()).toContain('text-brutal-fg')
    })

    it('applies custom class', () => {
        const wrapper = mount(DropdownMenuSubContent, {
            props: { class: 'custom-sub-content' },
            global: { stubs: { DropdownMenuSubContent: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-sub-content')
    })
})
