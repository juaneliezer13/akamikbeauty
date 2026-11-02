## 🌸 Akami K-Beauty — Release v1.2.0

### 🚀 Novedades y Características Principales

#### 1. 📱 Integración Completa de WhatsApp con Identidad Oficial
- **Número actualizado:** Integrado el número oficial **`+58 414-9025118`** (`584149025118`).
- **Plantillas de mensaje diferenciadas:**
  - *Consulta de producto:* Incluye automáticamente el título, marca y precio en USD con formato elegante.
  - *Asesoría personalizada:* Plantilla profesional para consultar rutinas de cuidado de la piel.
- **Identidad de marca oficial:**
  - Icono vectorial oficial SVG de WhatsApp en todos los botones y enlaces.
  - Color verde WhatsApp oficial (`#25D366` / `#20BD5A` hover) con sombreado dinámico.
  - Nuevo botón flotante permanente en la esquina inferior derecha para contacto directo.

#### 2. 🖼️ Vista Previa Open Graph & Redes Sociales
- Generadas imágenes oficiales de previsualización:
  - `og-akami-preview.png` (1200x630 px, relación 1.91:1) con fondo marfil `#FCFBF7` y logo centrado.
  - `og-akami-square.png` (800x800 px) para previsualizaciones cuadradas.
- Metadatos completos Open Graph y Twitter Cards (`summary_large_image`) configurados en `index.html`.

#### 3. 🐳 Infraestructura Docker para Staging (Puerto 23000)
- **Desacoplamiento total de Nginx del host:** El servidor de staging ya no requiere Nginx instalado a nivel de sistema operativo; Docker se encarga de escuchar y gestionar el servicio.
- **Mapeo de puerto:** Configurado en `ports: - "${PORT:-23000}:80"` en `docker-compose.yml`, `docker-compose.staging.yml` y `docker-compose.server.yml`.
- **Nginx encapsulado:** Compresión Gzip activa, caché HTTP optimizada (1 mes) y redirección automática desde la raíz `/` hacia `/akami/`.
- **Documentación:** Agregado [`DEPLOY_STAGING.md`](./DEPLOY_STAGING.md) con la guía de despliegue y verificación.

---

### 📦 Imagen Docker Hub
- `juaneliezer13/akamikbeauty:1.2.0`
- `juaneliezer13/akamikbeauty:staging`
- `juaneliezer13/akamikbeauty:latest`
