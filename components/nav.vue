<script setup>
  // Import the JSON file
  import navData from '~/data/nav.json';
</script>

<template>
  <nav class="flex flex-col md:gap-5">
    <div v-for="section in navData" :key="section.header" class="nav-section flex flex-row md:flex-col justify-between md:justify-normal gap-2.5 px-5 py-2.5 md:p-0 border-b border-neutral-900 last:border-0 md:border-0">
      <span class="hidden md:block text-xs font-semibold text-neutral-500">{{ section.header }}</span>
      <NuxtLink 
        v-for="link in section.links" 
        :key="link.text" 
        :to="link.url"
        :class="['nav-link', link.external ? 'external' : '', 'text-sm font-normal !no-underline	flex flex-row gap-2 md:justify-start items-center w-auto md:w-full !text-white md:!text-black']"
        :target="link.external ? '_blank' : null"
        :rel="link.external ? 'noopener noreferrer' : null"
      >
        {{ link.text }}
        <i v-if="link.external" class="fa-sharp fa-regular fa-arrow-up-right"></i>
      </NuxtLink>
    </div>
  </nav>
</template>