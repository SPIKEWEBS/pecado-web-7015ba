<template>
  <section id="primero" class="hero" aria-label="Portada principal de Pecado Bar &amp; Grill">
    <img
      class="hero__bg"
      src="/images/pecadomenorca25-06-dc6e8492.jpg"
      alt="Pecado Bar &amp; Grill en Ciutadella de Menorca"
      width="1920"
      height="1080"
      fetchpriority="high"
    />
    <div class="hero__overlay" aria-hidden="true"></div>
    <!-- Glow blob -->
    <div class="hero__glow" aria-hidden="true"></div>

    <div class="hero__content container">
      <p class="hero__eyebrow">Ciutadella de Menorca</p>
      <h1 class="hero__title">{{ data.nombre }}<br /><span class="hero__title-sub">Bar &amp; Grill</span></h1>
      <p class="hero__desc">Cocina mediterránea fusionada con sabores creativos. Una experiencia gastronómica única en el corazón de Ciutadella.</p>

      <div class="hero__actions">
        <a href="#carta" class="hero__cta" aria-label="Ver carta de Pecado Bar &amp; Grill">
          Ver Carta
        </a>
        <!-- Rating pill -->
        <div class="hero__rating-pill" aria-label="Valoración Google: 4.9 sobre 5 con 622 reseñas">
          <span class="hero__rating-star" aria-hidden="true">⭐</span>
          <strong>{{ data.rating }}</strong>
          <span class="hero__rating-sep" aria-hidden="true">/5</span>
          <span class="hero__rating-count">({{ data.reseñas }})</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" aria-hidden="true">
      <span class="hero__scroll-line"></span>
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
  transform: scale(1.04);
  transition: transform 8s ease-out;
}

.hero:hover .hero__bg {
  transform: scale(1.0);
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(0,0,0,0.65) 0%,
    rgba(10,5,0,0.42) 50%,
    rgba(0,0,0,0.72) 100%
  );
}

/* Glow blob */
.hero__glow {
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 320px;
  background: radial-gradient(ellipse, rgba(201,168,76,0.22) 0%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
  animation: glow-float 7s ease-in-out infinite;
}

@keyframes glow-float {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.7; }
  50%       { transform: translateX(-50%) translateY(-24px); opacity: 1; }
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--color-white);
  padding-top: calc(var(--nav-height) + 2rem);
  padding-bottom: 5rem;
  max-width: 760px;
}

.hero__eyebrow {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-primary-light);
  margin-bottom: 1.1rem;
  opacity: 0.9;
}

.hero__title {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  line-height: 1.0;
  margin-bottom: 0.3em;
  background: linear-gradient(135deg, #ffffff 0%, var(--color-primary-light) 55%, var(--color-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  letter-spacing: 0.02em;
}

.hero__title-sub {
  font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.16em;
  display: block;
  background: linear-gradient(135deg, rgba(255,255,255,0.75) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0.15em;
}

.hero__desc {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.75;
  margin-bottom: var(--space-lg);
  color: rgba(255,255,255,0.88);
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
}

/* ── Actions row ── */
.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.hero__cta {
  display: inline-block;
  padding: 14px 38px;
  background: var(--color-primary);
  color: #0e0b06;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border-radius: var(--radius-btn);
  text-decoration: none;
  transition: background var(--transition-normal), transform var(--transition-fast), box-shadow var(--transition-normal);
  box-shadow: 0 4px 24px rgba(201,168,76,0.35);
}

.hero__cta:hover {
  background: var(--color-primary-light);
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(201,168,76,0.5);
  opacity: 1;
}

/* ── Rating pill ── */
.hero__rating-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 1.1rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 100px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--color-white);
  font-size: 0.85rem;
  font-weight: 700;
}

.hero__rating-star {
  font-size: 1rem;
  line-height: 1;
}

.hero__rating-sep {
  color: rgba(255,255,255,0.5);
  font-weight: 400;
  font-size: 0.78rem;
}

.hero__rating-count {
  color: rgba(255,255,255,0.55);
  font-weight: 400;
  font-size: 0.78rem;
}

/* ── Scroll indicator ── */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__scroll-line {
  display: block;
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(201,168,76,0.8), transparent);
  animation: scroll-drop 2s ease-in-out infinite;
}

@keyframes scroll-drop {
  0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
  50%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
  100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: clamp(2.4rem, 10vw, 3.5rem);
  }
  .hero__desc {
    font-size: 0.95rem;
  }
  .hero__actions {
    flex-direction: column;
    gap: var(--space-sm);
  }
  .hero__scroll {
    display: none;
  }
}
</style>
