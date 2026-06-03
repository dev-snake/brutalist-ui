import { mount } from '@vue/test-utils'
import { defineComponent, ref, nextTick } from 'vue'
import {
    DialogRoot,
    AlertDialogRoot,
    TabsRoot,
    SelectRoot,
    SelectValue,
    DropdownMenuRoot,
    DropdownMenuTrigger,
} from 'reka-ui'
import DialogContent from './dialog/DialogContent.vue'
import DialogTitle from './dialog/DialogTitle.vue'
import DialogDescription from './dialog/DialogDescription.vue'
import AlertDialogContent from './alert-dialog/AlertDialogContent.vue'
import AlertDialogTitle from './alert-dialog/AlertDialogTitle.vue'
import AlertDialogDescription from './alert-dialog/AlertDialogDescription.vue'
import TabsList from './tabs/TabsList.vue'
import TabsTrigger from './tabs/TabsTrigger.vue'
import TabsContent from './tabs/TabsContent.vue'
import SelectTrigger from './select/SelectTrigger.vue'
import DropdownMenuContent from './dropdown-menu/DropdownMenuContent.vue'
import DropdownMenuItem from './dropdown-menu/DropdownMenuItem.vue'
import Label from './label/Label.vue'
import Input from './input/Input.vue'
import Button from './button/Button.vue'
import FormLabel from './form/FormLabel.vue'
import FormMessage from './form/FormMessage.vue'
import { formFieldKey, formItemKey } from './form/form-context'

afterEach(() => {
    document.body.innerHTML = ''
})

describe('Dialog accessibility', () => {
    const DialogWrapper = defineComponent({
        components: { DialogRoot, DialogContent, DialogTitle, DialogDescription },
        template: `
            <DialogRoot :default-open="true">
                <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>Dialog Description</DialogDescription>
                </DialogContent>
            </DialogRoot>
        `,
    })

    it('DialogContent should have role="dialog"', async () => {
        const wrapper = mount(DialogWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const dialog = document.querySelector('[role="dialog"]')
        expect(dialog).not.toBeNull()
        wrapper.unmount()
    })

    it('DialogContent should have aria-labelledby pointing to DialogTitle', async () => {
        const wrapper = mount(DialogWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const dialog = document.querySelector('[role="dialog"]')
        expect(dialog).not.toBeNull()
        const labelledBy = dialog!.getAttribute('aria-labelledby')
        expect(labelledBy).toBeTruthy()
        const title = document.getElementById(labelledBy!)
        expect(title).not.toBeNull()
        expect(title!.textContent).toContain('Dialog Title')
        wrapper.unmount()
    })

    it('DialogContent should have aria-describedby pointing to DialogDescription', async () => {
        const wrapper = mount(DialogWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const dialog = document.querySelector('[role="dialog"]')
        expect(dialog).not.toBeNull()
        const describedBy = dialog!.getAttribute('aria-describedby')
        expect(describedBy).toBeTruthy()
        const description = document.getElementById(describedBy!)
        expect(description).not.toBeNull()
        expect(description!.textContent).toContain('Dialog Description')
        wrapper.unmount()
    })

    it('DialogOverlay should render when dialog is open', async () => {
        const wrapper = mount(DialogWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const overlay = document.querySelector('[data-state="open"]')
        expect(overlay).not.toBeNull()
        wrapper.unmount()
    })
})

describe('AlertDialog accessibility', () => {
    const AlertDialogWrapper = defineComponent({
        components: {
            AlertDialogRoot,
            AlertDialogContent,
            AlertDialogTitle,
            AlertDialogDescription,
        },
        template: `
            <AlertDialogRoot :default-open="true">
                <AlertDialogContent>
                    <AlertDialogTitle>Alert Title</AlertDialogTitle>
                    <AlertDialogDescription>Alert Description</AlertDialogDescription>
                </AlertDialogContent>
            </AlertDialogRoot>
        `,
    })

    it('AlertDialogContent should have role="alertdialog"', async () => {
        const wrapper = mount(AlertDialogWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const dialog = document.querySelector('[role="alertdialog"]')
        expect(dialog).not.toBeNull()
        wrapper.unmount()
    })

    it('AlertDialogContent should have aria-labelledby pointing to AlertDialogTitle', async () => {
        const wrapper = mount(AlertDialogWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const dialog = document.querySelector('[role="alertdialog"]')
        expect(dialog).not.toBeNull()
        const labelledBy = dialog!.getAttribute('aria-labelledby')
        expect(labelledBy).toBeTruthy()
        const title = document.getElementById(labelledBy!)
        expect(title).not.toBeNull()
        expect(title!.textContent).toContain('Alert Title')
        wrapper.unmount()
    })

    it('AlertDialogContent should have aria-describedby pointing to AlertDialogDescription', async () => {
        const wrapper = mount(AlertDialogWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const dialog = document.querySelector('[role="alertdialog"]')
        expect(dialog).not.toBeNull()
        const describedBy = dialog!.getAttribute('aria-describedby')
        expect(describedBy).toBeTruthy()
        const description = document.getElementById(describedBy!)
        expect(description).not.toBeNull()
        expect(description!.textContent).toContain('Alert Description')
        wrapper.unmount()
    })
})

describe('Tabs accessibility', () => {
    const TabsWrapper = defineComponent({
        components: { TabsRoot, TabsList, TabsTrigger, TabsContent },
        template: `
            <TabsRoot default-value="tab1">
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content 1</TabsContent>
                <TabsContent value="tab2">Content 2</TabsContent>
            </TabsRoot>
        `,
    })

    it('TabsList should have role="tablist"', async () => {
        const wrapper = mount(TabsWrapper, { attachTo: document.body })
        await nextTick()
        const tablist = wrapper.find('[role="tablist"]')
        expect(tablist.exists()).toBe(true)
        wrapper.unmount()
    })

    it('TabsTrigger should have role="tab"', async () => {
        const wrapper = mount(TabsWrapper, { attachTo: document.body })
        await nextTick()
        const tabs = wrapper.findAll('[role="tab"]')
        expect(tabs.length).toBe(2)
        wrapper.unmount()
    })

    it('TabsContent should have role="tabpanel"', async () => {
        const wrapper = mount(TabsWrapper, { attachTo: document.body })
        await nextTick()
        const tabpanel = wrapper.find('[role="tabpanel"]')
        expect(tabpanel.exists()).toBe(true)
        wrapper.unmount()
    })

    it('TabsTrigger should have aria-selected attribute', async () => {
        const wrapper = mount(TabsWrapper, { attachTo: document.body })
        await nextTick()
        const activeTab = wrapper.find('[role="tab"][aria-selected="true"]')
        expect(activeTab.exists()).toBe(true)
        expect(activeTab.text()).toBe('Tab 1')
        wrapper.unmount()
    })

    it('TabsContent should have aria-labelledby pointing to corresponding tab', async () => {
        const wrapper = mount(TabsWrapper, { attachTo: document.body })
        await nextTick()
        const tabpanel = wrapper.find('[role="tabpanel"]')
        expect(tabpanel.exists()).toBe(true)
        const labelledBy = tabpanel.attributes('aria-labelledby')
        expect(labelledBy).toBeTruthy()
        const trigger = document.getElementById(labelledBy!)
        expect(trigger).not.toBeNull()
        expect(trigger!.getAttribute('role')).toBe('tab')
        wrapper.unmount()
    })
})

describe('Select accessibility', () => {
    const SelectWrapper = defineComponent({
        components: { SelectRoot, SelectTrigger, SelectValue },
        template: `
            <SelectRoot default-value="opt1">
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
            </SelectRoot>
        `,
    })

    it('SelectTrigger should have role="combobox"', async () => {
        const wrapper = mount(SelectWrapper, { attachTo: document.body })
        await nextTick()
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.exists()).toBe(true)
        wrapper.unmount()
    })

    it('SelectTrigger should have aria-expanded attribute', async () => {
        const wrapper = mount(SelectWrapper, { attachTo: document.body })
        await nextTick()
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.exists()).toBe(true)
        expect(trigger.attributes('aria-expanded')).toBeDefined()
        wrapper.unmount()
    })

    it('SelectTrigger should have aria-haspopup="listbox"', async () => {
        const wrapper = mount(SelectWrapper, { attachTo: document.body })
        await nextTick()
        const trigger = wrapper.find('[role="combobox"]')
        expect(trigger.exists()).toBe(true)
        expect(trigger.attributes('aria-haspopup')).toBe('listbox')
        wrapper.unmount()
    })
})

describe('DropdownMenu accessibility', () => {
    const DropdownMenuWrapper = defineComponent({
        components: {
            DropdownMenuRoot,
            DropdownMenuTrigger,
            DropdownMenuContent,
            DropdownMenuItem,
        },
        template: `
            <DropdownMenuRoot :default-open="true">
                <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Item 2</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuRoot>
        `,
    })

    it('DropdownMenuContent should have role="menu"', async () => {
        const wrapper = mount(DropdownMenuWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const menu = document.querySelector('[role="menu"]')
        expect(menu).not.toBeNull()
        wrapper.unmount()
    })

    it('DropdownMenuItem should have role="menuitem"', async () => {
        const wrapper = mount(DropdownMenuWrapper, { attachTo: document.body })
        await nextTick()
        await nextTick()
        const menuItems = document.querySelectorAll('[role="menuitem"]')
        expect(menuItems.length).toBe(2)
        wrapper.unmount()
    })
})

describe('Label accessibility', () => {
    it('Label should render as a <label> element', () => {
        const wrapper = mount(Label, { attachTo: document.body })
        expect(wrapper.element.tagName).toBe('LABEL')
        wrapper.unmount()
    })

    it('Label should associate with form control via for attribute', () => {
        const wrapper = mount(
            defineComponent({
                components: { BrutxLabel: Label, BrutxInput: Input },
                template: `
                    <div>
                        <BrutxLabel for="test-input">Username</BrutxLabel>
                        <BrutxInput id="test-input" />
                    </div>
                `,
            }),
            { attachTo: document.body }
        )
        const label = wrapper.find('label')
        expect(label.exists()).toBe(true)
        expect(label.attributes('for')).toBe('test-input')
        const input = wrapper.find('#test-input')
        expect(input.exists()).toBe(true)
        wrapper.unmount()
    })
})

describe('Input accessibility', () => {
    it('Input should have proper type attribute', () => {
        const wrapper = mount(Input)
        expect(wrapper.attributes('type')).toBe('text')
    })

    it('Input should have disabled attribute when disabled prop is true', () => {
        const wrapper = mount(Input, { props: { disabled: true } })
        expect(wrapper.attributes('disabled')).toBeDefined()
    })
})

describe('Button accessibility', () => {
    it('Button should have proper button role', () => {
        const wrapper = mount(Button)
        expect(wrapper.find('button').exists()).toBe(true)
    })

    it('Button should have disabled attribute when disabled', () => {
        const wrapper = mount(Button, { props: { disabled: true } })
        expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    })
})

describe('Form accessibility', () => {
    it('FormLabel should have for attribute linking to form item', () => {
        const wrapper = mount(FormLabel, {
            global: {
                provide: {
                    [formFieldKey as symbol]: {
                        name: 'email',
                        error: ref(undefined),
                    },
                    [formItemKey as symbol]: {
                        id: 'form-id',
                        formItemId: 'form-item-id',
                        formDescriptionId: 'form-desc-id',
                        formMessageId: 'form-msg-id',
                    },
                },
            },
            attachTo: document.body,
        })
        expect(wrapper.attributes('for')).toBe('form-item-id')
        wrapper.unmount()
    })

    it('FormMessage should have role="alert" for error messages', () => {
        const wrapper = mount(FormMessage, {
            global: {
                provide: {
                    [formFieldKey as symbol]: {
                        name: 'email',
                        error: ref('Required field'),
                    },
                    [formItemKey as symbol]: {
                        id: 'form-id',
                        formItemId: 'form-item-id',
                        formDescriptionId: 'form-desc-id',
                        formMessageId: 'form-msg-id',
                    },
                },
            },
            attachTo: document.body,
        })
        const message = wrapper.find('p')
        expect(message.exists()).toBe(true)
        expect(message.attributes('role')).toBe('alert')
        wrapper.unmount()
    })
})
