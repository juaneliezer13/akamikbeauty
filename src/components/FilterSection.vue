<script setup lang="ts">
import { ref } from 'vue';
import { Filter, ChevronDown, X, Sparkles } from 'lucide-vue-next';
import { CATEGORIES, SKIN_TYPES, BRANDS } from '../data/products';

const props = defineProps<{
  selectedCategory: string;
  selectedSkinType: string;
  selectedBrand: string;
  activeCount: number;
  totalCount: number;
}>();

const emit = defineEmits<{
  (e: 'update:selectedCategory', val: string): void;
  (e: 'update:selectedSkinType', val: string): void;
  (e: 'update:selectedBrand', val: string): void;
  (e: 'reset-filters'): void;
}>();

const isBrandMenuOpen = ref(false);

function selectBrand(brand: string) {
  emit('update:selectedBrand', brand);
  isBrandMenuOpen.value = false;
}
</script>

<template>
  <div class="sticky top-[89px] sm:top-[105px] z-30 bg-ivory/95 backdrop-blur-md border-b border-line/60 py-3 px-4 sm:px-6 shadow-sm">
    <div class="max-w-7xl mx-auto space-y-3">
      <!-- 1. Tipo de Producto Tabs (Horizontal Scrollable) -->
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-muted-dark">
            Tipo de Producto:
          </span>
          <!-- Brand Selector Dropdown Trigger -->
          <div class="relative">
            <button
              @click="isBrandMenuOpen = !isBrandMenuOpen"
              class="text-xs font-semibold px-3 py-1 rounded-full border border-line bg-surface text-ink flex items-center gap-1.5 hover:border-ink/50 transition-colors shadow-sm"
            >
              <span>{{ selectedBrand === 'Todas las Marcas' ? 'Filtrar por Marca' : selectedBrand }}</span>
              <ChevronDown class="w-3.5 h-3.5 text-muted transition-transform" :class="{ 'rotate-180': isBrandMenuOpen }" />
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="isBrandMenuOpen"
              class="absolute right-0 mt-2 w-56 max-h-72 overflow-y-auto bg-surface rounded-2xl border border-line shadow-card p-1.5 z-50 animate-fade-in"
            >
              <button
                v-for="brand in BRANDS"
                :key="brand"
                @click="selectBrand(brand)"
                class="w-full text-left px-3 py-2 text-xs rounded-xl font-medium transition-colors flex items-center justify-between"
                :class="selectedBrand === brand ? 'bg-blush text-ink font-bold' : 'text-muted hover:bg-blush/60 hover:text-ink'"
              >
                <span>{{ brand }}</span>
                <span v-if="selectedBrand === brand" class="w-1.5 h-1.5 rounded-full bg-accent-rose"></span>
              </button>
            </div>
          </div>
        </div>

        <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <button
            v-for="cat in CATEGORIES"
            :key="cat"
            @click="emit('update:selectedCategory', cat)"
            class="whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all"
            :class="selectedCategory === cat 
              ? 'bg-ink text-white font-semibold shadow-sm' 
              : 'bg-surface text-muted hover:text-ink hover:bg-blush border border-line/60'"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- 2. Tipo de Piel Filter (Pills / Chips) -->
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <span class="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-muted-dark">
            Según tu Tipo de Piel:
          </span>
          <span class="text-[10px] text-muted italic hidden sm:inline">(Ideal si no conoces las marcas)</span>
        </div>

        <div class="flex gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          <button
            v-for="skin in SKIN_TYPES"
            :key="skin"
            @click="emit('update:selectedSkinType', skin)"
            class="whitespace-nowrap px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-all flex items-center gap-1"
            :class="selectedSkinType === skin 
              ? 'bg-accent-rose text-white font-semibold shadow-sm' 
              : 'bg-blush/80 text-muted-dark hover:bg-blush border border-blush-border'"
          >
            <Sparkles v-if="selectedSkinType === skin" class="w-3 h-3 text-white" />
            <span>{{ skin }}</span>
          </button>
        </div>
      </div>

      <!-- Active Filter Status & Reset -->
      <div 
        v-if="selectedCategory !== 'Todos' || selectedSkinType !== 'Todos' || selectedBrand !== 'Todas las Marcas'"
        class="flex items-center justify-between pt-1 border-t border-line/40 text-xs"
      >
        <span class="text-muted text-[11px]">
          Mostrando <strong>{{ activeCount }}</strong> de {{ totalCount }} productos
        </span>
        <button
          @click="emit('reset-filters')"
          class="text-xs text-accent-rose hover:text-ink font-semibold flex items-center gap-1 underline underline-offset-2"
        >
          <X class="w-3.5 h-3.5" />
          <span>Limpiar filtros</span>
        </button>
      </div>
    </div>
  </div>
</template>
