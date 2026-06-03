import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import Carousel from './Carousel.vue'
import CarouselItem from './CarouselItem.vue'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

vi.mock('embla-carousel-vue', () => ({
    default: () => [ref(null), ref(null)],
}))

describe('Carousel', () => {
    it('renders with default classes', () => {
        const wrapper = mount(Carousel, { ...localeProvide })
        expect(wrapper.find('[ref="emblaRef"]').exists() || wrapper.find('.overflow-hidden').exists()).toBe(true)
        expect(wrapper.classes()).toContain('relative')
        expect(wrapper.classes()).toContain('overflow-hidden')
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')
        expect(wrapper.classes()).toContain('shadow-brutal')
        expect(wrapper.classes()).toContain('rounded-brutal')
    })

    it('applies size variant classes', async () => {
        const sizes = [
            { size: 'sm' as const, expectedClass: 'h-48' },
            { size: 'md' as const, expectedClass: 'h-64' },
            { size: 'lg' as const, expectedClass: 'h-96' },
            { size: 'full' as const, expectedClass: 'h-full' },
        ]

        const wrapper = mount(Carousel, { ...localeProvide })
        for (const { size, expectedClass } of sizes) {
            await wrapper.setProps({ size })
            expect(wrapper.classes()).toContain(expectedClass)
        }
    })

    it('renders arrow buttons by default', () => {
        const wrapper = mount(Carousel, { ...localeProvide })
        const buttons = wrapper.findAll('button[aria-label]')
        const arrowButtons = buttons.filter(b =>
            b.attributes('aria-label') === 'Previous slide' ||
            b.attributes('aria-label') === 'Next slide'
        )
        expect(arrowButtons.length).toBe(2)
    })

    it('hides arrows when showArrows=false', () => {
        const wrapper = mount(Carousel, {
            ...localeProvide,
            props: { showArrows: false },
        })
        const buttons = wrapper.findAll('button[aria-label]')
        const arrowButtons = buttons.filter(b =>
            b.attributes('aria-label') === 'Previous slide' ||
            b.attributes('aria-label') === 'Next slide'
        )
        expect(arrowButtons.length).toBe(0)
    })

    it('applies custom class', () => {
        const wrapper = mount(Carousel, {
            ...localeProvide,
            props: { class: 'custom-carousel' },
        })
        expect(wrapper.classes()).toContain('custom-carousel')
    })

    it('renders slot content', () => {
        const wrapper = mount(Carousel, {
            ...localeProvide,
            slots: {
                default: '<div class="slide-content">Slide 1</div>',
            },
        })
        expect(wrapper.find('.slide-content').exists()).toBe(true)
        expect(wrapper.text()).toContain('Slide 1')
    })
})

describe('CarouselItem', () => {
    it('renders with default classes', () => {
        const wrapper = mount(CarouselItem)
        expect(wrapper.classes()).toContain('flex-none')
        expect(wrapper.classes()).toContain('w-full')
        expect(wrapper.classes()).toContain('h-full')
    })

    it('applies custom class', () => {
        const wrapper = mount(CarouselItem, {
            props: { class: 'custom-item' },
        })
        expect(wrapper.classes()).toContain('custom-item')
        expect(wrapper.classes()).toContain('flex-none')
    })

    it('renders slot content', () => {
        const wrapper = mount(CarouselItem, {
            slots: { default: 'Item content' },
        })
        expect(wrapper.text()).toBe('Item content')
    })
})
