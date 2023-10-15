<script setup>
  import { ref, defineEmits } from 'vue';
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
  
</script>
<template>
  <div>    
    <div class="min-w-[280px] max-w-[580px] mx-auto">
      <div class="flex flex-col gap-5">
        <article class="flex flex-col gap-2.5">
          <h2 class="font-bold text-xl text-left">About Me</h2>
          <p>I'm Chris Porter, the founder of <a href="https://www.madebyporter.com" target="_blank">Made by Porter</a>. I started as a freelance design engineer in 2004, working on various projects, from design to development. Over time, I've focused on software for productivity and e-commerce.</p>
          <p>My goal is to facilitate collaboration between designers and developers. I've curated a list of design engineers who, like me, value the synergy of small teams and a deep understanding of both design and development.</p>
          <p>This web app is a database of design engineers, where you can discover potential collaborators, partners, or mentors. In the future, you'll be able to add yourself directly, but for now, I review and add profiles personally.</p>
          <p>If you'd like to be included or make changes, <button @click="showAddPersonForm">click here</button>. I'll review your work and make the necessary updates.</p>
          <p>For edits or removal, simply send me an <a href="mailto:general@madebyporter.com?subject=ThinkVersa%20Design Engineer%20Edit/Removal">email</a> with your name and your requests.</p>
        </article>
      </div>
    </div>
  </div>
</template>