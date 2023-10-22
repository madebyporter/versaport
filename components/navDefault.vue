<script setup>
import { ref, defineProps, defineEmits, inject } from 'vue';

const showAddPerson = inject('showAddPerson');  // Injecting the value
const showAbout = inject('showAbout');  // Injecting the value

function toggleAddPersonForm() {
  showAddPerson.value = !showAddPerson.value;  // Toggle the value
}

function toggleAboutModal() {
  showAbout.value = !showAbout.value;  // Toggle the value
}
</script>

<template>
  <nav class="
    fixed bottom-5 left-[50%] translate-x-[-50%] md:translate-x-0 md:bottom-10 md:left-10 md:right-auto md:px-auto md:py-auto
    flex flex-col gap-5
    md:bg-transparent rounded z-50 overflow-hidden
  ">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row md:flex-col gap-2.5 md:gap-2.5 justify-center">
        <button id="about" @click="toggleAboutModal" class="bg-versa-dark-white text-black text-sm font-medium no-underline flex justify-between items-center gap-2.5 w-full whitespace-nowrap px-5 py-2.5 rounded-full uppercase">
          <span>About</span>
          <i class="fa-sharp fa-solid fa-circle-question"></i>
        </button>
        <button id="submit" @click="toggleAddPersonForm" class="bg-versa-blue text-white text-sm font-medium no-underline flex justify-between items-center gap-2.5 w-full whitespace-nowrap px-5 py-2.5 rounded-full uppercase">
          <span>Submit</span>
          <i class="fa-sharp fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </nav>
</template>


