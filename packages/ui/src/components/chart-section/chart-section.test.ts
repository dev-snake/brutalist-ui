import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import ChartSection from './ChartSection.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockData = [
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 65 },
    { label: 'Mar', value: 30 },
    { label: 'Apr', value: 85 },
    { label: 'May', value: 55 },
]

describe('ChartSection', () => {
    it('renders with default props', () => {
        const wrapper = mount(ChartSection, { ...localeProvide })
        expect(wrapper.find('h2').exists()).toBe(true)
    })

    it('renders custom title', () => {
        const wrapper = mount(ChartSection, {
            props: { title: 'Revenue Overview' },
            ...localeProvide,
        })
        expect(wrapper.find('h2').text()).toBe('Revenue Overview')
    })

    it('renders subtitle when provided', () => {
        const wrapper = mount(ChartSection, {
            props: { subtitle: 'Monthly revenue breakdown' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Monthly revenue breakdown')
    })

    it('renders chart type tabs', () => {
        const wrapper = mount(ChartSection, { ...localeProvide })
        expect(wrapper.text()).toContain('Bar')
        expect(wrapper.text()).toContain('Line')
        expect(wrapper.text()).toContain('Pie')
    })

    it('renders SketchyChart with data', () => {
        const wrapper = mount(ChartSection, {
            props: { data: mockData },
            ...localeProvide,
        })
        const svg = wrapper.find('svg')
        expect(svg.exists()).toBe(true)
    })

    it('renders with empty data array', () => {
        const wrapper = mount(ChartSection, {
            props: { data: [] },
            ...localeProvide,
        })
        expect(wrapper.find('h2').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(ChartSection, {
            props: { class: 'my-chart' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-chart')
    })

    it('renders header slot', () => {
        const wrapper = mount(ChartSection, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(ChartSection, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(ChartSection, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })

    it('renders chart inside a Card', () => {
        const wrapper = mount(ChartSection, {
            props: { data: mockData },
            ...localeProvide,
        })
        const card = wrapper.findComponent({ name: 'Card' })
        expect(card.exists()).toBe(true)
    })
})
