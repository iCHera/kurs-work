<template>
  <component
    :is="componentTag"
    :type="isButton ? type : null"
    :href="isAnchor ? href : null"
    :to="isRouterLink ? to : null"
    :disabled="disabled"
    :class="['app-button', `variant-${variant}`, `size-${size}`, { 'is-disabled': disabled }]"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  tag?: 'button' | 'a' | 'RouterLink'

  type?: 'submit' | 'button' | 'reset'

  variant?: 'primary' | 'secondary' | 'danger' | 'text'

  size?: 'sm' | 'md' | 'lg'

  href?: string

  to?: string

  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  type: 'button',
  variant: 'primary',
  size: 'md',
  href: '#',
  to: '/',
  disabled: false,
})

const componentTag = computed(() => {
  if (props.tag === 'RouterLink') {
    return RouterLink
  }
  return props.tag
})

const isRouterLink = computed(() => props.tag === 'RouterLink')
const isAnchor = computed(() => props.tag === 'a')

const isButton = computed(() => props.tag === 'button')
</script>

<style scoped>
.app-button {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
  border-radius: 12px;
  transition: all 0.7s ease-in-out;
}

.app-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

.size-sm {
  padding: 6px 10px;
  font-size: 0.875rem;
}

.size-md {
  padding: 8px 14px;
  font-size: 1rem;
}

.size-lg {
  padding: 10px 18px;
  font-size: 1.125rem;
}

.variant-primary {
  color: var(--color-text-light);
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  transition: 0.7s;
}

.variant-primary:hover:not(.is-disabled) {
  background-color: #4d7c0f;
  border-color: #4d7c0f;
}

.variant-secondary {
  color: var(--color-secondary);
  background-color: transparent;
  border-color: var(--color-secondary);
}

.variant-secondary:hover:not(.is-disabled) {
  color: var(--color-background);
  background-color: var(--color-secondary);
}

.variant-danger {
  color: var(--color-text-light);
  background-color: #dc3545;
  border-color: #dc3545;
}

.variant-danger:hover:not(.is-disabled) {
  background-color: #bd2130;
  border-color: #bd2130;
}

.variant-text {
  color: var(--color-primary);
  background-color: transparent;
  border-color: transparent;
  padding: 0;
}

.variant-text:hover:not(.is-disabled) {
  color: #0056b3;
  text-decoration: underline;
}

.is-disabled,
.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
