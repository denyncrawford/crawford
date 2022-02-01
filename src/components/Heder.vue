<template>
  <div
    class="
      w-full
      px-16
      py-8
      sm:py-12
      mx-auto
      fixed
      sm:px-28
      flex
      lg:py-8 items-center bg-white dark:bg-slate-900 justify-between
    "
  >
    <router-link to="/" tag="h2"
      class="
        text-lg
        text-indigo-600
        sm:text-3xl
        font-bold
      "
    >
      Miguel Rangel
    </router-link>
    <div class="flex">
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