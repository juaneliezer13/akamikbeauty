<script setup lang="ts">
import { ref } from 'vue';
import { Lock, User, Key, X, AlertCircle } from 'lucide-vue-next';
import { api, type AuthUser } from '../../services/api';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'login-success', user: AuthUser): void;
}>();

const username = ref('akami');
const password = ref('');
const error = ref('');
const isLoading = ref(false);

async function handleLogin() {
  if (!username.value.trim() || !password.value.trim()) {
    error.value = 'Por favor ingresa usuario y contraseña.';
    return;
  }

  isLoading.value = true;
  error.value = '';

  try {
    const data = await api.login(username.value.trim(), password.value.trim());
    password.value = '';
    emit('login-success', data.user);
    emit('close');
  } catch (err: any) {
    error.value = err.message || 'Error al iniciar sesión. Verifica tus credenciales.';
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-fade-in">
    <div class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-blush/60 overflow-hidden transform transition-all">
      <!-- Header -->
      <div class="bg-gradient-to-r from-ivory to-blush/30 px-6 py-5 border-b border-blush/40 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center shadow-sm">
            <Lock :size="20" />
          </div>
          <div>
            <h3 class="font-serif text-lg font-bold text-ink">Administración Akami</h3>
            <p class="text-xs text-ink-light">Mini CMS — Acceso exclusivo</p>
          </div>
        </div>
        <button
          @click="emit('close')"
          class="p-2 text-ink-light hover:text-ink hover:bg-blush/40 rounded-full transition-colors"
          aria-label="Cerrar modal"
        >
          <X :size="20" />
        </button>
      </div>

      <!-- Body -->
      <form @submit.prevent="handleLogin" class="p-6 space-y-4">
        <div v-if="error" class="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl flex items-center space-x-2">
          <AlertCircle :size="18" class="shrink-0" />
          <span>{{ error }}</span>
        </div>

        <div>
          <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1.5">Usuario</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-light">
              <User :size="18" />
            </div>
            <input
              v-model="username"
              type="text"
              required
              class="w-full pl-10 pr-4 py-2.5 bg-ivory/50 border border-blush rounded-xl text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition-all"
              placeholder="akami"
            />
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold text-ink-light uppercase tracking-wider mb-1.5">Contraseña</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-light">
              <Key :size="18" />
            </div>
            <input
              v-model="password"
              type="password"
              required
              class="w-full pl-10 pr-4 py-2.5 bg-ivory/50 border border-blush rounded-xl text-ink text-sm focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div class="pt-2">
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 px-4 bg-ink text-white font-medium rounded-xl hover:bg-ink/90 active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-70 shadow-md"
          >
            <span v-if="isLoading" class="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            <span>{{ isLoading ? 'Iniciando sesión...' : 'Entrar al Mini CMS' }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
