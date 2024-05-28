<script setup lang="ts">
  import contentData from '~/data/services.json';
</script>

<template>
  <div class="col-start-2 col-span-10 md:col-start-4 md:col-span-8 flex flex-col gap-10">
    <div class="flex flex-col gap-10 bg-white rounded-lg p-5 sm:p-10" v-for="content in contentData" :key="content.id">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col md:flex-row gap-2 justify-between items-baseline">
          <h3 class="font-bold text-2xl md:text-3xl lg:text-4xl">{{ content.name }}</h3>
          <span class="text-xl md:text-2xl lg:text-3xl">{{ content.price }}</span>
        </div>
        <div class="flex flex-col gap-2.5">
          <p class="text-lg md:text-2xl leading-relaxed">{{ content.description }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-between items-end border-t border-neutral-200 pt-10">
        <div class="flex flex-col sm:block sm:columns-2 gap-2.5">
          <p v-for="benefit in content.benefits" class="text-md leading-relaxed">{{ benefit }}</p>
        </div>
        <div class="flex flex-col gap-2.5">
          <div class="text-base w-full md:text-left">{{ content.spots }} Spots Left!</div>
          <btn :content="[{ src: content.ctaLink, label: content.ctaLabel, extraClasses: '' }]"></btn>
        </div>
      </div>
    </div>
  </div>
</template>
