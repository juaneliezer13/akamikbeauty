## 🌸 Akami K-Beauty — Release v1.4.0

### 🚀 Desacoplamiento de Infraestructura y Reasignación de Puertos

Esta versión implementa una actualización de infraestructura y orquestación que desacopla completamente el frontend y backend en proyectos autónomos con sus propios archivos Docker Compose, facilitando tanto el desarrollo independiente como la orquestación centralizada.

---

### ✨ Cambios Principales

#### 1. 🌐 Reasignación de Puertos
* **Frontend Web SPA:** Pasa al puerto **`16001`** (mapeado al contenedor `80`), configurable mediante variable de entorno `FRONT_PORT`.
* **Backend REST API:** Pasa al puerto **`15001`** (mapeado al contenedor `8000`), configurable mediante variable de entorno `BACK_PORT`.

#### 2. 🐳 Orquestación Docker Autónoma
* **`docker-compose.yml` autónomo:** Permite levantar exclusivamente el frontend desde su propia carpeta (`cd akami-web && docker compose up -d`).
* **`docker-compose.server.yml`:** Optimizado para despliegue individual en servidores AWS EC2 con imágenes oficiales de Docker Hub.
* **`.env.example`:** Plantilla incluida para personalización rápida de variables de entorno locales y de servidor.

#### 3. 🛡️ Integridad de Código y Datos
* Cero modificaciones en el código fuente de la aplicación Vue 3 / TypeScript.
* Proxy inverso de Nginx (`/api/`) optimizado para conectarse fluidamente en la red interna compartida `akami_network`.
* Base de datos y almacenamiento de medios completamente preservados sin interrupciones.

#### 4. 📖 Documentación AWS Actualizada
* Guía de despliegue en AWS EC2 (`GUIA_DESPLIEGUE_AWS_DESDE_CERO.md`) actualizada con reglas de Security Group (puertos 16001 y 15001), migración en caliente sin pérdida de datos y actualización de proxy inverso.
