<script setup lang="ts">
  import { ref, computed } from 'vue';
  import MarkdownIt from 'markdown-it';
  import contentData from '~/data/content.json';

  const md = new MarkdownIt();

  // Sort content by creationDate in descending order
  const sortedContentData = computed(() => {
    return contentData.sort((a, b) => {
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    });
  });

  const markdownToHtml = (markdown) => {
    let html = md.render(markdown);
    // Add Tailwind classes to <p> tags
    html = html.replace(/<p>/g, '<p class="text-3xl leading-relaxed">');
    return html;
  };

  const postsToShow = ref(3);  // Initial number of posts to show

  function loadMore() {
    postsToShow.value += 3;  // Show 5 more posts when "Load More" is clicked
  }
</script>

<template>
  <div class="col-start-4 col-span-8 flex flex-col gap-20">
    <div 
      v-for="content in sortedContentData.slice(0, postsToShow)" 
      :key="content.id" 
      class="flex flex-col gap-10 border border-neutral-200 rounded-lg p-20"
    >
      <div v-if="content.imageSrc" class="section-content-image w-full min-h-[50vh] bg-neutral-200 rounded-lg overflow-hidden">
        <img :src="content.imageSrc" :alt="content.imgAlt || 'Content image'" class="w-full h-full object-cover" />
      </div>
      <article class="flex flex-col gap-5">
        <h2 class="font-bold text-4xl">{{ content.header }}</h2>
        <div v-for="(paragraph, index) in content.paragraphs" :key="index" v-html="markdownToHtml(paragraph)" />
      </article>
    </div>
    <button v-if="postsToShow < sortedContentData.length" @click="loadMore" class="link text-4xl">
      Load More
    </button>
  </div>
</template>
