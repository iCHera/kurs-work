<template>
  <div class="product-details-content">
    <div class="product-header">
      <h1 class="product-title">{{ product.title }}</h1>
      <p class="product-price">{{ product.price }} BYN</p>
    </div>

    <div class="product-details-main-grid">
      <div class="product-visuals">
        <div class="product-image-box" @click="openFullScreen()">
          <img :src="currentImagePath" :alt="product.title" class="product-image" />
        </div>

        <div class="gallery-thumbnails">
          <img
            v-for="(imagePath, index) in allImagePaths"
            :key="index"
            :src="getImageUrl(imagePath)"
            :alt="`${product.title} скриншот ${index + 1}`"
            class="thumbnail-image"
            @click="setMainImage(imagePath)"
          />
        </div>
      </div>

      <div class="product-info-block">
        <h3 class="info-subtitle">О проекте</h3>
        <p class="product-description-full">{{ product.description }}</p>

        <div class="tags-container">
          <span v-for="tag in product.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>

        <AppButton
          tag="a"
          href="#contact-form"
          variant="primary"
          size="lg"
          class="cta-button-details"
        >
          Заказать работу
        </AppButton>
      </div>
    </div>
  </div>

  <Transition name="fade-in-out">
    <div v-if="fullScreenImage" class="fullscreen-overlay">
      <div class="fullscreen-image-container">
        <img :src="getImageUrl(fullScreenImage)" :alt="product.title" class="fullscreen-image" />
      </div>
      <span class="close-button-lightbox" @click="closeFullScreen"> &times; </span>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CourseItem } from '@/data/catalog'
import AppButton from '@/components/ui/AppButton.vue'

const props = defineProps<{ product: CourseItem }>()

const currentImagePath = ref(props.product.imagePath)

const allImagePaths = [props.product.imagePath, ...props.product.galleryPaths]

function setMainImage(newPath: string) {
  currentImagePath.value = newPath
}

function getImageUrl(path: string): string {
  return new URL(path, import.meta.url).href
}

const fullScreenImage = ref<string | null>(null)

function openFullScreen() {
  fullScreenImage.value = currentImagePath.value
}

function closeFullScreen() {
  fullScreenImage.value = null
}
</script>

<style scoped>
.product-details-content {
  background-color: #2c2c2c;
  color: var(--color-text-light);
  padding: 40px 0;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  margin-top: 30px;
}

.product-header {
  text-align: center;
  padding: 0 var(--spacing-md);
  margin-bottom: 40px;
}

.product-title {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-light);
}

.product-details-main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding: 0 var(--spacing-lg);
}

@media (min-width: 900px) {
  .product-details-main-grid {
    grid-template-columns: 2fr 1.5fr;
    align-items: flex-start;
  }
}

.product-image-box {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: var(--spacing-md);
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity 0.5s ease;
}

.gallery-thumbnails {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: var(--spacing-lg);
}

.thumbnail-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.8;
  transition:
    opacity 0.3s ease,
    border-color 0.3s ease;
}

.thumbnail-image:hover,
.thumbnail-image.active {
  opacity: 1;
  border-color: var(--color-primary);
}

.info-subtitle {
  font-size: 1.8rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.product-description-full {
  line-height: 1.7;
  color: var(--color-border);
  margin-bottom: var(--spacing-lg);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: var(--spacing-xl);
}

.tag {
  background-color: #444;
  color: #fff;
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 8px;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-image-container {
  max-width: 85vw;
  max-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.fullscreen-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.close-button-lightbox {
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  background-color: transparent;
  color: white;
  font-size: 60px;
  font-weight: 300;
  line-height: 1;
  padding: 0 10px;
  z-index: 10000;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.close-button-lightbox:hover {
  opacity: 1;
}

.fade-in-out-enter-active,
.fade-in-out-leave-active {
  transition: opacity 0.3s ease;
}

.fade-in-out-enter-from,
.fade-in-out-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .fullscreen-image-container {
    height: 100vh;
    padding: 0;
  }
}
</style>
