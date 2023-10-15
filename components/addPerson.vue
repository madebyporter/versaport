<script setup>
  import { ref, onMounted, onUnmounted, defineEmits } from 'vue';
  import axios from 'axios';
  import Airtable from 'airtable';

  const { public: { AIRTABLE_API_KEY } } = useRuntimeConfig();
  var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base('appKgpEdY2KYZ7WGj');

  const emit = defineEmits();

  // Disable body scroll when mounted and enable when unmounted
  const modalCount = ref(0); // Initialize modal count
  onMounted(() => {
    // Increase modal count when this modal is opened
    modalCount.value++;
    if (modalCount.value === 1) {
      document.body.classList.add('overflow-hidden'); // Add class only when the first modal is opened
    }
  });

  onUnmounted(() => {
    // Decrease modal count when this modal is closed
    modalCount.value--;
    if (modalCount.value === 0) {
      document.body.classList.remove('overflow-hidden'); // Remove class when all modals are closed
    }
  });
  console.log(modalCount.value)
  const isSubmitting = ref(false);
  const submitStatus = ref('');

  const formData = ref({
    Name: '',
    Email: '',
    Portfolio: '',
    Marketing: '',
  });

  function closeModal() {
    emit('close');
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
            Marketing: formData.value.Marketing,
          }
        }
      ]);
      console.log('Airtable response:', response);
      submitStatus.value = 'Received your submission. I will review your submission within the next 7 days and contact you if approved!';
    } catch (error) {
      console.log('Airtable error:', error);
      submitStatus.value = 'Submission failed. Something in your form is wrong or the form is broken.';
    }
    isSubmitting.value = false;
  }
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <form @submit.prevent="submitForm" class="flex flex-col min-w-[260px] max-w-[560px] w-full gap-2">
      <h2 class="font-bold text-xl text-left">Submit a Design Engineer</h2>
      <fieldset class="relative w-full">
        <input id="name" name="name" v-model="formData.Name" placeholder="Chris Campbell" class="peer border border-neutral-200 hover:border-neutral-300 px-4 pt-8 pb-4 rounded-md outline-neutral-950 placeholder:text-transparent focus:placeholder:text-neutral-400 w-full" :class="{ 'has-text-inside': formData.Name !== '' }">
        <label class="peer-focus:top-6 peer-[.has-text-inside]:top-6 peer-focus:text-neutral-600 absolute top-[50%] translate-y-[-50%] left-4 -z-2 text-sm transition-all pointer-events-none w-full" for="name">Full Name</label>
      </fieldset>

      <fieldset class="relative w-full">
        <input id="email" v-model="formData.Email" placeholder="chris@campbell.com" class="peer border border-neutral-200 hover:border-neutral-300 px-4 pt-8 pb-4 rounded-md outline-neutral-950 placeholder:text-transparent focus:placeholder:text-neutral-400 w-full" :class="{ 'has-text-inside': formData.Email !== '' }">
        <label class="peer-focus:top-6 peer-[.has-text-inside]:top-6 peer-focus:text-neutral-600 absolute top-[50%] translate-y-[-50%] left-4 -z-2 text-sm transition-all pointer-events-none w-full" for="name">Email Address</label>
      </fieldset>

      <fieldset class="relative w-full">
        <input id="portfolio" ref="portfolioInput" v-model="formData.Portfolio" @focus="handleFocus" placeholder="https://chriscampbell.com" class="peer border border-neutral-200 hover:border-neutral-300 px-4 pt-8 pb-4 rounded-md outline-neutral-950 placeholder:text-transparent focus:placeholder:text-neutral-400 w-full" :class="{ 'has-text-inside': formData.Portfolio !== '' }">
        <label class="peer-focus:top-6 peer-[.has-text-inside]:top-6 peer-focus:text-neutral-600 absolute top-[50%] translate-y-[-50%] left-4 -z-2 text-sm transition-all pointer-events-none w-full" for="name">Portfolio Link</label>
      </fieldset>

      <fieldset class="relative w-full flex flex-row py-5 gap-2 items-center">
        <input type="checkbox" id="marketing" v-model="formData.Marketing" class="border border-neutral-200 hover:border-neutral-300 px-4 pt-8 pb-4 rounded-md outline-neutral-950 placeholder:text-transparent focus:placeholder:text-neutral-400 w-[16px] h-[16px]">
        <label class="text-sm transition-all cursor-pointer w-full" for="marketing">Subscribe to Email Marketing</label>
      </fieldset>

      <button type="submit" :disabled="isSubmitting" class="rounded-lg bg-neutral-900 hover:bg-neutral-700 text-white py-5">Submit</button>
    </form>
    <div v-if="submitStatus">
      {{ submitStatus }}
    </div>
  </div>
</template>
