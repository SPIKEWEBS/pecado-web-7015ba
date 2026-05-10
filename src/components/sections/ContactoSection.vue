<template>
  <section id="Contacto" class="contacto section" aria-labelledby="contacto-heading">
    <div class="container">

      <!-- Horario -->
      <div class="contacto__horario" role="region" aria-labelledby="horario-heading">
        <h3 id="horario-heading" class="contacto__subheading">Horario</h3>

        <div class="contacto__aviso">
          <span class="contacto__aviso-icon" aria-hidden="true">⚠️</span>
          {{ data.horarioCerrado }}
        </div>

        <div class="contacto__horario-grid">
          <div
            v-for="dia in data.horarioDias"
            :key="dia.dia"
            class="contacto__horario-card"
            :class="{ 'contacto__horario-card--closed': dia.hora === 'Cerrado' }"
          >
            <span class="contacto__horario-dia">{{ dia.dia }}</span>
            <span class="contacto__horario-hora">{{ dia.hora }}</span>
          </div>
        </div>

        <p class="contacto__horario-texto">{{ data.horarioTexto }}</p>
        <p class="contacto__horario-texto">{{ data.horarioDomingo }}</p>
      </div>

      <!-- Info Pecado -->
      <div class="contacto__info" role="region" aria-labelledby="info-heading">
        <h3 id="info-heading" class="contacto__subheading">Pecado</h3>

        <div class="contacto__datos-grid">
          <div class="contacto__dato">
            <span class="contacto__dato-icon" aria-hidden="true">📍</span>
            <div class="contacto__dato-content">
              <span class="contacto__dato-label">Dirección</span>
              <address class="contacto__dato-value">
                {{ data.direccion }}<br />
                {{ data.localidad }}
              </address>
            </div>
          </div>

          <div class="contacto__dato">
            <span class="contacto__dato-icon" aria-hidden="true">☎️</span>
            <div class="contacto__dato-content">
              <span class="contacto__dato-label">Teléfono</span>
              <a :href="data.telefonoHref" class="contacto__dato-value contacto__tel">
                {{ data.telefono }}
              </a>
            </div>
          </div>
        </div>

        <a
          :href="data.mapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="contacto__maps-btn"
          aria-label="Cómo llegar a Pecado Gastrobar en Google Maps"
        >
          📍 Cómo llegar
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import data from '../../data/siteData.js'
</script>

<style scoped>
.contacto {
  background: #f7f4f0;
}

.contacto .container {
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
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ── Aviso cierre ── */
.contacto__aviso {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-sm);
  color: #664d03;
  font-weight: 600;
  margin-bottom: var(--space-lg);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* ── Horario grid ── */
.contacto__horario-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-bottom: var(--space-md);
}

.contacto__horario-card {
  padding: 0.875rem 1rem;
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: var(--radius-md);
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;
}

.contacto__horario-card--closed {
  background: #f5f5f5;
  opacity: 0.7;
}

.contacto__horario-dia {
  font-weight: 700;
  font-size: var(--font-size-sm);
  color: var(--color-dark);
}

.contacto__horario-hora {
  font-size: var(--font-size-xs);
  color: #555;
}

.contacto__horario-texto {
  font-size: var(--font-size-sm);
  color: var(--color-dark);
  font-weight: 600;
  margin-top: 0.25rem;
}

/* ── Info / Datos ── */
.contacto__datos-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.contacto__dato {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: var(--radius-md);
  background: var(--color-white);
}

.contacto__dato-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contacto__dato-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.contacto__dato-label {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #888;
  font-weight: 600;
}

.contacto__dato-value {
  font-size: var(--font-size-base);
  color: var(--color-dark);
  font-style: normal;
  line-height: 1.5;
}

.contacto__tel {
  font-weight: 700;
  color: var(--color-primary-dark);
  text-decoration: none;
}

.contacto__tel:hover {
  text-decoration: underline;
  opacity: 1;
}

.contacto__maps-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  font-size: var(--font-size-sm);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: background var(--transition-normal), transform var(--transition-fast);
}

.contacto__maps-btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  opacity: 1;
}

@media (max-width: 768px) {
  .contacto .container {
    grid-template-columns: 1fr;
  }
}
</style>