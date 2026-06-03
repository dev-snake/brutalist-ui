import { mount } from '@vue/test-utils'
import Table from './Table.vue'
import TableHeader from './TableHeader.vue'
import TableBody from './TableBody.vue'
import TableFooter from './TableFooter.vue'
import TableRow from './TableRow.vue'
import TableHead from './TableHead.vue'
import TableCell from './TableCell.vue'
import TableCaption from './TableCaption.vue'

describe('Table', () => {
    it('renders with default props', () => {
        const wrapper = mount(Table)
        const table = wrapper.find('table')
        expect(table.exists()).toBe(true)
        expect(table.classes()).toContain('border-3')
        expect(table.classes()).toContain('border-brutal')
    })

    it('renders slot content', () => {
        const wrapper = mount(Table, {
            slots: { default: '<tbody><tr><td>Data</td></tr></tbody>' },
        })
        expect(wrapper.find('table').text()).toBe('Data')
    })

    it('wraps table in container', () => {
        const wrapper = mount(Table)
        const container = wrapper.find('div')
        expect(container.exists()).toBe(true)
        expect(container.classes()).toContain('relative')
        expect(container.classes()).toContain('w-full')
    })

    it('applies custom class', () => {
        const wrapper = mount(Table, { props: { class: 'my-table' } })
        expect(wrapper.find('table').classes()).toContain('my-table')
    })
})

describe('TableHeader', () => {
    it('renders slot content', () => {
        const wrapper = mount(TableHeader, {
            slots: { default: '<tr><th>Col</th></tr>' },
        })
        expect(wrapper.text()).toBe('Col')
    })

    it('renders thead element', () => {
        const wrapper = mount(TableHeader)
        expect(wrapper.element.tagName).toBe('THEAD')
    })

    it('applies custom class', () => {
        const wrapper = mount(TableHeader, { props: { class: 'my-thead' } })
        expect(wrapper.classes()).toContain('my-thead')
    })
})

describe('TableBody', () => {
    it('renders slot content', () => {
        const wrapper = mount(TableBody, {
            slots: { default: '<tr><td>Row</td></tr>' },
        })
        expect(wrapper.text()).toBe('Row')
    })

    it('renders tbody element', () => {
        const wrapper = mount(TableBody)
        expect(wrapper.element.tagName).toBe('TBODY')
    })

    it('applies custom class', () => {
        const wrapper = mount(TableBody, { props: { class: 'my-tbody' } })
        expect(wrapper.classes()).toContain('my-tbody')
    })
})

describe('TableFooter', () => {
    it('renders slot content', () => {
        const wrapper = mount(TableFooter, {
            slots: { default: '<tr><td>Footer</td></tr>' },
        })
        expect(wrapper.text()).toBe('Footer')
    })

    it('renders tfoot element', () => {
        const wrapper = mount(TableFooter)
        expect(wrapper.element.tagName).toBe('TFOOT')
    })

    it('applies custom class', () => {
        const wrapper = mount(TableFooter, { props: { class: 'my-tfoot' } })
        expect(wrapper.classes()).toContain('my-tfoot')
    })
})

describe('TableRow', () => {
    it('renders slot content', () => {
        const wrapper = mount(TableRow, {
            slots: { default: '<td>Cell</td>' },
        })
        expect(wrapper.text()).toBe('Cell')
    })

    it('renders tr element', () => {
        const wrapper = mount(TableRow)
        expect(wrapper.element.tagName).toBe('TR')
    })

    it('applies custom class', () => {
        const wrapper = mount(TableRow, { props: { class: 'my-row' } })
        expect(wrapper.classes()).toContain('my-row')
    })
})

describe('TableHead', () => {
    it('renders slot content', () => {
        const wrapper = mount(TableHead, {
            slots: { default: 'Header' },
        })
        expect(wrapper.text()).toBe('Header')
    })

    it('renders th element', () => {
        const wrapper = mount(TableHead)
        expect(wrapper.element.tagName).toBe('TH')
    })

    it('applies custom class', () => {
        const wrapper = mount(TableHead, { props: { class: 'my-th' } })
        expect(wrapper.classes()).toContain('my-th')
    })
})

describe('TableCell', () => {
    it('renders slot content', () => {
        const wrapper = mount(TableCell, {
            slots: { default: 'Data' },
        })
        expect(wrapper.text()).toBe('Data')
    })

    it('renders td element', () => {
        const wrapper = mount(TableCell)
        expect(wrapper.element.tagName).toBe('TD')
    })

    it('applies custom class', () => {
        const wrapper = mount(TableCell, { props: { class: 'my-td' } })
        expect(wrapper.classes()).toContain('my-td')
    })
})

describe('TableCaption', () => {
    it('renders slot content', () => {
        const wrapper = mount(TableCaption, {
            slots: { default: 'Table caption' },
        })
        expect(wrapper.text()).toBe('Table caption')
    })

    it('renders caption element', () => {
        const wrapper = mount(TableCaption)
        expect(wrapper.element.tagName).toBe('CAPTION')
    })

    it('applies custom class', () => {
        const wrapper = mount(TableCaption, { props: { class: 'my-caption' } })
        expect(wrapper.classes()).toContain('my-caption')
    })
})
