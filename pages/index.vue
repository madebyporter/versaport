<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import Modal from '~/components/modal.vue';
  import Person from '~/components/person.vue';
  import AddPerson from '~/components/addPerson.vue';
  import About from '~/components/about.vue';
  import { useRuntimeConfig } from '#app';
  import Airtable from 'airtable';
  import { inject } from 'vue';

  // Add Person
  const showAddPerson = inject('showAddPerson');
  function handleShowAddPerson() {
    showAddPerson.value = true;
  }
  function handleCloseAddPerson() {
    showAddPerson.value = false;
  }

  // About
  const showAbout = inject('showAbout');
  function handleShowAbout() {
    showAbout.value = true;
  }
  function handleCloseAbout() {
    showAbout.value = false;
  }

  // Fetch Airtable data
  interface Person {
    name: string;
    portfolio: string;
    twitter?: string;
    linkedin?: string;
    github?: string;  
    dribbble?: string;
    jobType: string[];
    deliverables?: string[];
    industries?: string[];
    skills: { design: string[]; code: string[] };
  }

  const { public: { AIRTABLE_API_KEY } } = useRuntimeConfig();
  var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base('appKgpEdY2KYZ7WGj');

  const airtableData = ref<Array<Person>>([]);

  const fetchAirtableData = async () => {
    try {
      base('versaDesignEngineers').select({
        maxRecords: 100,
        view: "Grid view",
        filterByFormula: "{Approved} = 1",
        sort: [{ field: "Created Time", direction: "desc" }]
      }).eachPage((records, fetchNextPage) => {
        records.forEach(record => {
          const formattedRecord = {
            name: record.fields.Name,
            portfolio: record.fields.Portfolio,
            twitter: record.fields.Twitter,
            linkedin: record.fields.Linkedin,
            github: record.fields.Github,
            dribbble: record.fields.Dribbble,
            jobType: record.fields['Job Type'] || [],
            deliverables: record.fields.Deliverables || [],
            industries: record.fields.Industries || [],
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

        const jobTypeMatch = person.jobType?.some(job => job.toLowerCase().includes(term)) ?? false;
        const deliverablesMatch = person.deliverables?.some(deliverable => deliverable.toLowerCase().includes(term)) ?? false;
        const industriesMatch = person.industries?.some(industry => industry.toLowerCase().includes(term)) ?? false;

        return nameMatch || designMatch || codeMatch || jobTypeMatch || deliverablesMatch || industriesMatch;
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
      class: 'min-h-screen bg-neutral-100 tracking-tight antialiased'
    }
  });
</script>

<template>
  <main @show-add-person="handleShowAddPerson" @show-about="handleShowAbout" class="flex flex-col gap-0 pb-10">
    <section class="w-full grid grid-cols-4 sm:grid-cols-12 gap-0 border-b-2 border-neutral-200">
      <div class="col-start-1 col-span-4 sm:col-start-3 sm:col-span-9 flex flex-col gap-10 p-5 sm:px-0 py-5 sm:py-10">
        <h1 class="h-12 font-bold text-2xl flex flex-row items-center text-center sm:text-left">{{ pageTitle }}</h1>
      </div>
    </section>
    <section class="grid grid-cols-4 sm:grid-cols-12 gap-0 sticky top-0 border-b-2 border-neutral-200 bg-neutral-100 z-20">
      <div class="col-start-1 col-span-4 sm:col-start-3 sm:col-span-9 flex flex-col gap-10 p-5 sm:px-0 sm:py-10 relative">
        <input 
          type="text" 
          v-model="searchQuery"
          class="
            w-full bg-neutral-900 text-gray-200 rounded-full font-bold outline-8 outline-neutral-900 placeholder:text-neutral-700 focus:bg-neutral-800
            text-lg md:text-3xl
            px-5 py-2.5 pl-12 md:pl-16 md:py-5 md:px-10
            z-10
          " 
          placeholder="Name, Language, Software, Industries, Deliverables"
        />
        <span class="absolute left-10 sm:left-5 top-1/2 transform -translate-y-1/2 text-neutral-500 z-30 md:text-2xl">
          <i class="fa-sharp fa-regular fa-magnifying-glass"></i>
        </span>
      </div>
    </section>
    <section class="grid grid-cols-4 sm:grid-cols-12 gap-0">
      <div class="col-start-1 col-span-11 sm:col-start-3 sm:col-span-9 columns-1 md:columns-2 xl:columns-3 gap-x-5 px-5 sm:px-0 py-5"> 
        <Person
          v-for="person in filteredPeople"
          :key="person.name"
          v-bind="person"
        />
      </div>
    </section>
    <Modal v-if="showAddPerson" @close="handleCloseAddPerson" >
      <AddPerson />
    </Modal>
    <Modal v-if="showAbout" @close="handleCloseAbout">
      <About />
    </Modal>
  </main>
</template>
