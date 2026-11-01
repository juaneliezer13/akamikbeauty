# Akami K-Beauty — Web Vitrina de Cosmética Coreana

Catálogo web vitrina interactivo y responsivo para **Akami K-Beauty**, diseñado para la exploración fluida de cosmética coreana con integración directa a pedidos por WhatsApp.

## 🚀 Tecnologías

- **Frontend:** Vue 3 (Composition API, `<script setup>`), TypeScript, Tailwind CSS, Vite
- **Iconos:** Lucide Vue Next
- **Tipografía Oficial:** Vástago Grotesk
- **Servidor Web:** Nginx Alpine
- **Contenedores:** Docker & Docker Compose

---

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en Vite
npm run dev

# Compilar para producción (genera html/akami)
npm run build
```

---

## 🐳 Docker Local

Para levantar el contenedor en local:

```bash
docker compose up -d --build
```

Acceder a: `http://localhost/akami/` o `http://localhost/`

---

## ☁️ Despliegue en AWS (Amazon Web Services)

### 1. Construir y subir imagen a Docker Hub

```bash
# Construir la imagen
docker build -t juaneliezer13/akamikbeauty:latest -t juaneliezer13/akamikbeauty:1.0.0 .

# Subir a Docker Hub
docker push juaneliezer13/akamikbeauty:latest
docker push juaneliezer13/akamikbeauty:1.0.0
```

### 2. En la instancia EC2 de AWS

En la carpeta `~/akami-web`:

```bash
# Descargar la versión más reciente
docker compose pull

# Iniciar o reiniciar el contenedor
docker compose up -d
```
