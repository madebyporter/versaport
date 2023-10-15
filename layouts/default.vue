<script setup lang="ts">
  import Logo from '~/components/logo.vue';
  import NavFilter from '~/components/navFilter.vue'; 
  import { ref, provide } from 'vue';

  const showAddPerson = ref(false);
  provide('showAddPerson', showAddPerson);
  function handleShowAddPerson() {
    showAddPerson.value = true;
  }

  const showAbout = ref(false);
  provide('showAbout', showAbout);
  function handleShowAbout() {
    showAbout.value = true;
  }
</script>

<template>
  <header class="z-30 relative flex justify-center py-5 sm:py-0">
    <Logo />
    <NavFilter @show-add-person="handleShowAddPerson" @show-about="handleShowAbout"/>
  </header>
  <slot :show-add-person="showAddPerson.value" :show-about="showAbout.value" />
</template>