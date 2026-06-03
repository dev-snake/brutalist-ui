import { mount } from '@vue/test-utils'
import Skeleton from './Skeleton.vue'
import SkeletonText from './SkeletonText.vue'
import SkeletonAvatar from './SkeletonAvatar.vue'
import SkeletonCard from './SkeletonCard.vue'
import SkeletonTable from './SkeletonTable.vue'

describe('Skeleton', () => {
    it('renders with default variant', () => {
        const wrapper = mount(Skeleton)
        const classes = wrapper.classes()
        expect(classes).toContain('animate-pulse')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('bg-brutal-muted')
    })

    it('applies primary variant classes', () => {
        const wrapper = mount(Skeleton, { props: { variant: 'primary' } })
        expect(wrapper.classes()).toContain('bg-brutal-primary/30')
    })

    it('applies secondary variant classes', () => {
        const wrapper = mount(Skeleton, { props: { variant: 'secondary' } })
        expect(wrapper.classes()).toContain('bg-brutal-secondary/30')
    })

    it('applies accent variant classes', () => {
        const wrapper = mount(Skeleton, { props: { variant: 'accent' } })
        expect(wrapper.classes()).toContain('bg-brutal-accent/30')
    })

    it('has animate-pulse class', () => {
        const wrapper = mount(Skeleton)
        expect(wrapper.classes()).toContain('animate-pulse')
    })

    it('renders slot content', () => {
        const wrapper = mount(Skeleton, {
            slots: { default: 'Loading...' },
        })
        expect(wrapper.text()).toContain('Loading...')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(Skeleton, {
            props: { class: 'h-4 w-full' },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('h-4')
        expect(classes).toContain('w-full')
    })
})

describe('SkeletonText', () => {
    it('renders with default props', () => {
        const wrapper = mount(SkeletonText)
        expect(wrapper.classes()).toContain('space-y-2')
        const skeletons = wrapper.findAllComponents(Skeleton)
        expect(skeletons.length).toBe(3)
    })

    it('renders correct number of lines', () => {
        const wrapper = mount(SkeletonText, { props: { lines: 5 } })
        const skeletons = wrapper.findAllComponents(Skeleton)
        expect(skeletons.length).toBe(5)
    })

    it('applies variant to child skeletons', () => {
        const wrapper = mount(SkeletonText, { props: { variant: 'primary' } })
        const skeletons = wrapper.findAllComponents(Skeleton)
        skeletons.forEach(sk => {
            expect(sk.classes()).toContain('bg-brutal-primary/30')
        })
    })

    it('merges custom class prop', () => {
        const wrapper = mount(SkeletonText, {
            props: { class: 'custom-text' },
        })
        expect(wrapper.classes()).toContain('custom-text')
    })
})

describe('SkeletonAvatar', () => {
    it('renders with default props', () => {
        const wrapper = mount(SkeletonAvatar)
        const skeleton = wrapper.findComponent(Skeleton)
        expect(skeleton.exists()).toBe(true)
        expect(skeleton.classes()).toContain('h-10')
        expect(skeleton.classes()).toContain('w-10')
    })

    it('applies sm size classes', () => {
        const wrapper = mount(SkeletonAvatar, { props: { size: 'sm' } })
        const skeleton = wrapper.findComponent(Skeleton)
        expect(skeleton.classes()).toContain('h-8')
        expect(skeleton.classes()).toContain('w-8')
    })

    it('applies lg size classes', () => {
        const wrapper = mount(SkeletonAvatar, { props: { size: 'lg' } })
        const skeleton = wrapper.findComponent(Skeleton)
        expect(skeleton.classes()).toContain('h-12')
        expect(skeleton.classes()).toContain('w-12')
    })

    it('applies xl size classes', () => {
        const wrapper = mount(SkeletonAvatar, { props: { size: 'xl' } })
        const skeleton = wrapper.findComponent(Skeleton)
        expect(skeleton.classes()).toContain('h-16')
        expect(skeleton.classes()).toContain('w-16')
    })

    it('applies variant to child skeleton', () => {
        const wrapper = mount(SkeletonAvatar, { props: { variant: 'accent' } })
        const skeleton = wrapper.findComponent(Skeleton)
        expect(skeleton.classes()).toContain('bg-brutal-accent/30')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(SkeletonAvatar, {
            props: { class: 'custom-avatar' },
        })
        const skeleton = wrapper.findComponent(Skeleton)
        expect(skeleton.classes()).toContain('custom-avatar')
    })
})

describe('SkeletonCard', () => {
    it('renders with default props', () => {
        const wrapper = mount(SkeletonCard)
        const classes = wrapper.classes()
        expect(classes).toContain('p-4')
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('shadow-brutal')
        expect(classes).toContain('bg-brutal-bg')
    })

    it('contains skeleton elements inside', () => {
        const wrapper = mount(SkeletonCard)
        const skeletons = wrapper.findAllComponents(Skeleton)
        expect(skeletons.length).toBeGreaterThanOrEqual(3)
    })

    it('merges custom class prop', () => {
        const wrapper = mount(SkeletonCard, {
            props: { class: 'custom-card' },
        })
        expect(wrapper.classes()).toContain('custom-card')
    })
})

describe('SkeletonTable', () => {
    it('renders with default props', () => {
        const wrapper = mount(SkeletonTable)
        const classes = wrapper.classes()
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('overflow-hidden')
    })

    it('renders default rows and columns', () => {
        const wrapper = mount(SkeletonTable)
        const skeletons = wrapper.findAllComponents(Skeleton)
        const headerSkeletons = 4
        const bodySkeletons = 5 * 4
        expect(skeletons.length).toBe(headerSkeletons + bodySkeletons)
    })

    it('renders custom rows and columns', () => {
        const wrapper = mount(SkeletonTable, {
            props: { rows: 3, columns: 2 },
        })
        const skeletons = wrapper.findAllComponents(Skeleton)
        const headerSkeletons = 2
        const bodySkeletons = 3 * 2
        expect(skeletons.length).toBe(headerSkeletons + bodySkeletons)
    })

    it('merges custom class prop', () => {
        const wrapper = mount(SkeletonTable, {
            props: { class: 'custom-table' },
        })
        expect(wrapper.classes()).toContain('custom-table')
    })
})
