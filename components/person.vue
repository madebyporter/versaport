<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps<{
    name: string,
    portfolio: string,
    twitter: string,
    linkedin: string,
    skills: { design: string[], code: string[] }
  }>();
</script>

<template>
  <div class="col-start-3 col-span-10 flex flex-col gap-10 border-b-2 border-neutral-200 min-h-[184px] justify-center">  
    <div class="flex flex-row justify-between items-center px-10 py-10">
      <div class="flex flex-col">
        <h2 class="font-bold text-2xl flex flex-row items-center">{{ props.name }}</h2>
        <div class="flex flex-row gap-5">
          <NuxtLink v-if="props.portfolio" :to="props.portfolio" target="_blank">Portfolio</NuxtLink>
          <NuxtLink v-if="props.twitter" :to="props.twitter" target="_blank">
            <i class="fa-brands fa-twitter"></i>
          </NuxtLink>
          <NuxtLink v-if="props.linkedin" :to="props.linkedin" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </NuxtLink>
        </div>
      </div>
      <div class="flex lg:flex-col xl:flex-row gap-10 lg:min-w-[340px] xl:min-w-[340px]">
        <div v-if="props.skills.design && props.skills.design.length > 0" class="flex flex-col w-full xl:w-1/2">
          <h3 class="font-bold text-sm mb-2">Design x{{ Math.min(3, props.skills.design.length) }}</h3>
          <div class="flex lg:flex-row xl:flex-col gap-2">
            <span class="text-sm" v-for="(skill, index) in props.skills.design.slice(0, 3)" :key="index">{{ skill }}</span>
          </div>
        </div>
        <div v-if="props.skills.code && props.skills.code.length > 0" class="flex flex-col w-full xl:w-1/2">
          <h3 class="font-bold text-sm mb-2">Code x{{ Math.min(3, props.skills.code.length) }}</h3>
          <div class="flex lg:flex-row xl:flex-col gap-2">
            <span class="text-sm" v-for="(skill, index) in props.skills.code.slice(0, 3)" :key="index">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
