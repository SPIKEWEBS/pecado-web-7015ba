# Informe de Calidad Web — PECADO

> Generado automáticamente el 11 de mayo de 2026

## Resumen

| Campo | Valor |
|-------|-------|
| **Negocio** | PECADO |
| **Categoría** | Bar & Grill |
| **Ciudad** | Ciutadella |
| **Teléfono** | 617 89 78 72 |
| **Web original** | [https://www.restaurantepecadomenorca.com/](https://www.restaurantepecadomenorca.com/) |
| **Web generada** | [https://menorca-pecado-web-7015ba.netlify.app](https://menorca-pecado-web-7015ba.netlify.app) |
| **Puntuación visual QA** | — |
| **CEO Review** | — |
| **Issues detectados** | 1 |
| **Issues corregidos** | 1 |
| **Pendientes** | 0 |

---



## SEO

✅ Title tag personalizado con nombre del negocio
✅ Meta description (máx 155 caracteres)
✅ Datos estructurados JSON-LD (LocalBusiness schema.org)
✅ Open Graph tags (og:title, og:description)
✅ Link canonical
✅ document.title dinámico por vista (SPA)
✅ HTML semántico: <main>, <nav>, <footer>

---

## Accesibilidad (WCAG 2.1 AA)

✅ Atributo alt en todas las imágenes
✅ Estilos :focus-visible para navegación por teclado
✅ Skip-link "Saltar al contenido"
✅ Jerarquía de headings correcta (un solo h1 por vista)
✅ Elemento <nav> con navegación principal

---

## Rendimiento

✅ loading="lazy" en imágenes below-the-fold
✅ Scroll listeners con { passive: true }
✅ will-change usado con moderación (≤5 usos)
✅ font-display: swap en @font-face (si aplica)

---

## Issues detectados durante QA

| # | Fichero | Severidad | Descripción | Estado |
|---|---------|-----------|-------------|--------|
| 1 | `views/HomeView.vue` | medium | Sin <h1> en views/HomeView.vue — cada vista necesita un heading princi | ✅ Corregido |

---

## Stack técnico

- **Framework:** Vue 3 + Vite (SPA)
- **Deploy:** Netlify (CD automático desde GitHub)
- **Repo:** GitHub (SPIKEWEBS org)
- **Generado:** 2026-05-10

---

_Informe generado por la plataforma de generación web automatizada de Safabrica._
