<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <nav class="navbar__inner container" aria-label="Menú principal">
      <a href="/#primero" class="navbar__logo" aria-label="Ir al inicio - PECADO Bar & Grill">
        <span class="navbar__logo-text">PECADO</span>
        <span class="navbar__logo-sub">Bar &amp; Grill</span>
      </a>

      <!-- Desktop links -->
      <ul class="navbar__links" role="list">
        <li><a href="/#primero" class="navbar__link">Inicio</a></li>
        <li><a href="/#carta" class="navbar__link">Carta</a></li>
        <li><a href="/#Contacto" class="navbar__link">Contacto</a></li>
        <li>
          <RouterLink to="/politica-de-cookies" class="navbar__link">
            Cookies
          </RouterLink>
        </li>
      </ul>

      <!-- Mobile burger -->
      <button
        class="navbar__burger"
        :class="{ 'navbar__burger--open': menuOpen }"
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
        <li><a href="/#primero"  class="navbar__mobile-link" @click="menuOpen = false">Inicio</a></li>
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

const scrolled = ref(false)
const menuOpen = ref(false)

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
  background: rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(201,168,76,0.15);
  transition: background var(--transition-normal), box-shadow var(--transition-normal);
}

.navbar--scrolled {
  background: rgba(20, 14, 5, 0.96);
  box-shadow: 0 2px 20px rgba(0,0,0,0.4);
  border-bottom-color: rgba(201,168,76,0.25);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
}

.navbar__logo {
  display: flex;
  flex-direction: column;
  gap: 0;
  text-decoration: none;
  line-height: 1;
}

.navbar__logo-text {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--color-primary);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.navbar__logo-sub {
  font-family: var(--font-body);
  font-size: 0.62rem;
  font-weight: 300;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-top: 1px;
}

.navbar__links {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
}

.navbar__link {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: rgba(255,255,255,0.88);
  text-decoration: none;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.3rem 0;
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width var(--transition-normal);
}

.navbar__link:hover,
.navbar__link.router-link-active {
  color: var(--color-primary-light);
  opacity: 1;
}

.navbar__link:hover::after,
.navbar__link.router-link-active::after {
  width: 100%;
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
  transition: transform var(--transition-normal), opacity var(--transition-normal);
}

.navbar__burger--open .navbar__burger-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__burger--open .navbar__burger-bar:nth-child(2) {
  opacity: 0;
}
.navbar__burger--open .navbar__burger-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile menu ── */
.navbar__mobile {
  display: none;
  background: rgba(15, 10, 3, 0.97);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
  border-top: 1px solid rgba(201,168,76,0.2);
}

.navbar__mobile--open {
  max-height: 400px;
}

.navbar__mobile ul {
  padding: var(--space-sm) 0;
}

.navbar__mobile-link {
  display: block;
  padding: 0.9rem var(--space-lg);
  color: rgba(255,255,255,0.85);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast);
}

.navbar__mobile-link:hover {
  background: rgba(201,168,76,0.1);
  border-left-color: var(--color-primary);
  color: var(--color-primary-light);
  opacity: 1;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .navbar__links { display: none; }
  .navbar__burger { display: flex; }
  .navbar__mobile { display: block; }
}
</style>
