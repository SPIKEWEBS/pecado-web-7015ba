<template>
  <main id="main-content">
    <HeroPortada />
    <EspecialidadesSection />
    <ServiciosSection />
    <CartaSection />
    <ContactoSection />
    <Siguenos />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroPortada        from '../components/sections/HeroPortada.vue'
import EspecialidadesSection from '../components/sections/EspecialidadesSection.vue'
import ServiciosSection    from '../components/sections/ServiciosSection.vue'
import CartaSection        from '../components/sections/CartaSection.vue'
import ContactoSection     from '../components/sections/ContactoSection.vue'
import Siguenos            from '../components/sections/Siguenos.vue'

onMounted(() => {
  document.title = 'PECADO Bar & Grill — Ciutadella de Menorca | Cocina Mediterránea'
})
</script>
