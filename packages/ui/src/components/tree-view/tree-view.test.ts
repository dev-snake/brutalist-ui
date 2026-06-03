import { mount } from '@vue/test-utils'
import { en } from '@/locales/en'
import { LOCALE_INJECTION_KEY } from '@/composables/useLocale'
import TreeView from './TreeView.vue'
import TreeViewNode from './TreeViewNode.vue'
import type { TreeNode } from './TreeView.vue'

const localeProvide = { [LOCALE_INJECTION_KEY]: en }

const sampleNodes: TreeNode[] = [
    {
        id: 'src',
        label: 'src',
        children: [
            { id: 'main.ts', label: 'main.ts' },
            { id: 'utils.ts', label: 'utils.ts' },
        ],
    },
    {
        id: 'package.json',
        label: 'package.json',
    },
]

const emptyExpandedIds: Set<string> = new Set()

describe('TreeView', () => {
    it('renders with role="tree"', () => {
        const wrapper = mount(TreeView, {
            props: { nodes: sampleNodes },
            global: { provide: localeProvide },
        })
        expect(wrapper.attributes('role')).toBe('tree')
    })

    it('renders nodes', () => {
        const wrapper = mount(TreeView, {
            props: { nodes: sampleNodes },
            global: { provide: localeProvide },
        })
        const items = wrapper.findAll('[role="treeitem"]')
        expect(items.length).toBeGreaterThanOrEqual(2)
        expect(wrapper.text()).toContain('src')
        expect(wrapper.text()).toContain('package.json')
    })

    it('applies custom class', () => {
        const wrapper = mount(TreeView, {
            props: { nodes: [], class: 'custom-tree' },
            global: { provide: localeProvide },
        })
        expect(wrapper.classes()).toContain('custom-tree')
        expect(wrapper.classes()).toContain('flex')
        expect(wrapper.classes()).toContain('flex-col')
    })

    it('emits select event', async () => {
        const wrapper = mount(TreeView, {
            props: { nodes: sampleNodes },
            global: { provide: localeProvide },
        })
        const treeItems = wrapper.findAll('[role="treeitem"]')
        await treeItems[treeItems.length - 1].find('div').trigger('click')
        expect(wrapper.emitted('select')).toBeTruthy()
        expect(wrapper.emitted('select')![0][0]).toEqual(
            expect.objectContaining({ id: 'package.json' })
        )
    })

    it('has aria-label="File tree"', () => {
        const wrapper = mount(TreeView, {
            props: { nodes: sampleNodes },
            global: { provide: localeProvide },
        })
        expect(wrapper.attributes('aria-label')).toBe('File tree')
    })
})

describe('TreeViewNode', () => {
    it('renders label', () => {
        const wrapper = mount(TreeViewNode, {
            props: {
                node: { id: 'file.ts', label: 'file.ts' },
                expandedIds: emptyExpandedIds,
            },
        })
        expect(wrapper.text()).toContain('file.ts')
    })

    it('shows folder icon for non-leaf node', () => {
        const wrapper = mount(TreeViewNode, {
            props: {
                node: { id: 'src', label: 'src', children: [{ id: 'main.ts', label: 'main.ts' }] },
                expandedIds: emptyExpandedIds,
            },
        })
        expect(wrapper.attributes('aria-expanded')).toBe('false')
        const chevron = wrapper.find('.rotate-90')
        expect(chevron.exists()).toBe(false)
    })

    it('shows file icon for leaf node', () => {
        const wrapper = mount(TreeViewNode, {
            props: {
                node: { id: 'readme.md', label: 'readme.md' },
                expandedIds: emptyExpandedIds,
            },
        })
        expect(wrapper.attributes('aria-selected')).toBe('false')
        expect(wrapper.attributes('aria-expanded')).toBeUndefined()
    })

    it('applies selected class when selected', () => {
        const wrapper = mount(TreeViewNode, {
            props: {
                node: { id: 'file.ts', label: 'file.ts' },
                expandedIds: emptyExpandedIds,
                selectedId: 'file.ts',
            },
        })
        const inner = wrapper.find('[role="treeitem"] > div')
        expect(inner.classes()).toContain('bg-brutal-primary')
        expect(inner.classes()).toContain('border-brutal')
        expect(inner.classes()).toContain('shadow-brutal')
    })

    it('does not apply selected class when not selected', () => {
        const wrapper = mount(TreeViewNode, {
            props: {
                node: { id: 'file.ts', label: 'file.ts' },
                expandedIds: emptyExpandedIds,
                selectedId: 'other.ts',
            },
        })
        const inner = wrapper.find('[role="treeitem"] > div')
        expect(inner.classes()).not.toContain('bg-brutal-primary')
    })

    it('has role="treeitem"', () => {
        const wrapper = mount(TreeViewNode, {
            props: {
                node: { id: 'file.ts', label: 'file.ts' },
                expandedIds: emptyExpandedIds,
            },
        })
        expect(wrapper.attributes('role')).toBe('treeitem')
    })
})
