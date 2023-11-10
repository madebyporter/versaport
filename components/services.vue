<script setup lang="ts">
import contentData from '~/data/services.json';
</script>

<template>
  <div class="col-start-2 col-span-10 md:col-start-4 md:col-span-8 flex flex-col gap-10">
    <div class="flex flex-col gap-10 border border-neutral-200 rounded-lg p-5 sm:p-10" v-for="content in contentData" :key="content.id">
      <div class="flex flex-col gap-5">
        <div class="flex flex-col md:flex-row gap-2 justify-between items-baseline">
          <h3 class="font-bold text-3xl md:text-4xl">{{ content.name }}</h3>
          <span class="text-2xl md:text-3xl">{{ content.price }}</span>
        </div>
        <div class="flex flex-col gap-2.5">
          <p class="text-xl md:text-2xl leading-relaxed">{{ content.description }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-end border-t border-neutral-200 pt-10">
        <div class="flex flex-col md:block md:columns-2 gap-2.5 leading-relaxed">
          <p v-for="benefit in content.benefits">{{ benefit }}</p>
        </div>
        <div class="flex flex-col gap-2.5 items-start">
          <div class="text-base w-full md:text-left">{{ content.spots }} Spots Left!</div>
          <a :href="content.ctaLink" class="bg-black px-5 py-2 rounded-md !text-white !no-underline inline-flex justify-center hover:bg-versa-blue w-full md:w-auto">{{ content.ctaLabel }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
