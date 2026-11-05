<script setup lang="ts">
import { Search, X } from 'lucide-vue-next';
import logoPrimary from '../assets/brand/logo-primary.png';

defineProps<{
  searchQuery: string;
  activeView?: 'catalog' | 'about';
}>();

const emit = defineEmits<{
  (e: 'update:searchQuery', val: string): void;
  (e: 'openBrands'): void;
  (e: 'navigate', view: 'catalog' | 'about'): void;
  (e: 'toggleAbout'): void;
}>();

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value;
  emit('update:searchQuery', val);
}
</script>

<template>
  <header class="topbar">
    <a
      class="logo"
      href="#catalogo"
      @click.prevent="emit('navigate', 'catalog')"
      aria-label="Akami K-Beauty, inicio"
    >
      <img :src="logoPrimary" alt="Akami K-Beauty" />
    </a>

    <label class="header-search">
      <Search :size="16" />
      <input
        :value="searchQuery"
        @input="onInput"
        type="text"
        placeholder="Buscar por producto, marca o ingrediente..."
        aria-label="Buscar productos"
      />
      <button
        v-if="searchQuery"
        @click="emit('update:searchQuery', '')"
        aria-label="Limpiar búsqueda"
      >
        <X :size="15" />
      </button>
    </label>

    <div class="topbar-actions">
      <button
        class="nav-about-button"
        :class="{ 'nav-about-button--active': activeView === 'about' }"
        @click="emit('toggleAbout')"
        aria-label="Ir a sección Quiénes somos"
      >
        <span>Quiénes somos</span>
      </button>

      <button
        class="brands-button"
        @click="emit('openBrands')"
        aria-label="Abrir panel de marcas"
      >
        <span>Marcas</span>
        <span>+</span>
      </button>
    </div>
  </header>
</template>
