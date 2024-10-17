<template>
  <div class="container">
    <ThemeToggle class="toggle" />
    <MailerElement />
  </div>
</template>

<script setup>
import MailerElement from './components/MailerElement.vue'
import ThemeToggle from './components/ThemeToggle.vue';
</script>

<style scoped>
.toggle {
  position: fixed;
  top: 0rem;
  right: 1rem;
  display: hidden;
}
</style>

<style>
html {
  height: 100%;
  width: 100%;
  background-color: #50E3C2;
  background-image:
    radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%),
    radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%);
}



div {
  box-shadow: none !important;
  /* To override MD Editor's default shadow styling */
}

body {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>