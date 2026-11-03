## 🌸 Akami K-Beauty — Release v1.2.2

### 📋 Reconciliación y Depuración Oficial del Catálogo de Productos

Esta versión resuelve las inconsistencias de catálogo reportadas por la dueña del negocio, eliminando productos inexistentes y asegurando una correspondencia del 100% contra los documentos fuente oficiales de Akami.

---

### 🔍 Auditoría y Correcciones Realizadas

#### 1. 🗑️ Purgado de Productos No Autorizados / Inexistentes
Se identificaron y eliminaron **5 productos** que no contaban con respaldo en la lista de precios oficial de la dueña del negocio:
- ❌ **`[COSRX] Advanced Snail 96 Mucin Power Essence`** ($26.00) — *Producto no existente en los PDFs fuente.*
- ❌ **`[ILLIYOON] Ceramide Ato Concentrate Cream (200ml)`** ($28.00) — *Producto no existente; marca `ILLIYOON` purgada de los filtros.*
- ❌ **`[HARUHARU WONDER] Black Rice Hyaluronic Toner (150ml)`** ($22.00) — *Presente en borrador de categorías pero ausente en lista oficial de precios.*
- ❌ **`[MEDICUBE] PDRN Pink Collagen Capsule Cream`** ($42.00) — *Presente en borrador de categorías pero ausente en lista oficial de precios.*
- ❌ **`[IUNIK] Beta Glucan Power Moisture Serum`** ($28.00) — *Ausente en lista oficial de precios; marca `IUNIK` purgada de los filtros.*

#### 2. ✅ Alineación 100% con la Lista de Precios Oficial
- **Total productos en catálogo:** Exactamente **83 productos**.
- **Total marcas autorizadas:** Exactamente **19 marcas**:
  `ANUA` (8), `AXIS-Y` (1), `BEAUTY OF JOSEON` (3), `BIODANCE` (4), `CELIMAX` (5), `COSRX` (1), `DR. ALTHEA` (7), `DR. MELAXIN` (1), `HARUHARU WONDER` (3), `HEIMISH` (1), `MEDICUBE` (22), `MIXSOON` (3), `NUMBUZIN` (4), `PURITO` (6), `ROUND LAB` (2), `SKIN1004` (7), `TARTE` (1), `TOCOBO` (2), `VT COSMETICS` (2).
- **Precios verificados:** Todos los 83 productos tienen exactamente el precio en USD indicado en `Lista precios Akami productos actualizada .pdf`.
- **IDs reorganizados:** IDs limpios y correlativos del 1 al 83.

#### 3. 📂 Sincronización de Fuentes de Datos
- `src/data/products.ts` (TypeScript tipado)
- `src/database/productos.csv` (CSV de frontend)
- `database/productos.csv` (Base de datos raíz del proyecto)
- `database/productos.json` (JSON estructurado)

#### 4. 📊 Reporte Excel Actualizado para Diseño
- Generado y actualizado el archivo:
  `C:\Users\Usuario\Downloads\Akami_Productos_Sin_Imagen.xlsx`
- Lista reducida a exactamente **27 productos sin imagen** (se eliminaron los 4 productos fantasma que antes estaban solicitando imágenes innecesarias a la diseñadora).

---

### 📦 Docker Hub
- `juaneliezer13/akamikbeauty:1.2.2`
- `juaneliezer13/akamikbeauty:staging`
- `juaneliezer13/akamikbeauty:latest`
