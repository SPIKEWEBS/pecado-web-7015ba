<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <nav class="navbar__inner container" aria-label="Menú principal">
      <a href="/#primero" class="navbar__logo" aria-label="Ir al inicio - PECADO Café Gastrobar">
        PECADO
      </a>

      <!-- Desktop links -->
      <ul class="navbar__links" role="list">
        <li><a href="/#primero" class="navbar__link">Pecado</a></li>
        <li><a href="/#carta" class="navbar__link">Carta</a></li>
        <li><a href="/#Contacto" class="navbar__link">Contacto</a></li>
        <li>
          <RouterLink to="/politica-de-cookies" class="navbar__link">
            Política de cookies
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile burger -->
      <button
        class="navbar__burger"
        :aria-expanded="menuOpen"
        aria-label="Abrir menú de navegación"
        @click="menuOpen = !menuOpen"
      >
        <span class="navbar__burger-bar"></span>
        <span class="navbar__burger-bar"></span>
        <span class="navbar__burger-bar"></span>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div class="navbar__mobile" :class="{ 'navbar__mobile--open': menuOpen }" role="navigation" aria-label="Menú móvil">
      <ul role="list">
        <li><a href="/#primero"  class="navbar__mobile-link" @click="menuOpen = false">Pecado</a></li>
        <li><a href="/#carta"    class="navbar__mobile-link" @click="menuOpen = false">Carta</a></li>
        <li><a href="/#Contacto" class="navbar__mobile-link" @click="menuOpen = false">Contacto</a></li>
        <li>
          <RouterLink to="/politica-de-cookies" class="navbar__mobile-link" @click="menuOpen = false">
            Política de cookies
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled  = ref(false)
const menuOpen  = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(201, 168, 76, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background var(--transition-normal), box-shadow var(--transition-normal);
}

.navbar--scrolled {
  background: rgba(168, 134, 58, 0.97);
  box-shadow: var(--shadow-md);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
}

.navbar__logo {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
}

.navbar__links {
  display: flex;
  gap: var(--space-md);
  align-items: center;
}

.navbar__link {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-white);
  text-decoration: none;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
  transition: border-color var(--transition-fast), opacity var(--transition-fast);
}

.navbar__link:hover,
.navbar__link.router-link-active {
  border-bottom-color: var(--color-white);
  opacity: 1;
}

/* ── Burger ── */
.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.navbar__burger-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-white);
  border-radius: 2px;
  transition: transform var(--transition-normal);
}

/* ── Mobile menu ── */
.navbar__mobile {
  display: none;
  background: var(--color-primary-dark);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
}

.navbar__mobile--open {
  max-height: 400px;
}

.navbar__mobile ul {
  padding: var(--space-sm) 0;
}

.navbar__mobile-link {
  display: block;
  padding: 0.75rem var(--space-md);
  color: var(--color-white);
  font-size: var(--font-size-base);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: background var(--transition-fast);
}

.navbar__mobile-link:hover {
  background: rgba(255,255,255,0.12);
  opacity: 1;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .navbar__links {
    display: none;
  }
  .navbar__burger {
    display: flex;
  }
  .navbar__mobile {
    display: block;
  }
}
</style>