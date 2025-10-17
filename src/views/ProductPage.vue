<template>
  <section class="product-page container section">
    <div v-if="!product" class="not-found-message">
      <h2>Продукт с ID {{ props.id }} не найден</h2>
      <p>Проверьте корректность ссылки.</p>
    </div>

    <ProductSection v-else :product="product" />
    <RecommendedProducts :current-product-id="props.id" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { courseCatalog, type CourseItem } from '@/data/catalog'
import ProductSection from '@/components/common/ProductSection.vue'
import RecommendedProducts from '@/components/common/RecommendedProducts.vue'

const props = defineProps<{ id: string }>()

const product = computed<CourseItem | undefined>(() => {
  const productId = parseInt(props.id, 10)
  return courseCatalog.find((item) => item.id === productId)
})
</script>

<style scoped></style>
