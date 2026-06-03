import type { InjectionKey, Ref } from 'vue'
import type { FormContext as VeeFormContext } from 'vee-validate'

export interface FormFieldContext {
    name: string
    error: Ref<string | undefined>
    value: Ref<unknown>
    setValue: (value: unknown) => void
}

export interface FormItemContext {
    id: string
    formItemId: string
    formDescriptionId: string
    formMessageId: string
}

export const formContextKey: InjectionKey<VeeFormContext> = Symbol('formContext')
export const formFieldKey: InjectionKey<FormFieldContext> = Symbol('formField')
export const formItemKey: InjectionKey<FormItemContext> = Symbol('formItem')
