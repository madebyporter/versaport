<script setup lang="ts">
const props = defineProps<{
  images: Array<{ src: string, alt: string, title: string, extraClasses: string }>
}>()
</script>

<template>
  <div class="overflow-hidden w-full">
    <!-- Carousel Track -->
    <div class="section-carousel-track flex flex-row items-end gap-20 px-10 overflow-x-scroll">
      <!-- Loop: Carousel Items -->
      <div v-for="image in props.images" :key="image.src" class="flex flex-col justify-center gap-2">
        <!-- Carousel Image -->
        <div
          :class="['bg-neutral-200', 'rounded-lg', 'overflow-hidden', 'min-h-[300px]', 'md:min-h-[600px]', image.extraClasses]">
          <img :src="image.src" :alt="image.alt" class="w-full" />
        </div>
        <!-- Project Title -->
        <div class="text-sm self-center px-5 py-2 text-neutral-500">{{ image.title }}</div>
      </div>
    </div>
  </div>
</template>
