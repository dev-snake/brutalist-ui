import { mount } from '@vue/test-utils'
import Accordion from './Accordion.vue'
import AccordionItem from './AccordionItem.vue'
import AccordionTrigger from './AccordionTrigger.vue'
import AccordionContent from './AccordionContent.vue'

const primitiveStub = {
    template: '<div><slot /></div>',
}

describe('Accordion', () => {
    it('renders with default slot content', () => {
        const wrapper = mount(Accordion, {
            props: { type: 'single' },
            slots: { default: '<div>Accordion content</div>' },
            global: { stubs: { AccordionRoot: primitiveStub } },
        })
        expect(wrapper.text()).toBe('Accordion content')
    })

    it('applies custom class', () => {
        const wrapper = mount(Accordion, {
            props: { type: 'single', class: 'custom-accordion' },
            global: { stubs: { AccordionRoot: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-accordion')
    })
})

describe('AccordionItem', () => {
    it('renders with default variant classes', () => {
        const wrapper = mount(AccordionItem, {
            props: { value: 'item-1' },
            global: { stubs: { AccordionItem: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('bg-brutal-bg')
        expect(classes).toContain('text-brutal-fg')
        expect(classes).toContain('shadow-brutal')
        expect(classes).toContain('mb-4')
    })

    it('applies flat variant classes', () => {
        const wrapper = mount(AccordionItem, {
            props: { value: 'item-1', variant: 'flat' },
            global: { stubs: { AccordionItem: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('shadow-none')
        expect(classes).toContain('mb-4')
    })

    it('applies ghost variant classes', () => {
        const wrapper = mount(AccordionItem, {
            props: { value: 'item-1', variant: 'ghost' },
            global: { stubs: { AccordionItem: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('border-transparent')
        expect(classes).toContain('shadow-none')
        expect(classes).toContain('mb-2')
    })

    it('applies interactive variant classes', () => {
        const wrapper = mount(AccordionItem, {
            props: { value: 'item-1', variant: 'interactive' },
            global: { stubs: { AccordionItem: primitiveStub } },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('shadow-brutal')
        expect(classes).toContain('mb-4')
        expect(classes).toContain('hover:shadow-brutal-lg')
        expect(classes).toContain('hover:-translate-x-0.5')
        expect(classes).toContain('hover:-translate-y-0.5')
    })

    it('applies custom class', () => {
        const wrapper = mount(AccordionItem, {
            props: { value: 'item-1', class: 'custom-item' },
            global: { stubs: { AccordionItem: primitiveStub } },
        })
        expect(wrapper.classes()).toContain('custom-item')
    })
})

describe('AccordionTrigger', () => {
    const triggerStubs = {
        AccordionHeader: primitiveStub,
        AccordionTrigger: {
            template: '<div data-testid="accordion-trigger"><slot /><slot name="icon" /></div>',
        },
    }

    it('renders with slot content', () => {
        const wrapper = mount(AccordionTrigger, {
            slots: { default: 'Section Title' },
            global: { stubs: triggerStubs },
        })
        expect(wrapper.text()).toContain('Section Title')
    })

    it('applies custom class', () => {
        const wrapper = mount(AccordionTrigger, {
            props: { class: 'custom-trigger' },
            global: { stubs: triggerStubs },
        })
        const trigger = wrapper.find('[data-testid="accordion-trigger"]')
        expect(trigger.classes()).toContain('custom-trigger')
    })

    it('has ChevronDown icon', () => {
        const wrapper = mount(AccordionTrigger, {
            global: { stubs: triggerStubs },
        })
        const svg = wrapper.find('svg')
        expect(svg.exists()).toBe(true)
        expect(svg.classes()).toContain('h-5')
        expect(svg.classes()).toContain('w-5')
        expect(svg.classes()).toContain('shrink-0')
        expect(svg.classes()).toContain('border-3')
        expect(svg.classes()).toContain('border-brutal')
        expect(svg.classes()).toContain('shadow-brutal-sm')
    })
})

describe('AccordionContent', () => {
    it('renders with slot content', () => {
        const wrapper = mount(AccordionContent, {
            slots: { default: 'Content text here' },
            global: { stubs: { AccordionContent: primitiveStub } },
        })
        expect(wrapper.text()).toContain('Content text here')
    })

    it('applies custom class', () => {
        const wrapper = mount(AccordionContent, {
            props: { class: 'custom-content' },
            global: { stubs: { AccordionContent: primitiveStub } },
        })
        const innerDiv = wrapper.find('[class*="custom-content"]')
        expect(innerDiv.exists()).toBe(true)
    })
})
