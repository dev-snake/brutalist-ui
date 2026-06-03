<script setup lang="ts">
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from 'brutx-ui-vue'
</script>

<template>
    <div class="w-full max-w-sm">
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="Select a fruit..." />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
            </SelectContent>
        </Select>
    </div>
</template>
