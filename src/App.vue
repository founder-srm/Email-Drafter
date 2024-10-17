<script setup>
import MailerElement from './components/MailerElement.vue'
</script>

<template>
  <div>
    <MailerElement />
  </div>
</template>

<style scoped></style>

<style>
html {
  height: 100%;
  width: 100%;
  background-color: #50E3C2;
  background-image:
    radial-gradient(at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%),
    radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%);
}

body {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>