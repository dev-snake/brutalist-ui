import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SketchyChart from './SketchyChart.vue'

describe('SketchyChart', () => {
    const mockData = [
        { label: 'Jan', value: 30 },
        { label: 'Feb', value: 80 },
        { label: 'Mar', value: 45 },
    ]

    it('renders coordinates axes and default variant container classes', () => {
        const wrapper = mount(SketchyChart, {
            props: { data: mockData }
        })
        expect(wrapper.classes()).toContain('border-3')
        expect(wrapper.classes()).toContain('border-brutal')

        const axes = wrapper.findAll('.chart-axes line')
        expect(axes.length).toBe(2)
    })

    it('renders line chart with paths and circle indicators', () => {
        const wrapper = mount(SketchyChart, {
            props: { type: 'line', data: mockData }
        })
        const paths = wrapper.findAll('.chart-data path')
        expect(paths.length).toBe(2)

        const circles = wrapper.findAll('.chart-data circle')
        expect(circles.length).toBe(3)
    })

    it('renders bar chart with bar rects', () => {
        const wrapper = mount(SketchyChart, {
            props: { type: 'bar', data: mockData }
        })
        const rects = wrapper.findAll('.chart-data rect')
        expect(rects.length).toBe(6)
    })

    it('handles empty data boundary safely', () => {
        const wrapper = mount(SketchyChart, {
            props: { data: [] }
        })
        expect(wrapper.findAll('.chart-data *').length).toBe(0)
    })

    it('generates unique filter IDs per instance', () => {
        const wrapper = mount(SketchyChart, {
            props: { data: mockData }
        })

        const filter = wrapper.find('filter')
        const filterId = filter.attributes('id')

        expect(filterId).toBeTruthy()
        expect(filterId).toMatch(/^brutal-sketch-filter-/)
    })

    it('computes correct line path from data', () => {
        const wrapper = mount(SketchyChart, {
            props: { type: 'line', data: mockData }
        })

        const linePath = wrapper.findAll('.chart-data path').find(p => p.attributes('fill') === 'none')
        expect(linePath).toBeTruthy()
        const d = linePath!.attributes('d')
        expect(d).toContain('M')
        expect(d).toContain('L')
    })

    it('computes correct bar positions from data', () => {
        const wrapper = mount(SketchyChart, {
            props: { type: 'bar', data: mockData }
        })

        const barRects = wrapper.findAll('.chart-data rect').filter(r => r.attributes('fill') !== 'var(--brutal-border-color, #000000)')
        expect(barRects.length).toBe(3)

        const firstBarX = Number(barRects[0].attributes('x'))
        const secondBarX = Number(barRects[1].attributes('x'))
        expect(secondBarX).toBeGreaterThan(firstBarX)
    })
})
