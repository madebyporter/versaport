<script setup lang="ts">
  // Define the props
  const props = defineProps<{
    title: string;
  }>()
</script>

<template>
  <div class="col-start-4 col-span-8 flex flex-col gap-10 py-5">
    <h2 class="font-bold text-6xl">{{ props.title }}</h2>
  </div>
</template>
