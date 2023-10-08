<script setup lang="ts">
  import { defineProps } from 'vue';
  import Tag from '~/components/tag.vue';

  const props = defineProps<{
    name: string,
    portfolio: string,
    twitter?: string,
    linkedin?: string,
    github?: string,
    dribbble?: string;
    jobType: string[],
    deliverables?: string[],
    industries?: string[],
    skills: { design: string[], code: string[] }
  }>();
</script>

<template> 
  <div class="flex flex-col gap-5 justify-between bg-white mb-5 break-inside-avoid-column min-h-[216px]">
    <div class="flex flex-row gap-2.5 justify-between p-5 pb-0">
      <div class="flex flex-col items-baseline gap-1">
        <h2 class="font-bold text-xl flex flex-row items-center">{{ props.name }}</h2>
        <p v-if="props.jobType && props.jobType.length > 0">
          {{ props.jobType.join(' / ') }}
        </p>
      </div>
      <div class="flex flex-col gap-2.5">
        <NuxtLink v-if="props.portfolio" :to="props.portfolio" target="_blank">
          <i class="fa-sharp fa-light fa-house"></i>
        </NuxtLink>
        <NuxtLink v-if="props.twitter" :to="props.twitter" target="_blank">
          <i class="fa-brands fa-x-twitter"></i>
        </NuxtLink>
        <NuxtLink v-if="props.linkedin" :to="props.linkedin" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </NuxtLink>
        <NuxtLink v-if="props.github" :to="props.github" target="_blank">
          <i class="fa-brands fa-github"></i>
        </NuxtLink>
        <NuxtLink v-if="props.dribbble" :to="props.dribbble" target="_blank">
          <i class="fa-brands fa-dribbble"></i>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-row gap-5 overflow-x-auto no-scrollbar p-5 pt-0">
      <div v-if="props.skills.design && props.skills.design.length > 0" class="flex flex-row gap-2 items-center">
        <h3 class="font-bold text-sm">Design</h3>
        <div class="flex gap-2">
          <Tag v-for="(skill, index) in props.skills.design.slice(0, 3)" :key="index" :value="skill" />
        </div>
      </div>
      <div v-if="props.skills.code && props.skills.code.length > 0" class="flex flex-row gap-2 items-center">
        <h3 class="font-bold text-sm">Code</h3>
        <div class="flex gap-2">
          <Tag v-for="(skill, index) in props.skills.code.slice(0, 3)" :key="index" :value="skill" />
        </div>
      </div>
      <div v-if="props.deliverables && props.deliverables.length > 0" class="flex flex-row gap-2 items-center">
        <h3 class="font-bold text-sm">Deliverables</h3>
        <div class="flex gap-2">
          <Tag v-for="(deliverables, index) in props.deliverables.slice(0, 3)" :key="index" :value="deliverables" />
        </div>
      </div>
      <div v-if="props.industries && props.industries.length > 0" class="flex flex-row gap-2 items-center">
        <h3 class="font-bold text-sm">Industries</h3>
        <div class="flex gap-2">
          <Tag v-for="(industries, index) in props.industries.slice(0, 3)" :key="index" :value="industries" />
        </div>
      </div>
    </div>
  </div>
</template>
