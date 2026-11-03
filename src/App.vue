<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { Sparkles } from 'lucide-vue-next';

import { PRODUCTS, CATEGORIES, SKIN_TYPES } from './data/products';
import { CATEGORY_BANNERS, SKIN_BANNERS } from './data/banners';
import type { Product, BannerInfo } from './types';
import { api, type AuthUser } from './services/api';

import Navbar from './components/Navbar.vue';
import HeroBanner from './components/HeroBanner.vue';
import FilterSection from './components/FilterSection.vue';
import ProductCard from './components/ProductCard.vue';
import ProductDetailModal from './components/ProductDetailModal.vue';
import BrandsDrawer from './components/BrandsDrawer.vue';
import ConsultationBanner from './components/ConsultationBanner.vue';
import Footer from './components/Footer.vue';
import FloatingWhatsApp from './components/FloatingWhatsApp.vue';

// Admin CMS Components
import AdminLayout from './components/admin/AdminLayout.vue';
import AdminLoginModal from './components/admin/AdminLoginModal.vue';

// Estado de Navegación y CMS
const currentView = ref<'catalog' | 'admin'>('catalog');
const currentUser = ref<AuthUser | null>(null);
const isLoginModalOpen = ref(false);

// Productos dinámicos (con fallback a estáticos)
const activeProducts = ref<Product[]>([...PRODUCTS]);

const searchQuery = ref('');
const discoveryMode = ref<'product' | 'skin'>('product');
const selectedFilter = ref('Todos');
const selectedBrand = ref('');
const isBrandDrawerOpen = ref(false);
const selectedProduct = ref<Product | null>(null);

async function refreshPublicProducts() {
  try {
    const fetched = await api.getPublicProducts();
    if (fetched && fetched.length > 0) {
      activeProducts.value = fetched;
    }
  } catch {
    // Si la API no está disponible, mantenemos los productos estáticos precargados
  }
}

async function checkUrlHash() {
  if (window.location.hash === '#admin') {
    const user = await api.checkAuth();
    if (user) {
      currentUser.value = user;
      currentView.value = 'admin';
    } else {
      isLoginModalOpen.value = true;
    }
  } else {
    currentView.value = 'catalog';
  }
}

onMounted(async () => {
  await refreshPublicProducts();
  await checkUrlHash();

  window.addEventListener('hashchange', checkUrlHash);
});

function handleOpenAdmin() {
  if (currentUser.value) {
    currentView.value = 'admin';
    window.location.hash = '#admin';
  } else {
    isLoginModalOpen.value = true;
  }
}

function handleLoginSuccess(user: AuthUser) {
  currentUser.value = user;
  currentView.value = 'admin';
  window.location.hash = '#admin';
}

function handleExitAdmin() {
  currentView.value = 'catalog';
  window.location.hash = '';
  refreshPublicProducts();
}

function handleLogout() {
  currentUser.value = null;
  currentView.value = 'catalog';
  window.location.hash = '';
}

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
  const brandsSet = new Set(activeProducts.value.map(p => p.brand));
  return Array.from(brandsSet).sort();
});

function getBrandCount(brand: string): number {
  return activeProducts.value.filter(p => p.brand === brand).length;
}

watch(discoveryMode, () => {
  selectedFilter.value = 'Todos';
});

const filteredProducts = computed(() => {
  return activeProducts.value.filter(product => {
    if (searchQuery.value.trim() !== '') {
      const q = searchQuery.value.toLowerCase().trim();
      const inTitle = product.title.toLowerCase().includes(q);
      const inBrand = product.brand.toLowerCase().includes(q);
      const inCat = product.category.toLowerCase().includes(q);
      const inIng = product.ingredients ? product.ingredients.toLowerCase().includes(q) : false;
      const inBen = product.benefits ? product.benefits.toLowerCase().includes(q) : false;
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
        const skinTypes = product.skinTypes || [];
        const compat = product.compatibility || '';
        const matchesSkin = skinTypes.includes(selectedFilter.value) ||
                            compat.toLowerCase().includes(selectedFilter.value.toLowerCase());
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
  <!-- VISTA CMS ADMINISTRADOR -->
  <AdminLayout
    v-if="currentView === 'admin' && currentUser"
    :user="currentUser"
    @exit-admin="handleExitAdmin"
    @logout="handleLogout"
  />

  <!-- VISTA CATÁLOGO VITRINA PÚBLICA (100% DISEÑO ORIGINAL) -->
  <div v-else class="min-h-screen flex flex-col">
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

    <Footer @open-admin="handleOpenAdmin" />

    <BrandsDrawer
      v-model:is-open="isBrandDrawerOpen"
      v-model:selected-brand="selectedBrand"
      :brands="allBrands"
      :total-count="activeProducts.length"
      :get-brand-count="getBrandCount"
    />

    <ProductDetailModal
      :product="selectedProduct"
      @close="selectedProduct = null"
    />

    <FloatingWhatsApp />
  </div>

  <!-- MODAL DE INICIO DE SESIÓN ADMIN -->
  <AdminLoginModal
    :is-open="isLoginModalOpen"
    @close="isLoginModalOpen = false"
    @login-success="handleLoginSuccess"
  />
</template>
