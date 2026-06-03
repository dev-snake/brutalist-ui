<script setup lang="ts">
import { SkeletonAvatar, SkeletonText } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex items-center gap-4">
        <SkeletonAvatar />
        <div class="flex-1">
            <SkeletonText :lines="2" last-width="40%" />
        </div>
    </div>
</template>
