import { createToast } from './useToast'

describe('useToast', () => {
    beforeEach(() => {
        const { clearToasts } = createToast()
        clearToasts()
    })

    it('addToast adds a toast to the list', () => {
        const { toasts, addToast } = createToast()
        addToast({ title: 'Test Toast' })
        expect(toasts.value.length).toBe(1)
        expect(toasts.value[0].title).toBe('Test Toast')
    })

    it('removeToast removes a toast by id', () => {
        const { toasts, addToast, removeToast } = createToast()
        const id = addToast({ title: 'Test Toast' })
        expect(toasts.value.length).toBe(1)
        removeToast(id)
        expect(toasts.value.length).toBe(0)
    })

    it('clearToasts removes all toasts', () => {
        const { toasts, addToast, clearToasts } = createToast()
        addToast({ title: 'Toast 1' })
        addToast({ title: 'Toast 2' })
        addToast({ title: 'Toast 3' })
        expect(toasts.value.length).toBe(3)
        clearToasts()
        expect(toasts.value.length).toBe(0)
    })

    it('success helper adds correct variant', () => {
        const { toasts, success } = createToast()
        success('Success!', 'It worked')
        expect(toasts.value.length).toBe(1)
        expect(toasts.value[0].variant).toBe('success')
        expect(toasts.value[0].title).toBe('Success!')
        expect(toasts.value[0].description).toBe('It worked')
    })

    it('error helper adds correct variant', () => {
        const { toasts, error } = createToast()
        error('Error!', 'Something went wrong')
        expect(toasts.value.length).toBe(1)
        expect(toasts.value[0].variant).toBe('error')
        expect(toasts.value[0].title).toBe('Error!')
        expect(toasts.value[0].description).toBe('Something went wrong')
    })

    it('warning helper adds correct variant', () => {
        const { toasts, warning } = createToast()
        warning('Warning!', 'Be careful')
        expect(toasts.value.length).toBe(1)
        expect(toasts.value[0].variant).toBe('warning')
        expect(toasts.value[0].title).toBe('Warning!')
        expect(toasts.value[0].description).toBe('Be careful')
    })

    it('info helper adds correct variant', () => {
        const { toasts, info } = createToast()
        info('Info', 'For your information')
        expect(toasts.value.length).toBe(1)
        expect(toasts.value[0].variant).toBe('info')
        expect(toasts.value[0].title).toBe('Info')
        expect(toasts.value[0].description).toBe('For your information')
    })

    it('each toast gets a unique id', () => {
        const { toasts, addToast } = createToast()
        addToast({ title: 'Toast 1' })
        addToast({ title: 'Toast 2' })
        const ids = toasts.value.map((t) => t.id)
        expect(new Set(ids).size).toBe(ids.length)
    })

    it('addToast returns the toast id', () => {
        const { addToast } = createToast()
        const id = addToast({ title: 'Test' })
        expect(typeof id).toBe('string')
        expect(id.length).toBeGreaterThan(0)
    })

    it('removeToast only removes the specified toast', () => {
        const { toasts, addToast, removeToast } = createToast()
        const id1 = addToast({ title: 'Toast 1' })
        const id2 = addToast({ title: 'Toast 2' })
        removeToast(id1)
        expect(toasts.value.length).toBe(1)
        expect(toasts.value[0].id).toBe(id2)
    })

    it('supports toast with description', () => {
        const { toasts, addToast } = createToast()
        addToast({ title: 'Test', description: 'A description' })
        expect(toasts.value[0].description).toBe('A description')
    })

    it('supports toast with duration', () => {
        const { toasts, addToast } = createToast()
        addToast({ title: 'Test', duration: 3000 })
        expect(toasts.value[0].duration).toBe(3000)
    })
})
