<template>
  <div
    class="
      w-full
      px-4
      py-12
      mx-auto
      sm:px-6
      lg:py-8 lg:px-28 lg:flex lg:items-center lg:justify-between
    "
  >
    <h2
      class="
        text-3xl
        text-indigo-600
        sm:text-3xl
      "
    >
      Crawford.
    </h2>
    <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
      <HeaderButton to="/"> Home </HeaderButton>
      <HeaderButton to="/about"> About </HeaderButton>
      <ButtonRepo />
    </div>
  </div>
</template>

<script setup>
import ButtonRepo from '@/components/ButtonRepo.vue'
import HeaderButton from '@/components/HeaderButton.vue'
</script>