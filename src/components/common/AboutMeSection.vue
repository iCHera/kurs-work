<template>
  <section id="about" class="about-section section">
    <div class="container content-grid">
      <div class="image-focus-block">
        <div class="profile-photo-placeholder">
          <img
            src="../../assets/images/Photo.png"
            alt="Фото Ильи Белова - эксперта"
            class="profile-photo"
          />
        </div>

        <div class="key-facts-panel">
          <p class="fact-item">
            <span class="fact-label">Опыт в IT:</span>
            <span class="fact-value">10+ лет</span>
          </p>
          <p class="fact-item">
            <span class="fact-label">Специальность:</span>
            <span class="fact-value">Информационные системы и технологии (БГУ)</span>
          </p>
          <p class="fact-item">
            <span class="fact-label">Формат:</span>
            <span class="fact-value">Фриланс (3+ года)</span>
          </p>
        </div>
      </div>

      <div class="text-block">
        <p class="greeting">Привет, я</p>
        <h2 class="name-title">Илья Белов</h2>

        <h3 class="role-statement">Эксперт в области информационных технологий.</h3>

        <p class="main-text">
          Выпускник БГУ по направлению «Информационные системы и технологии» с более чем 10-летним
          опытом работы в IT. Обладаю глубокими знаниями в области информационных технологий и уже
          около трёх лет успешно реализую проекты на фрилансе, решая задачи любой сложности.
        </p>

        <p class="value-proposition">
          Я предлагаю не просто курсовые работы, а полноценно проработанные проекты с техническим
          обоснованием. Моя цель — помочь студентам получить качественную и грамотно оформленную
          научную работу, соответствующую всем академическим и техническим требованиям. Мой опыт в
          IT гарантирует высокий уровень проработки и уникальности каждой работы.
        </p>

        <AppButton
          tag="a"
          href="https:/t.me/Ilya_Belove"
          target="_blank"
          variant="primary"
          size="md"
          class="custom-cta"
          >Обсудить вашу работу <span class="cta-link-span">→</span></AppButton
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue'
</script>

<style scoped>
.about-section {
  margin-top: -60px;
  background-color: var(--color-background);
  padding: 70px var(--spacing-md);
  color: var(--color-text-dark);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 2fr;
  }
}

.image-focus-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-photo-placeholder {
  width: 200px;
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.key-facts-panel {
  width: 100%;
  max-width: 350px;
  padding: 15px;
  border: 1px solid var(--color-border);
  color: var(--color-text-dark);
  border-radius: 12px;
}

.fact-item {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 0.95rem;
  gap: 16px;
  text-align: end;
}

.greeting {
  font-size: 1.1rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 4px;
}

.name-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text-dark);
  margin-bottom: 10px;
}

.role-statement {
  font-size: 1.5rem;
  font-weight: 500;
  color: #495057;
  margin-bottom: 30px;
}

.main-text {
  line-height: 1.6;
  margin-bottom: 20px;
}

.value-proposition {
  font-weight: 600;
  color: var(--color-text-dark);
  border-left: 5px solid var(--color-primary);
  padding-left: 15px;
  margin-bottom: 30px;
  line-height: 1.6;
}

.custom-cta {
  display: inline-flex;
  align-items: center;
  transform: translateZ(0);
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
</style>
