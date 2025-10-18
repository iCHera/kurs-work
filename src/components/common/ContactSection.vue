<template>
  <section id="contact" class="contact-section section">
    <div class="container contact-content-wrapper">
      <div class="text-block-contact">
        <h2 class="section-title">Готовы к сотрудничеству?</h2>
        <p class="section-subtitle">
          Напишите мне для получения бесплатной консультации и оценки сроков. Я гарантирую быструю
          обратную связь, конфиденциальность и индивидуальный подход к вашему техническому заданию.
        </p>

        <p class="section-subtitle">
          Для начала работы достаточно описать тему, требования ВУЗа и желаемые сроки сдачи.
        </p>
      </div>

      <div class="contact-info-card">
        <h3 class="contact-info-title">Свяжитесь со мной (Telegram)</h3>

        <div class="contact-details">
          <p class="contact-detail-label">Максимально оперативно:</p>
          <p class="contact-detail-value">Ответ в течение 15 минут</p>
        </div>

        <div class="contact-details">
          <p class="contact-detail-label">Формат связи:</p>
          <p class="contact-detail-value">Telegram: @Ilya_Belove</p>
        </div>

        <AppButton
          tag="a"
          href="https://t.me/Ilya_Belove"
          target="_blank"
          variant="primary"
          size="lg"
          class="telegram-button"
        >
          Написать в Telegram
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
</script>

<style scoped>
.contact-section {
  background-color: var(--color-background);
  padding-top: 65px;
  color: var(--color-text-dark);
}

.section {
  padding-bottom: var(--spacing-xl);
}

.contact-header {
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--color-secondary);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contact-content-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .contact-content-wrapper {
    grid-template-columns: 2fr 1.2fr;
    align-items: center;
  }
}

.contact-info-card {
  background-color: #f0f0f0;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-info-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: var(--spacing-md);
}

.contact-detail-label {
  font-size: 0.9rem;
  color: var(--color-secondary);
}

.contact-detail-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.telegram-button {
  width: 100%;
  margin-top: auto;
}

.custom-cta {
  display: inline-flex;
  align-items: center;
}

.cta-link-span {
  display: inline-block;
  margin-left: 5px;
  transition: transform 0.3s ease-in-out;
  vertical-align: baseline;
}

.custom-cta:hover .cta-link-span {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .section {
    padding-bottom: 0;
  }
}
</style>
