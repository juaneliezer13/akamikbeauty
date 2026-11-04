# 🚀 Guía de Despliegue y Migración en AWS EC2 — Akami K-Beauty

Esta guía contiene las instrucciones detalladas para desplegar y migrar **Akami K-Beauty** en un servidor **AWS EC2** con la nueva arquitectura desacoplada:
* **Frontend (Web SPA / Nginx):** Puerto **`16001`**
* **Backend (API RESTful PHP 8.2 + SQLite):** Puerto **`15001`**

---

## 📋 1. Configuración del Grupo de Seguridad (AWS Security Group)

Antes de levantar los contenedores con los nuevos puertos en AWS, debes autorizar el tráfico en la consola de AWS EC2:

1. Ve a **AWS EC2 Console** > **Instances** > Selecciona tu instancia.
2. En la pestaña **Security**, haz clic sobre el **Security Group** asociado.
3. Haz clic en **Edit inbound rules** y agrega las siguientes reglas:

| Tipo | Protocolo | Rango de Puertos | Origen (Source) | Descripción |
|---|---|---|---|---|
| **Custom TCP** | TCP | `16001` | `0.0.0.0/0` (o tu IP / CDN) | Akami Frontend Web SPA |
| **Custom TCP** | TCP | `15001` | `0.0.0.0/0` (o red interna) | Akami Backend RESTful API |

*(Si ya no vas a usar el puerto `23000` de forma directa, puedes eliminar su regla después de verificar la migración).*

---

## 🔄 2. Procedimiento de Migración en Servidor Activo (Cero Pérdida de Datos)

Sigue estos pasos en el servidor para migrar desde la versión anterior (puerto 23000) a los nuevos puertos (`16001` y `15001`) manteniendo intacta la base de datos (`akami.sqlite`) y las imágenes (`uploads/`):

### Paso 2.1: Conectarte por SSH a la instancia EC2
```bash
ssh -i tu-clave.pem ubuntu@<IP-PUBLICA-AWS>
cd ~/akami
```

### Paso 2.2: Crear un respaldo de seguridad preventivo
Antes de realizar cualquier cambio, respalda la base de datos activa:
```bash
cp database/akami.sqlite database/backup_pre_migracion_$(date +%F_%H%M%S).sqlite
```

### Paso 2.3: Detener los contenedores anteriores
```bash
docker compose down
```
> **Nota de seguridad:** El comando `docker compose down` únicamente apaga y retira los contenedores. Los volúmenes montados en disco (`database/` y `uploads/`) **no se eliminan ni se modifican**.

### Paso 2.4: Actualizar el archivo `docker-compose.yml`
Actualiza el `docker-compose.yml` del servidor con la nueva configuración de puertos y red unificada:

```yaml
# 🐳 Docker Compose — Akami K-Beauty (Servidor AWS / Producción)
# Frontend: 16001 | Backend: 15001

services:
  api_akami:
    image: juaneliezer13/akami-api:latest
    container_name: api_akami
    restart: unless-stopped
    ports:
      - "${BACK_PORT:-15001}:8000"
    volumes:
      - ./database:/var/www/database
      - ./uploads:/var/www/uploads
    environment:
      - TZ=America/Caracas
      - UPLOAD_DIR=/var/www/uploads/products
      - DB_PATH=/var/www/database/akami.sqlite
    networks:
      - akami_network

  web_akami:
    image: juaneliezer13/akamikbeauty:latest
    container_name: cliente_akami
    restart: unless-stopped
    ports:
      - "${FRONT_PORT:-16001}:80"
    volumes:
      - ./uploads:/usr/share/nginx/uploads:ro
    environment:
      - TZ=America/Caracas
    depends_on:
      - api_akami
    networks:
      - akami_network

networks:
  akami_network:
    name: akami_network
    driver: bridge
```

### Paso 2.5: Iniciar el stack actualizado
```bash
# Descargar las últimas versiones oficiales si aplica
docker compose pull

# Iniciar los servicios en segundo plano
docker compose up -d
```

### Paso 2.6: Comprobar el estado y verificar los datos
```bash
# 1. Comprobar que ambos contenedores estén 'Up' en sus nuevos puertos
docker compose ps

# 2. Verificar respuesta directa del Backend (puerto 15001)
curl -s http://localhost:15001/api/health

# 3. Verificar proxy inverso de Nginx a través del Frontend (puerto 16001)
curl -s http://localhost:16001/api/health

# 4. Verificar que los 83 productos se mantienen intactos en la base de datos
curl -s http://localhost:16001/api/products | grep -o '"id":' | wc -l
```
*Respuesta esperada:* Conteo de productos: **`83`**.

---

## 🔀 3. Actualizar el Proxy Inverso del Host (Dominio / Nginx del Servidor)

Si en el servidor AWS tienes configurado un Nginx principal (o Cloudflare / Caddy) para resolver el dominio `akami.batdev.lat`, actualiza el bloque de configuración correspondiente:

1. Edita el archivo de configuración en el host (comúnmente `/etc/nginx/sites-available/akami.batdev.lat` o similar):
```nginx
server {
    server_name akami.batdev.lat;

    location / {
        # Cambiar el puerto anterior 23000 por el nuevo 16001
        proxy_pass http://127.0.0.1:16001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

2. Valida y recarga Nginx en el host:
```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

## 📦 4. Despliegue de Proyectos de Forma Separada / Individual

Si en el servidor decides clonar los repositorios por separado para operarlos de forma totalmente independiente:

### A) Microservicio Backend (`akami-api`)
```bash
cd ~/akami/akami-api
docker compose up -d
```
* **Puerto host:** `15001`
* **Healthcheck:** `curl -s http://localhost:15001/api/health`
* **Persistencia:** Mapea automáticamente la base de datos y uploads correspondientes.

### B) Frontend SPA (`akami-web`)
```bash
cd ~/akami/akami-web
docker compose up -d
```
* **Puerto host:** `16001`
* **Healthcheck:** `curl -s http://localhost:16001/`

---

## 🆕 5. Despliegue Limpio desde Cero (Nueva Máquina AWS)

Si alguna vez despliegas en una instancia EC2 completamente nueva:

```bash
# 1. Crear directorio del proyecto
mkdir -p ~/akami && cd ~/akami

# 2. Descargar o crear el docker-compose.yml con los puertos 16001 y 15001
# (usando el contenido del Paso 2.4)

# 3. Descargar el paquete de imágenes de productos desacopladas
curl -sL https://github.com/juaneliezer13/akamikbeauty/releases/download/v1.3.0/uploads.tar.gz | tar -xz

# 4. Crear carpeta de persistencia y permisos
mkdir -p database
chmod -R 777 database uploads

# 5. Iniciar contenedores
docker compose pull && docker compose up -d

# 6. Siembra inicial de catálogo oficial (solo necesario la primera vez que se crea la BD)
docker exec api_akami php bin/seed.php
```

---

## 🌐 URLs y Credenciales

| Componente | URL de Acceso |
|---|---|
| **Catálogo Público** | `http://<IP-PUBLICA-AWS>:16001/` *(o `https://akami.batdev.lat/`)* |
| **Panel Mini CMS** | `http://<IP-PUBLICA-AWS>:16001/#admin` |
| **Backend RESTful API** | `http://<IP-PUBLICA-AWS>:15001/api/` |

#### Credenciales Administrativas:
* **Usuario:** `akami`
* **Contraseña:** `akami2026`

---

## 🆘 Procedimiento de Rollback de Emergencia

En caso de cualquier imprevisto en el servidor durante la migración:
```bash
# 1. Detener el nuevo stack
docker compose down

# 2. Restaurar la base de datos desde el respaldo previo
cp database/backup_pre_migracion_*.sqlite database/akami.sqlite

# 3. Restaurar los puertos anteriores (23000) o reiniciar contenedores
docker compose up -d
```
