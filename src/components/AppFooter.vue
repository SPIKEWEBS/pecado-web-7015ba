<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__brand">
        <span class="footer__brand-name">PECADO</span>
        <span class="footer__brand-sub">Bar &amp; Grill · Ciutadella de Menorca</span>
      </div>
      <div class="footer__divider" aria-hidden="true"></div>
      <p class="footer__copy">{{ data.copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
import data from '../data/siteData.js'
</script>

<style scoped>
.footer {
  background: #0e0b06;
  color: var(--color-white);
  padding: var(--space-xl) var(--section-pad-h) var(--space-lg);
  text-align: center;
  border-top: 1px solid rgba(201,168,76,0.2);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.footer__brand-name {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: 900;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  text-transform: uppercase;
}

.footer__brand-sub {
  font-size: 0.72rem;
  font-weight: 300;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
}

.footer__divider {
  width: 48px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  margin: var(--space-xs) 0;
}

.footer__copy {
  font-size: var(--font-size-xs);
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.06em;
}
</style>
