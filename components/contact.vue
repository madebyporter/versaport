<script setup lang="ts">
  
</script>

<template>
  <div class="col-start-2 col-span-10 md:col-start-4 md:col-end-12 overflow-hidden w-full">
    <div class="flex flex-col gap-10 border border-neutral-200 rounded-lg p-5 sm:p-10 lg:py-20 lg:px-40">
      <div>
        <p class="text-lg leading-relaxed">Feel free to get in contact with me about anything. This can be about a project, one of my products or just to say hi!</p>
      </div>
      <form action="" class="flex flex-col gap-5">
        <fieldset class="flex flex-col gap-2">
          <label class="text-base">Name</label>
          <input type="text" class="border boder-neutral-400 rounded-md px-4 py-4 text-base" />
        </fieldset>
        <fieldset class="flex flex-col gap-2">
          <label class="text-base">Email</label>
          <input type="email" class="border boder-neutral-400 rounded-md px-4 py-4 text-base" />
        </fieldset>
        <fieldset class="flex flex-col gap-2">
          <label class="text-base">Service</label>
          <select class="border boder-neutral-400 rounded-md px-4 py-4 text-base">
            <option>Build Features</option>
            <option>Build Systems</option>
          </select>
        </fieldset>
        <fieldset class="flex flex-col gap-2">
          <label class="text-base">Message</label>
          <textarea class="border boder-neutral-400 rounded-md px-4 py-4 text-base min-h-[150px]"></textarea>
        </fieldset>
        <fieldset class="flex flex-col gap-2">
          <button class="font-bold bg-black px-5 py-2 rounded-md !text-white !no-underline flex justify-center hover:bg-versa-blue w-auto">Send</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>
