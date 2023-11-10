<script setup lang="ts">
  import Nav from '~/components/nav.vue';
</script>

<template>
  <header>
    <div class="absolute m-5 w-12 h-12 md:p-0 md:m-0 md:fixed md:translate-x-0 md:top-10 md:left-10"><Logo /></div>
    <div class="hidden md:block fixed bottom-10 left-10"><Nav /></div>
  </header>
  <slot />
</template>