<template>
  <section id="primero" class="hero" aria-label="Portada principal de Pecado Bar &amp; Grill">
    <img
      ref="bgRef"
      class="hero__bg"
      src="/images/pecadomenorca25-06-dc6e8492.jpg"
      alt="Pecado Bar &amp; Grill en Ciutadella de Menorca"
      width="1920"
      height="1080"
      fetchpriority="high"
    />
    <div class="hero__overlay" aria-hidden="true"></div>
    <div class="hero__glow" aria-hidden="true"></div>

    <div class="hero__content container">
      <p class="hero__eyebrow reveal reveal-delay-1" ref="el1">Ciutadella de Menorca</p>
      <h1 class="hero__title reveal reveal-delay-2" ref="el2">
        {{ data.nombre }}<br /><span class="hero__title-sub">Bar &amp; Grill</span>
      </h1>

      <!-- Typewriter subtitle -->
      <p class="hero__typewriter reveal reveal-delay-3" ref="el3" aria-live="polite">
        <span class="hero__typewriter-text">{{ typewriterText }}</span><span class="hero__typewriter-cursor" aria-hidden="true">|</span>
      </p>

      <p class="hero__desc reveal reveal-delay-3" ref="el3b">Cocina mediterránea fusionada con sabores creativos. Una experiencia gastronómica única en el corazón de Ciutadella.</p>

      <div class="hero__actions reveal reveal-delay-4" ref="el4">
        <a href="#carta" class="hero__cta" aria-label="Ver carta de Pecado Bar &amp; Grill">
          Ver Carta
        </a>
        <div class="hero__rating-pill" aria-label="Valoración Google: 4.9 sobre 5 con 622 reseñas">
          <span class="hero__rating-star" aria-hidden="true">⭐</span>
          <strong class="hero__rating-num" ref="ratingRef">0</strong>
          <span class="hero__rating-sep" aria-hidden="true">/5</span>
          <span class="hero__rating-count">({{ data.reseñas }})</span>
        </div>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span class="hero__scroll-line"></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import data from '../../data/siteData.js'

// ── Parallax ──
const bgRef = ref(null)
function onScroll() {
  if (!bgRef.value) return
  bgRef.value.style.transform = `scale(1.04) translateY(${window.scrollY * 0.25}px)`
}

// ── Typewriter ──
const phrases = [
  'Tataki de atún nikkei',
  'Steak tartar & tuétano',
  'BURGUER MEX km 0',
  'Burrata di bufala',
  'Coctelería artesanal',
  'Cocina mediterránea',
]
const typewriterText = ref('')
let phraseIdx = 0
let charIdx   = 0
let typing    = true
let twTimer   = null

function tick() {
  const phrase = phrases[phraseIdx]
  if (typing) {
    charIdx++
    typewriterText.value = phrase.slice(0, charIdx)
    if (charIdx === phrase.length) {
      typing = false
      twTimer = setTimeout(tick, 1800)
      return
    }
  } else {
    charIdx--
    typewriterText.value = phrase.slice(0, charIdx)
    if (charIdx === 0) {
      typing = true
      phraseIdx = (phraseIdx + 1) % phrases.length
    }
  }
  twTimer = setTimeout(tick, typing ? 60 : 35)
}

// ── Scroll reveal ──
const el1 = ref(null)
const el2 = ref(null)
const el3 = ref(null)
const el3b = ref(null)
const el4 = ref(null)

// ── Animated counter for rating ──
const ratingRef = ref(null)
function animateRating() {
  const target  = parseFloat(data.rating)
  const steps   = 40
  const step    = target / steps
  let   current = 0
  const timer = setInterval(() => {
    current = Math.min(current + step, target)
    if (ratingRef.value) ratingRef.value.textContent = current.toFixed(1)
    if (current >= target) clearInterval(timer)
  }, 28)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  twTimer = setTimeout(tick, 600)

  // ── IntersectionObserver for reveal ──
  const revealEls = [el1.value, el2.value, el3.value, el3b.value, el4.value].filter(Boolean)
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  revealEls.forEach(el => io.observe(el))

  // Fallback
  setTimeout(() => {
    revealEls.forEach(el => el.classList.add('visible'))
    animateRating()
  }, 1500)

  // Rating counter triggered once visible
  const ratingIo = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { animateRating(); ratingIo.disconnect() } }),
    { threshold: 0.5 }
  )
  if (el4.value) ratingIo.observe(el4.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  clearTimeout(twTimer)
})
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
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(0,0,0,0.68) 0%,
    rgba(10,5,0,0.44) 50%,
    rgba(0,0,0,0.74) 100%
  );
}

.hero__glow {
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 360px;
  background: radial-gradient(ellipse, rgba(201,168,76,0.26) 0%, transparent 70%);
  filter: blur(48px);
  pointer-events: none;
  animation: glow-float 7s ease-in-out infinite;
}

@keyframes glow-float {
  0%, 100% { transform: translateX(-50%) translateY(0);    opacity: 0.7; }
  50%       { transform: translateX(-50%) translateY(-28px); opacity: 1;   }
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--color-white);
  padding-top: calc(var(--nav-height) + 2rem);
  padding-bottom: 5rem;
  max-width: 800px;
}

.hero__eyebrow {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--color-primary-light);
  margin-bottom: 1.1rem;
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

/* ── Typewriter ── */
.hero__typewriter {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-style: italic;
  color: var(--color-primary-light);
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  min-height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.hero__typewriter-text {
  display: inline-block;
}

.hero__typewriter-cursor {
  display: inline-block;
  color: var(--color-primary);
  font-weight: 300;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.hero__desc {
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.75;
  margin-bottom: var(--space-lg);
  color: rgba(255,255,255,0.82);
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
}

/* ── Actions ── */
.hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.hero__cta {
  display: inline-block;
  padding: 15px 42px;
  background: var(--color-primary);
  color: #0e0b06;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border-radius: var(--radius-btn);
  text-decoration: none;
  transition:
    background var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-normal),
    scale var(--transition-fast);
  box-shadow: 0 4px 24px rgba(201,168,76,0.38);
}

.hero__cta:hover {
  background: var(--color-primary-light);
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 10px 36px rgba(201,168,76,0.55);
  opacity: 1;
}

/* ── Rating pill ── */
.hero__rating-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 1.2rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 100px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--color-white);
  font-size: 0.88rem;
  font-weight: 700;
  transition: background var(--transition-normal), border-color var(--transition-normal);
}

.hero__rating-pill:hover {
  background: rgba(201,168,76,0.18);
  border-color: rgba(201,168,76,0.55);
}

.hero__rating-star { font-size: 1rem; line-height: 1; }
.hero__rating-num  { font-size: 1.05rem; color: var(--color-primary-light); }

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
  height: 52px;
  background: linear-gradient(to bottom, rgba(201,168,76,0.9), transparent);
  animation: scroll-drop 2.2s ease-in-out infinite;
}

@keyframes scroll-drop {
  0%   { opacity: 0; transform: scaleY(0);   transform-origin: top;    }
  50%  { opacity: 1; transform: scaleY(1);   transform-origin: top;    }
  100% { opacity: 0; transform: scaleY(1);   transform-origin: bottom; }
}

@media (max-width: 768px) {
  .hero__title      { font-size: clamp(2.4rem, 10vw, 3.5rem); }
  .hero__desc       { font-size: 0.95rem; }
  .hero__actions    { flex-direction: column; gap: var(--space-sm); }
  .hero__scroll     { display: none; }
  .hero__typewriter { font-size: 0.95rem; }
}
</style>
