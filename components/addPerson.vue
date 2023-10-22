<script setup>
  import { ref, onMounted, onUnmounted, defineEmits } from 'vue';
  import axios from 'axios';
  import Airtable from 'airtable';
  import FormInput from '~/components/formInput.vue';

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
    Message: '',
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
            Message: formData.value.Message,
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
  <div class="h-auto min-w-[260px] max-w-[560px] m-auto mb-10">
    <form @submit.prevent="submitForm" class="flex flex-col w-full gap-2 mb-4">
      <div class="mb-2">
        <h2 class="font-bold text-xl text-left">Submit a Design Engineer</h2>
        <p class="font-medium text-md text-left">Please submit you or a person you think is a great Design Engineer. This means a person that can design and code, as two specialties, done together.</p>
      </div>
      <FormInput v-model="formData.Name" type="text" placeholder="Chris Campbell" label="Full Name" />
      <FormInput v-model="formData.Email" type="email" placeholder="chris@campbell.com" label="Email Address" />
      <FormInput v-model="formData.Portfolio" type="url" placeholder="https://chriscampbell.com" label="Portfolio Link" />
      <FormInput v-model="formData.Message" type="textarea" placeholder="Add your top 3 design and top 3 coding stacks, languages, software and industries here." label="Stack/Languages/Software" />
      <FormInput v-model="formData.Marketing" type="checkbox" label="Subscribe to get future lists of the latest design engineers in your inbox." />

      <button type="submit" :disabled="isSubmitting" class="rounded-full bg-neutral-900 hover:bg-neutral-700 text-white px-5 py-2.5 uppercase">Submit</button>
    </form>
    <div v-if="submitStatus">
      {{ submitStatus }}
    </div>
  </div>
</template>
