<script setup lang="ts">
import {
    Command,
    CommandInput,
    CommandList,
    CommandGroup,
    CommandItem,
} from 'brutx-ui-vue'
</script>

<template>
    <Command class="w-full max-w-md border-3 border-brutal shadow-brutal">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
            <CommandGroup heading="Suggestions">
                <CommandItem value="component-library">Component Library</CommandItem>
                <CommandItem value="installation">Installation</CommandItem>
            </CommandGroup>
        </CommandList>
    </Command>
</template>
