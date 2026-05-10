<template>
  <section class="siguenos section" aria-labelledby="siguenos-heading">
    <div class="container">
      <div class="siguenos__header">
        <h2 id="siguenos-heading" class="siguenos__heading">Síguenos</h2>
        <span class="section-title-deco" aria-hidden="true"></span>
      </div>

      <div class="siguenos__grid">
        <a
          v-for="red in data.redesSociales"
          :key="red.nombre"
          :href="red.href"
          target="_blank"
          rel="noopener noreferrer"
          class="siguenos__card"
          :aria-label="`Síguenos en ${red.nombre}`"
        >
          <span class="siguenos__icon" aria-hidden="true">{{ red.icono }}</span>
          <span class="siguenos__nombre">{{ red.nombre }}</span>
        </a>
      </div>

      <!-- Marquee de imágenes -->
      <div class="siguenos__marquee" aria-hidden="true">
        <div class="siguenos__marquee-track">
          <img
            v-for="(img, i) in [...galeria, ...galeria]"
            :key="'m' + i"
            :src="img.src"
            :alt="img.alt"
            width="260"
            height="200"
            loading="lazy"
            class="siguenos__marquee-img"
          />
        </div>
      </div>

      <!-- Galería principal -->
      <div class="siguenos__galeria" aria-label="Galería de imágenes de Pecado Bar &amp; Grill">
        <div
          v-for="(img, i) in galeria"
          :key="i"
          class="siguenos__galeria-item"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            width="300"
            height="220"
            loading="lazy"
            class="siguenos__galeria-img"
          />
          <div class="siguenos__galeria-overlay" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '../../data/siteData.js'

const galeria = data.galeria
</script>

<style scoped>
.siguenos {
  background: var(--color-dark);
  position: relative;
  overflow: hidden;
}

.siguenos::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-primary), var(--color-primary-light), transparent);
}

.siguenos__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.siguenos__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

/* Override deco color on dark bg */
.siguenos .section-title-deco {
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
}

/* ── Social cards ── */
.siguenos__grid {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-bottom: var(--space-xl);
}

.siguenos__card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 2rem;
  border: 1px solid rgba(201,168,76,0.4);
  border-radius: var(--radius-full);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.88);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background var(--transition-normal), border-color var(--transition-normal), transform var(--transition-fast), box-shadow var(--transition-normal);
  backdrop-filter: blur(6px);
}

.siguenos__card:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #0e0b06;
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(201,168,76,0.4);
  opacity: 1;
}

.siguenos__icon {
  font-size: 1.3rem;
}

/* ── Marquee ── */
.siguenos__marquee {
  overflow: hidden;
  margin-bottom: var(--space-xl);
  mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
}

.siguenos__marquee-track {
  display: flex;
  gap: 0.75rem;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.siguenos__marquee-img {
  width: 220px;
  height: 150px;
  object-fit: cover;
  border-radius: var(--radius-md);
  flex-shrink: 0;
  opacity: 0.75;
  transition: opacity var(--transition-normal);
}

.siguenos__marquee-img:hover {
  opacity: 1;
}

/* ── Galería grid ── */
.siguenos__galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.siguenos__galeria-item {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.siguenos__galeria-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow);
}

.siguenos__galeria-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(201,168,76,0.25) 100%
  );
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.siguenos__galeria-item:hover .siguenos__galeria-img {
  transform: scale(1.06);
}

.siguenos__galeria-item:hover .siguenos__galeria-overlay {
  opacity: 1;
}

@media (max-width: 600px) {
  .siguenos__galeria {
    grid-template-columns: repeat(2, 1fr);
  }
  .siguenos__galeria-img {
    height: 140px;
  }
  .siguenos__marquee { display: none; }
}
</style>
