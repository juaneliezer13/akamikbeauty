<script setup lang="ts">
import type { Product } from '../types';
import { generateWhatsAppLink } from '../data/products';
import WhatsAppIcon from './icons/WhatsAppIcon.vue';

defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: 'select', product: Product): void;
}>();
</script>

<template>
  <article class="product-card">
    <button
      class="product-visual"
      @click="emit('select', product)"
      :aria-label="`Ver ${product.title}`"
    >
      <img
        v-if="product.image"
        :src="product.image"
        :alt="`${product.title} de ${product.brand}`"
        loading="lazy"
      />
      <div v-else class="product-visual-empty">
        <span class="empty-brand-tag">{{ product.brand }}</span>
      </div>
      <span class="view-hint">Ver detalle</span>
    </button>

    <div class="product-info">
      <p class="brand-tag">{{ product.brand }}</p>
      <button
        class="product-title"
        @click="emit('select', product)"
      >
        {{ product.title }}
      </button>
      <span class="skin-badge">{{ product.compatibility }}</span>

      <div class="product-meta">
        <div class="price">
          ${{ product.price.toFixed(2) }} <span>USD</span>
        </div>
        <a
          :href="generateWhatsAppLink(product)"
          target="_blank"
          rel="noopener noreferrer"
          class="card-cta"
          :title="`Consultar ${product.title} por WhatsApp`"
        >
          <WhatsAppIcon :size="13" />
          <span>Consultar</span>
        </a>
      </div>
    </div>
  </article>
</template>
