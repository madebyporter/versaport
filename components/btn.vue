<script setup lang="ts">
const props = defineProps<{
  content: Array<{ src: string, label: string, extraClasses: string }>
}>()
</script>

<template>
  <a v-for="ele in props.content" :href="ele.src" :class="['btn', 'bg-black', 'px-5', 'py-2', 'rounded-md', 'text-white', 'font-bold', 'no-underline', 'inline-flex', 'justify-center', 'hover:bg-versa-blue', 'w-full', ele.extraClasses]">{{ ele.label }}</a>
</template>
