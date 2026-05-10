<template>
  <footer class="footer">
    <div class="footer__inner container">
      <p class="footer__copy">{{ data.copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
import data from '../data/siteData.js'
</script>

<style scoped>
.footer {
  background: var(--color-dark);
  color: var(--color-white);
  padding: var(--space-md) var(--section-pad-h);
  text-align: center;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__copy {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}
</style>