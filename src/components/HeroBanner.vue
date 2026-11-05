<script setup lang="ts">
import type { BannerInfo } from '../types';
import logoWhite from '../assets/brand/logo-white.png';

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
        fetchpriority="high"
      />
    </picture>

    <div class="catalog-hero-overlay" aria-hidden="true"></div>

    <div class="catalog-hero-brand">
      <img
        :src="logoWhite"
        alt="Akami K-Beauty"
        class="catalog-hero-brand-logo"
      />
    </div>

    <div class="catalog-hero-copy">
      <h1>{{ banner.title }}</h1>
      <p v-if="banner.subtitle">{{ banner.subtitle }}</p>
    </div>
  </section>
</template>
