<script setup lang="ts">
  import { ref, computed } from 'vue';
  import peopleData from '~/data/people.json';
  import Person from '~/components/person.vue';

  const pageTitle = ref('Find Design Engineers to connect with or hire.');
  const searchQuery = ref(''); // The search query entered by the user
  const peopleToShow = ref(20); // The initial number of people to show

  const filteredPeople = computed(() => {
    const searchTerms = searchQuery.value.toLowerCase().split(' ').filter(term => term.length > 0);

    return peopleData.filter(person => {
      return searchTerms.every(term => {
        const nameMatch = person.name.toLowerCase().includes(term);
        const designMatch = person.skills.design.some(skill => skill.toLowerCase().includes(term));
        const codeMatch = person.skills.code.some(skill => skill.toLowerCase().includes(term));
        return nameMatch || designMatch || codeMatch;
      });
    }).slice(0, peopleToShow.value);
  });

  const loadMorePeople = () => {
    peopleToShow.value += 20; // Show 20 more people when scrolling to the bottom
  };

  const handleScroll = () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
    if (nearBottom) {
      loadMorePeople();
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  useHead({
    title: pageTitle.value,
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: 'test'
    }
  });
</script>

<template>
  <main class="flex flex-col gap-0 pb-28">
    <section class="grid grid-cols-12 gap-10 border-b-2 border-neutral-200">
      <div class="col-start-3 col-span-9 flex flex-col gap-10 py-10">
        <h1 class="h-12 font-bold text-2xl flex flex-row items-center">{{ pageTitle }}</h1>
      </div>
    </section>
    <section class="grid grid-cols-12 gap-10 sticky top-0 border-b-2 border-neutral-200 bg-white">
      <div class="col-start-3 col-span-9 flex flex-col gap-10 py-10">
        <input 
          type="text" 
          v-model="searchQuery"
          class="w-full bg-neutral-900 text-gray-200 rounded-full text-3xl font-bold px-10 py-5 outline-8 outline-neutral-900 placeholder:text-neutral-700 focus:bg-neutral-800" 
          placeholder="Search by Name, Stack, Software, etc."
        />
      </div>
    </section>
    <section class="grid grid-cols-12 gap-0">
      <Person 
        v-for="person in filteredPeople" 
        :key="person.name"
        v-bind="person"
      />
    </section>
  </main>
</template>
