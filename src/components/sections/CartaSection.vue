<template>
  <section id="carta" class="carta section" aria-labelledby="carta-heading">
    <div class="container">
      <h2 id="carta-heading" class="carta__heading">Carta</h2>

      <div class="carta__cols">
        <!-- Desayunos / imagen izquierda -->
        <div class="carta__media-col">
          <img
            src="/images/pecadomenorca25-08-cb53e13e.jpg"
            alt="Desayunos en Pecado Café Gastrobar Ciutadella"
            width="600"
            height="450"
            loading="lazy"
            class="carta__img"
          />
        </div>

        <div class="carta__content-col">
          <div class="carta__category">
            <p class="carta__category-label">{{ data.cartaSeccionTitulo }}</p>
          </div>

          <div class="carta__category">
            <h2 class="carta__platos-heading" id="platos-heading">Platos</h2>
          </div>

          <!-- Imágenes de platos -->
          <div class="carta__platos-grid">
            <img
              src="/images/pecadomenorca25-02-057e29bc.jpg"
              alt="Plato de Pecado Gastrobar"
              width="280"
              height="200"
              loading="lazy"
              class="carta__plato-img"
            />
            <img
              src="/images/pecadomenorca25-07-1b7531f3.jpg"
              alt="Especialidad culinaria Pecado Menorca"
              width="280"
              height="200"
              loading="lazy"
              class="carta__plato-img"
            />
            <img
              src="/images/pecadomenorca25-04-b623c613.jpg"
              alt="Plato gourmet Pecado Ciutadella"
              width="280"
              height="200"
              loading="lazy"
              class="carta__plato-img"
            />
            <img
              src="/images/pecadomenorca25-03-bc072448.jpg"
              alt="Creación gastronómica Pecado"
              width="280"
              height="200"
              loading="lazy"
              class="carta__plato-img"
            />
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

.carta__heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  color: var(--color-dark);
  text-align: center;
  margin-bottom: var(--space-xl);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.carta__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.carta__img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-md);
}

.carta__content-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.carta__category {
  padding: 1rem 1.5rem;
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: var(--radius-md);
  background: #fdf9f2;
}

.carta__category-label {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  color: var(--color-dark);
  font-weight: 700;
}

.carta__platos-heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  color: var(--color-dark);
  font-weight: 700;
}

.carta__platos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
}

.carta__plato-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: var(--radius-md);
}

@media (max-width: 768px) {
  .carta__cols {
    grid-template-columns: 1fr;
  }

  .carta__img {
    height: 260px;
  }

  .carta__platos-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .carta__platos-grid {
    grid-template-columns: 1fr;
  }
}
</style>