<script setup lang="ts">
  import { ref, computed } from 'vue';
  import MarkdownIt from 'markdown-it';
  import contentData from '~/data/testimonials.json';

  const md = new MarkdownIt();

  // Sort content by creationDate in descending order
  const sortedContentData = computed(() => {
    return contentData.sort((a, b) => {
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    });
  });
</script>

<template>
  <div class="col-start-4 col-end-12 overflow-hidden w-full">
    <div class="columns-2 gap-5">
      <div v-for="content in sortedContentData" :key="content.id" class="min-h-[400px] min-w-[120px] border border-neutral-200 rounded-lg mb-5 break-inside-avoid p-10 flex flex-col gap-10 items-center">
        <div class="avatar w-28 h-28 rounded-full bg-neutral-300 overflow-hidden" v-if="content.imageSrc">
          <img :src="content.imageSrc" :alt="content.name || 'Content image'" class="w-full h-full object-cover" />
        </div>
        <blockquote class="before:content-[open-quote] after:content-[close-quote] text-center text-lg leading-relaxed">{{ content.blockquote }}</blockquote>
        <div class="person flex flex-col gap-1 items-center">
          <span class="font-bold">{{ content.name }}</span>
          <span class="text-sm">{{ content.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
