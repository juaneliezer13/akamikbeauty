<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
import type { BannerInfo } from '../types';

defineProps<{
  banner: BannerInfo;
}>();
</script>

<template>
  <section class="catalog-hero">
    <picture class="catalog-hero-picture">
      <source media="(min-width: 768px)" :srcset="banner.desktop" />
      <img
        :key="banner.desktop + banner.mobile"
        :src="banner.mobile"
        :alt="banner.title"
        class="catalog-hero-img"
      />
    </picture>
    <div class="catalog-hero-copy">
      <span>
        <Sparkles :size="12" class="inline" />
        {{ banner.kicker }}
      </span>
      <h1>{{ banner.title }}</h1>
      <p>{{ banner.subtitle }}</p>
    </div>
  </section>
</template>
