<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: [String, Number, Boolean],
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  label: String,
  options: Array,
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <fieldset class="relative w-full" :class="{ 'flex flex-row py-5 gap-2 items-center': type === 'checkbox' }">
    <template v-if="type === 'text' || type === 'email' || type === 'url'">
      <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        class="peer border border-neutral-200 hover:border-neutral-300 px-4 pt-10 pb-4 rounded-md outline-neutral-950 placeholder:text-transparent focus:placeholder:text-neutral-400 w-full font-bold"
        :class="{ 'has-text-inside': modelValue !== '' }">
      <label
        class="peer-focus:top-6 peer-[.has-text-inside]:top-6 peer-focus:text-neutral-600 absolute top-[50%] translate-y-[-50%] left-4 -z-2 text-sm transition-all pointer-events-none w-full font-medium"
        :for="type">{{ label }}</label>
    </template>

    <template v-else-if="type === 'textarea'">
      <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder"
        class="peer border border-neutral-200 hover:border-neutral-300 px-4 pt-10 pb-4 rounded-md outline-neutral-950 placeholder:text-transparent focus:placeholder:text-neutral-400 w-full h-32 font-bold"
        :class="{ 'has-text-inside': modelValue !== '' }"></textarea>
      <label
        class="top-4 text-neutral-600 absolute left-4 -z-2 text-sm transition-all pointer-events-none w-full font-medium"
        :for="type">{{ label }}</label>
    </template>

    <template v-else-if="type === 'checkbox'">
      <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)"
        class="border border-neutral-200 hover:border-neutral-300 px-4 pt-8 pb-4 rounded-md outline-neutral-950 placeholder:text-transparent focus:placeholder:text-neutral-400 w-[16px] h-[16px]" :id="label">
      <label class="text-md transition-all cursor-pointer w-full font-medium" :for="label">{{ label }}</label>
    </template>

    <template v-else-if="type === 'select' && options">
      <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        class="border border-neutral-200 hover:border-neutral-300 px-4 pt-10 pb-4 rounded-md outline-neutral-950 w-full font-bold">
        <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.text }}</option>
      </select>
      <label class="absolute top-4 left-4 -z-2 text-sm transition-all pointer-events-none w-full font-medium"
        :for="type">{{ label }}</label>
    </template>
  </fieldset>
</template>
