<script setup lang="ts">
import contentData from '~/data/services.json';
</script>

<template>
  <div class="col-start-4 col-span-8 flex flex-col gap-10">
    <div class="flex flex-col gap-10 border border-neutral-200 rounded-lg p-10" v-for="content in contentData" :key="content.id">
      <div class="flex flex-col gap-5">
        <div class="flex flex-row justify-between items-baseline">
          <h3 class="font-bold text-4xl">{{ content.name }}</h3>
          <span class="text-3xl">{{ content.price }}</span>
        </div>
        <div class="flex flex-col gap-2.5">
          <p class="text-2xl leading-relaxed">{{ content.description }}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10 justify-between items-end border-t border-neutral-200 pt-10">
        <div class="columns-2 gap-2.5 leading-relaxed">
          <p v-for="benefit in content.benefits">{{ benefit }}</p>
        </div>
        <div class="flex flex-col gap-2.5">
          <div class="text-lg">{{ content.spots }} Spots Left!</div>
          <a :href="content.ctaLink" class="bg-black px-5 py-2 rounded-md !text-white !no-underline flex justify-center hover:bg-versa-blue">{{ content.ctaLabel }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
