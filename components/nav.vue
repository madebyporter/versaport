<script setup>
  // Import the JSON file
  import navData from '~/data/nav.json';
</script>

<template>
  <nav class="nav fixed bottom-10 left-10 flex flex-col gap-5">
    <div v-for="section in navData" :key="section.header" class="nav-section flex flex-col gap-2.5">
      <span class="nav-header text-xs font-semibold">{{ section.header }}</span>
      <NuxtLink 
        v-for="link in section.links" 
        :key="link.text" 
        :to="link.url"
        :class="['nav-link', link.external ? 'external' : '', 'text-sm font-bold no-underline	flex flex-row gap-2 justify-start items-center w-full']"
        :target="link.external ? '_blank' : null"
        :rel="link.external ? 'noopener noreferrer' : null"
      >
        {{ link.text }}
        <i v-if="link.external" class="fa-sharp fa-regular fa-arrow-up-right"></i>
      </NuxtLink>
    </div>
  </nav>
</template>


