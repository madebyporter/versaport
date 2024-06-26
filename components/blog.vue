<script setup lang="ts">
  import { ref, computed } from 'vue';
  import MarkdownIt from 'markdown-it';
  import blogData from '~/data/blog.json';

  const md = new MarkdownIt();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'numeric', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const year = date.getFullYear();
    return `<span class="lg:text-xl">${formattedDate}</span><span class="lg:text-xs lg:text-neutral-500 lg:tracking-widest"><span class="lg:hidden">/</span>${year}</span>`;
  };

  // Sort content by creationDate in descending order
  const sortedBlogData = computed(() => {
    return blogData.sort((a, b) => {
      return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
    }).map(item => ({
      ...item,
      formattedCreationDate: formatDate(item.creationDate)
    }));
  });

  const markdownToHtml = (markdown) => {
    let html = md.render(markdown);
    // Add Tailwind classes to <p> tags
    html = html.replace(/<p>/g, '<p class="leading-relaxed md:leading-relaxed text-xl md:text-2xl">');
    return html;
  };

  const postsToShow = ref(3);  // Initial number of posts to show

  function loadMore() {
    postsToShow.value += 3;  // Show 3 more posts when "Load More" is clicked
  }
</script>

<template>
  <div class="col-start-2 col-span-10 md:col-start-4 md:col-span-8 flex flex-col gap-20">
    <div v-for="content in sortedBlogData.slice(0, postsToShow)" :key="content.id" class="flex flex-col gap-10">
      <div v-if="content.imageSrc" class="section-content-image w-full min-h-[20vh] md:min-h-[50vh] bg-neutral-200 rounded-lg overflow-hidden">
        <img :src="content.imageSrc" :alt="content.imgAlt || 'Content image'" class="w-full h-full object-cover" />
      </div>
      <article class="flex flex-col gap-5">
        <div class="flex flex-col lg:flex-row gap-2 lg:gap-8 lg:justify-between lg:items-center">
          <h3 class="font-bold text-2xl md:text-3xl">{{ content.header }}</h3>
          <div class="min-w-20 flex lg:flex-col lg:p-4 lg:border lg:border-neutral-300 lg:rounded-md font-semibold lg:text-right" v-html="content.formattedCreationDate"></div>
        </div>
        <div v-for="(paragraph, index) in content.paragraphs" :key="index" v-html="markdownToHtml(paragraph)" />
      </article>
    </div>
    <button v-if="postsToShow < sortedBlogData.length" @click="loadMore" class="font-bold w-full md:w-auto self-center border-neutral-200 border bg-neutral-100 hover:bg-neutral-200 flex px-10 py-2 justify-center items-center rounded-full text-xl md:text-2xl">
      Load More
    </button>
  </div>
</template>

