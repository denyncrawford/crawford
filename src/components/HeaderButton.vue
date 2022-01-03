<template>
  <div class="inline-flex rounded-md">
    <router-link
      :to="to"
      class="
        inline-flex
        items-center
        justify-center
        px-4
        py-2
        text-base
        dark:text-white
        font-medium
        leading-6
        transition
        duration-150
        ease-in-out
        font-bold
        border border-transparent
        rounded-md
        hover:text-indigo-500
        focus:outline-none
      "
      ><slot></slot
    ></router-link>
  </div>
</template>

<script setup>

const props = defineProps(['to'])

</script>

<style scoped>
.router-link-exact-active, .router-link-active {
  @apply text-indigo-500
}
</style>