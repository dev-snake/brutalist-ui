import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import Avatar from './Avatar.vue'
import AvatarImage from './AvatarImage.vue'
import AvatarFallback from './AvatarFallback.vue'

const AvatarWithImage = defineComponent({
    components: { Avatar, AvatarImage },
    props: { src: { type: String, default: '' }, alt: { type: String, default: '' }, imageClass: { type: String, default: '' } },
    template: `
        <Avatar>
            <AvatarImage :src="src" :alt="alt" :class="imageClass" />
        </Avatar>
    `,
})

const AvatarWithFallback = defineComponent({
    components: { Avatar, AvatarFallback },
    props: { fallbackClass: { type: String, default: '' } },
    template: `
        <Avatar>
            <AvatarFallback :class="fallbackClass">JD</AvatarFallback>
        </Avatar>
    `,
})

describe('Avatar', () => {
    it('renders with default size and shape', () => {
        const wrapper = mount(Avatar)
        expect(wrapper.classes()).toContain('h-10')
        expect(wrapper.classes()).toContain('w-10')
    })

    it('applies size classes', () => {
        const sizes = ['sm', 'default', 'lg', 'xl'] as const
        const expected = ['h-8 w-8', 'h-10 w-10', 'h-14 w-14', 'h-20 w-20']

        sizes.forEach((size, i) => {
            const wrapper = mount(Avatar, { props: { size } })
            const classes = wrapper.classes()
            expected[i].split(' ').forEach((cls) => {
                expect(classes).toContain(cls)
            })
        })
    })

    it('applies shape classes', () => {
        const squareWrapper = mount(Avatar, { props: { shape: 'square' } })
        expect(squareWrapper.classes()).not.toContain('rounded-brutal')

        const roundedWrapper = mount(Avatar, { props: { shape: 'rounded' } })
        expect(roundedWrapper.classes()).toContain('rounded-brutal')
    })

    it('renders slot content', () => {
        const wrapper = mount(Avatar, {
            slots: { default: '<span>AB</span>' },
        })
        expect(wrapper.text()).toBe('AB')
    })

    it('applies custom class', () => {
        const wrapper = mount(Avatar, { props: { class: 'my-avatar' } })
        expect(wrapper.classes()).toContain('my-avatar')
    })
})

describe('AvatarImage', () => {
    it('renders within Avatar context with src and alt props', () => {
        const wrapper = mount(AvatarWithImage, {
            props: { src: '/photo.jpg', alt: 'User photo' },
        })
        const img = wrapper.find('img')
        expect(img.exists()).toBe(true)
        expect(img.attributes('src')).toBe('/photo.jpg')
        expect(img.attributes('alt')).toBe('User photo')
    })

    it('applies custom class within Avatar context', () => {
        const wrapper = mount(AvatarWithImage, {
            props: { src: '/photo.jpg', imageClass: 'my-image' },
        })
        const img = wrapper.find('img')
        expect(img.classes()).toContain('my-image')
    })
})

describe('AvatarFallback', () => {
    it('renders slot content within Avatar context', () => {
        const wrapper = mount(AvatarWithFallback)
        expect(wrapper.text()).toBe('JD')
    })

    it('applies custom class within Avatar context', () => {
        const wrapper = mount(AvatarWithFallback, {
            props: { fallbackClass: 'my-fallback' },
        })
        const fallback = wrapper.find('.font-bold')
        expect(fallback.classes()).toContain('my-fallback')
    })
})
