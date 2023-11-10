<script setup lang="ts">
  import { ref, computed } from 'vue'
  import carouselData from '~/data/work.json'

  const rawCarouselImages = ref(carouselData)

  const carouselImages = computed(() => {
    return rawCarouselImages.value.map(image => {
      return {
        ...image,
        extraClasses: image.size === 'mobile' ? 'min-w-[200px] md:min-w-[300px]' : 'min-w-[700px] md:min-w-[1000px]'
      }
    })
  })
</script>

<template>
  <div class="col-start-1 col-span-12">
    <Carousel :images="carouselImages" />
  </div>
</template>
