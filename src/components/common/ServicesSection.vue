<template>
  <section id="services" class="services-section section">
    <div class="container content-grid-services">
      <header class="services-header">
        <h2 class="section-title">Мои услуги и гарантии</h2>
        <p class="section-subtitle">
          Я предлагаю полный цикл работы над вашим проектом. Вы платите не за время, а за результат.
        </p>
      </header>

      <div class="services-cards-grid">
        <div class="service-card">
          <div class="card-icon">📚</div>
          <h3 class="card-title">Проработка структуры</h3>
          <p class="card-description">
            Глубокий анализ темы, подбор актуальной литературы, составление уникального плана,
            который будет одобрен вашим научным руководителем.
          </p>
        </div>

        <div class="service-card">
          <div class="card-icon">💻</div>
          <h3 class="card-title">Техническая реализация</h3>
          <p class="card-description">
            Разработка программной части (Frontend/Backend) с использованием современных технологий.
            Весь код тщательно документируется.
          </p>
        </div>

        <div class="service-card">
          <div class="card-icon">✅</div>
          <h3 class="card-title">Антиплагиат</h3>
          <p class="card-description">
            Гарантия прохождения проверки на уникальность. Я использую профессиональные методы,
            исключающие скрытые символы и другие уловки.
          </p>
        </div>

        <div class="service-card">
          <div class="card-icon">🔄</div>
          <h3 class="card-title">Бесплатные доработки</h3>
          <p class="card-description">
            Внесение всех необходимых корректировок по требованиям научного руководителя до момента
            защиты — бесплатно и оперативно (первые 3).
          </p>
        </div>
      </div>

      <footer class="services-footer">
        <AppButton
          tag="a"
          href="https:/t.me/Ilya_Belove"
          target="_blank"
          variant="primary"
          size="lg"
          class="custom-cta"
        >
          Получить точный расчет <span class="cta-link-span">→</span>
        </AppButton>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
</script>

<style scoped>
.services-section {
  background-color: var(--color-background);
  margin-top: -60px;
  padding: 70px var(--spacing-md);
  color: var(--color-text-dark);
}

.services-header {
  text-align: center;
  margin-bottom: 50px;
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
}

/* --- СЕТКА КАРТОЧЕК --- */
.services-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  padding: 30px;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: var(--box-shadow-sm);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.card-description {
  color: var(--color-secondary);
  line-height: 1.6;
}

.services-footer {
  text-align: center;
  margin-top: 30px;
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
  .services-section {
    padding: 70px var(--spacing-md) 0 var(--spacing-md);
  }
}
</style>
