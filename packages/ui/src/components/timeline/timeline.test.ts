import { mount } from '@vue/test-utils'
import Timeline from './Timeline.vue'
import TimelineItem from './TimelineItem.vue'
import TimelineSeparator from './TimelineSeparator.vue'
import TimelineDot from './TimelineDot.vue'
import TimelineConnector from './TimelineConnector.vue'
import TimelineContent from './TimelineContent.vue'

describe('Timeline', () => {
    it('renders with default vertical orientation', () => {
        const wrapper = mount(Timeline)
        const classes = wrapper.classes()
        expect(classes).toContain('flex')
        expect(classes).toContain('w-full')
        expect(classes).toContain('flex-col')
    })

    it('applies horizontal orientation classes', () => {
        const wrapper = mount(Timeline, {
            props: { orientation: 'horizontal' },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('flex-row')
    })

    it('renders slot content', () => {
        const wrapper = mount(Timeline, {
            slots: { default: '<div>Timeline content</div>' },
        })
        expect(wrapper.text()).toBe('Timeline content')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(Timeline, {
            props: { class: 'custom-class' },
        })
        expect(wrapper.classes()).toContain('custom-class')
    })
})

describe('TimelineItem', () => {
    it('renders with vertical orientation by default', () => {
        const wrapper = mount(TimelineItem)
        const classes = wrapper.classes()
        expect(classes).toContain('flex')
        expect(classes).toContain('flex-row')
    })

    it('applies horizontal orientation classes when injected', () => {
        const wrapper = mount(TimelineItem, {
            global: {
                provide: {
                    'timeline-orientation': { value: 'horizontal' },
                },
            },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('flex-col')
    })

    it('renders slot content', () => {
        const wrapper = mount(TimelineItem, {
            slots: { default: '<span>Item content</span>' },
        })
        expect(wrapper.text()).toBe('Item content')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TimelineItem, {
            props: { class: 'custom-item' },
        })
        expect(wrapper.classes()).toContain('custom-item')
    })
})

describe('TimelineSeparator', () => {
    it('renders with vertical orientation by default', () => {
        const wrapper = mount(TimelineSeparator)
        const classes = wrapper.classes()
        expect(classes).toContain('flex')
        expect(classes).toContain('flex-col')
    })

    it('applies horizontal orientation classes when injected', () => {
        const wrapper = mount(TimelineSeparator, {
            global: {
                provide: {
                    'timeline-orientation': { value: 'horizontal' },
                },
            },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('flex-row')
        expect(classes).toContain('w-full')
    })

    it('renders slot content', () => {
        const wrapper = mount(TimelineSeparator, {
            slots: { default: '<span>Separator</span>' },
        })
        expect(wrapper.text()).toBe('Separator')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TimelineSeparator, {
            props: { class: 'custom-sep' },
        })
        expect(wrapper.classes()).toContain('custom-sep')
    })
})

describe('TimelineDot', () => {
    it('renders with default accent variant and circle shape', () => {
        const wrapper = mount(TimelineDot)
        const classes = wrapper.classes()
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('bg-brutal-accent')
        expect(classes).toContain('rounded-full')
    })

    it('applies primary variant classes', () => {
        const wrapper = mount(TimelineDot, {
            props: { variant: 'primary' },
        })
        expect(wrapper.classes()).toContain('bg-brutal-primary')
    })

    it('applies secondary variant classes', () => {
        const wrapper = mount(TimelineDot, {
            props: { variant: 'secondary' },
        })
        expect(wrapper.classes()).toContain('bg-brutal-secondary')
    })

    it('applies default variant classes', () => {
        const wrapper = mount(TimelineDot, {
            props: { variant: 'default' },
        })
        expect(wrapper.classes()).toContain('bg-brutal-bg')
    })

    it('applies success variant classes', () => {
        const wrapper = mount(TimelineDot, {
            props: { variant: 'success' },
        })
        expect(wrapper.classes()).toContain('bg-brutal-success')
    })

    it('applies danger variant classes', () => {
        const wrapper = mount(TimelineDot, {
            props: { variant: 'danger' },
        })
        expect(wrapper.classes()).toContain('bg-brutal-destructive')
    })

    it('applies square shape classes', () => {
        const wrapper = mount(TimelineDot, {
            props: { shape: 'square' },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('rounded-none')
    })

    it('applies diamond shape classes', () => {
        const wrapper = mount(TimelineDot, {
            props: { shape: 'diamond' },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('rotate-45')
    })

    it('renders slot content', () => {
        const wrapper = mount(TimelineDot, {
            slots: { default: '1' },
        })
        expect(wrapper.text()).toBe('1')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TimelineDot, {
            props: { class: 'custom-dot' },
        })
        expect(wrapper.classes()).toContain('custom-dot')
    })
})

describe('TimelineConnector', () => {
    it('renders with vertical orientation by default', () => {
        const wrapper = mount(TimelineConnector)
        const classes = wrapper.classes()
        expect(classes).toContain('bg-brutal-fg')
        expect(classes).toContain('w-[3px]')
        expect(classes).toContain('flex-1')
    })

    it('applies horizontal orientation classes when injected', () => {
        const wrapper = mount(TimelineConnector, {
            global: {
                provide: {
                    'timeline-orientation': { value: 'horizontal' },
                },
            },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('h-[3px]')
        expect(classes).toContain('flex-1')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TimelineConnector, {
            props: { class: 'custom-connector' },
        })
        expect(wrapper.classes()).toContain('custom-connector')
    })
})

describe('TimelineContent', () => {
    it('renders with default classes', () => {
        const wrapper = mount(TimelineContent)
        const classes = wrapper.classes()
        expect(classes).toContain('flex-1')
        expect(classes).toContain('text-sm')
        expect(classes).toContain('font-bold')
        expect(classes).toContain('text-brutal-fg')
    })

    it('renders slot content', () => {
        const wrapper = mount(TimelineContent, {
            slots: { default: '<p>Step details</p>' },
        })
        expect(wrapper.text()).toBe('Step details')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(TimelineContent, {
            props: { class: 'custom-content' },
        })
        expect(wrapper.classes()).toContain('custom-content')
    })
})
