<script setup lang="ts">
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
} from 'brutx-ui-vue'
</script>

<template>
    <Card class="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here with some details.</CardDescription>
        </CardHeader>
        <CardContent>
            <p class="text-sm font-medium">
                This is the card content area. You can place any content here such as
                text, images, or other components.
            </p>
        </CardContent>
        <CardFooter>
            <Button variant="primary">Action</Button>
        </CardFooter>
    </Card>
</template>
