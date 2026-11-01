<script setup lang="ts">
import { MessageCircle, Sparkles, Heart } from 'lucide-vue-next';
import { generateWhatsAppLink } from '../data/products';
</script>

<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 my-12 sm:my-16">
    <div class="relative bg-gradient-to-br from-blush via-blush-light to-blush rounded-3xl border border-line p-6 sm:p-10 text-center overflow-hidden shadow-card">
      <div class="relative z-10 max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-line text-xs font-semibold text-muted mb-3 shadow-sm">
          <Heart class="w-3.5 h-3.5 text-accent-rose fill-accent-rose" />
          <span>Asesoría Personalizada</span>
        </div>

        <h2 class="font-serif text-2xl sm:text-4xl font-semibold text-ink mb-3 leading-tight">
          ¿No sabes qué productos necesita tu piel?
        </h2>

        <p class="text-xs sm:text-sm text-muted mb-6 leading-relaxed">
          Escríbenos directamente a WhatsApp. Nuestras especialistas en K-Beauty te guiarán para armar tu rutina personalizada ideal según tu tipo de piel, presupuesto y objetivos.
        </p>

        <a
          :href="generateWhatsAppLink()"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-ink hover:bg-ink/85 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-button transition-all active:scale-95"
        >
          <MessageCircle class="w-4 h-4 text-whatsapp" />
          <span>Consultar Rutina con una Asesora</span>
        </a>
      </div>
    </div>
  </section>
</template>
