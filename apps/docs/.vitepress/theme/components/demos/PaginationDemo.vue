<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'brutx-ui-vue'

const currentPage = ref(1)
</script>

<template>
    <Pagination
        v-model:current-page="currentPage"
        :total-pages="3"
    />
</template>
