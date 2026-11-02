<script setup lang="ts">
import { Instagram } from 'lucide-vue-next';
import { generateAdvisorWhatsAppLink } from '../data/products';
import WhatsAppIcon from './icons/WhatsAppIcon.vue';
</script>

<template>
  <footer class="footer">
    <div class="footer-copy">
      <span class="footer-brand">Akami K-Beauty</span>
      <p>© 2026 Akami C.A. Cosmética Coreana Original en Venezuela.</p>
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
    </div>
  </footer>
</template>
