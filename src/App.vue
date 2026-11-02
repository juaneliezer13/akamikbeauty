<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { Sparkles } from 'lucide-vue-next';

import { PRODUCTS, CATEGORIES, SKIN_TYPES } from './data/products';
import { CATEGORY_BANNERS, SKIN_BANNERS } from './data/banners';
import type { Product, BannerInfo } from './types';

import Navbar from './components/Navbar.vue';
import HeroBanner from './components/HeroBanner.vue';
import FilterSection from './components/FilterSection.vue';
import ProductCard from './components/ProductCard.vue';
import ProductDetailModal from './components/ProductDetailModal.vue';
import BrandsDrawer from './components/BrandsDrawer.vue';
import ConsultationBanner from './components/ConsultationBanner.vue';
import Footer from './components/Footer.vue';
import FloatingWhatsApp from './components/FloatingWhatsApp.vue';

const searchQuery = ref('');
const discoveryMode = ref<'product' | 'skin'>('product');
const selectedFilter = ref('Todos');
const selectedBrand = ref('');
const isBrandDrawerOpen = ref(false);
const selectedProduct = ref<Product | null>(null);

const activeFilterList = computed(() => {
  return discoveryMode.value === 'product' ? Array.from(CATEGORIES) : Array.from(SKIN_TYPES);
});

const currentBanner = computed<BannerInfo>(() => {
  if (discoveryMode.value === 'product') {
    return CATEGORY_BANNERS[selectedFilter.value] || CATEGORY_BANNERS.Todos;
  }
  return SKIN_BANNERS[selectedFilter.value] || SKIN_BANNERS.Todos;
});

const allBrands = computed(() => {
  const brandsSet = new Set(PRODUCTS.map(p => p.brand));
  return Array.from(brandsSet).sort();
});

function getBrandCount(brand: string): number {
  return PRODUCTS.filter(p => p.brand === brand).length;
}

watch(discoveryMode, () => {
  selectedFilter.value = 'Todos';
});

const filteredProducts = computed(() => {
  return PRODUCTS.filter(product => {
    if (searchQuery.value.trim() !== '') {
      const q = searchQuery.value.toLowerCase().trim();
      const inTitle = product.title.toLowerCase().includes(q);
      const inBrand = product.brand.toLowerCase().includes(q);
      const inCat = product.category.toLowerCase().includes(q);
      const inIng = product.ingredients.toLowerCase().includes(q);
      const inBen = product.benefits.toLowerCase().includes(q);
      if (!inTitle && !inBrand && !inCat && !inIng && !inBen) {
        return false;
      }
    }

    if (selectedBrand.value && product.brand !== selectedBrand.value) {
      return false;
    }

    if (selectedFilter.value !== 'Todos') {
      if (discoveryMode.value === 'product') {
        if (product.category !== selectedFilter.value) {
          return false;
        }
      } else {
        const matchesSkin = product.skinTypes.includes(selectedFilter.value) ||
                            product.compatibility.toLowerCase().includes(selectedFilter.value.toLowerCase());
        if (!matchesSkin) {
          return false;
        }
      }
    }

    return true;
  });
});

function resetAll() {
  searchQuery.value = '';
  selectedFilter.value = 'Todos';
  selectedBrand.value = '';
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar
      v-model:search-query="searchQuery"
      @open-brands="isBrandDrawerOpen = true"
    />

    <main class="flex-1">
      <HeroBanner :banner="currentBanner" />

      <FilterSection
        v-model:discovery-mode="discoveryMode"
        v-model:selected-filter="selectedFilter"
        :filter-list="activeFilterList"
      />

      <section class="catalog-section">
        <div class="section-heading">
          <div>
            <span class="section-kicker">
              {{ selectedBrand ? `Marca: ${selectedBrand}` : 'Selección Akami' }}
            </span>
            <h2>
              {{ selectedFilter === 'Todos' ? (selectedBrand || 'Esenciales coreanos') : selectedFilter }}
            </h2>
          </div>
          <span class="count">{{ filteredProducts.length }} productos</span>
        </div>

        <div v-if="filteredProducts.length" class="product-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @select="selectedProduct = product"
          />
        </div>

        <div v-else class="empty-state">
          <Sparkles :size="28" />
          <h3>No encontramos coincidencias</h3>
          <p>Prueba con otra marca, categoría o ingrediente.</p>
          <button @click="resetAll" class="reset-button">Ver todos los productos</button>
        </div>
      </section>

      <ConsultationBanner />
    </main>

    <Footer />

    <BrandsDrawer
      v-model:is-open="isBrandDrawerOpen"
      v-model:selected-brand="selectedBrand"
      :brands="allBrands"
      :total-count="PRODUCTS.length"
      :get-brand-count="getBrandCount"
    />

    <ProductDetailModal
      :product="selectedProduct"
      @close="selectedProduct = null"
    />

    <FloatingWhatsApp />
  </div>
</template>
