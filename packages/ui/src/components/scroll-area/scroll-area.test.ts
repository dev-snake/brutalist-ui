import { mount } from '@vue/test-utils'
import { cn } from '../../lib/utils'
import ScrollArea from './ScrollArea.vue'
import ScrollBar from './ScrollBar.vue'

describe('ScrollArea', () => {
    it('renders with default props', () => {
        const wrapper = mount(ScrollArea, {
            attachTo: document.body,
        })
        expect(wrapper.element.tagName).toBe('DIV')
        expect(wrapper.classes()).toContain('relative')
        expect(wrapper.classes()).toContain('overflow-hidden')
        wrapper.unmount()
    })

    it('renders slot content', () => {
        const wrapper = mount(ScrollArea, {
            attachTo: document.body,
            slots: { default: '<p>Scrollable content</p>' },
        })
        expect(wrapper.text()).toContain('Scrollable content')
        wrapper.unmount()
    })

    it('applies custom class', () => {
        const wrapper = mount(ScrollArea, {
            attachTo: document.body,
            props: { class: 'my-scroll' },
        })
        expect(wrapper.classes()).toContain('my-scroll')
        wrapper.unmount()
    })
})

describe('ScrollBar', () => {
    it('renders within ScrollArea', () => {
        const wrapper = mount(ScrollArea, {
            attachTo: document.body,
        })
        const scrollbar = wrapper.findComponent(ScrollBar)
        expect(scrollbar.exists()).toBe(true)
        wrapper.unmount()
    })

    it('computes vertical orientation classes', () => {
        const classes = cn(
            'flex touch-none select-none transition-colors',
            'h-full w-3 border-l-2 border-brutal p-[1px]'
        )
        expect(classes).toContain('h-full')
        expect(classes).toContain('w-3')
        expect(classes).toContain('border-l-2')
        expect(classes).toContain('touch-none')
    })

    it('computes horizontal orientation classes', () => {
        const classes = cn(
            'flex touch-none select-none transition-colors',
            'h-3 flex-col border-t-2 border-brutal p-[1px]'
        )
        expect(classes).toContain('h-3')
        expect(classes).toContain('flex-col')
        expect(classes).toContain('border-t-2')
    })

    it('computes classes with custom class merged', () => {
        const classes = cn(
            'flex touch-none select-none transition-colors',
            'h-full w-3 border-l-2 border-brutal p-[1px]',
            'my-scrollbar'
        )
        expect(classes).toContain('my-scrollbar')
        expect(classes).toContain('touch-none')
    })
})
