<script setup lang="ts">
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
} from 'brutx-ui-vue'
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <Button variant="outline">
                Open
            </Button>
        </PopoverTrigger>
        <PopoverContent>
            <p class="text-sm font-medium">
                Popover content goes here.
            </p>
        </PopoverContent>
    </Popover>
</template>
