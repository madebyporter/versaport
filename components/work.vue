<script setup lang="ts">
  import { ref, computed } from 'vue'
  import carouselData from '~/data/work.json'

  const rawCarouselImages = ref(carouselData)

  const carouselImages = computed(() => {
    return rawCarouselImages.value.map(image => {
      return {
        ...image,
        extraClasses: image.size === 'mobile' ? 'min-w-[300px]' : 'min-w-[1000px]'
      }
    })
  })
</script>

<template>
  <Carousel :images="carouselImages" />
</template>
