<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Plus, Edit3, Trash2, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-vue-next';
import { api, type CategoryItem } from '../../services/api';

const categories = ref<CategoryItem[]>([]);
const isLoading = ref(false);
const newCategoryName = ref('');
const editingCategory = ref<CategoryItem | null>(null);
const editCategoryName = ref('');
const isSubmitting = ref(false);
const successMsg = ref('');
const errorMsg = ref('');

async function loadCategories() {
  isLoading.value = true;
  errorMsg.value = '';
  try {
    categories.value = await api.getCategories();
  } catch (err: any) {
    errorMsg.value = err.message || 'Error al cargar categorías.';
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  loadCategories();
});

async function handleCreateCategory() {
  const name = newCategoryName.value.trim();
  if (!name) return;

  isSubmitting.value = true;
  try {
    const created = await api.createCategory(name);
    categories.value.push(created);
    categories.value.sort((a, b) => a.name.localeCompare(b.name));
    newCategoryName.value = '';
    showFlash(`Categoría "${name}" agregada exitosamente.`);
  } catch (err: any) {
    alert(err.message || 'Error al crear categoría.');
  } finally {
    isSubmitting.value = false;
  }
}

function startEdit(c: CategoryItem) {
  editingCategory.value = c;
  editCategoryName.value = c.name;
}

async function handleUpdateCategory() {
  if (!editingCategory.value) return;
  const newName = editCategoryName.value.trim();
  if (!newName) return;

  isSubmitting.value = true;
  try {
    await api.updateCategory(editingCategory.value.id, newName);
    editingCategory.value.name = newName;
    categories.value.sort((a, b) => a.name.localeCompare(b.name));
    showFlash(`Categoría actualizada a "${newName}".`);
    editingCategory.value = null;
  } catch (err: any) {
    alert(err.message || 'Error al actualizar categoría.');
  } finally {
    isSubmitting.value = false;
  }
}

async function handleDeleteCategory(c: CategoryItem) {
  if (c.product_count > 0) {
    if (!confirm(`La categoría "${c.name}" tiene ${c.product_count} producto(s) asociado(s). ¿Estás seguro de que deseas eliminarla?`)) {
      return;
    }
  } else {
    if (!confirm(`¿Eliminar la categoría "${c.name}"?`)) {
      return;
    }
  }

  try {
    await api.deleteCategory(c.id);
    categories.value = categories.value.filter(item => item.id !== c.id);
    showFlash(`Categoría "${c.name}" eliminada.`);
  } catch (err: any) {
    alert(err.message || 'Error al eliminar categoría.');
  }
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
    <!-- Header y Formulario Rápido -->
    <div class="bg-white p-5 rounded-2xl border border-blush/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h3 class="font-serif text-lg font-bold text-ink">Categorías de Productos</h3>
        <p class="text-xs text-ink-light">Total: {{ categories.length }} categorías registradas</p>
      </div>

      <!-- Formulario para Agregar Categoría -->
      <form @submit.prevent="handleCreateCategory" class="flex items-center space-x-2">
        <input
          v-model="newCategoryName"
          type="text"
          placeholder="Nueva categoría..."
          required
          class="px-3.5 py-2 bg-ivory/50 border border-blush rounded-xl text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-ink"
        />
        <button
          type="submit"
          :disabled="isSubmitting || !newCategoryName.trim()"
          class="flex items-center space-x-1.5 bg-ink text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-ink/90 active:scale-95 transition-all disabled:opacity-50"
        >
          <Plus :size="16" />
          <span>Agregar</span>
        </button>
        <button
          type="button"
          @click="loadCategories"
          class="p-2 text-ink-light hover:text-ink hover:bg-ivory rounded-xl border border-blush/60 transition-colors"
          title="Recargar"
        >
          <RefreshCw :size="16" :class="{ 'animate-spin': isLoading }" />
        </button>
      </form>
    </div>

    <!-- Flash Messages -->
    <div v-if="successMsg" class="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-xl flex items-center space-x-2">
      <CheckCircle2 :size="16" class="text-emerald-600 shrink-0" />
      <span>{{ successMsg }}</span>
    </div>

    <div v-if="errorMsg" class="p-3 bg-red-50 border border-red-200 text-red-800 text-sm rounded-xl flex items-center space-x-2">
      <AlertCircle :size="16" class="text-red-600 shrink-0" />
      <span>{{ errorMsg }}</span>
    </div>

    <!-- Grilla de Categorías -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <div
        v-for="c in categories"
        :key="c.id"
        class="bg-white p-4 rounded-xl border border-blush/60 shadow-sm flex items-center justify-between hover:border-ink/30 transition-all group"
      >
        <div class="flex-1 min-w-0 pr-2">
          <div class="font-bold text-ink text-sm truncate">
            {{ c.name }}
          </div>
          <div class="text-xs text-ink-light">
            {{ c.product_count }} {{ c.product_count === 1 ? 'producto' : 'productos' }}
          </div>
        </div>

        <div class="flex items-center space-x-1 shrink-0">
          <button
            @click="startEdit(c)"
            class="p-1.5 text-ink-light hover:text-ink hover:bg-ivory rounded-lg transition-colors"
            title="Editar nombre"
          >
            <Edit3 :size="15" />
          </button>
          <button
            @click="handleDeleteCategory(c)"
            class="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Eliminar categoría"
          >
            <Trash2 :size="15" />
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Editar Categoría -->
    <div v-if="editingCategory" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
      <div class="bg-white rounded-2xl shadow-xl border border-blush/60 p-6 max-w-sm w-full space-y-4">
        <h4 class="font-serif font-bold text-ink text-base">Modificar Categoría</h4>
        <form @submit.prevent="handleUpdateCategory" class="space-y-3">
          <input
            v-model="editCategoryName"
            type="text"
            required
            class="w-full px-3.5 py-2.5 bg-ivory/50 border border-blush rounded-xl text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-ink"
          />
          <div class="flex items-center justify-end space-x-2 pt-2">
            <button
              type="button"
              @click="editingCategory = null"
              class="px-3 py-1.5 text-sm text-ink-light hover:text-ink rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-4 py-1.5 bg-ink text-white text-sm font-medium rounded-lg hover:bg-ink/90"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
