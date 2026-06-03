import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import UploadCard from './UploadCard.vue'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('UploadCard', () => {
    it('renders with default props', () => {
        const wrapper = mount(UploadCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Upload Files')
        expect(wrapper.text()).toContain('Drag and drop your files here')
    })

    it('shows custom title', () => {
        const wrapper = mount(UploadCard, {
            props: { title: 'Upload Documents' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Upload Documents')
    })

    it('shows custom description', () => {
        const wrapper = mount(UploadCard, {
            props: { description: 'Select files to upload' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Select files to upload')
    })

    it('renders the drop zone area', () => {
        const wrapper = mount(UploadCard, { ...localeProvide })
        const dropZone = wrapper.find('.border-dashed')
        expect(dropZone.exists()).toBe(true)
    })

    it('renders browse button', () => {
        const wrapper = mount(UploadCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Browse Files')
    })

    it('renders drop text', () => {
        const wrapper = mount(UploadCard, { ...localeProvide })
        expect(wrapper.text()).toContain('Drop files here')
    })

    it('renders hidden file input with accept attribute', () => {
        const wrapper = mount(UploadCard, {
            props: { accept: '.pdf,.doc' },
            ...localeProvide,
        })
        const input = wrapper.find('input[type="file"]')
        expect(input.exists()).toBe(true)
        expect(input.attributes('accept')).toBe('.pdf,.doc')
    })

    it('shows progress bar when uploading', () => {
        const wrapper = mount(UploadCard, {
            props: { uploading: true, progress: 50 },
            ...localeProvide,
        })
        expect(wrapper.findComponent({ name: 'Progress' }).exists()).toBe(true)
    })

    it('shows spinner when uploading', () => {
        const wrapper = mount(UploadCard, {
            props: { uploading: true, progress: 50 },
            ...localeProvide,
        })
        expect(wrapper.findComponent({ name: 'Spinner' }).exists()).toBe(true)
    })

    it('hides drop zone content when uploading', () => {
        const wrapper = mount(UploadCard, {
            props: { uploading: true, progress: 50 },
            ...localeProvide,
        })
        expect(wrapper.text()).not.toContain('Browse Files')
    })

    it('renders actions slot', () => {
        const wrapper = mount(UploadCard, {
            slots: { actions: '<div class="custom-action">Custom Action</div>' },
            ...localeProvide,
        })
        expect(wrapper.text()).toContain('Custom Action')
    })

    it('applies custom class', () => {
        const wrapper = mount(UploadCard, {
            props: { class: 'my-upload' },
            ...localeProvide,
        })
        expect(wrapper.find('[class*="my-upload"]').exists()).toBe(true)
    })
})
