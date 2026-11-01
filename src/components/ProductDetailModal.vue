<script setup lang="ts">
import { ref, watch } from 'vue';
import { X, ChevronDown, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-vue-next';
import type { Product } from '../types';
import { generateWhatsAppLink } from '../data/products';

const props = defineProps<{
  product: Product | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const activeImageIndex = ref(0);
const activeAccordion = ref<'benefits' | 'ingredients' | 'use'>('benefits');

watch(() => props.product, () => {
  activeImageIndex.value = 0;
  activeAccordion.value = 'benefits';
});

function toggleAccordion(section: 'benefits' | 'ingredients' | 'use') {
  activeAccordion.value = activeAccordion.value === section ? '' as any : section;
}
</script>

<template>
  <div v-if="product" class="fixed inset-0 z-50 overflow-hidden">
    <!-- Backdrop Overlay -->
    <div 
      @click="emit('close')"
      class="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity animate-fade-in"
    ></div>

    <!-- Modal Content: Bottom Sheet on Mobile, Centered Modal on Desktop -->
    <div class="fixed inset-x-0 bottom-0 sm:inset-y-0 sm:flex sm:items-center sm:justify-center p-0 sm:p-4 pointer-events-none">
      <div 
        class="bg-surface w-full sm:max-w-xl max-h-[92vh] sm:max-h-[88vh] rounded-t-3xl sm:rounded-3xl shadow-sheet sm:shadow-card overflow-hidden flex flex-col pointer-events-auto border-t sm:border border-line animate-slide-up relative"
      >
        <!-- Mobile Drag / Grab Handle -->
        <div class="sm:hidden w-10 h-1 bg-ink/20 rounded-full mx-auto mt-2.5 mb-1"></div>

        <!-- Floating Close Button -->
        <button
          @click="emit('close')"
          aria-label="Cerrar ficha"
          class="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-md border border-line text-ink flex items-center justify-center hover:bg-blush transition-colors shadow-sm"
        >
          <X class="w-4 h-4" />
        </button>

        <!-- Scrollable Sheet Body -->
        <div class="overflow-y-auto no-scrollbar flex-1 pb-24">
          <!-- Gallery Carousel Section -->
          <div class="relative aspect-[4/3] sm:aspect-[16/10] bg-white overflow-hidden flex items-center justify-center p-4 border-b border-line/40">
            <img
              :src="product.gallery?.[activeImageIndex] || product.image"
              :alt="product.title"
              class="w-full h-full max-w-full max-h-full object-contain transition-opacity duration-300 m-auto block"
            />

            <!-- Gallery Dots Indicator -->
            <div 
              v-if="product.gallery && product.gallery.length > 1" 
              class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-ink/30 backdrop-blur-md px-2.5 py-1 rounded-full"
            >
              <button
                v-for="(_, idx) in product.gallery"
                :key="idx"
                @click="activeImageIndex = idx"
                class="w-1.5 h-1.5 rounded-full transition-all"
                :class="activeImageIndex === idx ? 'w-4 bg-white' : 'bg-white/50'"
              ></button>
            </div>

            <!-- Category Badge -->
            <span class="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-[10px] font-semibold text-muted-dark px-2.5 py-1 rounded-full border border-line/40">
              {{ product.category }}
            </span>
          </div>

          <!-- Product Main Info -->
          <div class="p-5 sm:p-6 space-y-4">
            <div>
              <span class="text-[11px] font-bold tracking-widest uppercase text-muted block mb-1">
                {{ product.brand }}
              </span>
              <h2 class="font-serif text-2xl sm:text-3xl font-semibold text-ink leading-tight">
                {{ product.title }}
              </h2>
              <div class="mt-2 flex items-baseline gap-2">
                <span class="font-serif text-2xl font-bold text-ink">
                  ${{ product.price.toFixed(2) }}
                </span>
                <span class="text-xs text-muted font-medium">USD • Referencial</span>
              </div>
            </div>

            <!-- Attribute Pills -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span 
                v-for="attr in product.attributes"
                :key="attr"
                class="text-[11px] font-semibold text-muted-dark bg-blush px-3 py-1 rounded-full border border-blush-border"
              >
                {{ attr }}
              </span>
              <span class="text-[11px] font-semibold text-accent-rose bg-blush px-3 py-1 rounded-full border border-blush-border">
                {{ product.compatibility }}
              </span>
            </div>

            <!-- Accordions (Benefits, Ingredients, Use) -->
            <div class="border-t border-line/60 divide-y divide-line/60 pt-2">
              <!-- 1. Beneficios -->
              <div class="py-3">
                <button
                  @click="toggleAccordion('benefits')"
                  class="w-full flex items-center justify-between text-left text-xs font-bold text-ink hover:text-accent-rose transition-colors"
                >
                  <span class="flex items-center gap-2">
                    <Sparkles class="w-3.5 h-3.5 text-accent-rose" />
                    <span>Beneficios Principales</span>
                  </span>
                  <ChevronDown class="w-4 h-4 text-muted transition-transform" :class="{ 'rotate-180': activeAccordion === 'benefits' }" />
                </button>
                <div v-show="activeAccordion === 'benefits'" class="mt-2 text-xs text-muted leading-relaxed pl-5">
                  <p>{{ product.benefits }}</p>
                </div>
              </div>

              <!-- 2. Ingredientes Clave -->
              <div class="py-3">
                <button
                  @click="toggleAccordion('ingredients')"
                  class="w-full flex items-center justify-between text-left text-xs font-bold text-ink hover:text-accent-rose transition-colors"
                >
                  <span class="flex items-center gap-2">
                    <CheckCircle2 class="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ingredientes Clave</span>
                  </span>
                  <ChevronDown class="w-4 h-4 text-muted transition-transform" :class="{ 'rotate-180': activeAccordion === 'ingredients' }" />
                </button>
                <div v-show="activeAccordion === 'ingredients'" class="mt-2 text-xs text-muted leading-relaxed pl-5">
                  <p>{{ product.ingredients }}</p>
                </div>
              </div>

              <!-- 3. Modo de Uso -->
              <div class="py-3">
                <button
                  @click="toggleAccordion('use')"
                  class="w-full flex items-center justify-between text-left text-xs font-bold text-ink hover:text-accent-rose transition-colors"
                >
                  <span class="flex items-center gap-2">
                    <span class="w-3.5 h-3.5 rounded-full bg-accent-gold/20 text-accent-gold text-[9px] flex items-center justify-center font-bold">1</span>
                    <span>Modo de Uso en tu Rutina</span>
                  </span>
                  <ChevronDown class="w-4 h-4 text-muted transition-transform" :class="{ 'rotate-180': activeAccordion === 'use' }" />
                </button>
                <div v-show="activeAccordion === 'use'" class="mt-2 text-xs text-muted leading-relaxed pl-5">
                  <p>{{ product.use }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sticky Bottom Action Bar (WhatsApp Closing Funnel) -->
        <div class="absolute bottom-0 inset-x-0 bg-surface/95 backdrop-blur-md border-t border-line p-3 sm:p-4 flex items-center gap-3">
          <div class="flex-1">
            <a
              :href="generateWhatsAppLink(product)"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full bg-ink hover:bg-ink/85 text-white py-3.5 px-4 rounded-2xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-button active:scale-98 transition-all"
            >
              <MessageCircle class="w-5 h-5 text-whatsapp" />
              <span>Pedir por WhatsApp — ${{ product.price.toFixed(2) }} USD</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
