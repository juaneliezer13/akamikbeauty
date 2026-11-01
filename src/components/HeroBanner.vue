<script setup lang="ts">
import { Sparkles, HeartHandshake, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-blush/60 via-ivory to-ivory py-10 sm:py-16 border-b border-line/40">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
      <!-- Tag / Sub-badge -->
      <div class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush border border-line text-xs font-semibold text-muted mb-4 sm:mb-6 shadow-sm">
        <Sparkles class="w-3.5 h-3.5 text-accent-rose" />
        <span>K-Beauty Original en Venezuela</span>
      </div>

      <!-- Main Headline -->
      <h1 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.08] max-w-3xl mx-auto mb-4 sm:mb-6">
        Cosmética Coreana para una <span class="italic font-normal text-muted-dark">piel radiante</span> y saludable.
      </h1>

      <!-- Description / Lead -->
      <p class="text-sm sm:text-base text-muted max-w-2xl mx-auto font-normal leading-relaxed mb-6 sm:mb-8">
        Explora nuestro catálogo estilo vitrina. Filtra por <strong>Tipo de Producto</strong> o según lo que tu <strong>Tipo de Piel</strong> necesita, y cierra tu compra directamente en nuestro WhatsApp Business.
      </p>

      <!-- Trust Badges -->
      <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-muted font-medium pt-2">
        <div class="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-full border border-line/60">
          <ShieldCheck class="w-4 h-4 text-emerald-600" />
          <span>Fórmulas 100% Auténticas</span>
        </div>
        <div class="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-full border border-line/60">
          <HeartHandshake class="w-4 h-4 text-accent-rose" />
          <span>Asesoría Personalizada</span>
        </div>
        <div class="flex items-center gap-1.5 bg-surface/80 px-3 py-1.5 rounded-full border border-line/60">
          <span class="w-2 h-2 rounded-full bg-whatsapp"></span>
          <span>Pedidos Directos a WhatsApp</span>
        </div>
      </div>
    </div>
  </section>
</template>
