# 🚀 Despliegue en Staging (Puerto 23000) — Akami K-Beauty

Este documento describe la arquitectura y procedimiento para ejecutar la aplicación en el servidor de **Staging** usando Docker Compose sobre el puerto **23000**.

---

## 🏗️ 1. Arquitectura y Criterio de Nginx

### ¿Se necesita Nginx instalado en el servidor anfitrión (Host OS)?
**NO.** En el servidor no es necesario instalar ni configurar Nginx (`/etc/nginx/...`).
- Docker ejecuta el servicio completamente encapsulado mediante un contenedor basado en `nginx:alpine` (~20 MB).
- Docker escucha en el puerto host `23000` y redirige el tráfico directamente al puerto interno `80` del contenedor.
- Si en el servidor de staging existía un Nginx del sistema operativo corriendo en los puertos 80/443, este queda totalmente liberado o desacoplado de Akami.

### ¿Por qué se conserva `nginx.conf` dentro del proyecto?
El archivo `nginx.conf` vive dentro del repositorio y se monta en el contenedor Docker. Es fundamental por 3 razones:
1. **Compresión Gzip:** Reduce el peso de los bundles JavaScript, CSS y fuentes de ~150 KB a ~45 KB (ahorro > 70% de datos móviles).
2. **Caché HTTP:** Envía cabeceras `Cache-Control: public, max-age=2592000` (1 mes) para que el navegador del usuario no descargue repetidamente banners, fuentes o imágenes.
3. **Redirección y SPA Fallback:** 
   - Visitar `http://<ip-servidor>:23000` redirige automáticamente a `http://<ip-servidor>:23000/akami/`.
   - Permite navegación fluida sin errores 404 al refrescar la web.

---

## 🛠️ 2. Comandos para Levantar en Staging

### Opción A (Recomendada con Docker Compose)
Desde la carpeta raíz del proyecto (`akami-web`):

```bash
# Levantar en segundo plano en el puerto 23000
docker compose up -d

# Ver estado del contenedor
docker compose ps

# Ver logs en tiempo real
docker compose logs -f
```

### Opción B (Con archivo explícito de Staging)
```bash
docker compose -f docker-compose.staging.yml up -d
```

### Opción C (Modificar puerto dinámicamente si se requiere)
El archivo utiliza la variable de entorno `${PORT:-23000}`. Si en algún momento se desea otro puerto sin editar archivos:
```bash
PORT=23500 docker compose up -d
```

---

## 🧪 3. Verificación de Funcionamiento

Ejecutar desde el servidor:

```bash
# 1. Probar redirección desde la raíz (debe responder HTTP 301 a /akami/)
curl -I http://localhost:23000/

# 2. Probar acceso al catálogo (debe responder HTTP 200 OK)
curl -I http://localhost:23000/akami/

# 3. Probar entrega de un asset estático con compresión y caché
curl -I http://localhost:23000/akami/og-akami-preview.png
```

---

## 🛑 4. Detener o Reiniciar el Servicio

```bash
# Detener el contenedor
docker compose down

# Reiniciar tras actualizar código o build
npm run build
docker compose restart
```
