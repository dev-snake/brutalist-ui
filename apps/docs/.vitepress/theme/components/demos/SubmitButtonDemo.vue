<script setup lang="ts">
import { SubmitButton } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex items-center gap-4">
        <SubmitButton>Submit</SubmitButton>
        <SubmitButton :loading="true">Submit</SubmitButton>
    </div>
</template>
