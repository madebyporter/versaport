<script setup lang="ts">
defineProps({
  title: String
});
</script>

<template>
  <div class="col-start-2 col-span-10 sm:col-start-4 sm:col-span-8 flex flex-col gap-10 py-5 md:py-10">
    <h1 class="h-12 font-bold text-2xl md:text-3xl flex flex-row items-center justify-end md:justify-start w-full">
      {{title }}
    </h1>
  </div>
</template>