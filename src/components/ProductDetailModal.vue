<script setup lang="ts">
import { ref, watch } from 'vue';
import { X } from 'lucide-vue-next';
import WhatsAppIcon from './icons/WhatsAppIcon.vue';
import type { Product } from '../types';
import { generateWhatsAppLink } from '../data/products';

const props = defineProps<{
  product: Product | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const galleryIndex = ref(0);
const openAccordion = ref<'benefits' | 'ingredients' | 'use' | ''>('benefits');

watch(() => props.product, () => {
  galleryIndex.value = 0;
  openAccordion.value = 'benefits';
});

function toggleAccordion(section: 'benefits' | 'ingredients' | 'use') {
  openAccordion.value = openAccordion.value === section ? '' : section;
}
</script>

<template>
  <div v-if="product" class="sheet-modal">
    <div
      class="sheet-backdrop"
      @click="emit('close')"
    ></div>

    <div class="sheet-layer">
      <div class="sheet-handle"></div>
      <button
        class="sheet-close"
        @click="emit('close')"
        aria-label="Cerrar ficha"
      >
        <X :size="18" />
      </button>

      <div class="sheet-scroll">
        <div class="gallery">
          <img
            v-if="product.image"
            :src="product.gallery?.[galleryIndex] || product.image"
            :alt="product.title"
          />
          <div v-else class="gallery-empty">
            <span class="empty-brand-tag">{{ product.brand }}</span>
          </div>
          <span class="gallery-note">Original de Corea</span>

          <div
            v-if="product.gallery && product.gallery.length > 1"
            class="gallery-dots"
          >
            <button
              v-for="(_, idx) in product.gallery"
              :key="idx"
              :class="{ active: galleryIndex === idx }"
              @click="galleryIndex = idx"
              :aria-label="`Ver foto ${idx + 1}`"
            ></button>
          </div>
        </div>

        <div class="sheet-content">
          <div class="sheet-meta">
            <span class="brand-tag">{{ product.brand }}</span>
            <span>{{ product.category }}</span>
          </div>

          <h2>{{ product.title }}</h2>

          <div class="sheet-price">
            ${{ product.price.toFixed(2) }} <span>USD</span>
          </div>

          <div class="attributes">
            <span
              v-for="attr in product.attributes"
              :key="attr"
            >
              {{ attr }}
            </span>
            <span>{{ product.compatibility }}</span>
          </div>

          <div class="accordions">
            <div class="accordion">
              <button @click="toggleAccordion('benefits')">
                <span>Beneficios</span>
                <span :class="{ rotate: openAccordion === 'benefits' }">▾</span>
              </button>
              <p v-show="openAccordion === 'benefits'">{{ product.benefits }}</p>
            </div>

            <div class="accordion">
              <button @click="toggleAccordion('ingredients')">
                <span>Ingredientes</span>
                <span :class="{ rotate: openAccordion === 'ingredients' }">▾</span>
              </button>
              <p v-show="openAccordion === 'ingredients'">{{ product.ingredients }}</p>
            </div>

            <div class="accordion">
              <button @click="toggleAccordion('use')">
                <span>Modo de uso</span>
                <span :class="{ rotate: openAccordion === 'use' }">▾</span>
              </button>
              <p v-show="openAccordion === 'use'">{{ product.use }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="sheet-action">
        <a
          :href="generateWhatsAppLink(product)"
          target="_blank"
          rel="noopener noreferrer"
          class="sheet-cta"
          :title="`Comprar ${product.title} por WhatsApp`"
        >
          <WhatsAppIcon :size="20" />
          <span>
            <strong>Comprar por WhatsApp</strong>
            <small>Respuesta rápida y asesoría directa</small>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
