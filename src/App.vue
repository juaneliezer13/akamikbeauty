<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { 
  Search, 
  X, 
  Sparkles, 
  ArrowRight, 
  Instagram, 
  MessageCircle,
  ChevronDown
} from 'lucide-vue-next';

import { PRODUCTS, CATEGORIES, SKIN_TYPES, generateWhatsAppLink } from './data/products';
import { CATEGORY_BANNERS, SKIN_BANNERS } from './data/banners';
import type { Product, BannerInfo } from './types';
import logoPrimary from './assets/brand/logo-primary.png';

// State
const searchQuery = ref('');
const discoveryMode = ref<'product' | 'skin'>('product');
const selectedFilter = ref('Todos');
const selectedBrand = ref('');
const isBrandDrawerOpen = ref(false);
const selectedProduct = ref<Product | null>(null);
const galleryIndex = ref(0);
const openAccordion = ref<'benefits' | 'ingredients' | 'use' | ''>('benefits');

// Active filter list based on discovery mode
const activeFilterList = computed(() => {
  return discoveryMode.value === 'product' ? Array.from(CATEGORIES) : Array.from(SKIN_TYPES);
});

// Dynamic banner matching active filter tab
const currentBanner = computed<BannerInfo>(() => {
  if (discoveryMode.value === 'product') {
    return CATEGORY_BANNERS[selectedFilter.value] || CATEGORY_BANNERS.Todos;
  } else {
    return SKIN_BANNERS[selectedFilter.value] || SKIN_BANNERS.Todos;
  }
});

// All brands available
const allBrands = computed(() => {
  const brandsSet = new Set(PRODUCTS.map(p => p.brand));
  return Array.from(brandsSet).sort();
});

function getBrandCount(brand: string): number {
  return PRODUCTS.filter(p => p.brand === brand).length;
}

// Watchers
watch(discoveryMode, () => {
  selectedFilter.value = 'Todos';
});

watch(selectedProduct, () => {
  galleryIndex.value = 0;
  openAccordion.value = 'benefits';
});

// Filtered products logic
const filteredProducts = computed(() => {
  return PRODUCTS.filter(product => {
    // 1. Search Query
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

    // 2. Brand Filter
    if (selectedBrand.value && product.brand !== selectedBrand.value) {
      return false;
    }

    // 3. Category / Skin Type filter
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
    <!-- 1. TOPBAR (Header with Search and Brands Button) -->
    <header class="topbar">
      <a class="logo" href="#catalogo" aria-label="Akami K-Beauty, inicio">
        <img :src="logoPrimary" alt="Akami K-Beauty" />
      </a>

      <label class="header-search">
        <Search :size="16" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar por producto, marca o ingrediente..."
          aria-label="Buscar productos"
        />
        <button
          v-if="searchQuery"
          @click="searchQuery = ''"
          aria-label="Limpiar búsqueda"
        >
          <X :size="15" />
        </button>
      </label>

      <button
        class="brands-button"
        @click="isBrandDrawerOpen = true"
      >
        <span>Marcas</span>
        <span>+</span>
      </button>
    </header>

    <main class="flex-1">
      <!-- 2. CATALOG HERO BANNER (Dynamic responsive banner per category/skin-type) -->
      <section class="catalog-hero">
        <picture class="catalog-hero-picture">
          <source media="(min-width: 768px)" :srcset="currentBanner.desktop" />
          <img
            :key="currentBanner.desktop + currentBanner.mobile"
            :src="currentBanner.mobile"
            :alt="currentBanner.title"
            class="catalog-hero-img"
          />
        </picture>
        <div class="catalog-hero-copy">
          <span>
            <Sparkles :size="12" class="inline" />
            {{ currentBanner.kicker }}
          </span>
          <h1>{{ currentBanner.title }}</h1>
          <p>{{ currentBanner.subtitle }}</p>
        </div>
      </section>

      <!-- 3. DISCOVERY SECTION (Product vs Skin Type toggle tabs + filter scroll) -->
      <section class="discovery" id="catalogo">
        <div class="discovery-tabs" aria-label="Modo de descubrimiento">
          <button
            :class="{ active: discoveryMode === 'product' }"
            @click="discoveryMode = 'product'"
          >
            Por Tipo de Producto
          </button>
          <button
            :class="{ active: discoveryMode === 'skin' }"
            @click="discoveryMode = 'skin'"
          >
            Por Tipo de Piel
          </button>
        </div>

        <div class="filter-scroll">
          <button
            v-for="item in activeFilterList"
            :key="item"
            :class="{ active: selectedFilter === item }"
            @click="selectedFilter = item"
          >
            {{ item }}
          </button>
        </div>
      </section>

      <!-- 4. CATALOG SECTION (Section Heading + Product Grid) -->
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

        <!-- Product Grid -->
        <div v-if="filteredProducts.length" class="product-grid">
          <article
            v-for="product in filteredProducts"
            :key="product.id"
            class="product-card"
          >
            <button
              class="product-visual"
              @click="selectedProduct = product"
              :aria-label="`Ver ${product.title}`"
            >
              <img
                :src="product.image"
                :alt="`${product.title} de ${product.brand}`"
                loading="lazy"
              />
              <span class="view-hint">Ver detalle</span>
            </button>

            <div class="product-info">
              <p class="brand-tag">{{ product.brand }}</p>
              <button
                class="product-title"
                @click="selectedProduct = product"
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
                  title="Consultar por WhatsApp"
                >
                  Consultar
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <Sparkles :size="28" />
          <h3>No encontramos coincidencias</h3>
          <p>Prueba con otra marca, categoría o ingrediente.</p>
          <button @click="resetAll">Ver todos</button>
        </div>
      </section>

      <!-- 5. CONSULTATION BANNER (Matching Figma Make) -->
      <section class="consultation">
        <span>ASESORÍA PERSONALIZADA</span>
        <h2>
          ¿Tu piel pide algo<br>
          <em>pero no sabes qué?</em>
        </h2>
        <p>Cuéntanos qué necesitas y diseñamos contigo una rutina simple y efectiva.</p>
        <a
          :href="generateWhatsAppLink()"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Hablar con una asesora</span>
          <ArrowRight :size="15" />
        </a>
      </section>
    </main>

    <!-- 6. FOOTER (Matching Figma Make) -->
    <footer>
      <a class="footer-logo" href="#catalogo" aria-label="Akami K-Beauty">
        <img :src="logoPrimary" alt="Akami K-Beauty" />
      </a>
      <p>K-Beauty elegida con intención.</p>
      <div class="socials">
        <a
          href="https://www.instagram.com/akami.kbeauty?psln=MWJlYjF4YWRhbGhodg%3D%3D"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram de Akami"
        >
          <Instagram :size="16" />
        </a>
        <a
          :href="generateWhatsAppLink()"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp de Akami"
        >
          <MessageCircle :size="16" />
        </a>
      </div>
    </footer>

    <!-- 7. BRANDS DRAWER (Side Drawer matching Figma Make) -->
    <div v-if="isBrandDrawerOpen" class="brand-drawer">
      <div
        class="drawer-backdrop"
        @click="isBrandDrawerOpen = false"
      ></div>
      <div class="drawer-layer">
        <div class="drawer-head">
          <h3>Marcas</h3>
          <button
            @click="isBrandDrawerOpen = false"
            aria-label="Cerrar marcas"
          >
            <X :size="18" />
          </button>
        </div>
        <p class="drawer-intro">Filtra nuestro catálogo seleccionando una marca específica:</p>
        <div class="brand-list">
          <button
            :class="{ active: !selectedBrand }"
            @click="selectedBrand = ''; isBrandDrawerOpen = false"
          >
            <span>Todas las marcas</span>
            <span>{{ PRODUCTS.length }}</span>
          </button>
          <button
            v-for="brand in allBrands"
            :key="brand"
            :class="{ active: selectedBrand === brand }"
            @click="selectedBrand = brand; isBrandDrawerOpen = false"
          >
            <span>{{ brand }}</span>
            <span>{{ getBrandCount(brand) }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 8. PRODUCT DETAIL SHEET MODAL (Bottom Sheet matching Figma Make) -->
    <div v-if="selectedProduct" class="sheet-modal">
      <div
        class="sheet-backdrop"
        @click="selectedProduct = null"
      ></div>
      <div class="sheet-layer">
        <div class="sheet-handle"></div>
        <button
          class="sheet-close"
          @click="selectedProduct = null"
          aria-label="Cerrar ficha"
        >
          <X :size="18" />
        </button>

        <div class="sheet-scroll">
          <!-- Gallery -->
          <div class="gallery">
            <img
              :src="selectedProduct.gallery?.[galleryIndex] || selectedProduct.image"
              :alt="selectedProduct.title"
            />
            <span class="gallery-note">Original de Corea</span>
            <div
              v-if="selectedProduct.gallery && selectedProduct.gallery.length > 1"
              class="gallery-dots"
            >
              <button
                v-for="(_, idx) in selectedProduct.gallery"
                :key="idx"
                :class="{ active: galleryIndex === idx }"
                @click="galleryIndex = idx"
              ></button>
            </div>
          </div>

          <!-- Sheet Content -->
          <div class="sheet-content">
            <div class="sheet-meta">
              <span class="brand-tag">{{ selectedProduct.brand }}</span>
              <span>{{ selectedProduct.category }}</span>
            </div>

            <h2>{{ selectedProduct.title }}</h2>

            <div class="sheet-price">
              ${{ selectedProduct.price.toFixed(2) }} <span>USD</span>
            </div>

            <div class="attributes">
              <span
                v-for="attr in selectedProduct.attributes"
                :key="attr"
              >
                {{ attr }}
              </span>
              <span>{{ selectedProduct.compatibility }}</span>
            </div>

            <!-- Accordions -->
            <div class="accordions">
              <div class="accordion">
                <button @click="openAccordion = openAccordion === 'benefits' ? '' : 'benefits'">
                  <span>Beneficios</span>
                  <span :class="{ rotate: openAccordion === 'benefits' }">▾</span>
                </button>
                <p v-show="openAccordion === 'benefits'">{{ selectedProduct.benefits }}</p>
              </div>

              <div class="accordion">
                <button @click="openAccordion = openAccordion === 'ingredients' ? '' : 'ingredients'">
                  <span>Ingredientes</span>
                  <span :class="{ rotate: openAccordion === 'ingredients' }">▾</span>
                </button>
                <p v-show="openAccordion === 'ingredients'">{{ selectedProduct.ingredients }}</p>
              </div>

              <div class="accordion">
                <button @click="openAccordion = openAccordion === 'use' ? '' : 'use'">
                  <span>Modo de uso</span>
                  <span :class="{ rotate: openAccordion === 'use' }">▾</span>
                </button>
                <p v-show="openAccordion === 'use'">{{ selectedProduct.use }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sheet Sticky Action -->
        <div class="sheet-action">
          <a
            :href="generateWhatsAppLink(selectedProduct)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle :size="20" />
            <span>
              <strong>Pedir por WhatsApp</strong>
              <small>Consulta stock y precio en Bs.</small>
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- 9. FLOATING WHATSAPP BUTTON (Matching Figma Make) -->
    <a
      :href="generateWhatsAppLink()"
      target="_blank"
      rel="noopener noreferrer"
      class="floating-whatsapp"
      aria-label="WhatsApp Asesoría"
    >
      <MessageCircle :size="16" />
      <span>Asesoría</span>
    </a>
  </div>
</template>
