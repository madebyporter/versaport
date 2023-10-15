<script setup lang="ts">
import { ref, defineEmits } from 'vue';
const emit = defineEmits();
  function closeModal() {
    emit('close');
  }
</script>
<template>
  <div class="fixed z-50 bg-white w-full h-full top-0 overflow-scroll inset-0 pt-24 p-10">
    <button @click="closeModal" class="fixed top-5 right-5 z-50 cursor-pointer"><i class="fa-sharp fa-regular fa-xmark fa-xl"></i></button>
    <slot />
  </div>
</template>
