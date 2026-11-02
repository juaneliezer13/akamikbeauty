# 📜 NORMAS TÉCNICAS Y REGLAS DE DESARROLLO — AKAMI K-BEAUTY

Este documento reúne las directrices técnicas y de negocio obligatorias para el mantenimiento, actualización e iteración del catálogo y la plataforma web de **Akami K-Beauty**. Cualquier cambio en el código, catálogo o interfaz debe alinearse estrictamente a estas normas.

---

## 1. 📑 Fuentes Oficiales de Verdad del Catálogo y Precios

### Documentos Maestros
1. **Lista de Precios Oficial (Referencia Principal)**:
   * **Archivo**: `Lista precios Akami productos actualizada .pdf` (ubicado en `akami-docs/assets/documents/`).
   * **Propósito**: Es la **fuente de verdad principal y obligatoria** para los nombres de producto, marcas, variantes (caja e individual) y precios de venta al público en USD.
   * **Obligatoriedad**: Ningún precio puede modificarse o inventarse. Todo valor en la web debe reflejar exactamente el importe estipulado en este PDF.
2. **Estructura Web por Categorías (Referencia de Taxonomía)**:
   * **Archivo**: `Estructura web por categorías con inventario existente .pdf` (ubicado en `akami-docs/assets/documents/`).
   * **Propósito**: Define la asignación de categorías por tipo de producto (*Limpiadores, Tónicos & Esencias, Sérums, Hidratantes, Protector Solar, Mascarillas, Ojos & Labios, Dispositivos & Sets*) y por necesidad o tipo de piel (*Piel Grasa y Poros Dilatados, Piel con Acné / Brotes, Piel Sensible y Rosácea, Piel Seca / Deshidratada, Piel Mixta, Antiaging / Luminosidad*).

### Regla de Inclusión Obligatoria
* **Existencias / Disponibilidad**: El hecho de que un producto no tenga existencia física temporal o stock en un momento determinado **NO** es motivo para excluirlo de la web. **DEBE INCLUIRSE SIEMPRE**.
* **Resolución de Incongruencias**: En caso de existir discrepancias o productos presentes en uno de los documentos y no en el otro (ej. líneas de tratamiento complementarias o discrepancias de stock), ambos documentos se integran para asegurar que el catálogo digital contenga la totalidad de los productos de la marca sin omisiones.

---

## 2. 🖼️ Política de Imágenes y Flujo con la Diseñadora

### Regla del Espacio Vacío (Sin Imágenes Falsas)
* Si **no se dispone** de la fotografía oficial de un producto específico, **simplemente se deja el espacio visual vacío** (con el fondo neutro suave de marca y su identificador tipográfico).
* **Queda terminantemente prohibido**:
  1. ❌ Colocar imágenes que no correspondan al producto exacto.
  2. ❌ Generar imágenes con Inteligencia Artificial.
  3. ❌ Descargar o buscar imágenes de bancos gratuitos o sitios web externos (Unsplash, Pexels, Google Imágenes, etc.).

### Flujo de Trabajo con la Diseñadora
* El proyecto cuenta con una diseñadora asignada que entrega las fotografías oficiales respetando las especificaciones técnicas estandarizadas:
  * **Relación de Aspecto**: 1:1 (cuadrada).
  * **Dimensiones Oficiales**: 800 x 800 px (mínimo 600 x 600 px; resolución nítida para pantallas de alta densidad).
  * **Peso de Archivo**: Máximo **120 KB – 150 KB** por imagen (formato WebP optimizado o JPG progresivo) para asegurar carga instantánea en redes móviles.
  * **Composición**: Producto centrado, iluminación de estudio limpia, fondo blanco o neutro marfil suave (`#FAF7F2`) sin marcas de agua ni elementos invasivos.

---

## 3. ✍️ Inviolabilidad de la Tipografía (Vástago Grotesk)

* **Prohibición de Cambio de Fuentes**: No modificar ni sustituir la tipografía corporativa configurada en el proyecto.
* **Fuente Oficial**: `Vastago Grotesk` (Vástago Grotesk).
* **Archivos y Pesos Integrados**:
  * `VastagoGrotesk-Regular.otf` (400)
  * `VastagoGrotesk-Medium.otf` (500)
  * `VastagoGrotesk-SemiBold.otf` (600)
  * `VastagoGrotesk-Bold.otf` (700)
  * `VastagoGrotesk-Light.otf` (300)
  * `VastagoGrotesk-Heavy.otf` (800)
  * `VastagoGrotesk-Black.otf` (900)
* **Implementación**: Las reglas `@font-face` en `style.css` y las familias definidas en `tailwind.config.js` son definitivas y no deben alterarse.

---

## 4. 🎨 Línea de Diseño y Paleta Cromática

* **Prohibición de Alteración Estética**: Se debe respetar la identidad visual, el espaciado, la estética editorial minimalista y la paleta de colores aprobada por la cliente:
  * **Ivory (Fondo Principal)**: `#FCFBF7`
  * **Surface (Contenedores / Blanco Puro)**: `#FFFFFF`
  * **Ink (Tipografía Principal y Botones de Acción)**: `#1A1918`
  * **Blush (Fondos Suaves y Badges)**: `#F5EBE6`
  * **Blush Border (Bordes Suaves)**: `#EAD8D0`
  * **Line (Divisores y Separadores)**: `#EAE6DF`
  * **Muted (Textos Secundarios y Detalles)**: `#8C827A`
  * **Muted Dark**: `#5C554E`
  * **Accent Rose (Terracota / Acento K-Beauty)**: `#C27A72`
  * **WhatsApp Oficial**: `#25D366`

---

## 5. 🔒 Inviolabilidad de Archivos Fuente en `assets/`

* **Archivos Fuente Intocables**: Los archivos dentro del directorio de assets (especialmente `akami-docs/assets/`, incluyendo `documents/`, `fonts/`, `brand/`, `banners/` y `audio/`) son fuentes originales entregadas por la cliente y el equipo directivo.
* **Norma**: **NO** modificar, sobreescribir, renombrar ni eliminar ningún archivo que resida dentro de estas carpetas. Todo activo generado o derivado para la web debe colocarse en las rutas de distribución pública (`akami-web/public/` o `akami-web/src/assets/`).

---

*Documento aprobado y en vigencia técnica para todo el desarrollo de Akami K-Beauty.*
