<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '../types';
import { generateWhatsAppLink } from '../data/products';
import WhatsAppIcon from './icons/WhatsAppIcon.vue';

defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: 'select', product: Product): void;
}>();

const imgError = ref(false);

function resolveImageUrl(img?: string): string {
  if (!img) return '';
  if (img.startsWith('http://') || img.startsWith('https://')) return img;
  if (img.startsWith('/uploads/')) return img;
  if (img.startsWith('./')) return img;
  return `/uploads/products/${img}`;
}
</script>

<template>
  <article class="product-card">
    <button
      class="product-visual"
      @click="emit('select', product)"
      :aria-label="`Ver ${product.title}`"
    >
      <img
        v-if="product.image && !imgError"
        :src="resolveImageUrl(product.image)"
        :alt="`${product.title} de ${product.brand}`"
        loading="lazy"
        @error="imgError = true"
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

      <div class="product-bottom">
        <p class="product-price">${{ product.price.toFixed(2) }}</p>
        <a
          :href="generateWhatsAppLink(product)"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-button"
          :aria-label="`Consultar ${product.title} por WhatsApp`"
          title="Consultar disponibilidad por WhatsApp"
        >
          <WhatsAppIcon :size="15" />
          <span>Consultar</span>
        </a>
      </div>
    </div>
  </article>
</template>
