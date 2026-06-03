<script setup lang="ts">
import {
    TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Button,
} from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-wrap items-center gap-4">
        <TooltipProvider :delay-duration="0">
            <Tooltip>
                <TooltipTrigger>
                    <Button>无延迟</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>delayDuration = 0</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <TooltipProvider :delay-duration="700">
            <Tooltip>
                <TooltipTrigger>
                    <Button variant="secondary">默认延迟</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>delayDuration = 700</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        <TooltipProvider :delay-duration="1500">
            <Tooltip>
                <TooltipTrigger>
                    <Button variant="outline">长延迟</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>delayDuration = 1500</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
</template>
