<script setup lang="ts">
import { X } from 'lucide-vue-next';

defineProps<{
  isOpen: boolean;
  brands: string[];
  selectedBrand: string;
  totalCount: number;
  getBrandCount: (brand: string) => number;
}>();

const emit = defineEmits<{
  (e: 'update:isOpen', val: boolean): void;
  (e: 'update:selectedBrand', val: string): void;
}>();

function chooseBrand(brand: string) {
  emit('update:selectedBrand', brand);
  emit('update:isOpen', false);
}
</script>

<template>
  <div v-if="isOpen" class="brand-drawer">
    <div
      class="drawer-backdrop"
      @click="emit('update:isOpen', false)"
    ></div>

    <div class="drawer-layer">
      <div class="drawer-head">
        <h3>Marcas</h3>
        <button
          @click="emit('update:isOpen', false)"
          aria-label="Cerrar marcas"
        >
          <X :size="18" />
        </button>
      </div>

      <p class="drawer-intro">Filtra nuestro catálogo seleccionando una marca específica:</p>

      <div class="brand-list">
        <button
          :class="{ active: !selectedBrand }"
          @click="chooseBrand('')"
        >
          <span>Todas las marcas</span>
          <span>{{ totalCount }}</span>
        </button>
        <button
          v-for="brand in brands"
          :key="brand"
          :class="{ active: selectedBrand === brand }"
          @click="chooseBrand(brand)"
        >
          <span>{{ brand }}</span>
          <span>{{ getBrandCount(brand) }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
