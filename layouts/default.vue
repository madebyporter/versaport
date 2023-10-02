<script setup lang="ts">
  import Logo from '~/components/logo.vue';
  import NavFilter from '~/components/navFilter.vue';
</script>

<template>
  <header class="z-50 relative flex justify-center py-5 sm:py-0">
    <Logo />
    <NavFilter />
  </header>
  <slot />
  
</template>