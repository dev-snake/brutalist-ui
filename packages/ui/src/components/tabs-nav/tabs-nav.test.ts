import { mount } from '@vue/test-utils'
import TabsNav from './TabsNav.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

const mockTabs = [
    { label: 'Overview', value: 'overview' },
    { label: 'Features', value: 'features' },
    { label: 'Pricing', value: 'pricing' },
]

const globalStubs = {
    TabsRoot: primitiveStub,
    TabsList: primitiveStub,
    TabsTrigger: primitiveStub,
    TabsContent: primitiveStub,
}

describe('TabsNav', () => {
    it('renders with default props', () => {
        const wrapper = mount(TabsNav, {
            global: { stubs: globalStubs },
        })
        expect(wrapper.find('div').exists()).toBe(true)
    })

    it('renders tab triggers', () => {
        const wrapper = mount(TabsNav, {
            props: { tabs: mockTabs },
            global: { stubs: globalStubs },
        })
        expect(wrapper.text()).toContain('Overview')
        expect(wrapper.text()).toContain('Features')
        expect(wrapper.text()).toContain('Pricing')
    })

    it('renders with empty tabs array', () => {
        const wrapper = mount(TabsNav, {
            props: { tabs: [] },
            global: { stubs: globalStubs },
        })
        expect(wrapper.find('div').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(TabsNav, {
            props: { class: 'my-tabs-nav' },
            global: { stubs: globalStubs },
        })
        expect(wrapper.classes()).toContain('my-tabs-nav')
    })

    it('renders header slot', () => {
        const wrapper = mount(TabsNav, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            global: { stubs: globalStubs },
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(TabsNav, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            global: { stubs: globalStubs },
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(TabsNav, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            global: { stubs: globalStubs },
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })

    it('uses defaultValue prop', () => {
        const wrapper = mount(TabsNav, {
            props: { tabs: mockTabs, defaultValue: 'features' },
            global: { stubs: globalStubs },
        })
        expect(wrapper.text()).toContain('Overview')
    })
})
