<script setup lang="ts">
import { ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-vue-next';

defineEmits<{
  (e: 'goToCatalog'): void;
}>();

const video1Src = './videos/ritual-skincare.mp4';
const video1Poster = './videos/ritual-skincare-poster.webp';

const video2Src = './videos/glass-skin.mp4';
const video2Poster = './videos/glass-skin-poster.webp';
</script>

<template>
  <div class="about-page">
    <!-- SECCIÓN 1: QUIÉNES SOMOS (HISTORIA Y PROPÓSITO) -->
    <section class="about-section about-section--story">
      <div class="about-container">
        <div class="about-grid">
          <!-- Columna Texto (Izquierda) -->
          <div class="about-content">
            <span class="about-kicker">Nuestra Historia & Propósito</span>
            <h2 class="about-heading">
              Inspirados en el cuidado consciente de la piel
            </h2>
            <div class="about-divider"></div>
            
            <p class="about-paragraph about-paragraph--lead">
              Akami es una marca especializada en la venta de <strong>Skincare coreano de marcas reconocidas a nivel mundial</strong>. Su propósito es acercar a las personas a rituales de belleza auténticos, efectivos y de calidad, inspirados en el cuidado consciente de la piel.
            </p>

            <p class="about-paragraph">
              Aseguramos coherencia y excelencia en cada uno de nuestros puntos de contacto, acercándote a fórmulas probadas y prestigiosas que transforman el cuidado diario en un momento de conexión, armonía y bienestar genuino.
            </p>

            <div class="about-features-grid">
              <div class="about-feature-item">
                <div class="about-feature-icon">
                  <ShieldCheck :size="18" />
                </div>
                <div>
                  <h4>100% Auténtico</h4>
                  <p>Marcas coreanas oficiales y certificadas mundialmente.</p>
                </div>
              </div>

              <div class="about-feature-item">
                <div class="about-feature-icon">
                  <Sparkles :size="18" />
                </div>
                <div>
                  <h4>Fórmulas Puras</h4>
                  <p>Cuidado respetuoso con la barrera cutánea y tu salud.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Columna Video (Derecha) -->
          <div class="about-media-col">
            <div class="about-video-card">
              <div class="about-video-wrapper">
                <video
                  :src="video1Src"
                  :poster="video1Poster"
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="auto"
                  class="about-video"
                ></video>
                <!-- Efecto Fade-out y viñeta moderna -->
                <div class="about-video-fade" aria-hidden="true"></div>
                <!-- Badge flotante moderno -->
                <div class="about-video-badge">
                  <Sparkles :size="14" class="text-amber-300" />
                  <span>Ritual Consciente • Fórmulas Puras</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 2: VALOR FUNDAMENTAL DE LA MARCA (SECCIÓN APARTE) -->
    <section class="about-section about-section--values">
      <div class="about-container">
        <div class="about-grid">
          <!-- Columna Texto (Izquierda) -->
          <div class="about-content">
            <span class="about-kicker">Filosofía Akami</span>
            <h2 class="about-heading">
              Valor fundamental de la marca
            </h2>
            <div class="about-divider"></div>

            <blockquote class="about-quote">
              <p>
                “En Akami no hablamos solo de belleza superficial, sino de un camino hacia el cuidado y cultivo personal, resaltando la belleza auténtica que cada persona ya posee.”
              </p>
            </blockquote>

            <div class="about-pillars">
              <!-- Pilar 1: La Sabiduría -->
              <div class="about-pillar-card">
                <div class="about-pillar-header">
                  <span class="about-pillar-number">01</span>
                  <h3 class="about-pillar-title">La sabiduría</h3>
                </div>
                <p class="about-pillar-text">
                  Se refleja en la elección consciente de trabajar únicamente con marcas coreanas reconocidas, garantizando la autenticidad y efectividad de cada producto.
                </p>
              </div>

              <!-- Pilar 2: La Virtud -->
              <div class="about-pillar-card">
                <div class="about-pillar-header">
                  <span class="about-pillar-number">02</span>
                  <h3 class="about-pillar-title">La virtud</h3>
                </div>
                <p class="about-pillar-text">
                  Está presente en nuestro compromiso por ofrecer siempre lo mejor: fórmulas puras, seguras y confiables, que acompañan cada rutina de cuidado.
                </p>
              </div>

              <!-- Pilar 3: La Salud -->
              <div class="about-pillar-card">
                <div class="about-pillar-header">
                  <span class="about-pillar-number">03</span>
                  <h3 class="about-pillar-title">La salud</h3>
                </div>
                <p class="about-pillar-text">
                  Es el eje de nuestra filosofía. En Akami, entendemos la belleza como un equilibrio que va más allá del cuidado de la piel: es un estilo de vida inspirado en la tradición coreana, que ilumina el bienestar de nuestros clientes y realza su confianza día a día.
                </p>
              </div>
            </div>
          </div>

          <!-- Columna Video (Derecha) -->
          <div class="about-media-col">
            <div class="about-video-card">
              <div class="about-video-wrapper">
                <video
                  :src="video2Src"
                  :poster="video2Poster"
                  autoplay
                  loop
                  muted
                  playsinline
                  preload="auto"
                  class="about-video"
                ></video>
                <!-- Efecto Fade-out y viñeta moderna -->
                <div class="about-video-fade" aria-hidden="true"></div>
                <!-- Badge flotante moderno -->
                <div class="about-video-badge">
                  <Heart :size="14" class="text-rose-300" />
                  <span>Glass Skin • Belleza Auténtica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BANNER INVITACIÓN AL CATÁLOGO -->
    <section class="about-cta-section">
      <div class="about-container">
        <div class="about-cta-box">
          <span class="about-cta-kicker">Vive la experiencia Akami</span>
          <h3 class="about-cta-title">¿Lista para comenzar tu ritual de cuidado?</h3>
          <p class="about-cta-desc">
            Explora nuestra cuidada selección de limpiadores, sueros, tónicos y protectores de cosmética coreana original.
          </p>
          <button @click="$emit('goToCatalog')" class="about-cta-btn">
            <span>Ver catálogo de productos</span>
            <ArrowRight :size="18" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
