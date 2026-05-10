<template>
  <section class="especialidades section" aria-labelledby="especialidades-heading">
    <div class="container">
      <div class="especialidades__header">
        <h2 id="especialidades-heading" class="especialidades__heading">Especialidades</h2>
        <span class="section-title-deco" aria-hidden="true"></span>
      </div>

      <div class="especialidades__grid">
        <article
          v-for="(item, i) in data.especialidades"
          :key="i"
          class="especialidades__card"
        >
          <span class="especialidades__emoji" aria-hidden="true">{{ item.emoji }}</span>
          <p class="especialidades__text">{{ item.texto }}</p>
        </article>
      </div>

      <p class="especialidades__cta">{{ data.especialidadesCta }}</p>
    </div>
  </section>
</template>

<script setup>
import data from '../../data/siteData.js'
</script>

<style scoped>
.especialidades {
  background: var(--color-white);
  position: relative;
}

.especialidades::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--color-primary) 40%, var(--color-primary-light) 60%, transparent 100%);
}

.especialidades__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.especialidades__heading {
  font-family: var(--font-heading);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--color-dark);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.especialidades__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: var(--space-xl);
}

.especialidades__card {
  padding: 2rem 1.5rem 1.75rem;
  border: 1px solid rgba(201,168,76,0.22);
  border-radius: var(--radius-card);
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-normal), border-color var(--transition-normal);
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
}

.especialidades__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary-dark), var(--color-primary-light));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-normal);
}

.especialidades__card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-5px);
  border-color: rgba(201,168,76,0.45);
}

.especialidades__card:hover::before {
  transform: scaleX(1);
}

.especialidades__emoji {
  font-size: 2.2rem;
  line-height: 1;
  display: block;
  margin-bottom: 0.25rem;
}

.especialidades__text {
  font-size: 0.95rem;
  color: var(--color-dark);
  line-height: 1.6;
  font-weight: 400;
}

.especialidades__cta {
  text-align: center;
  font-size: var(--font-size-md);
  color: var(--color-text-muted);
  font-style: italic;
  max-width: 600px;
  margin: 0 auto;
  font-family: var(--font-heading);
}

@media (max-width: 900px) {
  .especialidades__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .especialidades__grid {
    grid-template-columns: 1fr;
  }
}
</style>
