<template>
  <div
    class="
      w-full
      px-4
      py-12
      mx-auto
      fixed
      sm:px-6
      lg:py-8 lg:px-28 lg:flex lg:items-center bg-white dark:bg-slate-900 lg:justify-between
    "
  >
    <router-link to="/" tag="h2"
      class="
        text-2xl
        text-indigo-600
        sm:text-3xl
        font-bold
      "
    >
      Miguel Rangel
    </router-link>
    <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
      <HeaderButton to="/"> About Me </HeaderButton>
      <HeaderButton to="/blog"> Blog </HeaderButton>
      <ButtonRepo />
    </div>
  </div>
</template>

<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
import HeaderButton from '@/components/HeaderButton.vue'
</script>