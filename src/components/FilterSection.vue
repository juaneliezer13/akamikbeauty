<script setup lang="ts">
defineProps<{
  discoveryMode: 'product' | 'skin';
  filterList: string[];
  selectedFilter: string;
}>();

const emit = defineEmits<{
  (e: 'update:discoveryMode', mode: 'product' | 'skin'): void;
  (e: 'update:selectedFilter', filter: string): void;
}>();
</script>

<template>
  <section class="discovery" id="catalogo">
    <div class="discovery-tabs" aria-label="Modo de descubrimiento">
      <button
        :class="{ active: discoveryMode === 'product' }"
        @click="emit('update:discoveryMode', 'product')"
      >
        Por Tipo de Producto
      </button>
      <button
        :class="{ active: discoveryMode === 'skin' }"
        @click="emit('update:discoveryMode', 'skin')"
      >
        Por Tipo de Piel
      </button>
    </div>

    <div class="filter-scroll">
      <button
        v-for="item in filterList"
        :key="item"
        :class="{ active: selectedFilter === item }"
        @click="emit('update:selectedFilter', item)"
      >
        {{ item }}
      </button>
    </div>
  </section>
</template>
