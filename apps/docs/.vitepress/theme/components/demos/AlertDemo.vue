<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-4 w-full max-w-lg">
        <Alert variant="default">
            <AlertTitle>Default</AlertTitle>
            <AlertDescription>This is a default alert with some information.</AlertDescription>
        </Alert>
        <Alert variant="primary">
            <AlertTitle>Primary</AlertTitle>
            <AlertDescription>This is a primary alert for important messages.</AlertDescription>
        </Alert>
        <Alert variant="danger">
            <AlertTitle>Destructive</AlertTitle>
            <AlertDescription>This is a destructive alert for critical warnings.</AlertDescription>
        </Alert>
    </div>
</template>
