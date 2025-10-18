<template>
  <section id="recommended" class="recommended-section section">
    <div class="container">
      <h1 class="section-title-recommend">Смотрите также</h1>

      <div class="catalog-grid">
        <RouterLink
          v-for="item in recommendedProducts"
          :key="item.id"
          :to="{ name: 'Product', params: { id: item.id } }"
          class="course-card-link"
        >
          <div class="course-card">
            <div class="card-image-box">
              <img :src="`${base}${item.imagePath}`" :alt="item.title" class="card-image" />
            </div>

            <div class="card-header-content">
              <h3 class="card-title">{{ item.title }}</h3>
            </div>

            <p class="card-description">{{ item.description }}</p>

            <div class="card-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <div class="card-footer">
              <span class="card-price">{{ item.price }} BYN</span>
              <AppButton size="sm" tag="button" variant="primary"> Подробнее </AppButton>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { courseCatalog, type CourseItem } from '@/data/catalog'
import AppButton from '@/components/ui/AppButton.vue'

const base = import.meta.env.BASE_URL

const props = defineProps<{
  currentProductId: string | number
}>()

const recommendedProducts = computed<CourseItem[]>(() => {
  const excludeId = parseInt(props.currentProductId.toString(), 10)

  return courseCatalog.filter((item) => item.id !== excludeId)
})
</script>

<style scoped>
.recommended-section {
  padding-bottom: 0;
  padding: var(--spacing-md) 0;
  color: var(--color-text-light);
}

.container {
  padding-top: 20px;
  padding-bottom: 20px;
}

.section-title-recommend {
  color: var(--color-primary);
  text-align: center;
  padding: var(--spacing-md) 0;
}

.recommended-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.section-title {
  color: var(--color-primary);
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: var(--spacing-xl);
}

.course-card-link {
  text-decoration: none;
  display: block;
}

.course-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 0 25px 0;
  background-color: #2c2c2c;
  color: var(--color-text-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}

.card-image-box {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 20px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.course-card:hover .card-image {
  transform: scale(1.05);
}

.card-header-content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 25px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-light);
}

.card-description {
  flex-grow: 1;
  color: var(--color-border);
  line-height: 1.5;
  padding: 0 25px;
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 25px;
  margin-bottom: var(--spacing-lg);
}

.tag {
  background-color: #444;
  color: #fff;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 6px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding: var(--spacing-md) 25px;
  border-top: 1px solid #444;
}

.card-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}
</style>
