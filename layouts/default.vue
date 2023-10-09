<script setup lang="ts">
  import Logo from '~/components/logo.vue';
  import NavFilter from '~/components/navFilter.vue'; 
  import { ref, provide } from 'vue';

  const showAddPerson = ref(false);
  provide('showAddPerson', showAddPerson);

  function handleShowAddPerson() {
    showAddPerson.value = true;
  }

</script>

<template>
  <header class="z-50 relative flex justify-center py-5 sm:py-0">
    <Logo />
    <NavFilter @show-add-person="handleShowAddPerson"/>
  </header>
  <slot :show-add-person="showAddPerson.value" />

  
</template>