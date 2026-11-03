## 🌸 Akami K-Beauty — Release v1.2.3

### 📸 Integración de Imágenes Oficiales de ANUA

Esta versión incorpora las imágenes oficiales de producto para la marca **ANUA**, provistas directamente por la diseñadora del negocio, asociándolas al catálogo vitrina y actualizando las bases de datos del sistema.

---

### ✨ Cambios y Novedades

#### 1. 🖼️ Nuevas Imágenes de Producto ANUA Incorporadas
Se integraron las fotografías de alta resolución en orientación vertical (proporción óptima para catálogo) en `public/images/products/`:
- **`Heartleaf Quercetinol Pore Deep Cleansing Foam`** (ID: 1) ➔ `anua-foam-cleanser-anua.jpg`
- **`Heartleaf Pore Control Cleansing Oil`** (ID: 2) ➔ `anua-cleansing-oil-anua.jpg`
- **`Heartleaf 77% Soothing Toner`** (ID: 3) ➔ `anua-toner-77-anua.jpg`
- **`Azelaic Acid 10% + Hyaluronic Serum`** (ID: 4) ➔ `anua-azelaic-acid-anua.jpg`
- **`Niacinamide 10% + TXA 4% Dark Spot Serum`** (ID: 5) ➔ `anua-niacinamida-anua.jpg`

*(Los 3 productos ANUA restantes que aún no cuentan con fotografía de la diseñadora permanecen con espacio limpio sin imágenes erróneas ni genéricas, cumpliendo estrictamente con las normas del negocio).*

#### 2. 🗄️ Actualización Sincronizada de Base de Datos
- `src/data/products.ts` (Catálogo TypeScript tipado)
- `src/database/productos.csv` (CSV frontend)
- `database/productos.csv` (Base de datos raíz del proyecto)
- `database/productos.json` (JSON estructurado)

#### 3. 📊 Actualización del Reporte de Diseño (Excel)
- Archivo regenerado en:
  `C:\Users\Usuario\Downloads\Akami_Productos_Sin_Imagen.xlsx`
- Lista de productos pendientes de imagen reducida a **22 productos** (de los 83 totales).

---

### 📦 Docker Hub
- `juaneliezer13/akamikbeauty:1.2.3`
- `juaneliezer13/akamikbeauty:staging`
- `juaneliezer13/akamikbeauty:latest`
