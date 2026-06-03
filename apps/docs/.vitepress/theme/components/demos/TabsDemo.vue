<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'brutx-ui-vue'
</script>

<template>
    <Tabs default-value="account" class="w-full max-w-sm">
        <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
            <p class="text-sm font-medium">
                Make changes to your account here. Click save when you're done.
            </p>
        </TabsContent>
        <TabsContent value="password">
            <p class="text-sm font-medium">
                Change your password here. After saving, you'll be logged out.
            </p>
        </TabsContent>
    </Tabs>
</template>
