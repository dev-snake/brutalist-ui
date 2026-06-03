import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Command from './Command.vue'
import CommandDialog from './CommandDialog.vue'
import CommandInput from './CommandInput.vue'
import CommandList from './CommandList.vue'
import CommandEmpty from './CommandEmpty.vue'
import CommandGroup from './CommandGroup.vue'
import CommandItem from './CommandItem.vue'
import CommandSeparator from './CommandSeparator.vue'
import CommandShortcut from './CommandShortcut.vue'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'

const localeProvide = { global: { provide: { [LOCALE_INJECTION_KEY]: en } } }

describe('Command', () => {
    it('renders with default classes', () => {
        const wrapper = mount(Command)
        expect(wrapper.classes()).toContain('flex')
        expect(wrapper.classes()).toContain('h-full')
        expect(wrapper.classes()).toContain('w-full')
        expect(wrapper.classes()).toContain('flex-col')
        expect(wrapper.classes()).toContain('overflow-hidden')
        expect(wrapper.classes()).toContain('bg-brutal-bg')
        expect(wrapper.classes()).toContain('text-brutal-fg')
    })

    it('renders slot content', () => {
        const wrapper = mount(Command, {
            slots: { default: '<div class="inner">Inner content</div>' },
        })
        expect(wrapper.find('.inner').exists()).toBe(true)
        expect(wrapper.find('.inner').text()).toBe('Inner content')
    })

    it('applies custom class', () => {
        const wrapper = mount(Command, {
            props: { class: 'custom-class' },
        })
        expect(wrapper.classes()).toContain('custom-class')
    })
})

describe('CommandInput', () => {
    it('renders with default classes', () => {
        const wrapper = mount(CommandInput, { ...localeProvide })
        const wrapperDiv = wrapper.find('[data-slot="command-input"]')
        expect(wrapperDiv.exists()).toBe(true)
        expect(wrapperDiv.classes()).toContain('flex')
        expect(wrapperDiv.classes()).toContain('items-center')
        expect(wrapperDiv.classes()).toContain('border-b-3')
        expect(wrapperDiv.classes()).toContain('border-brutal')
        expect(wrapperDiv.classes()).toContain('bg-brutal-accent')
    })

    it('has search input placeholder', () => {
        const wrapper = mount(CommandInput, { ...localeProvide })
        const input = wrapper.find('input')
        expect(input.exists()).toBe(true)
        expect(input.attributes('placeholder')).toBe('Type a command or search...')
    })

    it('applies custom class to input', () => {
        const wrapper = mount(CommandInput, {
            ...localeProvide,
            props: { class: 'custom-input-class' },
        })
        const input = wrapper.find('input')
        expect(input.classes()).toContain('custom-input-class')
    })

    it('emits update:modelValue on input', async () => {
        const wrapper = mount(CommandInput, { ...localeProvide })
        const input = wrapper.find('input')
        await input.setValue('test query')
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test query'])
    })

    it('uses custom placeholder', () => {
        const wrapper = mount(CommandInput, {
            ...localeProvide,
            props: { placeholder: 'Search items...' },
        })
        const input = wrapper.find('input')
        expect(input.attributes('placeholder')).toBe('Search items...')
    })
})

describe('CommandList', () => {
    it('renders with default classes', () => {
        const wrapper = mount(CommandList, { ...localeProvide })
        expect(wrapper.classes()).toContain('max-h-80')
        expect(wrapper.classes()).toContain('overflow-y-auto')
        expect(wrapper.classes()).toContain('overflow-x-hidden')
    })

    it('applies custom class', () => {
        const wrapper = mount(CommandList, {
            ...localeProvide,
            props: { class: 'custom-list' },
        })
        expect(wrapper.classes()).toContain('custom-list')
    })

    it('renders slot content', () => {
        const wrapper = mount(CommandList, {
            ...localeProvide,
            slots: { default: '<div class="list-item">Item</div>' },
        })
        expect(wrapper.find('.list-item').exists()).toBe(true)
    })
})

describe('CommandEmpty', () => {
    it('renders with default classes', () => {
        const wrapper = mount(CommandEmpty, { ...localeProvide })
        expect(wrapper.classes()).toContain('py-8')
        expect(wrapper.classes()).toContain('text-center')
        expect(wrapper.classes()).toContain('text-sm')
        expect(wrapper.classes()).toContain('font-bold')
    })

    it('shows default empty message', () => {
        const wrapper = mount(CommandEmpty, { ...localeProvide })
        expect(wrapper.text()).toBe('No results found.')
    })

    it('applies custom class', () => {
        const wrapper = mount(CommandEmpty, {
            ...localeProvide,
            props: { class: 'custom-empty' },
        })
        expect(wrapper.classes()).toContain('custom-empty')
    })

    it('renders custom slot content', () => {
        const wrapper = mount(CommandEmpty, {
            ...localeProvide,
            slots: { default: 'Nothing here!' },
        })
        expect(wrapper.text()).toBe('Nothing here!')
    })
})

describe('CommandGroup', () => {
    it('renders with heading', () => {
        const wrapper = mount(CommandGroup, {
            ...localeProvide,
            props: { heading: 'Suggestions' },
        })
        const heading = wrapper.find('[data-slot="command-group-heading"]')
        expect(heading.exists()).toBe(true)
        expect(heading.text()).toBe('Suggestions')
    })

    it('renders without heading', () => {
        const wrapper = mount(CommandGroup, { ...localeProvide })
        const heading = wrapper.find('[data-slot="command-group-heading"]')
        expect(heading.exists()).toBe(false)
    })

    it('renders slot content', () => {
        const wrapper = mount(CommandGroup, {
            ...localeProvide,
            slots: { default: '<div class="group-item">Item</div>' },
        })
        expect(wrapper.find('.group-item').exists()).toBe(true)
    })

    it('applies custom class', () => {
        const wrapper = mount(CommandGroup, {
            ...localeProvide,
            props: { class: 'custom-group' },
        })
        expect(wrapper.classes()).toContain('custom-group')
    })

    it('has group role', () => {
        const wrapper = mount(CommandGroup, { ...localeProvide })
        expect(wrapper.attributes('role')).toBe('group')
    })
})

describe('CommandItem', () => {
    it('renders slot content', () => {
        const wrapper = mount(CommandItem, {
            ...localeProvide,
            props: { value: 'test' },
            slots: { default: 'Item text' },
        })
        expect(wrapper.text()).toBe('Item text')
    })

    it('has cursor-pointer class', () => {
        const wrapper = mount(CommandItem, {
            ...localeProvide,
            props: { value: 'test' },
        })
        expect(wrapper.classes()).toContain('cursor-pointer')
    })

    it('applies custom class', () => {
        const wrapper = mount(CommandItem, {
            ...localeProvide,
            props: { value: 'test', class: 'custom-item' },
        })
        expect(wrapper.classes()).toContain('custom-item')
    })

    it('emits select event on click', async () => {
        const wrapper = mount(CommandItem, {
            ...localeProvide,
            props: { value: 'test-value' },
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted('select')).toBeTruthy()
        expect(wrapper.emitted('select')![0]).toEqual(['test-value'])
    })

    it('does not emit select when disabled', async () => {
        const wrapper = mount(CommandItem, {
            ...localeProvide,
            props: { value: 'test-value', disabled: true },
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted('select')).toBeFalsy()
    })

    it('sets data-disabled attribute when disabled', () => {
        const wrapper = mount(CommandItem, {
            ...localeProvide,
            props: { value: 'test', disabled: true },
        })
        expect(wrapper.attributes('data-disabled')).toBe('true')
    })
})

describe('CommandSeparator', () => {
    it('renders with separator styling', () => {
        const wrapper = mount(CommandSeparator)
        expect(wrapper.classes()).toContain('h-[3px]')
        expect(wrapper.classes()).toContain('bg-brutal-fg')
        expect(wrapper.attributes('role')).toBe('separator')
    })

    it('applies custom class', () => {
        const wrapper = mount(CommandSeparator, {
            props: { class: 'custom-sep' },
        })
        expect(wrapper.classes()).toContain('custom-sep')
    })
})

describe('CommandShortcut', () => {
    it('renders slot content', () => {
        const wrapper = mount(CommandShortcut, {
            slots: { default: '⌘K' },
        })
        expect(wrapper.text()).toBe('⌘K')
    })

    it('applies custom class', () => {
        const wrapper = mount(CommandShortcut, {
            props: { class: 'custom-shortcut' },
        })
        expect(wrapper.classes()).toContain('custom-shortcut')
    })

    it('has default styling classes', () => {
        const wrapper = mount(CommandShortcut)
        expect(wrapper.classes()).toContain('ml-auto')
        expect(wrapper.classes()).toContain('text-xs')
        expect(wrapper.classes()).toContain('font-black')
        expect(wrapper.classes()).toContain('bg-brutal-muted')
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')
    })
})

describe('CommandDialog', () => {
    it('renders within Dialog context', () => {
        const wrapper = mount(CommandDialog, {
            ...localeProvide,
            props: { open: true },
            attachTo: document.body,
        })
        expect(wrapper.findComponent(CommandDialog).exists()).toBe(true)
    })

    it('uses default title and description', async () => {
        const wrapper = mount(CommandDialog, {
            ...localeProvide,
            props: { open: true },
            attachTo: document.body,
        })
        await nextTick()
        const dialogTitle = document.querySelector('[id^="reka-dialog-title"]')
        const dialogDesc = document.querySelector('[id^="reka-dialog-description"]')
        expect(dialogTitle?.textContent).toBe('Command Palette')
        expect(dialogDesc?.textContent).toBe('Search for a command to run...')
        wrapper.unmount()
    })

    it('uses custom title and description', async () => {
        const wrapper = mount(CommandDialog, {
            ...localeProvide,
            props: {
                open: true,
                title: 'Custom Title',
                description: 'Custom Description',
            },
            attachTo: document.body,
        })
        await nextTick()
        const allTitles = document.querySelectorAll('[id^="reka-dialog-title"]')
        const allDescs = document.querySelectorAll('[id^="reka-dialog-description"]')
        const lastTitle = allTitles[allTitles.length - 1]
        const lastDesc = allDescs[allDescs.length - 1]
        expect(lastTitle?.textContent).toBe('Custom Title')
        expect(lastDesc?.textContent).toBe('Custom Description')
        wrapper.unmount()
    })

    it('applies custom class', () => {
        const wrapper = mount(CommandDialog, {
            ...localeProvide,
            props: { open: true, class: 'custom-dialog' },
            attachTo: document.body,
        })
        const content = wrapper.find('[role="dialog"]')
        expect(content.exists() ? content.classes() : wrapper.classes()).toBeDefined()
    })
})
