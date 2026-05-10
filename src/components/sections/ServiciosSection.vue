<template>
  <section class="servicios section section--alt" aria-labelledby="servicios-heading">
    <div class="container">
      <div class="servicios__cols">

        <!-- Servicios -->
        <div class="servicios__block">
          <h4 id="servicios-heading" class="servicios__heading">Servicios</h4>
          <div class="servicios__grid">
            <div
              v-for="(item, i) in data.servicios"
              :key="i"
              class="servicios__chip"
            >
              {{ item }}
            </div>
          </div>
        </div>

        <!-- Tarjetas -->
        <div class="servicios__block">
          <h4 id="tarjetas-heading" class="servicios__heading">Tarjetas de crédito aceptadas</h4>
          <div class="servicios__grid">
            <div
              v-for="(tarjeta, j) in data.tarjetas"
              :key="j"
              class="servicios__chip servicios__chip--card"
            >
              💳 {{ tarjeta }}
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
.servicios {
  background: #f7f4f0;
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
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.servicios__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--space-sm);
}

.servicios__chip {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(201,168,76,0.4);
  border-radius: var(--radius-md);
  background: var(--color-white);
  font-size: var(--font-size-sm);
  color: var(--color-dark);
  text-align: center;
  font-weight: 500;
}

.servicios__chip--card {
  background: #fdf9f2;
}

@media (max-width: 700px) {
  .servicios__cols {
    grid-template-columns: 1fr;
  }
}
</style>