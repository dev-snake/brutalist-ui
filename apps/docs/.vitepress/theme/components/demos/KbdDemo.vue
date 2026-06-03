<script setup lang="ts">
import { Kbd } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-6">
        <!-- 快捷键组合示例 -->
        <div class="flex flex-col gap-3">
            <p class="text-sm font-bold opacity-60">常用快捷键</p>
            <div class="flex flex-wrap gap-4 items-center">
                <div class="flex items-center gap-1">
                    <Kbd>⌘</Kbd>
                    <span class="font-bold text-sm mx-1">+</span>
                    <Kbd>K</Kbd>
                    <span class="text-xs font-medium opacity-60 ml-2">打开命令面板</span>
                </div>
                <div class="flex items-center gap-1">
                    <Kbd>Ctrl</Kbd>
                    <span class="font-bold text-sm mx-1">+</span>
                    <Kbd>S</Kbd>
                    <span class="text-xs font-medium opacity-60 ml-2">保存</span>
                </div>
                <div class="flex items-center gap-1">
                    <Kbd>Shift</Kbd>
                    <span class="font-bold text-sm mx-1">+</span>
                    <Kbd>Tab</Kbd>
                    <span class="text-xs font-medium opacity-60 ml-2">反向缩进</span>
                </div>
            </div>
        </div>

        <!-- 尺寸对比 -->
        <div class="flex flex-col gap-3">
            <p class="text-sm font-bold opacity-60">尺寸</p>
            <div class="flex items-end gap-3">
                <Kbd size="sm">Esc</Kbd>
                <Kbd size="md">Enter</Kbd>
                <Kbd size="lg">Space</Kbd>
            </div>
        </div>
    </div>
</template>
