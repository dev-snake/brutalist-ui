<script setup lang="ts">
import { GallerySection } from 'brutx-ui-vue'
import type { GalleryItem } from 'brutx-ui-vue'

const items: GalleryItem[] = [
    {
        src: 'https://picsum.photos/seed/brutx1/600/400',
        alt: '项目截图一',
        caption: '首页布局展示',
    },
    {
        src: 'https://picsum.photos/seed/brutx2/600/400',
        alt: '项目截图二',
        caption: '组件库概览',
    },
    {
        src: 'https://picsum.photos/seed/brutx3/600/400',
        alt: '项目截图三',
        caption: '暗色模式效果',
    },
]
</script>

<template>
    <GallerySection :items="items" />
</template>
