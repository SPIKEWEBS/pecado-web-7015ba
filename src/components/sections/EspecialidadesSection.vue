<template>
  <section class="especialidades section" aria-labelledby="especialidades-heading">
    <div class="container">
      <h4 id="especialidades-heading" class="especialidades__heading">Especialidades</h4>

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
}

.especialidades__heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  color: var(--color-dark);
  text-align: center;
  margin-bottom: var(--space-xl);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.especialidades__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: var(--space-xl);
}

.especialidades__card {
  padding: 1.75rem 1.5rem;
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: var(--radius-md);
  background: #fdf9f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-fast);
}

.especialidades__card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.especialidades__emoji {
  font-size: 2.5rem;
  line-height: 1;
}

.especialidades__text {
  font-size: var(--font-size-base);
  color: var(--color-dark);
  line-height: 1.5;
}

.especialidades__cta {
  text-align: center;
  font-size: var(--font-size-md);
  color: var(--color-dark);
  font-style: italic;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .especialidades__grid {
    grid-template-columns: 1fr;
  }
}
</style>