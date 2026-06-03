<script setup lang="ts">
import {
    Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from 'brutx-ui-vue'

const rows = [
    { name: 'Invoice #001', status: 'Paid', amount: '$250.00' },
    { name: 'Invoice #002', status: 'Pending', amount: '$150.00' },
]
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="row in rows" :key="row.name">
                <TableCell>{{ row.name }}</TableCell>
                <TableCell>{{ row.status }}</TableCell>
                <TableCell>{{ row.amount }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
