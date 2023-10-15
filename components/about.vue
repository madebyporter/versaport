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

  console.log(modalCount.value)
  function closeModal() {
    emit('close');
  }
</script>
<template>
  <div class="fixed z-40 bg-white w-full h-full top-0 overflow-scroll inset-0">
    <button @click="closeModal" class="fixed top-5 right-5"><i class="fa-sharp fa-regular fa-xmark fa-xl"></i></button>
    <div class="min-w-[280px] max-w-[580px] p-10 mx-auto">
      <div class="flex flex-col gap-5">
        <article class="flex flex-col gap-2.5">
          <h2 class="font-bold text-xl text-left">About this</h2>
          <p>My name is Chris Porter. I've founded an agency, <a href="https://www.madebyporter.com" target="_blank">Made by Porter</a>, in 2004, starting as a freelance design engineer before I started talking on bigger projects that need bigger teams. I've worked with designers and developers, usually doing the part I might be weaker at, based on the project. Need a fun design, I was the developer. Need more software development, I ended up being the designer.</p>
          <p>Recently, I started to niche down to specific projects, mostly software for productivity and e-Commerce. Basically websites and apps that's focused on getting things done. My goal is to remove myself out the creation process and be there from a direction and management process, mostly to teach the client and creative. So I started gathering a list of design engineers like me. I believe the smaller the team, the better. I also want both the designer and developer to know both sides as much as possible.</p>
          <p>So I have this list, but I was like, hmm this isn't useful to the world, just me. The list should be viewable by others. Also one day I just want people to add themselves. Thus this web app.</p>
          <p>This is a database of design engineers, based on variables I review to put people on the right projects. So, please, look around, find people to work with, or to partner with, or to just chat with and learn from. There's also an independent lean since many design engineers I know tend to either freelance or start product companies. I also have design engineers on here who work in-house. Usually they're on smaller teams, so they can truely own their work.</p>
        </article>
        <article class="flex flex-col gap-2.5">
          <h3 class="font-bold text-lg text-left">How can I add myself?</h3>
          <p>If you want to add yourself, <button @click="showAddPersonForm">click here</button>. I'll review your work and add the variables myself. Soon, I'll add user accounts so you can do all that work yourself 😅. If you fit what I'm looking for from a quality point of view, I'll add you and send an email saying you're approve.</p>
        </article>
        <article class="flex flex-col gap-2.5">
          <h3 class="font-bold text-lg text-left">How can I edit or remove myself?</h3>
          <p>If you want to edit or remove yourself, send me an email with your name and any edits or removal comments.</p>
        </article>
      </div>
    </div>
  </div>
</template>