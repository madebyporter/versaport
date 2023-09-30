<script setup lang="ts">
  const props = defineProps<{
    images: Array<{ src: string, alt: string, extraClasses: string }>,
  }>()
</script>

<template>
  <div class="col-start-1 col-end-13 overflow-hidden w-full">
    <!-- Carousel Track -->
    <div class="section-carousel-track flex flex-row items-center gap-20 px-10 overflow-x-scroll">
      <!-- Loop: Carousel Items -->
      <div 
        v-for="image in props.images" 
        :key="image.src" 
        :class="[
          'section-work-item', 
          'bg-neutral-200', 
          'rounded-lg', 
          'overflow-hidden',
          'min-h-[600px]',
          image.extraClasses
        ]"
      >
        <!-- Carousel Content -->
        <img 
          :src="image.src" 
          :alt="image.alt"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>
