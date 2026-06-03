import { mount } from '@vue/test-utils'
import KanbanBoard from './KanbanBoard.vue'
import type { KanbanCard, KanbanColumn } from './KanbanBoard.vue'
import { zhCN } from '@/locales/zh-CN'

const card1: KanbanCard = {
    id: 'card-1',
    title: 'Design System',
    description: 'Create design tokens',
    tags: ['design', 'ui'],
}

const card2: KanbanCard = {
    id: 'card-2',
    title: 'API Integration',
    tags: ['backend'],
}

const card3: KanbanCard = {
    id: 'card-3',
    title: 'Bug Fix',
    description: 'Fix login redirect',
}

const columns: KanbanColumn[] = [
    {
        id: 'todo',
        title: 'To Do',
        cards: [card1, card2],
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        color: '#4ECDC4',
        cards: [card3],
    },
    {
        id: 'done',
        title: 'Done',
        cards: [],
    },
]

describe('KanbanBoard', () => {
    it('renders columns and cards', () => {
        const wrapper = mount(KanbanBoard, {
            props: { modelValue: columns },
        })
        const columnEls = wrapper.findAll('[class*="flex-col"]')
        expect(columnEls.length).toBeGreaterThanOrEqual(3)
        expect(wrapper.text()).toContain('Design System')
        expect(wrapper.text()).toContain('API Integration')
        expect(wrapper.text()).toContain('Bug Fix')
    })

    it('shows column titles', () => {
        const wrapper = mount(KanbanBoard, {
            props: { modelValue: columns },
        })
        expect(wrapper.text()).toContain('To Do')
        expect(wrapper.text()).toContain('In Progress')
        expect(wrapper.text()).toContain('Done')
    })

    it('shows card count badge', () => {
        const wrapper = mount(KanbanBoard, {
            props: { modelValue: columns },
        })
        const badges = wrapper.findAll('span.text-xs.font-bold.border-3')
        const texts = badges.map((b) => b.text())
        expect(texts).toContain('2')
        expect(texts).toContain('1')
        expect(texts).toContain('0')
    })

    it('shows empty state for empty column', () => {
        const wrapper = mount(KanbanBoard, {
            props: { modelValue: columns },
        })
        expect(wrapper.text()).toContain(zhCN.kanban.dropCardsHere)
    })

    it('renders card tags', () => {
        const wrapper = mount(KanbanBoard, {
            props: { modelValue: columns },
        })
        expect(wrapper.text()).toContain('design')
        expect(wrapper.text()).toContain('ui')
        expect(wrapper.text()).toContain('backend')
    })

    it('applies custom class', () => {
        const wrapper = mount(KanbanBoard, {
            props: { modelValue: columns, class: 'my-board' },
        })
        expect(wrapper.classes()).toContain('my-board')
    })

    it('cards are draggable', () => {
        const wrapper = mount(KanbanBoard, {
            props: { modelValue: columns },
        })
        const cards = wrapper.findAll('[draggable="true"]')
        expect(cards.length).toBe(3)
    })
})
