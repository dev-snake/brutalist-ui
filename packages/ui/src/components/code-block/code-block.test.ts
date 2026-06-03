import { mount } from '@vue/test-utils'
import CodeBlock from './CodeBlock.vue'

describe('CodeBlock', () => {
    it('renders code content', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'console.log("hello")' },
        })
        expect(wrapper.find('pre').exists()).toBe(true)
        expect(wrapper.find('code').exists()).toBe(true)
        expect(wrapper.find('code').text()).toBe('console.log("hello")')
    })

    it('renders multiline code content', () => {
        const code = 'line1\nline2\nline3'
        const wrapper = mount(CodeBlock, {
            props: { code },
        })
        expect(wrapper.find('code').text()).toBe(code)
    })

    it('applies default root classes', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'test' },
        })
        const classes = wrapper.classes()
        expect(classes).toContain('border-3')
        expect(classes).toContain('border-brutal')
        expect(classes).toContain('shadow-brutal')
        expect(classes).toContain('rounded-brutal')
    })

    it('shows language badge with default plaintext', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'test' },
        })
        const badge = wrapper.find('[class*="bg-brutal-accent"]')
        expect(badge.exists()).toBe(true)
        expect(badge.text()).toBe('plaintext')
    })

    it('shows language badge with custom language', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'test', language: 'typescript' },
        })
        const badge = wrapper.find('[class*="bg-brutal-accent"]')
        expect(badge.text()).toBe('typescript')
    })

    it('does not show filename by default', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'test' },
        })
        expect(wrapper.text()).not.toContain('index.ts')
    })

    it('shows filename when provided', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'test', filename: 'index.ts' },
        })
        expect(wrapper.text()).toContain('index.ts')
    })

    it('does not show line numbers by default', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'line1\nline2\nline3' },
        })
        const lineNumbersCol = wrapper.find('[class*="border-r-3"]')
        expect(lineNumbersCol.exists()).toBe(false)
    })

    it('shows line numbers when enabled', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'line1\nline2\nline3', showLineNumbers: true },
        })
        const lineNumbersCol = wrapper.find('[class*="border-r-3"]')
        expect(lineNumbersCol.exists()).toBe(true)
        const lineSpans = lineNumbersCol.findAll('span')
        expect(lineSpans).toHaveLength(3)
        expect(lineSpans[0].text()).toBe('1')
        expect(lineSpans[1].text()).toBe('2')
        expect(lineSpans[2].text()).toBe('3')
    })

    it('renders copy button', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'test' },
        })
        const button = wrapper.find('button')
        expect(button.exists()).toBe(true)
    })

    it('renders slot content when provided', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'fallback' },
            slots: { default: '<span class="slot-content">Custom Code</span>' },
        })
        expect(wrapper.find('.slot-content').exists()).toBe(true)
        expect(wrapper.find('.slot-content').text()).toBe('Custom Code')
    })

    it('merges custom class prop', () => {
        const wrapper = mount(CodeBlock, {
            props: { code: 'test', class: 'custom-class' },
        })
        expect(wrapper.classes()).toContain('custom-class')
    })
})
