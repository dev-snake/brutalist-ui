<script setup lang="ts">
import { ref } from 'vue'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemText, TagsInputItemDelete } from 'brutx-ui-vue'

const tags = ref(['vue', 'tailwind', 'brutalism'])
</script>

<template>
    <div class="w-full max-w-[400px]">
        <TagsInput v-model="tags">
            <TagsInputItem v-for="tag in tags" :key="tag" :value="tag" variant="primary">
                <TagsInputItemText>{{ tag }}</TagsInputItemText>
                <TagsInputItemDelete />
            </TagsInputItem>
            <TagsInputInput placeholder="添加标签..." />
        </TagsInput>
    </div>
</template>
