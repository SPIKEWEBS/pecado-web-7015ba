# TODO — Pendiente antes de entregar al cliente

## 🔴 Crítico (sin esto el site no es entregable)

- [ ] **Instagram:** Confirmar URL real de Instagram de PECADO Menorca y reemplazar el placeholder `https://www.instagram.com/` en `data/siteData.js` (campo `redesSociales[0].href`). Aparece en la sección "Síguenos" de la home.
- [ ] **Facebook:** Confirmar URL real de Facebook de PECADO Menorca y reemplazar el placeholder `https://www.facebook.com/` en `data/siteData.js` (campo `redesSociales[1].href`). Aparece en la sección "Síguenos" de la home.
- [ ] **Teléfono verificado:** Confirmar que el teléfono `617 897 872` es el número de contacto activo del negocio. Revisar que `tel:+34617897872` en `data/siteData.js` abre correctamente en móvil.
- [ ] **Carta/Menú completo:** El original no expone la carta con platos y precios en el HTML. Confirmar con el cliente si desean añadir carta digital (PDF o lista de platos con precios) en la sección "Carta". Si tienen un PDF existente, reemplazar la sección `CartaSection.vue` con un botón de descarga al PDF real.
- [ ] **Aviso de cierre por vacaciones:** El texto "CERRADO POR VACACIONES DEL 1 DE FEBRERO AL 22 DE MARZO" en `ContactoSection.vue` debe actualizarse o eliminarse cuando el negocio vuelva a abrir. Verificar con el cliente si debe mantenerse o retirarse.

## 🟡 Importante (mejora significativa)

- [ ] **Favicon:** Reemplazar el favicon por defecto de Vite con el logo o icono real de PECADO. Colocar en `/public/favicon.ico` o `/public/favicon.svg`.
- [ ] **og:image:** Añadir una imagen representativa real en `index.html` para la meta tag `og:image` (recomendado: foto hero del restaurante, mínimo 1200×630px).
- [ ] **Google Maps embed real:** En `data/siteData.js` el campo `mapsEmbed` tiene coordenadas aproximadas. Obtener el iframe embed real de Google Maps para "Plaça d'Artrutx, 3, Ciutadella de Menorca" e integrarlo en `ContactoSection.vue` si se quiere mostrar mapa embebido.
- [ ] **Imágenes de la galería:** Verificar que todas las imágenes en `/public/images/` están subidas correctamente y se muestran en la sección "Síguenos". Son 28 imágenes listadas en `data/siteData.js`.
- [ ] **Sitemap.xml:** Generar `sitemap.xml` con las dos rutas del site (`/` y `/politica-de-cookies`) y añadirlo a `/public/`.
- [ ] **robots.txt:** Añadir `/public/robots.txt` con configuración básica apuntando al sitemap.
- [ ] **Analytics/Google Tag Manager:** Confirmar con el cliente si tienen GA4 o GTM activo en el sitio original, y añadir el tracking ID correspondiente en `index.html`.

## 🟢 Opcional (nice-to-have)

- [ ] **Cookie consent banner:** Si el negocio necesita cumplir RGPD estrictamente, añadir banner de consentimiento de cookies antes de cargar analytics.
- [ ] **PWA:** Añadir `manifest.json` y service worker para soporte offline y "Añadir a pantalla de inicio" en móvil.
- [ ] **Reservas online:** El original menciona "Reserva tu mesa hoy mismo". Valorar integración con plataforma de reservas (TheFork, OpenTable, o formulario propio con Netlify Forms/Formspree) para que el botón de reserva sea funcional.
- [ ] **Formulario de contacto:** Si el cliente desea añadir un formulario de contacto, configurar Netlify Forms (añadir `netlify` o `data-netlify="true"` al `<form>`) o Formspree con el endpoint del cliente.
- [ ] **Animaciones de entrada:** Las secciones podrían tener efecto fade-in al hacer scroll usando `IntersectionObserver`.

## ✅ Hecho automáticamente

- [x] Estructura Vue 3 con Composition API (`<script setup>`) en todos los componentes
- [x] Responsive mobile-first con media queries (breakpoints: 480px, 600px, 700px, 768px, 900px)
- [x] Navegación completa: Pecado, Carta, Contacto, Política de cookies
- [x] Secciones en el orden original: Hero → Especialidades → Servicios → Carta → Contacto → Síguenos
- [x] Scroll suave a anclas (#primero, #carta, #Contacto) con offset de navbar
- [x] Navbar fija con backdrop-filter:blur y menú burger para móvil
- [x] Accesibilidad WCAG 2.1 AA: skip-link, roles ARIA, headings jerárquicos, alt en todas las imágenes
- [x] SEO: document.title dinámico por vista, headings descriptivos con palabras clave reales
- [x] Rendimiento: `fetchpriority="high"` en hero, `loading="lazy"` en resto de imágenes, `{ passive: true }` en scroll
- [x] CSS custom properties (variables.css) para colores, tipografía y espaciado
- [x] Horario completo lunes–domingo en cards visuales
- [x] Especialidades en grid de cards (no lista plana)
- [x] Servicios y tarjetas en chips/cards con grid
- [x] Galería de imágenes en grid responsive en sección "Síguenos"
- [x] Página Política de Cookies como ruta independiente `/politica-de-cookies`
- [x] Copyright "© 2026 SpikeWebs" en el footer
- [x] Datos del negocio centralizados en `data/siteData.js`
- [x] Aviso de cierre por vacaciones visible en sección Contacto

## 🧪 QA — Verificar antes de enviar al cliente

- [ ] **Navegación:** Verificar que los links del navbar (`#primero`, `#carta`, `#Contacto`) hacen scroll correcto al ancla sin quedar tapados por la navbar fija
- [ ] **Ruta /politica-de-cookies:** Verificar que la ruta carga correctamente sin error 404 en producción (especialmente si el hosting no es Netlify con `_redirects`)
- [ ] **Imágenes:** Verificar en el navegador que las 28 imágenes en `/images/` cargan correctamente (ningún 404 de imagen)
- [ ] **Hero imagen:** Verificar que `pecadomenorca25-06-dc6e8492.jpg` carga rápido como imagen principal de portada
- [ ] **Responsive móvil (iPhone 14):** Revisar hero, especialidades en grid 1 columna, contacto apilado, navbar burger funcional
- [ ] **Responsive tablet (iPad):** Revisar grid de 2 columnas en especialidades y carta
- [ ] **Teléfono en móvil:** Pulsar el número `617 897 872` en el contacto debe abrir el marcador de llamadas
- [ ] **Link "Cómo llegar":** Verificar que abre Google Maps con la dirección correcta de Plaça d'Artrutx, 3, Ciutadella
- [ ] **Links redes sociales:** Una vez añadidas las URLs reales, verificar que abren la página correcta en nueva pestaña
- [ ] **Aviso vacaciones:** Confirmar con el cliente si el aviso debe mostrarse o eliminarse según fecha actual
- [ ] **Contraste:** Verificar contraste de texto blanco sobre dorado en navbar (debe superar 4.5:1)
- [ ] **Netlify deploy:** Añadir archivo `public/_redirects` con contenido `/* /index.html 200` para que las rutas de Vue Router funcionen en Netlify
