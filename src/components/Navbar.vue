<script setup lang="ts">
import { ref } from 'vue';
import { Search, Sparkles, MessageCircle, Instagram, X } from 'lucide-vue-next';
import { generateWhatsAppLink } from '../data/products';

const props = defineProps<{
  searchQuery: string;
  selectedBrand: string;
}>();

const emit = defineEmits<{
  (e: 'update:searchQuery', val: string): void;
  (e: 'open-brands'): void;
}>();

const isSearchOpen = ref(false);

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
  if (!isSearchOpen.value) {
    emit('update:searchQuery', '');
  }
}
</script>

<template>
  <header class="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-line/60 transition-all">
    <!-- Top Announcement Bar -->
    <div class="bg-blush-dark/40 py-1.5 px-4 text-center border-b border-line/40">
      <p class="text-[11px] sm:text-xs text-muted font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles class="w-3.5 h-3.5 text-accent-rose inline" />
        <span>Envíos a toda Venezuela • Cosmética Coreana 100% Original</span>
        <span class="hidden sm:inline text-line">•</span>
        <span class="hidden sm:inline">Pide directo por WhatsApp</span>
      </p>
    </div>

    <!-- Main Navigation Bar -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
      <!-- Brand Logo -->
      <div class="flex items-center gap-3">
        <a href="#" class="group flex flex-col text-left">
          <span class="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-ink uppercase group-hover:opacity-85 transition-opacity">
            AKAMI
          </span>
          <span class="text-[9px] sm:text-[10px] tracking-[0.25em] text-muted -mt-1 font-medium uppercase">
            K-Beauty Catalog
          </span>
        </a>
      </div>

      <!-- Center / Desktop Brand Quick Button -->
      <div class="hidden md:flex items-center gap-4">
        <button
          @click="emit('open-brands')"
          class="text-xs tracking-wider uppercase font-semibold text-muted hover:text-ink px-3 py-1.5 rounded-full border border-line hover:border-ink/40 transition-colors flex items-center gap-1.5"
        >
          <span>Marcas Coreanas</span>
          <span v-if="selectedBrand !== 'Todas las Marcas'" class="w-2 h-2 rounded-full bg-accent-rose"></span>
        </button>
      </div>

      <!-- Right Action Icons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Search Toggle Button -->
        <button
          @click="toggleSearch"
          aria-label="Buscar producto"
          class="p-2 sm:p-2.5 rounded-full hover:bg-blush text-ink/80 hover:text-ink transition-colors relative"
          :class="{ 'bg-blush text-ink': isSearchOpen }"
        >
          <Search v-if="!isSearchOpen" class="w-4 h-4 sm:w-5 sm:h-5" />
          <X v-else class="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <!-- Instagram Profile Link -->
        <a
          href="https://www.instagram.com/akami.kbeauty?psln=MWJlYjF4YWRhbGhodg%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Akami K-Beauty"
          class="p-2 sm:p-2.5 rounded-full hover:bg-blush text-ink/80 hover:text-pink-600 transition-colors"
          title="@akami.kbeauty"
        >
          <Instagram class="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        <!-- WhatsApp Asesoría Link -->
        <a
          :href="generateWhatsAppLink()"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:flex items-center gap-2 bg-ink text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-ink/85 transition-all shadow-button active:scale-95"
        >
          <MessageCircle class="w-3.5 h-3.5 text-whatsapp" />
          <span>Asesoría WhatsApp</span>
        </a>
      </div>
    </div>

    <!-- Expandable Search Input (Mobile & Desktop) -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="isSearchOpen" class="border-t border-line/60 bg-surface px-4 py-3 sm:px-8">
        <div class="max-w-3xl mx-auto relative flex items-center">
          <Search class="w-4 h-4 text-muted absolute left-3 pointer-events-none" />
          <input
            type="text"
            :value="searchQuery"
            @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
            placeholder="Buscar por producto, marca (ej. Anua, Cosrx), ingrediente (Centella)..."
            class="w-full bg-ivory pl-10 pr-10 py-2.5 rounded-full border border-line text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:border-ink transition-colors"
            autofocus
          />
          <button
            v-if="searchQuery"
            @click="emit('update:searchQuery', '')"
            class="absolute right-3 p-1 text-muted hover:text-ink"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>
