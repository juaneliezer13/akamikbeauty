<script setup lang="ts">
import { ref } from 'vue';
import { Package, Tag, Layers, ArrowLeft, LogOut, User } from 'lucide-vue-next';
import ProductsAdmin from './ProductsAdmin.vue';
import BrandsAdmin from './BrandsAdmin.vue';
import CategoriesAdmin from './CategoriesAdmin.vue';
import { api, type AuthUser } from '../../services/api';

const props = defineProps<{
  user: AuthUser;
}>();

const emit = defineEmits<{
  (e: 'exit-admin'): void;
  (e: 'logout'): void;
}>();

type AdminTab = 'products' | 'brands' | 'categories';
const currentTab = ref<AdminTab>('products');

async function handleLogout() {
  await api.logout();
  emit('logout');
}
</script>

<template>
  <div class="min-h-screen bg-ivory text-ink flex flex-col font-sans selection:bg-blush-dark selection:text-ink">
    <!-- Barra Superior del CMS -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blush shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo & Titular CMS -->
        <div class="flex items-center space-x-3">
          <button
            @click="emit('exit-admin')"
            class="flex items-center space-x-2 text-ink hover:text-coral transition-colors mr-2 group"
            title="Volver a la vitrina pública"
          >
            <ArrowLeft :size="18" class="group-hover:-translate-x-0.5 transition-transform" />
            <span class="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Ver Catálogo</span>
          </button>

          <div class="h-6 w-px bg-blush/60 hidden sm:block"></div>

          <div class="flex items-center space-x-2">
            <span class="font-serif font-black text-lg tracking-tight text-ink">Akami</span>
            <span class="text-[10px] font-bold px-2 py-0.5 bg-ink text-white rounded-md tracking-wider uppercase">CMS</span>
          </div>
        </div>

        <!-- Pestañas de Navegación del CMS -->
        <nav class="flex items-center space-x-1 sm:space-x-2 bg-ivory/80 p-1 rounded-xl border border-blush/60">
          <button
            @click="currentTab = 'products'"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            :class="currentTab === 'products' ? 'bg-white text-ink shadow-xs' : 'text-ink-light hover:text-ink'"
          >
            <Package :size="15" />
            <span>Mis productos</span>
          </button>

          <button
            @click="currentTab = 'brands'"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            :class="currentTab === 'brands' ? 'bg-white text-ink shadow-xs' : 'text-ink-light hover:text-ink'"
          >
            <Tag :size="15" />
            <span>Marcas</span>
          </button>

          <button
            @click="currentTab = 'categories'"
            class="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            :class="currentTab === 'categories' ? 'bg-white text-ink shadow-xs' : 'text-ink-light hover:text-ink'"
          >
            <Layers :size="15" />
            <span class="hidden sm:inline">Categorías de productos</span>
            <span class="sm:hidden">Categorías</span>
          </button>
        </nav>

        <!-- Perfil y Salida -->
        <div class="flex items-center space-x-3">
          <div class="hidden md:flex items-center space-x-2 text-xs text-ink-light">
            <div class="w-7 h-7 rounded-full bg-blush flex items-center justify-center text-ink font-bold">
              <User :size="14" />
            </div>
            <span class="font-medium text-ink">{{ user.username }}</span>
          </div>

          <button
            @click="handleLogout"
            class="p-2 text-ink-light hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            title="Cerrar sesión"
          >
            <LogOut :size="18" />
          </button>
        </div>
      </div>
    </header>

    <!-- Contenido Principal Dinámico -->
    <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
      <ProductsAdmin v-if="currentTab === 'products'" />
      <BrandsAdmin v-else-if="currentTab === 'brands'" />
      <CategoriesAdmin v-else-if="currentTab === 'categories'" />
    </main>

    <!-- Footer CMS -->
    <footer class="py-4 border-t border-blush/40 text-center text-xs text-ink-light/60">
      Akami K-Beauty CMS &copy; 2026 — Plataforma de Gestión de Cosmética Coreana
    </footer>
  </div>
</template>
