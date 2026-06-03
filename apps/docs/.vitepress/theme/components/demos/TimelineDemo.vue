<script setup lang="ts">
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from 'brutx-ui-vue'
</script>

<template>
    <div class="flex flex-col gap-8 w-full max-w-[500px]">
        <div>
            <h3 class="text-sm font-black mb-4">垂直时间线</h3>
            <Timeline orientation="vertical">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="primary" shape="circle">1</TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent class="pl-2">
                        <div class="font-black text-base">BrutxUI 项目立项</div>
                        <div class="text-xs text-brutal-fg/60 mt-1">2026-06-01</div>
                        <p class="text-sm text-brutal-fg/80 mt-2 font-normal">
                            启动新一代 Neo-Brutalist Vue 3 组件库项目，确定基础元数据及重度边框与实心阴影设计规范。
                        </p>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="accent" shape="square">2</TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent class="pl-2">
                        <div class="font-black text-base">发布首个 Alpha 版本</div>
                        <div class="text-xs text-brutal-fg/60 mt-1">2026-06-15</div>
                        <p class="text-sm text-brutal-fg/80 mt-2 font-normal">
                            完成核心 UI 组件的编写与 CLI 初始化安装工具打包，并在 npm 仓库进行发布。
                        </p>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="success" shape="diamond">3</TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent class="pl-2">
                        <div class="font-black text-base">正式版首发 (V1.0.0)</div>
                        <div class="text-xs text-brutal-fg/60 mt-1">2026-07-01</div>
                        <p class="text-sm text-brutal-fg/80 mt-2 font-normal">
                            完善组件文档与预览网站，并支持 AI 代码生成一键集成。
                        </p>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    </div>
</template>
