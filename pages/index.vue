<script setup lang="ts">
  import SectionTitle from '~/components/sectionTitle.vue'
  import Hero from '~/components/hero.vue'
  import Work from '~/components/work.vue'
  import Content from '~/components/content.vue'

  const pageTitle = ref('Index')

  useHead({
    title: pageTitle.value,
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: 'test'
    }
  })

  definePageMeta({
    layout: "default",
  });
</script>

<template>
  <main class="flex flex-col gap-28 pb-28">
    <section class="grid grid-cols-12 gap-10">
      <div class="col-start-4 col-span-8 flex flex-col gap-10 py-10">
        <h1 class="h-12 font-bold text-3xl flex flex-row items-center">{{ pageTitle }}</h1>
      </div>
    </section>
    
    <Hero 
      title="Showcase your best work &amp; products quickly to the world" 
      description="Think Versa Portfolio is a web template for independent designers, engineer &amp; entrepreneurs, looking to get hired or obtain customers. The system's minimalism makes the work speak for itself."
    />

    <section id="work" class="grid grid-cols-12 gap-10">
      <SectionTitle title="Work" />
      <Work />
    </section>
    <section id="new" class="grid grid-cols-12 gap-10">
      <SectionTitle title="What's New" />
      <Content />
    </section>
    <section id="testimonials" class="grid grid-cols-12 gap-10">
      <SectionTitle title="Testimonials" />
      <div class="col-start-1 col-end-13 overflow-hidden w-full">
        <div class="section-carousel-track flex flex-row items-center gap-10 px-10 overflow-x-scroll">
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
          <div class="section-work-item min-h-[400px] min-w-[25vw] bg-neutral-200 rounded-lg"></div>
        </div>
      </div>    
    </section>
  </main>
</template>
