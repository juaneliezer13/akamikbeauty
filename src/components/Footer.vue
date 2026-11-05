<script setup lang="ts">
import { Instagram, Lock } from 'lucide-vue-next';
import { generateAdvisorWhatsAppLink } from '../data/products';
import WhatsAppIcon from './icons/WhatsAppIcon.vue';

const emit = defineEmits<{
  (e: 'open-admin'): void;
}>();
</script>

<template>
  <footer class="footer">
    <div class="footer-copy">
      <span class="footer-brand">Akami K-Beauty</span>
      <p>© 2026 Akami C.A. Cosmética Coreana Original en Venezuela.</p>
      <div class="footer-links">
        <a href="#catalogo">Catálogo</a>
        <span>•</span>
        <a href="#quienes-somos">Quiénes somos</a>
        <span>•</span>
        <a href="#contacto">Contacto</a>
      </div>
    </div>
    <div class="footer-actions">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram de Akami"
        class="footer-social"
      >
        <Instagram :size="16" />
      </a>
      <a
        :href="generateAdvisorWhatsAppLink()"
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar por WhatsApp con una asesora"
        class="footer-social footer-whatsapp"
      >
        <WhatsAppIcon :size="16" />
      </a>
      <button
        @click="emit('open-admin')"
        class="footer-social text-ink-light/50 hover:text-ink hover:bg-blush transition-colors"
        aria-label="Acceso Administrativo"
        title="Acceso CMS Administrador"
      >
        <Lock :size="14" />
      </button>
    </div>
  </footer>
</template>
