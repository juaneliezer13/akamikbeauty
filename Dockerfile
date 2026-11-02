# Imagen de producción ligera para Akami K-Beauty (Nginx Alpine)
FROM nginx:alpine

LABEL maintainer="Juan Chirinos <juaneliezer13@gmail.com>"
LABEL description="Akami K-Beauty Web Catalog - Vitrina de Cosmética Coreana"

# Copiar configuración optimizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar el directorio html con todos los assets compilados y banners optimizados
COPY html /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
