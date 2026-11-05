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

function resolveImageUrl(img?: string): string {
  if (!img || typeof img !== 'string' || img.trim() === '') {
    return '';
  }
  const clean = img.trim();
  if (clean.startsWith('http://') || clean.startsWith('https://')) return clean;
  if (clean.startsWith('/uploads/')) return clean;
  if (clean.startsWith('uploads/')) return `/${clean}`;
  if (clean.startsWith('./images/')) return clean.replace(/^\.\//, '/');
  if (clean.startsWith('/images/')) return clean;
  if (clean.startsWith('images/')) return `/${clean}`;
  return `/uploads/products/${clean}`;
}

function handleImgError(e: Event) {
  const imgEl = e.target as HTMLImageElement;
  if (!imgEl) return;

  // Fallback 1: Si falló en /uploads/products/, intentar en /images/products/
  if (imgEl.src.includes('/uploads/products/')) {
    const filename = imgEl.src.split('/uploads/products/').pop();
    if (filename && !imgEl.dataset.fallbackTried) {
      imgEl.dataset.fallbackTried = '1';
      imgEl.src = `/images/products/${filename}`;
      return;
    }
  }

  // Fallback 2: Si falló en /images/products/, intentar en /uploads/products/
  if (imgEl.src.includes('/images/products/')) {
    const filename = imgEl.src.split('/images/products/').pop();
    if (filename && !imgEl.dataset.fallbackTried) {
      imgEl.dataset.fallbackTried = '1';
      imgEl.src = `/uploads/products/${filename}`;
      return;
    }
  }

  // Si falló completamente la carga, ocultar la etiqueta <img> y mostrar el contenedor vacío
  imgEl.style.display = 'none';
  const parent = imgEl.parentElement;
  if (parent && !parent.querySelector('.product-visual-empty')) {
    const fallbackBox = document.createElement('div');
    fallbackBox.className = 'product-visual-empty';
    fallbackBox.innerHTML = `<span class="empty-brand-tag">${imgEl.alt?.split(' ')[0] || 'AKAMI'}</span>`;
    parent.appendChild(fallbackBox);
  }
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
        v-if="resolveImageUrl(product.image)"
        :src="resolveImageUrl(product.image)"
        :alt="`${product.title} de ${product.brand}`"
        loading="lazy"
        @error="handleImgError"
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

      <span v-if="product.compatibility" class="skin-badge">{{ product.compatibility }}</span>

      <div class="product-meta">
        <div class="price">
          ${{ product.price.toFixed(2) }} <span>USD</span>
        </div>
        <a
          :href="generateWhatsAppLink(product)"
          target="_blank"
          rel="noopener noreferrer"
          class="card-cta"
          :title="`Comprar ${product.title} por WhatsApp`"
          :aria-label="`Comprar ${product.title} por WhatsApp`"
        >
          <WhatsAppIcon :size="13" />
          <span>Comprar</span>
        </a>
      </div>
    </div>
  </article>
</template>
