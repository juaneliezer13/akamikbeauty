# 🔤 Directorio de Fuentes Corporativas — Vastago Grotesk

Coloca aquí los archivos de la fuente oficial **Vastago Grotesk** para que se sirvan directamente como webfonts locales:

* `VastagoGrotesk-Regular.woff2` (o `.ttf`) -> Peso 400
* `VastagoGrotesk-Medium.woff2` (o `.ttf`) -> Peso 500
* `VastagoGrotesk-SemiBold.woff2` (o `.ttf`) -> Peso 600
* `VastagoGrotesk-Bold.woff2` (o `.ttf`) -> Peso 700

El sistema ya está configurado con las reglas `@font-face` en `src/style.css` para detectar tanto las fuentes instaladas en el sistema operativo del usuario (`local()`), como los archivos cargados en esta carpeta o los fallbacks modernos geométricos.
