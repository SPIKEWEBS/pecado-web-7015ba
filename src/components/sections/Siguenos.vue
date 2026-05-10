<template>
  <section class="siguenos section" aria-labelledby="siguenos-heading">
    <div class="container">
      <h2 id="siguenos-heading" class="siguenos__heading">Síguenos</h2>

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

      <!-- Galería inferior -->
      <div class="siguenos__galeria" aria-label="Galería de imágenes de Pecado Gastrobar">
        <img
          v-for="(img, i) in galeria"
          :key="i"
          :src="img.src"
          :alt="img.alt"
          width="300"
          height="220"
          loading="lazy"
          class="siguenos__galeria-img"
        />
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
  background: var(--color-white);
}

.siguenos__heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  color: var(--color-dark);
  text-align: center;
  margin-bottom: var(--space-xl);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

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
  padding: 0.875rem 1.75rem;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-full);
  background: var(--color-white);
  color: var(--color-dark);
  font-weight: 700;
  font-size: var(--font-size-base);
  text-decoration: none;
  transition: background var(--transition-normal), color var(--transition-normal), transform var(--transition-fast);
}

.siguenos__card:hover {
  background: var(--color-primary);
  color: var(--color-white);
  transform: translateY(-2px);
  opacity: 1;
}

.siguenos__icon {
  font-size: 1.4rem;
}

.siguenos__nombre {
  letter-spacing: 0.04em;
}

/* ── Galería ── */
.siguenos__galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.siguenos__galeria-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  transition: transform var(--transition-normal);
}

.siguenos__galeria-img:hover {
  transform: scale(1.03);
}

@media (max-width: 600px) {
  .siguenos__galeria {
    grid-template-columns: repeat(2, 1fr);
  }
  .siguenos__galeria-img {
    height: 140px;
  }
}
</style>