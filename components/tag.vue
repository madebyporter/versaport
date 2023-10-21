<template>
  <span class="text-xs rounded-md border border-neutral-200 flex justify-center items-center px-2 py-1 whitespace-nowrap uppercase tracking-wider">
    {{ value }}
  </span>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
  value: string;
}>(), {
  value: ''
});
</script>
