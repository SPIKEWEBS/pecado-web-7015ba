<template>
  <section id="Contacto" class="contacto section" aria-labelledby="contacto-heading">
    <div class="container">
      <div class="contacto__header reveal" ref="headerRef">
        <h2 id="contacto-heading" class="contacto__heading">Contacto &amp; Horario</h2>
        <span class="section-title-deco" aria-hidden="true"></span>
      </div>

      <div class="contacto__grid">
        <!-- Horario -->
        <div class="contacto__horario reveal reveal-delay-1" ref="horarioRef" role="region" aria-labelledby="horario-heading">
          <h3 id="horario-heading" class="contacto__subheading">
            <span class="contacto__subheading-icon" aria-hidden="true">🕐</span>
            Horario
          </h3>

          <div class="contacto__aviso">
            <span aria-hidden="true">⚠️</span>
            {{ data.horarioCerrado }}
          </div>

          <ul class="contacto__horario-list" role="list">
            <li
              v-for="dia in data.horarioDias"
              :key="dia.dia"
              class="contacto__horario-row"
              :class="{ 'contacto__horario-row--closed': dia.hora === 'Cerrado' }"
            >
              <span class="contacto__horario-dia">{{ dia.dia }}</span>
              <span class="contacto__horario-dots" aria-hidden="true"></span>
              <span class="contacto__horario-hora">{{ dia.hora }}</span>
            </li>
          </ul>
        </div>

        <!-- Info -->
        <div class="contacto__info reveal reveal-delay-2" ref="infoRef" role="region" aria-labelledby="info-heading">
          <h3 id="info-heading" class="contacto__subheading">
            <span class="contacto__subheading-icon" aria-hidden="true">📍</span>
            Encuéntranos
          </h3>

          <div class="contacto__dato">
            <span class="contacto__dato-icon" aria-hidden="true">📍</span>
            <div class="contacto__dato-content">
              <span class="contacto__dato-label">Dirección</span>
              <address class="contacto__dato-value">
                {{ data.direccion }}<br />{{ data.localidad }}
              </address>
            </div>
          </div>

          <div class="contacto__dato">
            <span class="contacto__dato-icon" aria-hidden="true">☎️</span>
            <div class="contacto__dato-content">
              <span class="contacto__dato-label">Teléfono</span>
              <a :href="data.telefonoHref" class="contacto__tel">
                {{ data.telefono }}
              </a>
            </div>
          </div>

          <!-- Mapa placeholder -->
          <div class="contacto__map-placeholder" role="img" :aria-label="'Ubicación: ' + data.direccion">
            <div class="contacto__map-inner">
              <span class="contacto__map-pin" aria-hidden="true">📍</span>
              <p class="contacto__map-text">{{ data.direccion }}</p>
              <p class="contacto__map-sub">{{ data.ciudad }}</p>
            </div>
          </div>

          <a
            :href="data.mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="contacto__maps-btn"
            aria-label="Cómo llegar a Pecado Bar &amp; Grill en Google Maps"
          >
            <span aria-hidden="true">🗺️</span> Cómo llegar
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from '../../data/siteData.js'

const headerRef  = ref(null)
const horarioRef = ref(null)
const infoRef    = ref(null)

onMounted(() => {
  const all = [headerRef.value, horarioRef.value, infoRef.value].filter(Boolean)
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
    { threshold: 0.1 }
  )
  all.forEach(el => io.observe(el))
  setTimeout(() => all.forEach(el => el.classList.add('visible')), 1500)
})
</script>

<style scoped>
.contacto {
  background: var(--color-surface-alt);
  position: relative;
}

.contacto__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.contacto__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.3rem);
  color: var(--color-dark);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.contacto__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.contacto__subheading {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  color: var(--color-dark);
  margin-bottom: var(--space-lg);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-style: italic;
}

.contacto__subheading-icon { font-size: 1.2rem; }

/* ── Aviso ── */
.contacto__aviso {
  background: #fff8e1;
  border-left: 4px solid var(--color-primary);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 0.9rem 1.1rem;
  font-size: var(--font-size-sm);
  color: #5a4000;
  font-weight: 600;
  margin-bottom: var(--space-md);
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  line-height: 1.5;
  box-shadow: 0 2px 8px rgba(201,168,76,0.12);
}

/* ── Horario list ── */
.contacto__horario-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--color-white);
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
}

.contacto__horario-row {
  display: flex;
  align-items: center;
  padding: 0.72rem 1.1rem;
  border-bottom: 1px solid rgba(201,168,76,0.08);
  transition: background var(--transition-fast);
}

.contacto__horario-row:last-child { border-bottom: none; }

.contacto__horario-row:hover {
  background: var(--color-surface);
}

.contacto__horario-row--closed { opacity: 0.5; }

.contacto__horario-dia {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-dark);
  min-width: 100px;
}

.contacto__horario-dots {
  flex: 1;
  border-bottom: 1px dotted rgba(201,168,76,0.4);
  margin: 0 0.75rem;
  transform: translateY(-1px);
}

.contacto__horario-hora {
  font-size: var(--font-size-xs);
  color: #555;
  white-space: nowrap;
  font-weight: 600;
}

.contacto__horario-row--closed .contacto__horario-hora {
  color: var(--color-secondary);
  font-weight: 700;
}

/* ── Info datos ── */
.contacto__dato {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: 1.1rem 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  background: var(--color-white);
  margin-bottom: var(--space-sm);
  box-shadow: var(--shadow-card);
  transition:
    box-shadow var(--transition-fast),
    transform var(--transition-fast),
    border-color var(--transition-fast);
}

.contacto__dato:hover {
  box-shadow: 0 6px 24px rgba(201,168,76,0.18);
  transform: translateY(-2px);
  border-color: rgba(201,168,76,0.4);
}

.contacto__dato-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 1px;
}

.contacto__dato-content {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.contacto__dato-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary-dark);
  font-weight: 700;
}

.contacto__dato-value {
  font-size: var(--font-size-base);
  color: var(--color-dark);
  font-style: normal;
  line-height: 1.5;
}

.contacto__tel {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-dark);
  text-decoration: none;
  border-bottom: 1px solid rgba(201,168,76,0.4);
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.contacto__tel:hover {
  color: var(--color-primary-dark);
  border-bottom-color: var(--color-primary);
  opacity: 1;
}

/* ── Map placeholder ── */
.contacto__map-placeholder {
  background: linear-gradient(135deg, #e8e2d8 0%, #d4ccbf 100%);
  border-radius: var(--radius-card);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
  transition: box-shadow var(--transition-normal);
}

.contacto__map-placeholder:hover {
  box-shadow: 0 6px 24px rgba(201,168,76,0.15);
}

.contacto__map-placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 20px,
    rgba(201,168,76,0.05) 20px,
    rgba(201,168,76,0.05) 21px
  );
}

.contacto__map-inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.contacto__map-pin {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.4rem;
  animation: pin-bounce 2s ease-in-out infinite;
}

@keyframes pin-bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

.contacto__map-text {
  font-weight: 700;
  font-size: var(--font-size-base);
  color: var(--color-dark);
}

.contacto__map-sub {
  font-size: var(--font-size-sm);
  color: #666;
  margin-top: 0.2rem;
}

/* ── CTA button ── */
.contacto__maps-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.85rem;
  background: var(--color-primary);
  color: #0e0b06;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: var(--radius-btn);
  text-decoration: none;
  transition:
    background var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-normal),
    scale var(--transition-fast);
  box-shadow: 0 4px 16px rgba(201,168,76,0.32);
}

.contacto__maps-btn:hover {
  background: var(--color-primary-light);
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 8px 28px rgba(201,168,76,0.48);
  opacity: 1;
}

@media (max-width: 768px) {
  .contacto__grid { grid-template-columns: 1fr; gap: var(--space-lg); }
}
</style>
