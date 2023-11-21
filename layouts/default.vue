<script setup lang="ts">
  import Nav from '~/components/nav.vue';
</script>

<template>
  <header>
    <div class="absolute m-5 w-12 h-12 md:p-0 md:m-0 md:fixed md:translate-x-0 md:top-10 md:left-10"><Logo /></div>
    <div class="z-100 fixed bottom-5 md:bottom-10 left-[50%] md:left-10 translate-x-[-50%] md:translate-x-0 bg-black md:bg-transparent rounded-lg md:rounded-none w-[360px] max-w-[92%] md:w-auto"><Nav /></div>
  </header>
  <slot />
</template>