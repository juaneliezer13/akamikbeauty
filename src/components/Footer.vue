<script setup lang="ts">
import { Instagram, MessageCircle, Heart, MapPin, Truck } from 'lucide-vue-next';
import { generateWhatsAppLink } from '../data/products';
</script>

<template>
  <footer class="bg-surface border-t border-line/60 pt-12 pb-24 sm:pb-12 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center md:text-left">
      <!-- Col 1: Brand Info -->
      <div class="space-y-3">
        <span class="font-serif text-2xl font-bold tracking-[0.18em] text-ink uppercase block">
          AKAMI
        </span>
        <p class="text-xs text-muted leading-relaxed max-w-sm mx-auto md:mx-0">
          Tu vitrina de cosmética coreana 100% original. Seleccionamos las mejores fórmulas de Corea del Sur para que alcances una piel sana, luminosa e hidratada.
        </p>
      </div>

      <!-- Col 2: Envíos y Métodos de Entrega -->
      <div class="space-y-2 text-xs text-muted">
        <h4 class="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">
          Entregas y Envíos
        </h4>
        <div class="flex items-center justify-center md:justify-start gap-2">
          <Truck class="w-4 h-4 text-accent-rose flex-shrink-0" />
          <span>Envíos a nivel nacional (MRW / Zoom / Tealca)</span>
        </div>
        <div class="flex items-center justify-center md:justify-start gap-2">
          <MapPin class="w-4 h-4 text-accent-rose flex-shrink-0" />
          <span>Entregas personales y delivery en zonas activas</span>
        </div>
      </div>

      <!-- Col 3: Canales de Atención -->
      <div class="space-y-3 text-xs">
        <h4 class="font-bold text-ink uppercase tracking-wider text-[11px] mb-3">
          Atención Directa
        </h4>
        <div class="flex flex-col items-center md:items-start gap-2">
          <a
            href="https://www.instagram.com/akami.kbeauty?psln=MWJlYjF4YWRhbGhodg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-muted hover:text-pink-600 transition-colors"
          >
            <Instagram class="w-4 h-4" />
            <span>@akami.kbeauty en Instagram</span>
          </a>
          <a
            :href="generateWhatsAppLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-muted hover:text-emerald-600 transition-colors"
          >
            <MessageCircle class="w-4 h-4" />
            <span>Atención WhatsApp Business</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="max-w-7xl mx-auto pt-6 border-t border-line/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted text-center sm:text-left">
      <p>© {{ new Date().getFullYear() }} Akami K-Beauty. Todos los derechos reservados.</p>
      <p class="flex items-center justify-center gap-1">
        <span>Diseñado con</span>
        <Heart class="w-3 h-3 text-accent-rose fill-accent-rose inline" />
        <span>para amantes del K-Beauty</span>
      </p>
    </div>
  </footer>
</template>
