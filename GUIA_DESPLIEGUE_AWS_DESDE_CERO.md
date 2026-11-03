# 🚀 Guía de Despliegue en AWS desde Cero — Akami K-Beauty v1.3.0

Esta guía explica paso a paso cómo desplegar la plataforma **Akami K-Beauty** (SPA + Mini CMS + API RESTful PHP + Almacenamiento dinámico de imágenes) en un servidor **AWS EC2** partiendo de una carpeta `akami` completamente vacía.

---

## 📋 Requisitos Previos en AWS

1. **Instancia EC2** (Ubuntu, Debian o Amazon Linux) con **Docker** y **Docker Compose** instalados.
2. **Grupo de Seguridad (Security Group) en AWS EC2**:
   - Asegúrate de tener una regla de entrada (**Inbound Rule**) que permita el tráfico en el puerto **`23000`**:
     * **Tipo:** Custom TCP
     * **Puerto:** `23000`
     * **Origen:** `0.0.0.0/0` (o restringido a tu IP / proxy inverso como Nginx / Cloudflare).

---

## 🛠️ Pasos de Despliegue

### Paso 1: Conectarte por SSH y entrar a la carpeta

Conéctate a tu servidor AWS y accede a la carpeta `akami`:

```bash
ssh -i tu-clave.pem usuario@tu-ip-aws
cd ~/akami
```

*(Puedes verificar que la carpeta esté vacía ejecutando `ls -la`)*.

---

### Paso 2: Crear el archivo `docker-compose.yml`

Descarga el archivo de configuración oficial directamente desde GitHub:

```bash
curl -sO https://raw.githubusercontent.com/juaneliezer13/akamikbeauty/main/docker-compose.server.yml && mv docker-compose.server.yml docker-compose.yml
```

*(Si prefieres crearlo manualmente, su contenido es)*:

```yaml
# 🐳 Docker Compose para Servidor AWS (Producción)
# Akami K-Beauty — SPA + Mini CMS + REST API en puerto 23000

services:
  web_akami:
    image: juaneliezer13/akamikbeauty:latest
    container_name: cliente_akami
    restart: unless-stopped
    ports:
      - "${PORT:-23000}:80"
    volumes:
      - ./uploads:/usr/share/nginx/uploads:ro
    environment:
      - TZ=America/Caracas
    depends_on:
      - api_akami
    networks:
      - akami_network

  api_akami:
    image: juaneliezer13/akami-api:latest
    container_name: api_akami
    restart: unless-stopped
    volumes:
      - ./database:/var/www/database
      - ./uploads:/var/www/uploads
    environment:
      - TZ=America/Caracas
      - UPLOAD_DIR=/var/www/uploads/products
      - DB_PATH=/var/www/database/akami.sqlite
    networks:
      - akami_network

networks:
  akami_network:
    driver: bridge
```

---

### Paso 3: Descargar el paquete inicial de imágenes de productos

Las imágenes de los productos están desacopladas de la imagen Docker para permitir actualizaciones en caliente y subida dinámica desde el CMS. 

Descarga y descomprime las 61 imágenes oficiales iniciales con un solo comando:

```bash
curl -sL https://github.com/juaneliezer13/akamikbeauty/releases/download/v1.3.0/uploads.tar.gz | tar -xz
```

> **Verificación:** Ejecuta `ls uploads/products/` para confirmar que se encuentran las 61 imágenes (.jpg).

---

### Paso 4: Crear la carpeta de base de datos y asignar permisos

Crea el directorio donde residirá la base de datos persistente SQLite (`akami.sqlite`) y asigna permisos de escritura:

```bash
mkdir -p database
chmod -R 777 database uploads
```

---

### Paso 5: Descargar las imágenes de Docker Hub e iniciar el stack

Descarga las últimas imágenes oficiales y levanta los contenedores en segundo plano:

```bash
# Descargar las últimas imágenes oficiales (incluyendo el catálogo embebido)
docker compose pull

# Iniciar los servicios (web_akami y api_akami)
docker compose up -d

# Ejecutar la siembra inicial de la base de datos (83 productos y 19 marcas)
docker exec api_akami php bin/seed.php
```

> **Nota:** Al ejecutar `docker exec api_akami php bin/seed.php`, el microservicio poblará automáticamente `database/akami.sqlite` con los **83 productos**, **19 marcas** y **8 categorías oficiales** para que aparezcan de inmediato en el panel administrativo.

---

### Paso 6: Verificar el despliegue

Comprueba que los contenedores y los servicios estén respondiendo correctamente:

```bash
# 1. Comprobar que ambos contenedores estén en estado 'Up'
docker compose ps

# 2. Comprobar salud de la API RESTful
curl -s http://localhost:23000/api/health

# 3. Comprobar que los 83 productos están disponibles
curl -s http://localhost:23000/api/products | grep -o '"id":' | wc -l
```

*Respuestas esperadas:*
- `{"status":"ok","service":"Akami K-Beauty REST API","version":"1.0.0"}`
- Conteo de productos: `83`

---

### Paso 7: Acceder desde el Navegador

| Módulo | URL |
|---|---|
| **Catálogo Público** | `http://<IP-PUBLICA-AWS>:23000/` *(o `https://akami.batdev.lat/`)* |
| **Mini CMS (Panel Admin)** | `http://<IP-PUBLICA-AWS>:23000/#admin` |

#### Credenciales de Administrador:
- **Usuario:** `akami`
- **Contraseña:** `akami2026`

---

## 🔧 Comandos Útiles de Mantenimiento

```bash
# Ver registros en tiempo real de todos los servicios
docker compose logs -f

# Ver registros específicos del backend PHP
docker compose logs -f api_akami

# Respaldar la base de datos con marca de tiempo
cp database/akami.sqlite database/backup_$(date +%F_%H%M%S).sqlite

# Reiniciar los servicios
docker compose restart

# Detener los servicios
docker compose down

# Actualizar a una nueva versión futura de imágenes
docker compose pull && docker compose up -d
```
