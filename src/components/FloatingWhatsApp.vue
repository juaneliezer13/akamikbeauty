<script setup lang="ts">
import { generateAdvisorWhatsAppLink } from '../data/products';
import WhatsAppIcon from './icons/WhatsAppIcon.vue';
</script>

<template>
  <a
    :href="generateAdvisorWhatsAppLink()"
    target="_blank"
    rel="noopener noreferrer"
    class="floating-whatsapp"
    aria-label="Chatear con una asesora por WhatsApp"
    title="Chatear con una asesora por WhatsApp"
  >
    <WhatsAppIcon :size="20" />
    <span class="floating-label">Asesoría</span>
  </a>
</template>
