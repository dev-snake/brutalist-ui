import { mount } from '@vue/test-utils'
import TabsList from './TabsList.vue'
import TabsTrigger from './TabsTrigger.vue'
import TabsContent from './TabsContent.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('TabsList', () => {
    it('renders with brutal styling classes', () => {
        const wrapper = mount(TabsList, {
            global: { stubs: { TabsList: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')
        expect(wrapper.classes()).toContain('bg-brutal-bg')
        expect(wrapper.classes()).toContain('inline-flex')
    })

    it('applies custom class', () => {
        const wrapper = mount(TabsList, {
            props: { class: 'custom-list' },
            global: { stubs: { TabsList: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-list')
    })
})

describe('TabsTrigger', () => {
    it('renders with variant classes', () => {
        const wrapper = mount(TabsTrigger, {
            props: { value: 'tab1' },
            global: { stubs: { TabsTrigger: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('font-bold')
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-transparent')
    })

    it('applies custom class', () => {
        const wrapper = mount(TabsTrigger, {
            props: { value: 'tab1', class: 'custom-trigger' },
            global: { stubs: { TabsTrigger: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-trigger')
    })
})

describe('TabsContent', () => {
    it('renders slot content', () => {
        const wrapper = mount(TabsContent, {
            props: { value: 'tab1' },
            slots: { default: 'Content text' },
            global: { stubs: { TabsContent: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Content text')
    })

    it('applies custom class', () => {
        const wrapper = mount(TabsContent, {
            props: { value: 'tab1', class: 'custom-content' },
            global: { stubs: { TabsContent: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-content')
    })
})
