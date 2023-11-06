<script setup lang="ts">
  import navPortfolio from '~/components/nav.vue';
</script>

<template>
  <header>
    <Logo />
    <navPortfolio />
  </header>
  <slot />
</template>