import { mount } from '@vue/test-utils'
import TagsInput from './TagsInput.vue'
import TagsInputInput from './TagsInputInput.vue'
import TagsInputItem from './TagsInputItem.vue'
import TagsInputItemText from './TagsInputItemText.vue'
import TagsInputItemDelete from './TagsInputItemDelete.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('TagsInput', () => {
    it('renders with default classes', () => {
        const wrapper = mount(TagsInput, {
            global: { stubs: { TagsInputRoot: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('flex')
        expect(classes).toContain('flex-wrap')
        expect(classes).toContain('gap-2')
        expect(classes).toContain('items-center')
        expect(classes).toContain('p-2')
        expect(classes).toContain('min-h-11')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('bg-brutal-bg')
        expect(classes).toContain('rounded-brutal')
        expect(classes).toContain('shadow-brutal')
        expect(classes).toContain('transition-all')
    })

    it('renders slot content', () => {
        const wrapper = mount(TagsInput, {
            slots: { default: 'Tag content here' },
            global: { stubs: { TagsInputRoot: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Tag content here')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TagsInput, {
            props: { class: 'custom-root' },
            global: { stubs: { TagsInputRoot: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-root')
    })
})

describe('TagsInputInput', () => {
    it('renders with default classes', () => {
        const wrapper = mount(TagsInputInput, {
            global: { stubs: { TagsInputInput: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('flex-1')
        expect(classes).toContain('bg-transparent')
        expect(classes).toContain('px-2')
        expect(classes).toContain('text-sm')
        expect(classes).toContain('font-bold')
        expect(classes).toContain('focus:outline-none')
        expect(classes).toContain('disabled:cursor-not-allowed')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TagsInputInput, {
            props: { class: 'custom-input' },
            global: { stubs: { TagsInputInput: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-input')
    })
})

describe('TagsInputItem', () => {
    it('renders with default variant (primary) classes', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('flex')
        expect(classes).toContain('items-center')
        expect(classes).toContain('gap-1.5')
        expect(classes).toContain('px-2.5')
        expect(classes).toContain('py-1')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('font-black')
        expect(classes).toContain('text-sm')
        expect(classes).toContain('rounded-brutal')
        expect(classes).toContain('shadow-brutal-sm')
        expect(classes).toContain('transition-all')
        expect(classes).toContain('bg-brutal-primary')
        expect(classes).toContain('text-brutal-fg')
    })

    it('applies default variant classes', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1', variant: 'default' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('bg-brutal-bg')
        expect(classes).toContain('text-brutal-fg')
    })

    it('applies primary variant classes', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1', variant: 'primary' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('bg-brutal-primary')
    })

    it('applies secondary variant classes', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1', variant: 'secondary' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('bg-brutal-secondary')
    })

    it('applies accent variant classes', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1', variant: 'accent' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('bg-brutal-accent')
    })

    it('applies danger variant classes', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1', variant: 'danger' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('bg-brutal-destructive')
    })

    it('applies success variant classes', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1', variant: 'success' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('bg-brutal-success')
    })

    it('renders slot content', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1' },
            slots: { default: 'Tag label' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Tag label')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TagsInputItem, {
            props: { value: 'tag1', class: 'custom-item' },
            global: { stubs: { TagsInputItem: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-item')
    })
})

describe('TagsInputItemText', () => {
    it('renders with default classes', () => {
        const wrapper = mount(TagsInputItemText, {
            global: { stubs: { TagsInputItemText: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('text-xs')
        expect(classes).toContain('font-black')
        expect(classes).toContain('uppercase')
        expect(classes).toContain('tracking-wide')
    })

    it('renders slot content', () => {
        const wrapper = mount(TagsInputItemText, {
            slots: { default: 'Hello Tag' },
            global: { stubs: { TagsInputItemText: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Hello Tag')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TagsInputItemText, {
            props: { class: 'custom-text' },
            global: { stubs: { TagsInputItemText: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-text')
    })
})

describe('TagsInputItemDelete', () => {
    it('renders with default classes', () => {
        const wrapper = mount(TagsInputItemDelete, {
            global: { stubs: { TagsInputItemDelete: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('h-4')
        expect(classes).toContain('w-4')
        expect(classes).toContain('flex')
        expect(classes).toContain('items-center')
        expect(classes).toContain('justify-center')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('bg-brutal-bg')
        expect(classes).toContain('text-brutal-fg')
        expect(classes).toContain('shadow-brutal-sm')
        expect(classes).toContain('transition-all')
        expect(classes).toContain('rounded-brutal')
    })

    it('renders default slot with X icon', () => {
        const wrapper = mount(TagsInputItemDelete, {
            global: { stubs: { TagsInputItemDelete: primitiveStub } },
        })
        expect(wrapper.find('svg').exists() || wrapper.findComponent({ name: 'X' }).exists()).toBe(true)
    })

    it('renders custom slot content', () => {
        const wrapper = mount(TagsInputItemDelete, {
            slots: { default: 'Remove' },
            global: { stubs: { TagsInputItemDelete: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Remove')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TagsInputItemDelete, {
            props: { class: 'custom-delete' },
            global: { stubs: { TagsInputItemDelete: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-delete')
    })
})
