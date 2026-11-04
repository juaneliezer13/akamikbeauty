## 🌸 Akami K-Beauty — Release v1.5.0

### 🎨 Renovación Completa de Banners de Catálogo y Banners por Defecto

Esta versión integra la suite completa de banners oficiales de alta resolución para todas las categorías del catálogo, tipos de piel y los nuevos banners por defecto de la plataforma.

---

### ✨ Cambios Principales

#### 1. 🌿 Banners por Defecto Oficiales ("Todos")
* Se sustituyen los banners genéricos de Unsplash por los nuevos banners de marca:
  * **Desktop:** `todos-desktop.webp` (1920x600 px) — Optimizado con el arte botánico horizontal.
  * **Mobile:** `todos-mobile.webp` (900x1124 px) — Optimizado con el arte botánico vertical (4:5).

#### 2. 🖼️ Cobertura Completa de Banners por Categoría
* **Nuevas categorías con banners dedicados:**
  * **Ojos & Labios:** `ojos-labios-desktop.webp` y `ojos-labios-mobile.webp` (reemplaza fallback de sérums).
  * **Dispositivos & Sets:** `dispositivos-sets-desktop.webp` y `dispositivos-sets-mobile.webp` (reemplaza fallback de todos).
  * **Antimanchas:** `antimanchas-desktop.webp` y `antimanchas-mobile.webp` (reemplaza fallback de sérums).
* **Categorías existentes actualizadas a la última versión gráfica:**
  * Limpiadores (`limpiadores-desktop.webp` / `limpiadores-mobile.webp`)
  * Tónicos & Esencias (`tonicos-desktop.webp` / `tonicos-mobile.webp`)
  * Sérums (`serums-desktop.webp` / `serums-mobile.webp`)
  * Hidratantes (`hidratantes-desktop.webp` / `hidratantes-mobile.webp`)
  * Protector Solar (`protectores-desktop.webp` / `protectores-mobile.webp`)
  * Mascarillas (`mascarillas-desktop.webp` / `mascarillas-mobile.webp`)
* **Tipos de Piel actualizados:**
  * Tendencia al Acné (`acne-desktop.webp` / `acne-mobile.webp`)
  * Piel Grasa/Mixta (`grasa-mixta-desktop.webp` / `grasa-mixta-mobile.webp`)
  * Piel Seca (`piel-seca-desktop.webp` / `piel-seca-mobile.webp`)
  * Piel Sensible/Rojeces (`piel-sensible-desktop.webp` / `piel-sensible-mobile.webp`)
* **Activos adicionales:**
  * Quiénes Somos (`quienes-somos-desktop.webp` / `quienes-somos-mobile.webp`)
  * Valor de Marca (`valor-marca-desktop.webp` / `valor-marca-mobile.webp`)

#### 3. ⚡ Optimización y Rendimiento
* Todas las imágenes fueron convertidas a formato **WebP** de última generación con compresión inteligente, manteniendo alta fidelidad visual con tiempos de carga ultrarrápidos en conexiones móviles.
* Empaquetado estático precompilado con Vite en `html/` e incluido en la imagen de contenedor `juaneliezer13/akamikbeauty:1.5.0` y `latest`.
