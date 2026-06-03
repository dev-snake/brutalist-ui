<script setup lang="ts">
import { CodeBlock } from 'brutx-ui-vue'

const jsCode = `const greeting = "Hello Brutalist Design!";
console.log(greeting);

function sum(a, b) {
    return a + b;
}`
</script>

<template>
    <div class="w-full max-w-[500px]">
        <CodeBlock
            :code="jsCode"
            language="javascript"
            filename="app.js"
            show-line-numbers
        />
    </div>
</template>
