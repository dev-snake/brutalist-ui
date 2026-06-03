import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import FileCard from './FileCard.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('FileCard', () => {
    it('renders with default props', () => {
        const wrapper = mount(FileCard, { ...localeProvide })
        expect(wrapper.text()).toContain('document.pdf')
    })

    it('shows custom file name', () => {
        const wrapper = mount(FileCard, {
            props: { fileName: 'report.xlsx' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('report.xlsx')
    })

    it('shows file size when provided', () => {
        const wrapper = mount(FileCard, {
            props: { fileSize: '2.4 MB' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('2.4 MB')
    })

    it('shows file type badge when provided', () => {
        const wrapper = mount(FileCard, {
            props: { fileType: 'PDF' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('PDF')
    })

    it('does not show file type badge when not provided', () => {
        const wrapper = mount(FileCard, { ...localeProvide })
        expect(wrapper.text()).not.toContain('PDF')
    })

    it('renders download button', () => {
        const wrapper = mount(FileCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Download')
    })

    it('emits download when download button is clicked', async () => {
        const wrapper = mount(FileCard, { ...localeProvide })
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.emitted('download')).toBeTruthy()
        expect(wrapper.emitted('download')!.length).toBe(1)
    })

    it('renders file icon', () => {
        const wrapper = mount(FileCard, { ...localeProvide })
        const svgs = wrapper.findAll('svg')
        expect(svgs.length).toBeGreaterThanOrEqual(1)
    })

    it('applies custom class', () => {
        const wrapper = mount(FileCard, {
            props: { class: 'my-file' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-file"]').exists()).toBe(true)
    })
})
