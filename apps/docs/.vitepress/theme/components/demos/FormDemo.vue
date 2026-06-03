<script setup lang="ts">
import { ref } from 'vue'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    Input,
    Button,
} from 'brutx-ui-vue'

const email = ref('')
const password = ref('')

function onSubmit() {
    // eslint-disable-next-line no-alert
    alert(`Email: ${email.value}, Password: ${password.value}`)
}
</script>

<template>
    <div class="w-full max-w-sm">
        <Form class="space-y-4" @submit="onSubmit">
            <FormField name="email">
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input
                            v-model="email"
                            type="email"
                            placeholder="you@example.com"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField name="password">
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input
                            v-model="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <Button type="submit" class="w-full">
                Sign In
            </Button>
        </Form>
    </div>
</template>
