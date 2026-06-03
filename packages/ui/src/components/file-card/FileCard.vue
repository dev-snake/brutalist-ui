<script setup lang="ts">
import { computed } from 'vue'
import { FileIcon, Download } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import Badge from '../badge/Badge.vue'
import Button from '../button/Button.vue'

interface FileCardProps {
    fileName?: string
    fileSize?: string
    fileType?: string
    class?: string
}

const props = withDefaults(defineProps<FileCardProps>(), {
    fileName: undefined,
    fileSize: '',
    fileType: '',
    class: '',
})

const { t } = useLocale()

const emit = defineEmits<{
    download: []
}>()

const rootClasses = computed(() => cn('w-full max-w-sm', props.class))

const resolvedFileName = computed(() => props.fileName ?? t('fileCard.defaultFileName'))
const resolvedDownload = computed(() => t('fileCard.download'))
</script>

<template>
    <Card :class="rootClasses" variant="default">
        <CardContent>
            <div class="flex items-start gap-4">
                <div class="shrink-0 h-12 w-12 flex items-center justify-center bg-brutal-accent border-3 border-brutal shadow-brutal-sm">
                    <FileIcon class="h-6 w-6 stroke-[2.5]" />
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-black text-sm truncate">
{{ resolvedFileName }}
</p>
                    <div class="mt-1 flex items-center gap-2">
                        <Badge v-if="fileType" variant="secondary" size="sm">
                            {{ fileType }}
                        </Badge>
                        <span v-if="fileSize" class="text-xs text-brutal-muted-foreground font-medium">
                            {{ fileSize }}
                        </span>
                    </div>
                </div>
            </div>
            <Button variant="primary" size="sm" class="mt-4 w-full" @click="emit('download')">
                <Download class="mr-2 h-4 w-4 stroke-[3]" />
                {{ resolvedDownload }}
            </Button>
            <slot name="actions" />
        </CardContent>
    </Card>
</template>
