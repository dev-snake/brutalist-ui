<script setup lang="ts">
import { ActivityLogPage } from 'brutx-ui-vue'
import type { ActivityEntry } from 'brutx-ui-vue'

const entries: ActivityEntry[] = [
    {
        id: '1',
        action: '用户登录',
        user: '张三',
        timestamp: '2026-06-03 10:30',
        details: 'IP: 192.168.1.1',
        type: 'info',
    },
    {
        id: '2',
        action: '修改密码',
        user: '李四',
        timestamp: '2026-06-03 09:15',
        details: '密码已更新',
        type: 'success',
    },
    {
        id: '3',
        action: '登录失败',
        user: '王五',
        timestamp: '2026-06-03 08:45',
        details: '密码错误 3 次',
        type: 'error',
    },
    {
        id: '4',
        action: '存储空间不足',
        user: '系统',
        timestamp: '2026-06-03 08:00',
        details: '已使用 90% 存储',
        type: 'warning',
    },
    {
        id: '5',
        action: '文件上传',
        user: '赵六',
        timestamp: '2026-06-02 17:30',
        details: '上传 report.pdf',
        type: 'info',
    },
]
</script>

<template>
    <div class="w-full overflow-x-auto">
        <ActivityLogPage :activities="entries" />
    </div>
</template>
