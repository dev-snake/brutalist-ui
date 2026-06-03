import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import Form from './Form.vue'
import FormField from './FormField.vue'
import FormItem from './FormItem.vue'
import FormLabel from './FormLabel.vue'
import FormControl from './FormControl.vue'
import FormDescription from './FormDescription.vue'
import FormMessage from './FormMessage.vue'
import { formFieldKey, formItemKey } from './form-context'

describe('Form', () => {
    it('renders with default props', () => {
        const wrapper = mount(Form)
        expect(wrapper.find('form').exists()).toBe(true)
    })

    it('renders slot content', () => {
        const wrapper = mount(Form, {
            slots: { default: '<div class="form-inner">Form content</div>' },
        })
        expect(wrapper.find('.form-inner').exists()).toBe(true)
        expect(wrapper.find('.form-inner').text()).toBe('Form content')
    })

    it('applies custom class', () => {
        const wrapper = mount(Form, {
            props: { class: 'custom-form' },
        })
        expect(wrapper.find('form').classes()).toContain('custom-form')
    })
})

describe('FormField', () => {
    it('renders within Form context', () => {
        const wrapper = mount(FormField, {
            props: { name: 'email' },
        })
        expect(wrapper.exists()).toBe(true)
    })

    it('renders slot content', () => {
        const wrapper = mount(FormField, {
            props: { name: 'email' },
            slots: { default: '<div class="field-inner">Field content</div>' },
        })
        expect(wrapper.find('.field-inner').exists()).toBe(true)
    })
})

describe('FormItem', () => {
    it('renders slot content', () => {
        const wrapper = mount(FormItem, {
            slots: { default: '<div class="item-inner">Item content</div>' },
        })
        expect(wrapper.find('.item-inner').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(FormItem, {
            props: { class: 'custom-item' },
        })
        expect(wrapper.classes()).toContain('custom-item')
    })

    it('has space-y-2 class by default', () => {
        const wrapper = mount(FormItem)
        expect(wrapper.classes()).toContain('space-y-2')
    })
})

describe('FormLabel', () => {
    function mountWithProviders(options: Record<string, unknown> = {}) {
        return mount(FormLabel, {
            ...options,
            global: {
                provide: {
                    [formFieldKey as symbol]: {
                        name: 'test-field',
                        error: ref(undefined),
                    },
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
        })
    }

    it('renders slot content', () => {
        const wrapper = mountWithProviders({
            slots: { default: 'Email Address' },
        })
        expect(wrapper.text()).toBe('Email Address')
    })

    it('applies custom class', () => {
        const wrapper = mountWithProviders({
            props: { class: 'custom-label' },
        })
        expect(wrapper.classes()).toContain('custom-label')
    })

    it('shows destructive class when error exists', () => {
        const wrapper = mount(FormLabel, {
            props: {},
            global: {
                provide: {
                    [formFieldKey as symbol]: {
                        name: 'test-field',
                        error: ref('Required field'),
                    },
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
        })
        expect(wrapper.classes()).toContain('text-brutal-destructive')
    })
})

describe('FormControl', () => {
    it('renders slot content', () => {
        const wrapper = mount(FormControl, {
            global: {
                provide: {
                    [formFieldKey as symbol]: {
                        name: 'test-field',
                        error: ref(undefined),
                    },
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
            slots: {
                default: '<input class="control-input" />',
            },
        })
        expect(wrapper.find('.control-input').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(FormControl, {
            props: { class: 'custom-control' },
            global: {
                provide: {
                    [formFieldKey as symbol]: {
                        name: 'test-field',
                        error: ref(undefined),
                    },
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
            slots: {
                default: '<input />',
            },
        })
        expect(wrapper.exists()).toBe(true)
    })
})

describe('FormDescription', () => {
    it('renders slot content', () => {
        const wrapper = mount(FormDescription, {
            global: {
                provide: {
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
            slots: { default: 'Enter your email address' },
        })
        expect(wrapper.text()).toBe('Enter your email address')
    })

    it('applies custom class', () => {
        const wrapper = mount(FormDescription, {
            props: { class: 'custom-desc' },
            global: {
                provide: {
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
        })
        expect(wrapper.classes()).toContain('custom-desc')
    })

    it('has default styling classes', () => {
        const wrapper = mount(FormDescription, {
            global: {
                provide: {
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
        })
        expect(wrapper.classes()).toContain('text-sm')
        expect(wrapper.classes()).toContain('font-medium')
    })
})

describe('FormMessage', () => {
    function mountWithFieldContext(errorValue?: string) {
        return mount(FormMessage, {
            global: {
                provide: {
                    [formFieldKey as symbol]: {
                        name: 'test-field',
                        error: ref(errorValue),
                    },
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
        })
    }

    it('renders error message when present', () => {
        const wrapper = mountWithFieldContext('This field is required')
        expect(wrapper.text()).toBe('This field is required')
    })

    it('does not render when no error', () => {
        const wrapper = mountWithFieldContext()
        expect(wrapper.find('p').exists()).toBe(false)
    })

    it('applies custom class', () => {
        const wrapper = mount(FormMessage, {
            props: { class: 'custom-msg' },
            global: {
                provide: {
                    [formFieldKey as symbol]: {
                        name: 'test-field',
                        error: ref('Error message'),
                    },
                    [formItemKey as symbol]: {
                        id: 'test-id',
                        formItemId: 'test-id-form-item',
                        formDescriptionId: 'test-id-form-item-description',
                        formMessageId: 'test-id-form-item-message',
                    },
                },
            },
        })
        expect(wrapper.find('p').classes()).toContain('custom-msg')
    })

    it('has destructive text class', () => {
        const wrapper = mountWithFieldContext('Error')
        expect(wrapper.find('p').classes()).toContain('text-brutal-destructive')
    })
})
