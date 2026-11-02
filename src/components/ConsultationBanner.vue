<script setup lang="ts">
import { generateAdvisorWhatsAppLink } from '../data/products';
import WhatsAppIcon from './icons/WhatsAppIcon.vue';
</script>

<template>
  <section class="consultation">
    <div class="consultation-copy">
      <span class="section-kicker">Asesoría personalizada</span>
      <h3>¿Dudas con tu rutina coreana?</h3>
      <p>
        Escríbenos directamente por WhatsApp y nuestras especialistas te ayudarán a seleccionar los productos exactos para tu piel.
      </p>
    </div>
    <a
      :href="generateAdvisorWhatsAppLink()"
      target="_blank"
      rel="noopener noreferrer"
      class="consultation-cta"
    >
      <WhatsAppIcon :size="18" />
      <span>Chatear con una asesora</span>
    </a>
  </section>
</template>
