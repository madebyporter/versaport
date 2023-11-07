<script setup lang="ts">

  // Define the props
  const props = defineProps<{
    title: string;
    description: string;
  }>()
</script>

<template>
  <div class="col-start-4 col-span-8 flex flex-col gap-10">
    <h2 class="font-bold text-8xl">{{ props.title }}</h2>
    <p class="text-3xl leading-relaxed">{{ props.description }}</p>
  </div>
</template>