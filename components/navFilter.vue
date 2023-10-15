<script setup>
import { ref, defineProps, defineEmits, inject } from 'vue';

const showAddPerson = inject('showAddPerson');  // Injecting the value
const showAbout = inject('showAbout');  // Injecting the value

function toggleAddPersonForm() {
  if (showAbout.value) {
    showAbout.value = false;  // Close the About modal
  }
  showAddPerson.value = !showAddPerson.value;  // Toggle the AddPerson modal
}

function toggleAboutModal() {
  if (showAddPerson.value) {
    showAddPerson.value = false;  // Close the AddPerson modal
  }
  showAbout.value = !showAbout.value;  // Toggle the About modal
}
</script>

<template>
  <nav class="
    fixed bottom-5 left-[50%] translate-x-[-50%] md:translate-x-0 md:bottom-10 md:left-10 md:right-auto px-5 py-2.5 md:px-auto md:py-auto
    flex flex-col gap-5
    bg-black md:bg-transparent rounded z-50
  ">
    <div class="flex flex-col gap-4">
      <span class="hidden md:block text-xs font-semibold">ThinkVersa</span>
      <div class="flex flex-row md:flex-col gap-10 md:gap-2.5 justify-center">
        <button @click="toggleAboutModal" class="text-white visited:text-white md:text-black md:visited:text-black text-sm font-bold no-underline flex flex-row gap-2 justify-center md:justify-start items-center w-full whitespace-nowrap">About this</button>
        <button @click="toggleAddPersonForm" class="text-white visited:text-white md:text-black md:visited:text-black text-sm font-bold no-underline flex flex-row gap-2 justify-center md:justify-start items-center w-full whitespace-nowrap">
          Submit
        </button>
      </div>
    </div>
  </nav>
</template>


