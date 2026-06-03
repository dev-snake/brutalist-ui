<script setup lang="ts">
import { ref } from 'vue'
import { HardcoreInput } from 'brutx-ui-vue'

const value1 = ref('')
const value2 = ref('')

const minLength = (val: string) => val.length >= 5 || '至少需要 5 个字符'
const hasNumber = (val: string) => /\d/.test(val) || '必须包含数字'
</script>

<template>
    <div class="flex flex-col gap-8 max-w-md">
        <div>
            <p class="text-sm font-bold mb-2">基础用法（Blur 校验）</p>
            <HardcoreInput
                v-model="value1"
                placeholder="输入至少 5 个字符..."
                :rules="[minLength]"
                validate-on="blur"
            />
        </div>

        <div>
            <p class="text-sm font-bold mb-2">多规则校验（Input 实时校验）</p>
            <HardcoreInput
                v-model="value2"
                placeholder="至少 5 字符且含数字..."
                :rules="[minLength, hasNumber]"
                validate-on="input"
            />
        </div>

        <div>
            <p class="text-sm font-bold mb-2">禁用音效</p>
            <HardcoreInput
                placeholder="静默输入..."
                :sound="false"
                :rules="[minLength]"
            />
        </div>
    </div>
</template>
