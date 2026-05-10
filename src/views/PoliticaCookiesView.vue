<template>
  <main id="main-content" class="cookies-page">
    <div class="container cookies-page__inner">
      <h1 class="cookies-page__title">Política de Cookies</h1>

      <div class="cookies-page__content">
        <section class="cookies-page__section" aria-labelledby="cookies-que-heading">
          <h2 id="cookies-que-heading" class="cookies-page__section-heading">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo
            cuando usted los visita. Se utilizan ampliamente para hacer que los sitios web funcionen,
            o funcionen de manera más eficiente, así como para proporcionar información a los propietarios
            del sitio.
          </p>
        </section>

        <section class="cookies-page__section" aria-labelledby="cookies-uso-heading">
          <h2 id="cookies-uso-heading" class="cookies-page__section-heading">¿Cómo usamos las cookies?</h2>
          <p>
            PECADO Café Gastrobar utiliza cookies para mejorar la experiencia del usuario en nuestro
            sitio web. Las cookies que utilizamos son cookies de sesión (temporales) y cookies persistentes.
          </p>
        </section>

        <section class="cookies-page__section" aria-labelledby="cookies-tipos-heading">
          <h2 id="cookies-tipos-heading" class="cookies-page__section-heading">Tipos de cookies utilizadas</h2>
          <div class="cookies-page__grid">
            <div class="cookies-page__card">
              <h3 class="cookies-page__card-title">🔧 Cookies técnicas</h3>
              <p>Son necesarias para el funcionamiento del sitio web. Sin ellas, el sitio no puede funcionar correctamente.</p>
            </div>
            <div class="cookies-page__card">
              <h3 class="cookies-page__card-title">📊 Cookies analíticas</h3>
              <p>Nos permiten conocer el número de visitantes y analizar el comportamiento de los usuarios para mejorar nuestros servicios.</p>
            </div>
            <div class="cookies-page__card">
              <h3 class="cookies-page__card-title">⚙️ Cookies de preferencias</h3>
              <p>Permiten al sitio web recordar información que cambia la forma en que el sitio se comporta o se ve.</p>
            </div>
          </div>
        </section>

        <section class="cookies-page__section" aria-labelledby="cookies-control-heading">
          <h2 id="cookies-control-heading" class="cookies-page__section-heading">Control de cookies</h2>
          <p>
            Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que
            ya están en su dispositivo y puede configurar la mayoría de los navegadores para que no las
            coloquen. Sin embargo, si lo hace, es posible que tenga que ajustar manualmente algunas
            preferencias cada vez que visite un sitio y algunos servicios y funcionalidades pueden no funcionar.
          </p>
        </section>

        <section class="cookies-page__section" aria-labelledby="cookies-contacto-heading">
          <h2 id="cookies-contacto-heading" class="cookies-page__section-heading">Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en:
          </p>
          <div class="cookies-page__contacto">
            <p>
              <strong>PECADO Café Gastrobar</strong><br />
              Plaça d'Artrutx, 3<br />
              Ciutadella de Menorca, Illes Balears<br />
              Tel: <a href="tel:+34617897872">617 897 872</a>
            </p>
          </div>
        </section>
      </div>

      <RouterLink to="/" class="cookies-page__back" aria-label="Volver a la página principal de PECADO">
        ← Volver al inicio
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Política de Cookies — PECADO Café Gastrobar Ciutadella'
})
</script>

<style scoped>
.cookies-page {
  padding-top: calc(var(--nav-height) + 3rem);
  padding-bottom: var(--space-2xl);
  min-height: 100vh;
  background: var(--color-white);
}

.cookies-page__inner {
  max-width: 860px;
}

.cookies-page__title {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  color: var(--color-dark);
  margin-bottom: var(--space-xl);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 3px solid var(--color-primary);
  padding-bottom: var(--space-sm);
}

.cookies-page__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.cookies-page__section {
  /* section sin estilos especiales — hereda */
}

.cookies-page__section-heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  color: var(--color-dark);
  margin-bottom: var(--space-sm);
}

.cookies-page__section p {
  color: #444;
  line-height: 1.7;
}

/* ── Grid de tipos de cookies ── */
.cookies-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: var(--space-sm);
}

.cookies-page__card {
  padding: 1.5rem;
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: var(--radius-md);
  background: #fdf9f2;
}

.cookies-page__card-title {
  font-family: var(--font-heading);
  font-size: var(--font-size-base);
  color: var(--color-dark);
  margin-bottom: 0.5rem;
}

.cookies-page__card p {
  font-size: var(--font-size-sm);
  color: #555;
  line-height: 1.6;
}

/* ── Contacto ── */
.cookies-page__contacto {
  margin-top: var(--space-sm);
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: var(--radius-md);
  background: #fdf9f2;
  font-size: var(--font-size-base);
  color: var(--color-dark);
  line-height: 1.8;
}

.cookies-page__contacto a {
  color: var(--color-primary-dark);
  font-weight: 700;
  text-decoration: none;
}

.cookies-page__contacto a:hover {
  text-decoration: underline;
  opacity: 1;
}

/* ── Botón volver ── */
.cookies-page__back {
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

.cookies-page__back:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  opacity: 1;
}

@media (max-width: 600px) {
  .cookies-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>