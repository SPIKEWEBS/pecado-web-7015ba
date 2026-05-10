<template>
  <main id="main-content">
    <h1 class="sr-only">PECADO Bar &amp; Grill — Ciutadella de Menorca | Cocina Mediterránea</h1>
    <HeroPortada />
    <EspecialidadesSection />
    <CartaSection />
    <ServiciosSection />
    <Siguenos />
    <ContactoSection />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroPortada from '../components/sections/HeroPortada.vue'
import EspecialidadesSection from '../components/sections/EspecialidadesSection.vue'
import CartaSection from '../components/sections/CartaSection.vue'
import ServiciosSection from '../components/sections/ServiciosSection.vue'
import Siguenos from '../components/sections/Siguenos.vue'
import ContactoSection from '../components/sections/ContactoSection.vue'

onMounted(() => {
  document.title = 'PECADO Bar & Grill — Ciutadella de Menorca | Cocina Mediterránea'
})
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
