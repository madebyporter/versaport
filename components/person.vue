<script setup lang="ts">
  import { ref, onMounted } from 'vue';
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

  // Split name into first name and last name
  const formattedName = ref<{ first: string; last: string }>({ first: '', last: '' });

  const splitName = (name: string) => {
    const nameParts = name.split(' ');
    switch (nameParts.length) {
      case 2:
        return { first: nameParts[0], last: nameParts[1] };
      case 3:
        return { first: nameParts[0], last: `${nameParts[1]} ${nameParts[2]}` };
      case 4:
        return { first: `${nameParts[0]} ${nameParts[1]}`, last: `${nameParts[2]} ${nameParts[3]}` };
      default:
        // Handle other cases if necessary
        return { first: nameParts[0], last: nameParts.slice(1).join(' ') };
    }
  };

  onMounted(() => {
    formattedName.value = splitName(props.name);
  });
</script>

<template> 
  <!-- Start Card -->
  <div class="flex flex-col gap-20 justify-between bg-versa-black text-versa-white rounded-xl mb-5 break-inside-avoid-column min-h-[216px] overflow-hidden">
    <div class="flex flex-row gap-2.5 justify-between p-10 pb-0">
      <div class="flex flex-col items-baseline gap-5">
        <h2 class="font-bold text-6xl flex flex-col"><span>{{ formattedName.first }}</span> <span>{{ formattedName.last }}</span></h2>
        <p v-if="props.jobType && props.jobType.length > 0" class="font-medium tracking-normal text-xl">
          {{ props.jobType.join(' / ') }}
        </p>
      </div>
      <div class="flex flex-col gap-2.5">
        <NuxtLink v-if="props.portfolio" :to="props.portfolio" target="_blank">
          <i class="fa-sharp fa-light fa-house text-versa-white"></i>
        </NuxtLink>
        <NuxtLink v-if="props.twitter" :to="props.twitter" target="_blank">
          <i class="fa-brands fa-x-twitter text-versa-white"></i>
        </NuxtLink>
        <NuxtLink v-if="props.linkedin" :to="props.linkedin" target="_blank">
          <i class="fa-brands fa-linkedin text-versa-white"></i>
        </NuxtLink>
        <NuxtLink v-if="props.github" :to="props.github" target="_blank">
          <i class="fa-brands fa-github text-versa-white"></i>
        </NuxtLink>
        <NuxtLink v-if="props.dribbble" :to="props.dribbble" target="_blank">
          <i class="fa-brands fa-dribbble text-versa-white"></i>
        </NuxtLink>
      </div>
    </div>
    <div class="after:bg-gradient-to-r relative after:content-[''] after:h-full after:w-40 after:absolute after:right-0 after:top-0 after:from-transparent after:to-versa-black after:pointer-events-none">
      <div class="p-10 pt-0 pr-10 flex flex-row gap-2 no-scrollbar overflow-x-auto w-full z-10">
        <div v-if="props.skills.design && props.skills.design.length > 0" class="flex flex-col gap-1 items-start">
          <h3 class="font-medium text-xs text-neutral-500 sticky left-0 uppercase tracking-wider">Design</h3>
          <div class="flex gap-2 font-medium">
            <Tag v-for="(skill, index) in props.skills.design.slice(0, 3)" :key="index" :value="skill" />
          </div>
        </div>
        <div v-if="props.skills.code && props.skills.code.length > 0" class="flex flex-col gap-1 items-start">
          <h3 class="font-medium text-xs text-neutral-500 sticky left-0 uppercase tracking-wider">Code</h3>
          <div class="flex gap-2 font-medium">
            <Tag v-for="(skill, index) in props.skills.code.slice(0, 3)" :key="index" :value="skill" />
          </div>
        </div>
        <div v-if="props.deliverables && props.deliverables.length > 0" class="flex flex-col gap-1 items-start">
          <h3 class="font-medium text-xs text-neutral-500 sticky left-0 uppercase tracking-wider">Deliverables</h3>
          <div class="flex gap-2 font-medium">
            <Tag v-for="(deliverables, index) in props.deliverables.slice(0, 3)" :key="index" :value="deliverables" />
          </div>
        </div>
        <div v-if="props.industries && props.industries.length > 0" class="flex flex-col gap-1 items-start">
          <h3 class="font-medium text-xs text-neutral-500 sticky left-0 uppercase tracking-wider">Industries</h3>
          <div class="flex gap-2 font-medium">
            <Tag v-for="(industries, index) in props.industries.slice(0, 3)" :key="index" :value="industries" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
