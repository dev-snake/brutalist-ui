<script setup lang="ts">
import {
    Sheet, SheetTrigger, SheetContent, SheetHeader,
    SheetTitle, SheetDescription, SheetFooter, Button,
} from 'brutx-ui-vue'
</script>

<template>
    <Sheet>
        <SheetTrigger>
            <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
            <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                    This is a sheet description. You can put any content here.
                </SheetDescription>
            </SheetHeader>
            <div class="py-4">
                <p class="text-sm font-medium">
                    This is the main content area of the sheet. You can place forms,
                    navigation links, or any other content here.
                </p>
            </div>
            <SheetFooter>
                <Button>Save changes</Button>
            </SheetFooter>
        </SheetContent>
    </Sheet>
</template>
