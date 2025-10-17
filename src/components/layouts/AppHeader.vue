<template>
  <header class="app-header">
    <div class="container header-content">
      <RouterLink to="/" class="header-logo">
        {{ siteName }}
      </RouterLink>

      <nav class="header-nav desktop-only">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="header-nav-link"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <div class="header-actions">
        <AppButton class="desktop-only" tag="a" href="https:/t.me/Ilya_Belove" target="_blank">
          Заказать работу
        </AppButton>

        <button
          class="hamburger mobile-only"
          :class="{ 'is-open': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
        >
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
        </button>
      </div>
    </div>

    <Transition name="slide-right">
      <nav v-if="isMobileMenuOpen" id="mobile-menu" class="mobile-menu">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          @click="toggleMobileMenu"
          class="mobile-nav-link"
        >
          {{ link.name }}
        </RouterLink>
        <AppButton
          tag="a"
          href="https:/t.me/Ilya_Belove"
          target="_blank"
          class="mobile-cta"
          @click="toggleMobileMenu"
        >
          Заказать работу
        </AppButton>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import type { RouteLocationRaw } from 'vue-router'

interface NavLink {
  name: string
  path: string | RouteLocationRaw
}

const siteName = 'Куросвые работы'

const navLinks: NavLink[] = [
  { name: 'Обо мне', path: { name: 'Home', hash: '#about' } },
  { name: 'Услуги', path: { name: 'Home', hash: '#services' } },
  { name: 'Каталог', path: { name: 'Home', hash: '#catalog' } },
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--box-shadow-sm);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

/* Логотип */
.header-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-dark);
  text-decoration: none;
}

.header-nav {
  display: flex;
  gap: 20px;
}

.header-nav-link {
  color: var(--color-text-dark);
  padding: 5px 0;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;
}

.header-nav-link:hover,
.header-nav-link.active {
  color: var(--color-primary);
}

.mobile-only {
  display: none;
}
.desktop-only {
  display: flex;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    /* padding: 10px; */
    z-index: 1010;
    position: relative;
    height: 40px;
    width: 80px;
  }

  .hamburger .line {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--color-text-dark);
    margin: 5px 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.7s ease;
  }

  .hamburger .line-1 {
    top: 10px;
  }
  .hamburger .line-2 {
    top: 18px;
  }
  .hamburger .line-3 {
    top: 26px;
  }

  .hamburger.is-open .line-1 {
    transform: translateX(-50%) translateY(8px) rotate(45deg);
  }

  .hamburger.is-open .line-2 {
    opacity: 0;
  }

  .hamburger.is-open .line-3 {
    transform: translateX(-50%) translateY(-8px) rotate(-45deg);
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: var(--color-background);
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    padding-top: 80px;
  }

  .slide-right-enter-from,
  .slide-right-leave-to {
    transform: translateX(100%);
  }

  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.7s ease-in-out;
  }

  .slide-right-enter-to,
  .slide-right-leave-from {
    transform: translateX(0);
  }

  .mobile-nav-link {
    font-size: 1.5rem;
    padding: var(--spacing-md);
    color: var(--color-text-dark);
    text-decoration: none;
  }

  .mobile-cta {
    margin-top: var(--spacing-xl);
  }

  .header-logo {
    /* padding-left: 6px; */
  }

  .mobile-menu[data-v-if] {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
