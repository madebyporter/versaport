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
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>