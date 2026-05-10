<template>
  <section class="servicios section" aria-labelledby="servicios-heading">
    <div class="container">
      <div class="servicios__header reveal" ref="headerRef">
        <h2 id="servicios-heading" class="servicios__main-heading">Lo que ofrecemos</h2>
        <span class="section-title-deco" aria-hidden="true"></span>
      </div>

      <div class="servicios__cols">
        <!-- Servicios -->
        <div class="servicios__block reveal reveal-delay-1" ref="block1Ref">
          <h3 class="servicios__heading">Servicios</h3>
          <div class="servicios__grid">
            <div
              v-for="(item, i) in data.servicios"
              :key="i"
              class="servicios__chip"
            >
              <span class="servicios__chip-dot" aria-hidden="true"></span>
              {{ item }}
            </div>
          </div>
        </div>

        <!-- Tarjetas -->
        <div class="servicios__block reveal reveal-delay-2" ref="block2Ref">
          <h3 class="servicios__heading">Tarjetas aceptadas</h3>
          <div class="servicios__grid">
            <div
              v-for="(tarjeta, j) in data.tarjetas"
              :key="j"
              class="servicios__chip servicios__chip--card"
            >
              <span aria-hidden="true">💳</span>
              {{ tarjeta }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from '../../data/siteData.js'

const headerRef = ref(null)
const block1Ref = ref(null)
const block2Ref = ref(null)

onMounted(() => {
  const all = [headerRef.value, block1Ref.value, block2Ref.value].filter(Boolean)
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
    { threshold: 0.12 }
  )
  all.forEach(el => io.observe(el))
  setTimeout(() => all.forEach(el => el.classList.add('visible')), 1500)
})
</script>

<style scoped>
.servicios {
  background: var(--color-surface-alt);
  position: relative;
  overflow: hidden;
}

.servicios::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
}

.servicios__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.servicios__main-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  color: var(--color-dark);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.servicios__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
}

.servicios__heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  color: var(--color-dark);
  margin-bottom: var(--space-md);
  font-weight: 700;
  font-style: italic;
}

.servicios__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}

.servicios__chip {
  padding: 0.9rem 1rem;
  border: 1px solid rgba(201,168,76,0.28);
  border-radius: var(--radius-card);
  background: var(--color-white);
  font-size: var(--font-size-sm);
  color: var(--color-dark);
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    transform var(--transition-fast),
    background var(--transition-fast);
  box-shadow: var(--shadow-card);
}

.servicios__chip:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(201,168,76,0.25);
  transform: translateY(-3px) scale(1.02);
  background: #fffdf6;
}

.servicios__chip-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-primary);
  flex-shrink: 0;
  box-shadow: 0 0 6px rgba(201,168,76,0.5);
}

.servicios__chip--card {
  background: var(--color-surface);
}

@media (max-width: 700px) {
  .servicios__cols {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>
