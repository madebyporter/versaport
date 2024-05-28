<script setup lang="ts">
  // Set Page Title
  const pageTitle = ref('Index')

  useHead({
    title: pageTitle.value,
    meta: [
      { name: 'description', content: 'Showcase your best work & products quickly to the world.' }
    ],
    bodyAttrs: {
      class: 'test'
    }
  })
</script>


<template>
  <main class="flex flex-col gap-20 md:gap-28 pb-28">
    <section class="grid grid-cols-12 gap-5 md:gap-10">
      <PageTitle 
        :title="pageTitle" 
      />
    </section>
    <section class="grid grid-cols-12 gap-5 md:gap-10">
      <Hero 
        title="Showcase your best work &amp; products quickly to the world" 
        description="Versa Simple is a Nuxt3 template for independent design engineers, looking to get hired or obtain customers. The system's minimalism makes the work speak for itself."
      />
    </section>
    <section id="work" class="grid grid-cols-12 gap-5 md:gap-10">
      <SectionTitle title="Work" />
      <Work />
    </section>
    <section id="services" class="grid grid-cols-12 gap-5 md:gap-10">
      <SectionTitle title="Services" />
      <Services />    
    </section>
    <section id="now" class="grid grid-cols-12 gap-5 md:gap-10">
      <SectionTitle title="Now" />
      <Blog />
    </section>
    <section id="testimonials" class="grid grid-cols-12 gap-5 md:gap-10">
      <SectionTitle title="Testimonials" />
      <Testimonials />    
    </section>
    <section id="contact" class="grid grid-cols-12 gap-5 md:gap-10">
      <SectionTitle title="Contact" />
      <Contact />    
    </section>
    
  </main>
</template>
