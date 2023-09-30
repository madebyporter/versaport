<script setup lang="ts">

  // Define the props
  const props = defineProps<{
    title: string;
    description: string;
  }>()
</script>

<template>
  <section class="grid grid-cols-12 gap-10">
    <div class="col-start-4 col-span-8 flex flex-col gap-10">
      <h2 class="font-bold text-8xl">{{ props.title }}</h2>
      <p class="text-3xl leading-relaxed">{{ props.description }}</p>
    </div>
  </section>
</template>