<script setup lang="ts">

  // Define the props
  const props = defineProps<{
    title: string;
    description: string;
  }>()
</script>

<template>
  <div class="col-start-2 col-span-10 md:col-start-4 md:col-span-8 flex flex-col gap-5 md:gap-10">
    <h2 class="font-bold text-4xl md:text-6xl lg:text-8xl">{{ props.title }}</h2>
    <p class="text-xl md:text-2xl lg:text-3xl !leading-relaxed">{{ props.description }}</p>
  </div>
</template>