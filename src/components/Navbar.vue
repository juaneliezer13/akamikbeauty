<script setup lang="ts">
import { Search, X } from 'lucide-vue-next';
import logoPrimary from '../assets/brand/logo-primary.png';

defineProps<{
  searchQuery: string;
}>();

const emit = defineEmits<{
  (e: 'update:searchQuery', val: string): void;
  (e: 'openBrands'): void;
}>();
</script>

<template>
  <header class="topbar">
    <a class="logo" href="#catalogo" aria-label="Akami K-Beauty, inicio">
      <img :src="logoPrimary" alt="Akami K-Beauty" />
    </a>

    <label class="header-search">
      <Search :size="16" />
      <input
        :value="searchQuery"
        @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
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

    <button
      class="brands-button"
      @click="emit('openBrands')"
      aria-label="Abrir panel de marcas"
    >
      <span>Marcas</span>
      <span>+</span>
    </button>
  </header>
</template>
