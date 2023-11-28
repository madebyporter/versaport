<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Versaport` : 'Versaport';
    },
    htmlAttrs: {
      class: 'scroll-smooth'
    }
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>