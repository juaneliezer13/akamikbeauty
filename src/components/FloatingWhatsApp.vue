<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next';
import { generateWhatsAppLink } from '../data/products';
</script>

<template>
  <aside class="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
    <a
      :href="generateWhatsAppLink()"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para consultas"
      class="group flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3.5 py-3 rounded-full shadow-wa hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
    >
      <MessageCircle class="w-6 h-6 text-white" />
      <span class="text-xs font-bold tracking-wide hidden sm:inline pr-1">
        ¿Dudas? Escríbenos
      </span>
      <span class="absolute -top-1 -right-1 w-3 h-3 bg-accent-rose rounded-full animate-ping"></span>
      <span class="absolute -top-1 -right-1 w-3 h-3 bg-accent-rose rounded-full"></span>
    </a>
  </aside>
</template>
