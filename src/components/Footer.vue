<script setup lang="ts">
import { Instagram, MessageCircle } from 'lucide-vue-next';
import { generateWhatsAppLink } from '../data/products';
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
        :href="generateWhatsAppLink()"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp de Akami"
      >
        <MessageCircle :size="16" />
      </a>
    </div>
  </footer>
</template>
