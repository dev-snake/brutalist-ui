<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Search } from 'lucide-vue-next'
import { useLocale } from '@/composables/useLocale'
import { cn } from '../../lib/utils'
import Card from '../card/Card.vue'
import CardContent from '../card/CardContent.vue'
import CardHeader from '../card/CardHeader.vue'
import CardTitle from '../card/CardTitle.vue'
import Pagination from '../pagination/Pagination.vue'
import Badge from '../badge/Badge.vue'
import Input from '../input/Input.vue'
import Button from '../button/Button.vue'

export interface BlogPost {
    title: string
    excerpt: string
    author: string
    date: string
    category: string
    slug: string
}

interface BlogListPageProps {
    title?: string
    posts?: BlogPost[]
    categories?: string[]
    pageSize?: number
    class?: string
}

const props = withDefaults(defineProps<BlogListPageProps>(), {
    title: undefined,
    posts: () => [],
    categories: () => [],
    pageSize: 6,
    class: '',
})

const emit = defineEmits<{
    'post-click': [slug: string]
    'category-filter': [category: string]
}>()

const { t } = useLocale()

const resolvedTitle = computed(() => props.title ?? t('blogListPage.defaultTitle'))
const resolvedSearchPlaceholder = computed(() => t('blogListPage.searchPlaceholder'))
const resolvedAllCategories = computed(() => t('blogListPage.allCategories'))
const resolvedNoPostsFound = computed(() => t('blogListPage.noPostsFound'))

const searchQuery = ref('')
const activeCategory = ref('')

watch(searchQuery, () => {
    currentPage.value = 1
})

const filteredPosts = computed(() => {
    let result = props.posts
    if (activeCategory.value) {
        result = result.filter(post => post.category === activeCategory.value)
    }
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        result = result.filter(post =>
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.author.toLowerCase().includes(query)
        )
    }
    return result
})

const currentPage = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(filteredPosts.value.length / props.pageSize)))

const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * props.pageSize
    return filteredPosts.value.slice(start, start + props.pageSize)
})

function handleCategoryFilter(category: string) {
    activeCategory.value = category
    currentPage.value = 1
    emit('category-filter', category)
}

function handlePostClick(slug: string) {
    emit('post-click', slug)
}

function handlePageChange(page: number) {
    currentPage.value = page
}

const rootClasses = computed(() =>
    cn('min-h-screen bg-brutal-bg p-4 sm:p-8', props.class)
)
</script>

<template>
    <div :class="rootClasses">
        <div class="w-full max-w-4xl mx-auto">
            <slot name="header">
                <div class="mb-8">
                    <h1 class="text-3xl font-black tracking-tight">
                        {{ resolvedTitle }}
                    </h1>
                </div>
            </slot>

            <slot>
                <div class="mb-6 flex flex-col sm:flex-row gap-4">
                    <div class="relative flex-1">
                        <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 stroke-[3] text-brutal-fg" />
                        <Input
                            v-model="searchQuery"
                            :placeholder="resolvedSearchPlaceholder"
                            class="pl-10"
                        />
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <Button
                            :variant="activeCategory === '' ? 'primary' : 'outline'"
                            size="sm"
                            @click="handleCategoryFilter('')"
                        >
                            {{ resolvedAllCategories }}
                        </Button>
                        <Badge
                            v-for="category in categories"
                            :key="category"
                            :variant="activeCategory === category ? 'primary' : 'default'"
                            size="sm"
                            class="cursor-pointer active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all"
                            @click="handleCategoryFilter(category)"
                        >
                            {{ category }}
                        </Badge>
                    </div>
                </div>

                <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card
                        v-for="post in paginatedPosts"
                        :key="post.slug"
                        variant="elevated"
                        class="cursor-pointer hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-y-[var(--brutal-pressed-offset,2px)] active:shadow-none transition-all"
                        @click="handlePostClick(post.slug)"
                    >
                        <CardHeader>
                            <div class="flex items-center justify-between">
                                <Badge variant="accent" size="sm">{{ post.category }}</Badge>
                                <span class="text-xs font-bold text-brutal-fg">{{ post.date }}</span>
                            </div>
                            <CardTitle class="text-lg">{{ post.title }}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p class="text-sm font-medium text-brutal-fg line-clamp-3">{{ post.excerpt }}</p>
                            <div class="mt-3 text-xs font-bold text-brutal-fg">
                                {{ post.author }}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div v-if="filteredPosts.length === 0" class="text-center py-12">
                    <p class="text-lg font-bold text-brutal-fg">{{ resolvedNoPostsFound }}</p>
                </div>

                <div v-if="totalPages > 1" class="mt-8 flex justify-center">
                    <Pagination
                        :current-page="currentPage"
                        :total-pages="totalPages"
                        @update:current-page="handlePageChange"
                    />
                </div>
            </slot>

            <slot name="footer" />
        </div>
    </div>
</template>
