<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import { generateWhatsAppLink } from '../data/products';
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
      :href="generateWhatsAppLink()"
      target="_blank"
      rel="noopener noreferrer"
      class="consultation-cta"
    >
      <span>Chatear con una asesora</span>
      <ArrowRight :size="16" />
    </a>
  </section>
</template>
