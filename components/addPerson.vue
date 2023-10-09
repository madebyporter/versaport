<script setup>
import { ref, onMounted, onUnmounted, defineEmits } from 'vue';
import axios from 'axios';
import Airtable from 'airtable';

const { public: { AIRTABLE_API_KEY } } = useRuntimeConfig();
var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base('appKgpEdY2KYZ7WGj');

const emit = defineEmits();

// Disable body scroll when mounted and enable when unmounted
onMounted(() => {
  document.body.classList.add('overflow-hidden');
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});

const isSubmitting = ref(false);
const submitStatus = ref('');

const formData = ref({
  Name: '',
  Email: '',
  Portfolio: '',
});

function closeModal() {
  emit('close');
}

function handleFocus() {
  // Update the Portfolio input value on focus
  if (formData.value.Portfolio === '') {
    formData.value.Portfolio = 'https://';
  }
}

async function submitForm() {
  isSubmitting.value = true;

  // Name validation
  const nameParts = formData.value.Name.split(' ');
  if (nameParts.length !== 2 || nameParts[0].length < 2 || nameParts[1].length < 2) {
    submitStatus.value = 'Invalid name! Make sure you have a first and last name, each with more than one character.';
    isSubmitting.value = false;
    return;
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(formData.value.Email)) {
    submitStatus.value = 'Invalid email format!';
    isSubmitting.value = false;
    return;
  }

  // Portfolio URL validation
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlPattern.test(formData.value.Portfolio)) {
    submitStatus.value = 'Invalid portfolio URL!';
    isSubmitting.value = false;
    return;
  }

  try {
    const response = await base('versaDesignEngineers').create([
      {
        fields: {
          Name: formData.value.Name,
          Email: formData.value.Email,
          Portfolio: formData.value.Portfolio,
        }
      }
    ]);
    console.log('Airtable response:', response);
    submitStatus.value = 'Successfully submitted!';
  } catch (error) {
    console.log('Airtable error:', error);
    submitStatus.value = 'Submission failed!';
  }
  isSubmitting.value = false;
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <form @submit.prevent="submitForm" class="flex flex-col">
      <fieldset>
        <input id="name" v-model="formData.Name" placeholder="Name" class="radius-md">
      </fieldset>

      <fieldset>
        <input id="email" v-model="formData.Email" placeholder="Email">
      </fieldset>

      <fieldset>
        <input id="portfolio" ref="portfolioInput" v-model="formData.Portfolio" @focus="handleFocus"
          placeholder="Portfolio Link">
      </fieldset>

      <button type="submit" :disabled="isSubmitting">Submit</button>
      <button @click="closeModal">Close</button>
    </form>
    <div v-if="submitStatus">
      {{ submitStatus }}
    </div>
  </div>
</template>
