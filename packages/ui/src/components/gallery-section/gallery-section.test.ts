import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import GallerySection from './GallerySection.vue'

vi.mock('embla-carousel-vue', () => ({
    default: () => [ref(null), ref(null)],
}))

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

const mockItems = [
    { src: 'https://example.com/img1.jpg', alt: 'Image 1', caption: 'First image' },
    { src: 'https://example.com/img2.jpg', alt: 'Image 2', caption: 'Second image' },
    { src: 'https://example.com/img3.jpg', alt: 'Image 3' },
]

describe('GallerySection', () => {
    it('renders with default props', () => {
        const wrapper = mount(GallerySection, { ...localeProvide })
        expect(wrapper.find('h2').exists()).toBe(true)
    })

    it('renders custom title', () => {
        const wrapper = mount(GallerySection, {
            props: { title: 'Photo Gallery' },
            ...localeProvide,
        })
        expect(wrapper.find('h2').text()).toBe('Photo Gallery')
    })

    it('renders gallery items with images', () => {
        const wrapper = mount(GallerySection, {
            props: { items: mockItems },
            ...localeProvide,
        })
        const images = wrapper.findAll('img')
        expect(images.length).toBe(3)
        expect(images[0].attributes('alt')).toBe('Image 1')
        expect(images[1].attributes('alt')).toBe('Image 2')
        expect(images[2].attributes('alt')).toBe('Image 3')
    })

    it('renders captions when provided', () => {
        const wrapper = mount(GallerySection, {
            props: { items: mockItems },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('First image')
        expect(wrapper.text()).toContain('Second image')
    })

    it('does not render caption element when caption is not provided', () => {
        const wrapper = mount(GallerySection, {
            props: { items: [{ src: 'test.jpg', alt: 'No caption' }] },
            ...localeProvide,
        })
        const captions = wrapper.findAll('p')
        expect(captions.length).toBe(0)
    })

    it('renders with empty items array', () => {
        const wrapper = mount(GallerySection, {
            props: { items: [] },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('No items to display')
    })

    it('emits item-click event when an item is clicked', async () => {
        const wrapper = mount(GallerySection, {
            props: { items: mockItems },
            ...localeProvide,
        })
        const clickAreas = wrapper.findAll('.cursor-pointer')
        await clickAreas[0].trigger('click')
        expect(wrapper.emitted('item-click')).toBeTruthy()
        expect(wrapper.emitted('item-click')![0]).toEqual([0])
    })

    it('applies custom class', () => {
        const wrapper = mount(GallerySection, {
            props: { class: 'my-gallery' },
            ...localeProvide,
        })
        expect(wrapper.classes()).toContain('my-gallery')
    })

    it('renders header slot', () => {
        const wrapper = mount(GallerySection, {
            slots: { header: '<div class="custom-header">Custom Header</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('renders footer slot', () => {
        const wrapper = mount(GallerySection, {
            slots: { footer: '<div class="custom-footer">Custom Footer</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-footer').exists()).toBe(true)
    })

    it('renders default slot', () => {
        const wrapper = mount(GallerySection, {
            slots: { default: '<div class="custom-content">Custom Content</div>' },
            ...localeProvide,
        })
        expect(wrapper.find('.custom-content').exists()).toBe(true)
    })

    it('renders gallery inside a Card', () => {
        const wrapper = mount(GallerySection, {
            props: { items: mockItems },
            ...localeProvide,
        })
        const card = wrapper.findComponent({ name: 'Card' })
        expect(card.exists()).toBe(true)
    })
})
