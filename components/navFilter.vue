<script setup>
import { ref, defineProps, defineEmits, inject } from 'vue';

const showAddPerson = inject('showAddPerson');  // Injecting the value

function showAddPersonForm() {
  showAddPerson.value = true;  // Directly setting the value
}
</script>

<template>
  <nav class="
    fixed bottom-5 left-[50%] translate-x-[-50%] md:translate-x-0 md:bottom-10 md:left-10 md:right-auto px-5 py-2.5 md:px-auto md:py-auto
    flex flex-col gap-5
    bg-white md:bg-transparent rounded
  ">
    <div class="flex flex-col gap-4">
      <span class="hidden md:block text-xs font-semibold">ThinkVersa</span>
      <div class="flex flex-row md:flex-col gap-10 md:gap-2.5 justify-center">
        <NuxtLink to="#" class="text-sm font-bold no-underline flex flex-row gap-2 justify-center md:justify-start items-center w-full whitespace-nowrap">About this</NuxtLink>
        <button @click="showAddPersonForm" class="text-sm font-bold no-underline flex flex-row gap-2 justify-center md:justify-start items-center w-full whitespace-nowrap">
          Add me
        </button>
        <NuxtLink to="#" class="text-sm font-bold no-underline flex flex-row gap-2 justify-center md:justify-start items-center w-full whitespace-nowrap">Remove me</NuxtLink>
      </div>
    </div>
  </nav>
</template>


