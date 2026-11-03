<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import {
  Plus, Search, Eye, EyeOff, Edit3, Trash2, Image as ImageIcon,
  CheckCircle2, AlertCircle, X, UploadCloud, RefreshCw
} from 'lucide-vue-next';
import { api, type AdminProduct, type BrandItem, type CategoryItem } from '../../services/api';

const products = ref<AdminProduct[]>([]);
const brands = ref<BrandItem[]>([]);
const categories = ref<CategoryItem[]>([]);

const searchQuery = ref('');
const statusFilter = ref<'all' | 'active' | 'hidden'>('all');
const brandFilter = ref('');
const categoryFilter = ref('');

const isLoading = ref(false);
const errorMsg = ref('');
const successMsg = ref('');

// Modal de Crear / Editar
const isFormModalOpen = ref(false);
const isEditing = ref(false);
const formLoading = ref(false);

const formData = ref<{
  id?: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  image: string;
  is_active: number;
}>({
  title: '',
  brand: '',
  category: '',
  price: 0,
  description: '',
  image: '',
  is_active: 1
});

const selectedImageFile = ref<File | null>(null);
const imagePreviewUrl = ref<string>('');

// Modal de Confirmación de Eliminación
const deleteTarget = ref<AdminProduct | null>(null);

async function loadData() {
  isLoading.value = true;
  errorMsg.value = '';
  try {
    const [prods, brs, cats] = await Promise.all([
      api.getAdminProducts(),
      api.getBrands(),
      api.getCategories()
    ]);
    products.value = prods;
    brands.value = brs;
    categories.value = cats;
  } catch (err: any) {
    errorMsg.value = err.message || 'Error al cargar los productos.';
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  loadData();
});

const filteredProducts = computed(() => {
  return products.value.filter(p => {
    // Filtro por texto
    if (searchQuery.value.trim() !== '') {
      const q = searchQuery.value.toLowerCase().trim();
      const inTitle = p.title.toLowerCase().includes(q);
      const inBrand = p.brand.toLowerCase().includes(q);
      const inCategory = p.category.toLowerCase().includes(q);
      if (!inTitle && !inBrand && !inCategory) return false;
    }

    // Filtro por marca
    if (brandFilter.value && p.brand !== brandFilter.value) {
      return false;
    }

    // Filtro por categoría
    if (categoryFilter.value && p.category !== categoryFilter.value) {
      return false;
    }

    // Filtro por estado
    if (statusFilter.value === 'active' && !p.is_active) return false;
    if (statusFilter.value === 'hidden' && p.is_active) return false;

    return true;
  });
});

const totalCount = computed(() => products.value.length);
const activeCount = computed(() => products.value.filter(p => p.is_active).length);
const hiddenCount = computed(() => products.value.filter(p => !p.is_active).length);

// Abrir formulario para nuevo producto
function openCreateModal() {
  isEditing.value = false;
  formData.value = {
    title: '',
    brand: brands.value[0]?.name || '',
    category: categories.value[0]?.name || '',
    price: 0,
    description: '',
    image: '',
    is_active: 1
  };
  selectedImageFile.value = null;
  imagePreviewUrl.value = '';
  isFormModalOpen.value = true;
}

// Abrir formulario para editar
function openEditModal(product: AdminProduct) {
  isEditing.value = true;
  formData.value = {
    id: product.id,
    title: product.title,
    brand: product.brand,
    category: product.category,
    price: product.price,
    description: product.description || product.benefits || '',
    image: product.image,
    is_active: product.is_active
  };
  selectedImageFile.value = null;
  imagePreviewUrl.value = product.image ? resolveImageUrl(product.image) : '';
  isFormModalOpen.value = true;
}

function handleFileSelect(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    selectedImageFile.value = file;
    imagePreviewUrl.value = URL.createObjectURL(file);
  }
}

async function handleSaveProduct() {
  if (!formData.value.title.trim()) {
    alert('El nombre del producto es obligatorio.');
    return;
  }
  if (!formData.value.brand) {
    alert('La marca es obligatoria.');
    return;
  }
  if (!formData.value.category) {
    alert('La categoría es obligatoria.');
    return;
  }

  formLoading.value = true;
  try {
    if (isEditing.value && formData.value.id) {
      const updated = await api.updateProduct(formData.value.id, formData.value, selectedImageFile.value);
      const idx = products.value.findIndex(p => p.id === updated.id);
      if (idx !== -1) {
        products.value[idx] = updated;
      }
      showFlash('Producto actualizado correctamente.');
    } else {
      const created = await api.createProduct(formData.value, selectedImageFile.value);
      products.value.unshift(created);
      showFlash('Nuevo producto creado exitosamente.');
    }
    isFormModalOpen.value = false;
  } catch (err: any) {
    alert(err.message || 'Error al guardar el producto.');
  } finally {
    formLoading.value = false;
  }
}

async function toggleStatus(product: AdminProduct) {
  const newStatus = product.is_active ? 0 : 1;
  try {
    await api.toggleProductStatus(product.id, newStatus === 1);
    product.is_active = newStatus;
    showFlash(newStatus ? `"${product.title}" ahora es visible en la vitrina.` : `"${product.title}" ha sido ocultado.`);
  } catch (err: any) {
    alert(err.message || 'Error al cambiar estado.');
  }
}

function confirmDelete(product: AdminProduct) {
  deleteTarget.value = product;
}

async function executeDelete() {
  if (!deleteTarget.value) return;
  const id = deleteTarget.value.id;
  try {
    await api.deleteProduct(id);
    products.value = products.value.filter(p => p.id !== id);
    showFlash('Producto eliminado correctamente.');
    deleteTarget.value = null;
  } catch (err: any) {
    alert(err.message || 'Error al eliminar producto.');
  }
}

function resolveImageUrl(img: string): string {
  if (!img) return '';
  if (img.startsWith('http://') || img.startsWith('https://')) return img;
  if (img.startsWith('/uploads/')) return img;
  if (img.startsWith('./')) return img;
  return `/uploads/products/${img}`;
}

function showFlash(msg: string) {
  successMsg.value = msg;
  setTimeout(() => {
    successMsg.value = '';
  }, 4000);
}
</script>

<template>
  <div class="space-y-6">
    <!-- Barra Superior de Estadísticas y Acción Principal -->
    <div class="bg-white p-5 rounded-2xl border border-blush/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex items-center space-x-3">
        <div class="flex items-center space-x-2">
          <span class="text-xs font-semibold px-2.5 py-1 bg-ivory text-ink rounded-lg border border-blush">
            Total: {{ totalCount }}
          </span>
          <span class="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200">
            Visibles: {{ activeCount }}
          </span>
          <span class="text-xs font-semibold px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg border border-gray-200">
            Ocultos: {{ hiddenCount }}
          </span>
        </div>
      </div>

      <div class="flex items-center space-x-3">
        <button
          @click="loadData"
          :disabled="isLoading"
          class="p-2.5 text-ink-light hover:text-ink hover:bg-ivory rounded-xl border border-blush/60 transition-colors"
          title="Recargar listado"
        >
          <RefreshCw :size="18" :class="{ 'animate-spin': isLoading }" />
        </button>
        <button
          @click="openCreateModal"
          class="flex items-center space-x-2 bg-ink text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-ink/90 active:scale-[0.99] transition-all shadow-sm"
        >
          <Plus :size="18" />
          <span>Nuevo Producto</span>
        </button>
      </div>
    </div>

    <!-- Mensaje Flash -->
    <div v-if="successMsg" class="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-xl flex items-center space-x-2 animate-fade-in shadow-sm">
      <CheckCircle2 :size="18" class="text-emerald-600 shrink-0" />
      <span>{{ successMsg }}</span>
    </div>

    <div v-if="errorMsg" class="p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-xl flex items-center space-x-2">
      <AlertCircle :size="18" class="text-red-600 shrink-0" />
      <span>{{ errorMsg }}</span>
    </div>

    <!-- Barra de Búsqueda y Filtros -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <!-- Búsqueda -->
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-light">
          <Search :size="18" />
        </div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar por nombre o marca..."
          class="w-full pl-10 pr-4 py-2.5 bg-white border border-blush/60 rounded-xl text-sm text-ink placeholder:text-ink-light/70 focus:outline-none focus:ring-2 focus:ring-ink"
        />
      </div>

      <!-- Filtro Marca -->
      <select
        v-model="brandFilter"
        class="bg-white border border-blush/60 rounded-xl px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
      >
        <option value="">Todas las Marcas</option>
        <option v-for="b in brands" :key="b.id" :value="b.name">{{ b.name }} ({{ b.product_count }})</option>
      </select>

      <!-- Filtro Categoría -->
      <select
        v-model="categoryFilter"
        class="bg-white border border-blush/60 rounded-xl px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
      >
        <option value="">Todas las Categorías</option>
        <option v-for="c in categories" :key="c.id" :value="c.name">{{ c.name }} ({{ c.product_count }})</option>
      </select>

      <!-- Filtro Estado -->
      <select
        v-model="statusFilter"
        class="bg-white border border-blush/60 rounded-xl px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
      >
        <option value="all">Todos los Estados</option>
        <option value="active">Solo Visibles</option>
        <option value="hidden">Solo Ocultos</option>
      </select>
    </div>

    <!-- Tabla de Productos -->
    <div class="bg-white rounded-2xl border border-blush/60 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-ivory/60 border-b border-blush/60 text-xs font-bold text-ink-light uppercase tracking-wider">
              <th class="py-3.5 px-4 w-16">Imagen</th>
              <th class="py-3.5 px-4">Producto</th>
              <th class="py-3.5 px-4">Marca</th>
              <th class="py-3.5 px-4">Categoría</th>
              <th class="py-3.5 px-4 text-right">Precio</th>
              <th class="py-3.5 px-4 text-center">Estado</th>
              <th class="py-3.5 px-4 text-center w-32">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-blush/30">
            <tr v-if="isLoading" class="text-center py-12">
              <td colspan="7" class="py-8 text-ink-light">Cargando productos...</td>
            </tr>
            <tr v-else-if="filteredProducts.length === 0" class="text-center">
              <td colspan="7" class="py-12 text-ink-light">No se encontraron productos con los filtros seleccionados.</td>
            </tr>
            <tr
              v-for="product in filteredProducts"
              :key="product.id"
              class="hover:bg-ivory/20 transition-colors group"
              :class="{ 'opacity-60 bg-gray-50/50': !product.is_active }"
            >
              <!-- Imagen Thumbnail -->
              <td class="py-3 px-4">
                <div class="w-12 h-12 rounded-lg bg-ivory border border-blush/60 overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    v-if="product.image"
                    :src="resolveImageUrl(product.image)"
                    :alt="product.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <ImageIcon v-else :size="18" class="text-ink-light/50" />
                </div>
              </td>

              <!-- Título & ID -->
              <td class="py-3 px-4">
                <div class="font-medium text-ink max-w-xs md:max-w-md line-clamp-1" :title="product.title">
                  {{ product.title }}
                </div>
                <div class="text-xs text-ink-light/70">ID #{{ product.id }}</div>
              </td>

              <!-- Marca -->
              <td class="py-3 px-4">
                <span class="inline-block text-xs font-semibold px-2 py-0.5 bg-ivory text-ink rounded border border-blush/60">
                  {{ product.brand }}
                </span>
              </td>

              <!-- Categoría -->
              <td class="py-3 px-4 text-ink-light">
                {{ product.category }}
              </td>

              <!-- Precio -->
              <td class="py-3 px-4 text-right font-serif font-bold text-ink">
                ${{ product.price.toFixed(2) }}
              </td>

              <!-- Estado Badge -->
              <td class="py-3 px-4 text-center">
                <button
                  @click="toggleStatus(product)"
                  class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer transition-transform active:scale-95"
                  :class="product.is_active
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                    : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'"
                  :title="product.is_active ? 'Click para ocultar de la vitrina' : 'Click para mostrar en la vitrina'"
                >
                  <span class="w-1.5 h-1.5 rounded-full" :class="product.is_active ? 'bg-emerald-500' : 'bg-gray-400'"></span>
                  <span>{{ product.is_active ? 'Visible' : 'Oculto' }}</span>
                </button>
              </td>

              <!-- Acciones -->
              <td class="py-3 px-4 text-center">
                <div class="flex items-center justify-center space-x-1.5">
                  <button
                    @click="toggleStatus(product)"
                    class="p-1.5 text-ink-light hover:text-ink hover:bg-ivory rounded-lg transition-colors"
                    :title="product.is_active ? 'Ocultar producto' : 'Hacer visible'"
                  >
                    <Eye v-if="product.is_active" :size="16" />
                    <EyeOff v-else :size="16" class="text-gray-400" />
                  </button>
                  <button
                    @click="openEditModal(product)"
                    class="p-1.5 text-ink-light hover:text-ink hover:bg-ivory rounded-lg transition-colors"
                    title="Editar producto"
                  >
                    <Edit3 :size="16" />
                  </button>
                  <button
                    @click="confirmDelete(product)"
                    class="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                    title="Eliminar producto"
                  >
                    <Trash2 :size="16" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- MODAL CREAR / EDITAR PRODUCTO -->
    <div v-if="isFormModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-fade-in">
      <div class="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-blush/60 overflow-hidden max-h-[90vh] flex flex-col">
        <!-- Header Modal -->
        <div class="bg-gradient-to-r from-ivory to-blush/30 px-6 py-4 border-b border-blush/40 flex items-center justify-between shrink-0">
          <div>
            <h3 class="font-serif text-lg font-bold text-ink">
              {{ isEditing ? 'Modificar Producto' : 'Agregar Nuevo Producto' }}
            </h3>
            <p class="text-xs text-ink-light">Complete los datos requeridos para el catálogo</p>
          </div>
          <button
            @click="isFormModalOpen = false"
            class="p-1.5 text-ink-light hover:text-ink hover:bg-blush/40 rounded-full transition-colors"
          >
            <X :size="20" />
          </button>
        </div>

        <!-- Form Body (Scrollable) -->
        <form @submit.prevent="handleSaveProduct" class="p-6 space-y-4 overflow-y-auto flex-1">
          <!-- Nombre del producto -->
          <div>
            <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1">Nombre del Producto *</label>
            <input
              v-model="formData.title"
              type="text"
              required
              placeholder="Ej: Heartleaf 77% Soothing Toner"
              class="w-full px-3.5 py-2.5 bg-ivory/40 border border-blush rounded-xl text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
            />
          </div>

          <!-- Marca y Categoría en 2 columnas -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1">Marca *</label>
              <select
                v-model="formData.brand"
                required
                class="w-full px-3.5 py-2.5 bg-ivory/40 border border-blush rounded-xl text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
              >
                <option v-for="b in brands" :key="b.id" :value="b.name">{{ b.name }}</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1">Categoría *</label>
              <select
                v-model="formData.category"
                required
                class="w-full px-3.5 py-2.5 bg-ivory/40 border border-blush rounded-xl text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
              >
                <option v-for="c in categories" :key="c.id" :value="c.name">{{ c.name }}</option>
              </select>
            </div>
          </div>

          <!-- Precio y Estado -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1">Precio ($ USD) *</label>
              <input
                v-model.number="formData.price"
                type="number"
                step="0.01"
                min="0"
                required
                placeholder="28.50"
                class="w-full px-3.5 py-2.5 bg-ivory/40 border border-blush rounded-xl text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1">Visibilidad</label>
              <div class="flex items-center space-x-3 h-10">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    :checked="formData.is_active === 1"
                    @change="formData.is_active = ($event.target as HTMLInputElement).checked ? 1 : 0"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  <span class="ml-3 text-sm font-medium text-ink">
                    {{ formData.is_active ? 'Visible en catálogo' : 'Oculto' }}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <!-- Descripción / Beneficios -->
          <div>
            <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1">Descripción / Beneficios</label>
            <textarea
              v-model="formData.description"
              rows="3"
              placeholder="Beneficios principales, textura o características para la asesoría de la clienta..."
              class="w-full px-3.5 py-2.5 bg-ivory/40 border border-blush rounded-xl text-sm text-ink focus:outline-none focus:ring-2 focus:ring-ink resize-none"
            ></textarea>
          </div>

          <!-- Imagen del Producto (Carga Dinámica) -->
          <div>
            <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1.5">Fotografía del Producto</label>
            <div class="flex items-start space-x-4">
              <!-- Preview -->
              <div class="w-24 h-24 rounded-xl bg-ivory border border-blush/60 overflow-hidden shrink-0 flex items-center justify-center shadow-inner">
                <img
                  v-if="imagePreviewUrl"
                  :src="imagePreviewUrl"
                  alt="Vista previa"
                  class="w-full h-full object-cover"
                />
                <ImageIcon v-else :size="28" class="text-ink-light/40" />
              </div>

              <!-- Upload Area -->
              <div class="flex-1">
                <label class="flex flex-col items-center justify-center p-4 border-2 border-dashed border-blush hover:border-ink rounded-xl cursor-pointer bg-ivory/20 hover:bg-ivory/40 transition-colors">
                  <UploadCloud :size="24" class="text-ink-light mb-1" />
                  <span class="text-xs font-medium text-ink">Seleccionar o arrastrar imagen</span>
                  <span class="text-[11px] text-ink-light/70">JPG, PNG o WebP (máx. 5MB)</span>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    class="hidden"
                    @change="handleFileSelect"
                  />
                </label>
                <div v-if="selectedImageFile" class="mt-1.5 text-xs text-emerald-700 flex items-center space-x-1">
                  <CheckCircle2 :size="14" />
                  <span>Archivo seleccionado: {{ selectedImageFile.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer Botones -->
          <div class="pt-4 border-t border-blush/40 flex items-center justify-end space-x-3">
            <button
              type="button"
              @click="isFormModalOpen = false"
              class="px-4 py-2.5 text-sm font-medium text-ink-light hover:text-ink hover:bg-ivory rounded-xl transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              :disabled="formLoading"
              class="px-5 py-2.5 bg-ink text-white text-sm font-medium rounded-xl hover:bg-ink/90 active:scale-[0.99] transition-all shadow-md flex items-center space-x-2 disabled:opacity-70"
            >
              <span v-if="formLoading" class="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>{{ formLoading ? 'Guardando...' : (isEditing ? 'Guardar Cambios' : 'Crear Producto') }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- MODAL CONFIRMAR ELIMINACIÓN -->
    <div v-if="deleteTarget" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-fade-in">
      <div class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-blush/60 p-6 space-y-4">
        <div class="flex items-center space-x-3 text-red-600">
          <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
            <Trash2 :size="20" />
          </div>
          <div>
            <h4 class="font-bold text-ink text-base">¿Eliminar este producto?</h4>
            <p class="text-xs text-ink-light">Esta acción eliminará el producto de la base de datos.</p>
          </div>
        </div>

        <p class="text-sm text-ink bg-ivory p-3 rounded-xl border border-blush/60">
          <strong>{{ deleteTarget.title }}</strong> ({{ deleteTarget.brand }})
        </p>

        <div class="flex items-center justify-end space-x-3 pt-2">
          <button
            @click="deleteTarget = null"
            class="px-4 py-2 text-sm font-medium text-ink-light hover:text-ink rounded-xl"
          >
            Cancelar
          </button>
          <button
            @click="executeDelete"
            class="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-sm"
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fadeIn 0.15s ease-out forwards;
}
</style>
