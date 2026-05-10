<template>
  <section id="carta" class="carta section" aria-labelledby="carta-heading">
    <div class="container">
      <div class="carta__header">
        <h2 id="carta-heading" class="carta__heading">Nuestra Carta</h2>
        <span class="section-title-deco" aria-hidden="true"></span>
        <p class="carta__intro">Ingredientes frescos, técnica cuidada y alma mediterránea en cada plato.</p>
      </div>

      <div class="carta__cols">
        <!-- Imagen principal -->
        <div class="carta__media-col">
          <div class="carta__img-wrap">
            <img
              src="/images/pecadomenorca25-08-cb53e13e.jpg"
              alt="Desayunos en Pecado Bar &amp; Grill Ciutadella"
              width="600"
              height="450"
              loading="lazy"
              class="carta__img"
            />
            <div class="carta__img-badge">Desayunos</div>
          </div>
        </div>

        <div class="carta__content-col">
          <!-- Platos label -->
          <div class="carta__label-row">
            <span class="carta__label-line" aria-hidden="true"></span>
            <h3 class="carta__platos-heading">Platos</h3>
            <span class="carta__label-line" aria-hidden="true"></span>
          </div>

          <!-- Grid de platos -->
          <div class="carta__platos-grid">
            <div class="carta__plato-wrap">
              <img
                src="/images/pecadomenorca25-02-057e29bc.jpg"
                alt="Plato de Pecado Bar &amp; Grill"
                width="280" height="200"
                loading="lazy"
                class="carta__plato-img"
              />
              <div class="carta__plato-overlay">Interior</div>
            </div>
            <div class="carta__plato-wrap">
              <img
                src="/images/pecadomenorca25-07-1b7531f3.jpg"
                alt="Especialidad culinaria Pecado"
                width="280" height="200"
                loading="lazy"
                class="carta__plato-img"
              />
              <div class="carta__plato-overlay">Especialidades</div>
            </div>
            <div class="carta__plato-wrap">
              <img
                src="/images/pecadomenorca25-04-b623c613.jpg"
                alt="Terraza Pecado Menorca"
                width="280" height="200"
                loading="lazy"
                class="carta__plato-img"
              />
              <div class="carta__plato-overlay">Terraza</div>
            </div>
            <div class="carta__plato-wrap">
              <img
                src="/images/pecadomenorca25-03-bc072448.jpg"
                alt="Coctelería artesanal Pecado"
                width="280" height="200"
                loading="lazy"
                class="carta__plato-img"
              />
              <div class="carta__plato-overlay">Coctelería</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '../../data/siteData.js'
</script>

<style scoped>
.carta {
  background: var(--color-white);
}

.carta__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.carta__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  color: var(--color-dark);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.carta__intro {
  margin-top: var(--space-sm);
  font-size: var(--font-size-md);
  color: var(--color-text-muted);
  font-style: italic;
  font-family: var(--font-heading);
}

.carta__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}

/* ── Imagen principal ── */
.carta__img-wrap {
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.carta__img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow);
}

.carta__img-wrap:hover .carta__img {
  transform: scale(1.04);
}

.carta__img-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  color: var(--color-primary-light);
  font-family: var(--font-heading);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(201,168,76,0.4);
}

/* ── Content col ── */
.carta__content-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.carta__label-row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.carta__label-line {
  flex: 1;
  height: 1px;
  background: var(--color-divider);
}

.carta__platos-heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  color: var(--color-dark);
  font-weight: 700;
  font-style: italic;
  white-space: nowrap;
}

/* ── Platos grid ── */
.carta__platos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.carta__plato-wrap {
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  cursor: pointer;
}

.carta__plato-wrap:hover .carta__plato-img {
  transform: scale(1.07);
}

.carta__plato-wrap:hover .carta__plato-overlay {
  opacity: 1;
}

.carta__plato-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow);
}

.carta__plato-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-light);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

@media (max-width: 768px) {
  .carta__cols {
    grid-template-columns: 1fr;
  }
  .carta__img {
    height: 280px;
  }
  .carta__plato-img {
    height: 140px;
  }
}

@media (max-width: 480px) {
  .carta__platos-grid {
    grid-template-columns: 1fr;
  }
}
</style>
