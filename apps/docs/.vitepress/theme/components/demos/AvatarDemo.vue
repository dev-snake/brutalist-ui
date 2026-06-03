<script setup lang="ts">
import { Avatar, AvatarFallback } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex items-center gap-4">
        <Avatar size="sm">
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar size="default">
            <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
            <AvatarFallback>XY</AvatarFallback>
        </Avatar>
    </div>
</template>
