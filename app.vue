<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Versaport` : 'Versaport';
    },
    htmlAttrs: {
      class: 'scroll-smooth bg-neutral-100'
    }
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>