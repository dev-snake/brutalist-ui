import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { vi } from 'vitest'
import Calendar from './Calendar.vue'

const { dayRef } = vi.hoisted(() => ({
    dayRef: {
        label: '1',
        isSelected: false,
        isInRange: false,
        isStart: false,
        isEnd: false,
        isToday: false,
        isOutside: false,
        isDisabled: false,
    },
}))

vi.mock('v-calendar', () => ({
    Calendar: {
        name: 'VCalendar',
        props: ['modelValue', 'isRange', 'mode', 'disabled', 'class', 'attributes', 'trimWeeks', 'firstDayOfWeek'],
        emits: ['update:model-value'],
        data() {
            return { day: { ...dayRef } }
        },
        template: `
            <div class="v-calendar-stub">
                <slot :page="{ monthLabel: 'June', yearLabel: '2026' }"></slot>
                <slot name="day-content" :day="day"></slot>
            </div>
        `,
    },
}))

const defaultDay = {
    label: '1',
    isSelected: false,
    isInRange: false,
    isStart: false,
    isEnd: false,
    isToday: false,
    isOutside: false,
    isDisabled: false,
}

function resetDay() {
    Object.assign(dayRef, defaultDay)
}

function mountCalendar(props = {}) {
    return mount(Calendar, { props })
}

function findVCalendar(wrapper: ReturnType<typeof mountCalendar>) {
    return wrapper.findComponent({ name: 'VCalendar' })
}

describe('Calendar', () => {
    afterEach(() => {
        resetDay()
    })

    describe('rootClasses computed', () => {
        it('applies default brutal styling classes', () => {
            const wrapper = mountCalendar()
            const vm = wrapper.vm as unknown as { rootClasses: string }
            expect(vm.rootClasses).toContain('border-3')
            expect(vm.rootClasses).toContain('border-brutal')
            expect(vm.rootClasses).toContain('shadow-brutal')
            expect(vm.rootClasses).toContain('bg-brutal-bg')
            expect(vm.rootClasses).toContain('text-brutal-fg')
        })

        it('merges custom class into rootClasses', () => {
            const wrapper = mountCalendar({ class: 'custom-calendar' })
            const vm = wrapper.vm as unknown as { rootClasses: string }
            expect(vm.rootClasses).toContain('custom-calendar')
        })
    })

    describe('vCalendarModelValue computed', () => {
        it('returns DateRangeValue when isRange and modelValue is Date[] of length 2', () => {
            const start = new Date(2026, 0, 1)
            const end = new Date(2026, 0, 31)
            const wrapper = mountCalendar({ isRange: true, modelValue: [start, end] })
            const stub = findVCalendar(wrapper)
            expect(stub.props('modelValue')).toEqual({ start, end })
        })

        it('returns null when isRange and modelValue is not an array', () => {
            const wrapper = mountCalendar({ isRange: true, modelValue: new Date(2026, 0, 1) })
            const stub = findVCalendar(wrapper)
            expect(stub.props('modelValue')).toBeNull()
        })

        it('returns null when isRange and modelValue is an empty array', () => {
            const wrapper = mountCalendar({ isRange: true, modelValue: [] as Date[] })
            const stub = findVCalendar(wrapper)
            expect(stub.props('modelValue')).toBeNull()
        })

        it('returns Date when modelValue is a Date instance and not isRange', () => {
            const date = new Date(2026, 5, 15)
            const wrapper = mountCalendar({ modelValue: date })
            const stub = findVCalendar(wrapper)
            expect(stub.props('modelValue')).toBe(date)
        })

        it('returns null when modelValue is null', () => {
            const wrapper = mountCalendar({ modelValue: null })
            const stub = findVCalendar(wrapper)
            expect(stub.props('modelValue')).toBeNull()
        })

        it('returns null when modelValue is undefined', () => {
            const wrapper = mountCalendar({ modelValue: undefined })
            const stub = findVCalendar(wrapper)
            expect(stub.props('modelValue')).toBeNull()
        })
    })

    describe('handleUpdate', () => {
        it('does not emit when disabled', async () => {
            const wrapper = mountCalendar({ disabled: true })
            const stub = findVCalendar(wrapper)
            stub.vm.$emit('update:model-value', new Date(2026, 5, 15))
            await nextTick()
            expect(wrapper.emitted('update:modelValue')).toBeUndefined()
        })

        it('emits [start, end] when isRange and value is DateRangeValue', async () => {
            const start = new Date(2026, 0, 1)
            const end = new Date(2026, 0, 31)
            const wrapper = mountCalendar({ isRange: true })
            const stub = findVCalendar(wrapper)
            stub.vm.$emit('update:model-value', { start, end })
            await nextTick()
            expect(wrapper.emitted('update:modelValue')![0]).toEqual([[start, end]])
        })

        it('emits null when isRange and value is null', async () => {
            const wrapper = mountCalendar({ isRange: true })
            const stub = findVCalendar(wrapper)
            stub.vm.$emit('update:model-value', null)
            await nextTick()
            expect(wrapper.emitted('update:modelValue')![0]).toEqual([null])
        })

        it('emits Date when not isRange and value is a Date', async () => {
            const date = new Date(2026, 5, 15)
            const wrapper = mountCalendar()
            const stub = findVCalendar(wrapper)
            stub.vm.$emit('update:model-value', date)
            await nextTick()
            expect(wrapper.emitted('update:modelValue')![0]).toEqual([date])
        })

        it('emits null when not isRange and value is null', async () => {
            const wrapper = mountCalendar()
            const stub = findVCalendar(wrapper)
            stub.vm.$emit('update:model-value', null)
            await nextTick()
            expect(wrapper.emitted('update:modelValue')![0]).toEqual([null])
        })
    })

    describe('template rendering', () => {
        it('renders the VCalendar stub', () => {
            const wrapper = mountCalendar()
            expect(wrapper.find('.v-calendar-stub').exists()).toBe(true)
        })

        it('renders header slot with month and year labels', () => {
            const wrapper = mountCalendar()
            expect(wrapper.text()).toContain('June')
            expect(wrapper.text()).toContain('2026')
        })

        it('renders day-content slot with day label', () => {
            const wrapper = mountCalendar()
            expect(wrapper.text()).toContain('1')
        })

        it('applies primary style for selected day not in range', () => {
            dayRef.isSelected = true
            dayRef.isInRange = false
            const wrapper = mountCalendar()
            expect(wrapper.find('.bg-brutal-primary').exists()).toBe(true)
        })

        it('applies accent style for in-range day', () => {
            dayRef.isInRange = true
            dayRef.isStart = false
            dayRef.isEnd = false
            const wrapper = mountCalendar()
            expect(wrapper.find('.bg-brutal-accent').exists()).toBe(true)
        })

        it('applies secondary style with shadow for start day', () => {
            dayRef.isStart = true
            const wrapper = mountCalendar()
            expect(wrapper.find('.bg-brutal-secondary.shadow-brutal-sm').exists()).toBe(true)
        })

        it('applies secondary style with shadow for end day', () => {
            dayRef.isEnd = true
            const wrapper = mountCalendar()
            expect(wrapper.find('.bg-brutal-secondary.shadow-brutal-sm').exists()).toBe(true)
        })

        it('applies secondary style for today', () => {
            dayRef.isToday = true
            const wrapper = mountCalendar()
            expect(wrapper.find('.bg-brutal-secondary').exists()).toBe(true)
        })

        it('applies muted style for outside day', () => {
            dayRef.isOutside = true
            const wrapper = mountCalendar()
            expect(wrapper.find('.opacity-40').exists()).toBe(true)
        })

        it('applies disabled style for disabled day', () => {
            dayRef.isDisabled = true
            const wrapper = mountCalendar()
            expect(wrapper.find('.cursor-not-allowed').exists()).toBe(true)
        })

        it('passes mode prop to VCalendar based on isRange', () => {
            const wrapper = mountCalendar({ isRange: true })
            const stub = findVCalendar(wrapper)
            expect(stub.props('mode')).toBe('range')
        })

        it('passes disabled prop to VCalendar', () => {
            const wrapper = mountCalendar({ disabled: true })
            const stub = findVCalendar(wrapper)
            expect(stub.props('disabled')).toBe(true)
        })

        it('applies rootClasses to the VCalendar class prop', () => {
            const wrapper = mountCalendar()
            const stub = findVCalendar(wrapper)
            const classProp = stub.props('class') as string
            expect(classProp).toContain('border-3')
            expect(classProp).toContain('border-brutal')
            expect(classProp).toContain('shadow-brutal')
        })
    })
})
