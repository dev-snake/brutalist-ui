<script setup lang="ts">
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
    Button,
} from 'brutx-ui-vue'
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button variant="primary">Open</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you are done.
                </DialogDescription>
            </DialogHeader>
            <p class="text-sm font-medium">
                This is the dialog content area. You can add form fields or other
                interactive elements here.
            </p>
            <DialogFooter>
                <DialogClose as-child>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="primary">Save</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
