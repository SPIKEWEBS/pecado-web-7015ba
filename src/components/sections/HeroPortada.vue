<template>
  <section id="primero" class="hero" aria-label="Portada principal de Pecado Café Gastrobar">
    <img
      class="hero__bg"
      src="/images/pecadomenorca25-06-dc6e8492.jpg"
      alt="Pecado Café Gastrobar en Ciutadella de Menorca"
      width="1920"
      height="1080"
      fetchpriority="high"
    />
    <div class="hero__overlay" aria-hidden="true"></div>

    <div class="hero__content container">
      <h1 class="hero__title">{{ data.heroTitulo }}</h1>
      <p class="hero__desc">{{ data.heroBienvenida }}</p>
      <a href="#carta" class="hero__cta" aria-label="Ver carta de Pecado Gastrobar">
        Ver Carta
      </a>
    </div>

    <!-- Rating badge -->
    <div class="hero__rating" aria-label="Valoración Google: 4.9 sobre 5 con 622 reseñas">
      <span class="hero__rating-stars">★★★★★</span>
      <span class="hero__rating-score">{{ data.rating }}/5</span>
      <span class="hero__rating-count">({{ data.reseñas }} reseñas)</span>
    </div>
  </section>
</template>

<script setup>
import data from '../../data/siteData.js'
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  will-change: transform;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.55) 0%,
    rgba(0,0,0,0.40) 50%,
    rgba(0,0,0,0.65) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--color-white);
  padding-top: calc(var(--nav-height) + 2rem);
  padding-bottom: 4rem;
  max-width: 860px;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-3xl);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: var(--space-md);
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  color: var(--color-white);
}

.hero__desc {
  font-size: var(--font-size-md);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  color: rgba(255,255,255,0.92);
}

.hero__cta {
  display: inline-block;
  padding: 0.875rem 2.5rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: background var(--transition-normal), transform var(--transition-fast);
  will-change: transform;
}

.hero__cta:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  opacity: 1;
}

/* ── Rating badge ── */
.hero__rating {
  position: absolute;
  bottom: var(--space-lg);
  right: var(--space-lg);
  z-index: 3;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(8px);
  color: var(--color-white);
  padding: 0.6rem 1rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: var(--font-size-sm);
}

.hero__rating-stars {
  color: var(--color-primary);
  font-size: var(--font-size-base);
}

.hero__rating-score {
  font-weight: 700;
}

.hero__rating-count {
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 1.6rem;
  }
  .hero__desc {
    font-size: var(--font-size-base);
  }
  .hero__rating {
    bottom: var(--space-sm);
    right: var(--space-sm);
    font-size: var(--font-size-xs);
  }
}
</style>