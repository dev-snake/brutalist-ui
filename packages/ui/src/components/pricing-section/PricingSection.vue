<script setup lang="ts">
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import Button from '../button/Button.vue'
import Card from '../card/Card.vue'
import CardHeader from '../card/CardHeader.vue'
import CardContent from '../card/CardContent.vue'
import CardTitle from '../card/CardTitle.vue'
import CardDescription from '../card/CardDescription.vue'
import CardFooter from '../card/CardFooter.vue'
import Badge from '../badge/Badge.vue'

export interface BrutalistPricingPlan {
    name: string
    price: string
    description: string
    features: string[]
    ctaText: string
    popular?: boolean
    variant: 'primary' | 'secondary' | 'default'
}

interface PricingSectionProps {
    title?: string
    subtitle?: string
    plans?: BrutalistPricingPlan[]
    class?: string
}

const props = withDefaults(defineProps<PricingSectionProps>(), {
    title: 'Simple, Transparent Brutalist Plans',
    subtitle: '',
    plans: () => [],
    class: '',
})

const emit = defineEmits<{
    'plan-select': [planName: string]
}>()

const rootClasses = computed(() => cn('w-full max-w-5xl mx-auto', props.class))

function getPlanCardClasses(plan: BrutalistPricingPlan) {
    return cn(plan.popular && 'bg-brutal-accent/20')
}
</script>

<template>
    <div :class="rootClasses">
        <div class="text-center mb-10">
            <h2 class="text-3xl font-black tracking-tight">
{{ title }}
</h2>
            <p v-if="subtitle" class="mt-2 text-brutal-muted-foreground font-medium">
{{ subtitle }}
</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="plan in plans" :key="plan.name" class="relative">
                <div v-if="plan.popular" class="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rotate-[1.5deg]">
                    <Badge variant="primary" class="animate-pulse">
Most Popular Tier
</Badge>
                </div>
                <Card :variant="plan.variant" :class="getPlanCardClasses(plan)">
                    <CardHeader>
                        <CardTitle class="text-xl">
{{ plan.name }}
</CardTitle>
                        <CardDescription>{{ plan.description }}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="mb-6">
                            <span class="text-4xl font-black">{{ plan.price }}</span>
                            <span class="text-sm font-bold text-brutal-muted-foreground">/ lifetime</span>
                        </div>
                        <ul class="space-y-3">
                            <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2">
                                <div class="flex h-5 w-5 items-center justify-center bg-brutal-success text-brutal-fg">
                                    <Check class="h-3 w-3 stroke-[3]" />
                                </div>
                                <span class="text-sm font-medium">{{ feature }}</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button :variant="plan.variant === 'default' ? 'outline' : plan.variant" class="w-full" @click="emit('plan-select', plan.name)">
{{ plan.ctaText }}
</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
</template>
