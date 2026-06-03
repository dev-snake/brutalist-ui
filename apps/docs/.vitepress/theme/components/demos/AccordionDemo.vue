<script setup lang="ts">
import { ref } from 'vue'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'brutx-ui-vue'

const activeItem = ref('item-1')
</script>

<template>
    <div class="w-full max-w-[500px]">
        <Accordion type="single" collapsible v-model="activeItem">
            <AccordionItem value="item-1">
                <AccordionTrigger>什么是 BrutxUI？</AccordionTrigger>
                <AccordionContent>
                    BrutxUI 是一个面向 Vue 3 + Tailwind CSS 的 Neo-Brutalist（新粗野主义）风格 UI 组件库。它具有高对比度的边框、实心阴影、大胆的配色以及极具物理触感的交互设计。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>它支持无障碍吗？</AccordionTrigger>
                <AccordionContent>
                    是的。BrutxUI 采用 reka-ui 无头组件原语作为底层骨架，内置完善的 WAI-ARIA 规范和键盘导航逻辑。
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" variant="interactive">
                <AccordionTrigger>为什么它会有点击位移？</AccordionTrigger>
                <AccordionContent>
                    这是粗野主义交互的灵魂——所有的可点击元素在被按下时都会发生位移（并清除阴影），以便为用户提供极度拟真的物理反馈。
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
</template>
