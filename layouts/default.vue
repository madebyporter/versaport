<script setup lang="ts">
  import NavFilter from '~/components/navFilter.vue';
</script>

<template>
  <header class="z-50 relative">
    <div class="logo w-12 h-12 fixed top-10 left-10">
      <svg class="w-max" viewBox="0 0 2000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M100 404L708.178 404L947.891 899.102L660.478 1483.68L100 404Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1900 404H1303.83L707.654 1596.77H1303.83L1900 404Z" fill="black"/>
      </svg>
    </div>
    <NavFilter />
  </header>
  <slot />
  
</template>