<script setup lang="ts">
import { ref } from 'vue';
import { MessageCircle, Eye } from 'lucide-vue-next';
import type { Product } from '../types';
import { generateWhatsAppLink } from '../data/products';

const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: 'select', product: Product): void;
}>();

const imgLoaded = ref(false);
const imgError = ref(false);

function handleImageError() {
  imgError.value = true;
}
</script>

<template>
  <article class="group bg-surface rounded-2xl border border-line/70 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between">
    <!-- Visual Image Container -->
    <div 
      @click="emit('select', product)"
      class="relative aspect-square overflow-hidden bg-white cursor-pointer flex items-center justify-center p-2.5 border-b border-line/40"
    >
      <!-- Fallback or Placeholder -->
      <div 
        v-if="!imgLoaded && !imgError"
        class="absolute inset-0 bg-blush animate-pulse flex items-center justify-center text-muted/40 text-xs"
      >
        Cargando...
      </div>
      <div
        v-if="imgError"
        class="absolute inset-0 bg-blush flex flex-col items-center justify-center p-4 text-center text-muted text-xs font-serif"
      >
        <span class="text-sm font-semibold mb-1">{{ product.brand }}</span>
        <span>{{ product.title }}</span>
      </div>

      <img
        v-show="!imgError"
        :src="product.image"
        :alt="`${product.title} de ${product.brand}`"
        loading="lazy"
        @load="imgLoaded = true"
        @error="handleImageError"
        class="w-full h-full max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 m-auto block"
      />

      <!-- Quick View Pill Hover -->
      <div class="absolute inset-0 bg-ink/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
        <span class="bg-surface/90 backdrop-blur-md text-ink text-xs font-semibold px-3 py-1.5 rounded-full shadow-button flex items-center gap-1.5">
          <Eye class="w-3.5 h-3.5 text-muted-dark" />
          <span>Ver Ficha</span>
        </span>
      </div>

      <!-- Category Mini Tag -->
      <span class="absolute top-2.5 left-2.5 bg-surface/90 backdrop-blur-sm text-[10px] font-semibold text-muted-dark px-2.5 py-0.5 rounded-full border border-line/40">
        {{ product.category }}
      </span>
    </div>

    <!-- Product Info Details -->
    <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
      <div>
        <!-- Brand Name -->
        <span class="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-muted block mb-1">
          {{ product.brand }}
        </span>

        <!-- Product Title -->
        <h3 
          @click="emit('select', product)"
          class="font-serif text-sm sm:text-base font-semibold text-ink leading-snug line-clamp-2 cursor-pointer hover:text-accent-rose transition-colors mb-2"
        >
          {{ product.title }}
        </h3>

        <!-- Skin Compatibility Chip -->
        <div class="mb-3">
          <span class="inline-block text-[10px] font-medium text-muted bg-blush px-2 py-0.5 rounded-full border border-blush-border">
            {{ product.compatibility }}
          </span>
        </div>
      </div>

      <!-- Price & Actions -->
      <div class="pt-2 border-t border-line/40 flex items-center justify-between gap-2">
        <div class="flex flex-col">
          <span class="text-[9px] uppercase tracking-wider text-muted font-medium">Precio</span>
          <span class="font-serif text-lg sm:text-xl font-bold text-ink">
            ${{ product.price.toFixed(2) }} <span class="text-[10px] font-sans font-medium text-muted">USD</span>
          </span>
        </div>

        <!-- WhatsApp Quick Order Button -->
        <a
          :href="generateWhatsAppLink(product)"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir por WhatsApp"
          class="bg-ink hover:bg-ink/85 active:scale-95 text-white p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-button transition-all"
          title="Consultar disponibilidad en WhatsApp"
        >
          <MessageCircle class="w-4 h-4 text-whatsapp" />
          <span class="hidden sm:inline">Pedir</span>
        </a>
      </div>
    </div>
  </article>
</template>
