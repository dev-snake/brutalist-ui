<script setup lang="ts">
import { computed, ref } from 'vue'
import { Upload } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import { useLocale } from '@/composables/useLocale'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import Button from '../button/Button.vue'
import Progress from '../progress/Progress.vue'
import Spinner from '../spinner/Spinner.vue'

interface UploadCardProps {
    title?: string
    description?: string
    accept?: string
    maxSize?: number
    uploading?: boolean
    progress?: number
    class?: string
}

const props = withDefaults(defineProps<UploadCardProps>(), {
    title: undefined,
    description: undefined,
    accept: undefined,
    maxSize: undefined,
    uploading: false,
    progress: 0,
    class: '',
})

const { t } = useLocale()

const emit = defineEmits<{
    upload: [files: File[]]
    drop: [files: File[]]
}>()

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const rootClasses = computed(() => cn('w-full max-w-lg mx-auto', props.class))

const resolvedTitle = computed(() => props.title ?? t('uploadCard.defaultTitle'))
const resolvedDescription = computed(() => props.description ?? t('uploadCard.defaultDescription'))
const resolvedBrowseText = computed(() => t('uploadCard.browseText'))
const resolvedDropText = computed(() => t('uploadCard.dropText'))

const dropZoneClasses = computed(() =>
    cn(
        'flex flex-col items-center justify-center p-8 border-3 border-dashed border-brutal rounded-brutal transition-all cursor-pointer',
        isDragging.value ? 'bg-brutal-muted shadow-brutal' : 'bg-brutal-bg',
        props.uploading && 'pointer-events-none'
    )
)

function handleDragEnter(event: DragEvent) {
    event.preventDefault()
    isDragging.value = true
}

function handleDragOver(event: DragEvent) {
    event.preventDefault()
}

function handleDragLeave(event: DragEvent) {
    event.preventDefault()
    isDragging.value = false
}

function handleDrop(event: DragEvent) {
    event.preventDefault()
    isDragging.value = false
    const files = Array.from(event.dataTransfer?.files ?? [])
    if (files.length > 0) {
        emit('drop', files)
    }
}

function handleBrowse() {
    fileInput.value?.click()
}

function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement
    const files = Array.from(target.files ?? [])
    if (files.length > 0) {
        emit('upload', files)
    }
    target.value = ''
}
</script>

<template>
    <Card :class="rootClasses" variant="default">
        <CardContent class="pt-6">
            <div
                :class="dropZoneClasses"
                @dragenter="handleDragEnter"
                @dragover="handleDragOver"
                @dragleave="handleDragLeave"
                @drop="handleDrop"
                @click="handleBrowse"
            >
                <input
                    ref="fileInput"
                    type="file"
                    multiple
                    :accept="accept"
                    class="hidden"
                    @change="handleFileChange"
                >
                <template v-if="uploading">
                    <Spinner size="default" class="mb-4" />
                    <Progress :model-value="progress" class="w-full max-w-xs mb-2" />
                </template>
                <template v-else>
                    <Upload class="h-10 w-10 stroke-[3] text-brutal-muted-foreground mb-4" />
                    <h3 class="text-lg font-black tracking-tight">
{{ resolvedTitle }}
</h3>
                    <p class="mt-1 text-sm text-brutal-muted-foreground font-medium">
{{ resolvedDescription }}
</p>
                    <Button variant="primary" size="sm" class="mt-4" @click.stop="handleBrowse">
                        {{ resolvedBrowseText }}
                    </Button>
                    <p class="mt-2 text-xs text-brutal-muted-foreground font-medium">
{{ resolvedDropText }}
</p>
                </template>
            </div>
            <slot name="actions" />
        </CardContent>
    </Card>
</template>
