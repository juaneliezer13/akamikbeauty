## 🌸 Akami K-Beauty — Release v1.3.0

### 🚀 Reingeniería Integral: Mini CMS Integrado, Backend RESTful PHP y Almacenamiento Dinámico

Esta versión marca un hito en la arquitectura del proyecto Akami: la vitrina estática evoluciona a una plataforma completamente dinámica respaldada por una base de datos relacional y un **Mini CMS** integrado en la misma SPA, preservando al 100% el diseño visual y la integridad del catálogo oficial de 83 productos y 19 marcas.

---

### ✨ Características Principales

#### 1. 🎛️ Mini CMS Integrado en la SPA
- **Acceso Exclusivo:** Inicio de sesión protegido con credenciales de administrador:
  - **Usuario:** `akami`
  - **Contraseña:** `akami2026`
- **Módulos Administrativos:**
  - **Mis Productos:**
    - Listado de productos con miniaturas, badges de visibilidad y filtros rápidos por marca, categoría y estado (*Todos / Visibles / Ocultos*).
    - Botón `+ Nuevo Producto` y modal de edición de campos: Nombre, Marca, Categoría, Descripción, Precio ($ USD), Carga de Imagen y Estado.
    - Acción rápida de alternar visibilidad (Ocultar / Mostrar) con un solo clic.
    - Eliminación de productos con modal de confirmación.
  - **Marcas:** Listado con contadores de productos, adición rápida, renombrado y eliminación.
  - **Categorías de productos:** Listado con contadores de productos, adición rápida, edición y eliminación.
- **Acceso Directo:** Accesible desde la ruta `#admin` o haciendo clic en el icono de candado en el pie de página.
- **Botón "Ver Catálogo":** Permite alternar instantáneamente entre el panel administrativo y la vitrina pública.

#### 2. ⚡ Backend RESTful en PHP (`akami-api`)
- Microservicio ligero en **PHP 8.2** con PDO y SQLite (`database/akami.sqlite`).
- **Seeding Automático:** Carga inicial automática de los **83 productos** y **19 marcas oficiales** con estado visible (`is_active = 1`).
- **Autenticación por Tokens Bearer:** Manejo de sesiones seguras con expiración a 7 días.
- **Endpoints RESTful:**
  - Públicos: `GET /api/products`, `GET /api/products/{id}`, `GET /api/brands`, `GET /api/categories`.
  - Administrativos protegidos: `GET /api/admin/products`, `POST /api/admin/products`, `PUT /api/admin/products/{id}`, `PATCH /api/admin/products/{id}/status`, `DELETE /api/admin/products/{id}`, `POST /api/admin/upload`, más CRUD de marcas y categorías.

#### 3. 🖼️ Almacenamiento Dinámico de Archivos Desacoplado
- Las imágenes de productos **ya no están empaquetadas dentro de la imagen de Docker**, reduciendo el tamaño del contenedor y permitiendo actualizaciones en caliente.
- Servidas directamente por Nginx desde el volumen compartido `uploads/products/`.
- Carga de imágenes en tiempo real desde el formulario del CMS con previsualización inmediata.

#### 4. 🎨 Diseño y Datos 100% Intactos
- La vitrina pública conserva la paleta de colores (*Ivory, Blush, Ink*), tipografía (*Vástago Grotesk*), banners interactivos y redirecciones personalizadas a WhatsApp (+58 414-9025118).
- El Mini CMS sigue rigurosamente la misma identidad visual limpia, estética y profesional.

---

### 🐳 Imágenes Docker
- **Frontend / Nginx:**
  - `juaneliezer13/akamikbeauty:1.3.0`
  - `juaneliezer13/akamikbeauty:staging`
  - `juaneliezer13/akamikbeauty:latest`
- **Backend API:**
  - `juaneliezer13/akami-api:1.0.0`
  - `juaneliezer13/akami-api:staging`
  - `juaneliezer13/akami-api:latest`
