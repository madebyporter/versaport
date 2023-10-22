<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  link: String,
  iconClasses: String,
});

const isExternalLink = !props.link?.startsWith('/');
</script>

<template>
  <div v-if="props.link">
    <NuxtLink :to="props.link" :target="isExternalLink ? '_blank' : ''">
      <i :class="['fa', props.iconClasses]"></i>
    </NuxtLink>
  </div>
</template>