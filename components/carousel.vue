<script setup lang="ts">
  import { IconExternalLink } from '@tabler/icons-vue';
  const props = defineProps<{
    images: Array<{ src: string, alt: string, title: string, link: string, extraClasses: string }>
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
        <div class="flex flex-row w-full py-2 justify-between">
          <!-- Project Title -->
          <div class="text-sm self-center text-neutral-500">
            <div v-if="image.title">
              <h3>{{ image.title }}</h3>
            </div>
          </div>
          <div class="text-sm text-neutral-500 self-end">
            <div v-if="image.link">
              <a :href="image.link" target="_blank">
                <IconExternalLink color="black" :size="16" stroke-width="1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
