<script setup lang="ts">
import { useToast, ToastContainer, Toast, Button } from 'brutx-ui-vue'

const { toasts, removeToast, success } = useToast()

function showToast() {
    success('Success!', 'Your action was completed successfully.')
}
</script>

<template>
    <div>
        <Button @click="showToast">Show Toast</Button>

        <ToastContainer position="bottom-right">
            <Toast
                v-for="toast in toasts"
                :key="toast.id"
                :variant="toast.variant"
                :title="toast.title"
                :description="toast.description"
                :duration="toast.duration"
                @close="removeToast(toast.id)"
            />
        </ToastContainer>
    </div>
</template>
