<script setup lang="ts">
  // Define the props
  const props = defineProps<{
    title: string;
  }>()
</script>

<template>
  <div class="col-start-2 col-span-10 md:col-start-4 md:col-span-8 flex flex-col md:py-5">
    <h2 class="font-bold text-3xl md:text-4xl lg:text-6xl">{{ props.title }}</h2>
  </div>
</template>
