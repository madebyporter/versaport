<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import Person from '~/components/person.vue';
  import Airtable from 'airtable';

  interface Person {
    name: string;
    portfolio: string;
    twitter: string;
    linkedin: string;
    skills: { design: string[]; code: string[] };
  }

  // Fetch Airtable data
  var base = new Airtable({ apiKey: 'pat6NfprbFs8mQfWc.53e811a1265e01355fdb7aa84405c73f4128ce160b475f1770b3f97a855ea15f' }).base('appKgpEdY2KYZ7WGj');

  const airtableData = ref<Array<Person>>([]);

  const fetchAirtableData = async () => {
    try {
      base('versaDesignEngineers').select({
        maxRecords: 100,
        view: "Grid view"
      }).eachPage((records, fetchNextPage) => {
        records.forEach(record => {
          const formattedRecord = {
            name: record.fields.Name,
            portfolio: record.fields.Portfolio,
            twitter: record.fields.Twitter,
            linkedin: record.fields.Linkedin,
            skills: {
              design: record.fields.Design || [],  // Updated line
              code: record.fields.Code || []  // Updated line
            }
          };
          airtableData.value.push(formattedRecord);
        });
        fetchNextPage();
      }, (err) => {
        if (err) { console.error(err); return; }
      });
    } catch (error) {
      console.error('Error fetching data from Airtable:', error);
    }
  };
  onMounted(fetchAirtableData);

  // Search
  const peopleToShow = ref(20); // The initial number of people to show
  const searchQuery = ref(''); // The search query entered by the user
  const filteredPeople = computed(() => {
    const searchTerms = searchQuery.value.toLowerCase().split(' ').filter(term => term.length > 0);
    return airtableData.value.filter((person: Person) => {
      return searchTerms.every(term => {
        const nameMatch = person.name.toLowerCase().includes(term);
        const designMatch = person.skills.design.some(skill => skill.toLowerCase().includes(term));
        const codeMatch = person.skills.code.some(skill => skill.toLowerCase().includes(term));
        return nameMatch || designMatch || codeMatch;
      });
    }).slice(0, peopleToShow.value);
  });

  // Load 20 More People
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

  // SEO
  const pageTitle = ref('Find Design Engineers to connect with or hire.');
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
    <section class="w-full grid grid-cols-4 sm:grid-cols-12 gap-0 border-b-2 border-neutral-200">
      <div class="col-start-1 col-span-4 sm:col-start-3 sm:col-span-9 flex flex-col gap-10 p-5 sm:px-0 py-5 sm:py-10">
        <h1 class="h-12 font-bold text-2xl flex flex-row items-center text-center sm:text-left">{{ pageTitle }}</h1>
      </div>
    </section>
    <section class="grid grid-cols-4 sm:grid-cols-12 gap-0 sticky top-0 border-b-2 border-neutral-200 bg-white">
      <div class="col-start-1 col-span-4 sm:col-start-3 sm:col-span-9 flex flex-col gap-10 p-5 sm:px-0 sm:py-10">
        <input 
          type="text" 
          v-model="searchQuery"
          class="
            w-full bg-neutral-900 text-gray-200 rounded-full font-bold outline-8 outline-neutral-900 placeholder:text-neutral-700 focus:bg-neutral-800
            text-lg md:text-3xl
            px-5 py-2.5 md:py-5 md:px-10 
          " 
          placeholder="Search by Name, Stack, Software, etc."
        />
      </div>
    </section>
    <section class="grid grid-cols-4 sm:grid-cols-12 gap-0">
      <Person 
        v-for="person in filteredPeople"
        :key="person.name"
        v-bind="person"
      />
    </section>
  </main>
</template>
