<script setup lang="ts">
import { DataTableSection } from 'brutx-ui-vue'
import type { ColumnDef } from 'brutx-ui-vue'

const columns: ColumnDef[] = [
    { key: 'name', label: '姓名', sortable: true },
    { key: 'email', label: '邮箱', sortable: true },
    { key: 'role', label: '角色', sortable: true },
    { key: 'status', label: '状态' },
]

const data: Record<string, unknown>[] = [
    { name: '张三', email: 'zhangsan@example.com', role: '管理员', status: '活跃' },
    { name: '李四', email: 'lisi@example.com', role: '编辑', status: '活跃' },
    { name: '王五', email: 'wangwu@example.com', role: '访客', status: '未激活' },
    { name: '赵六', email: 'zhaoliu@example.com', role: '编辑', status: '活跃' },
    { name: '孙七', email: 'sunqi@example.com', role: '管理员', status: '已禁用' },
]
</script>

<template>
    <DataTableSection :columns="columns" :rows="data" />
</template>
