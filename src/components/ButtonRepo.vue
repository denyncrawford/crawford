<template>
  <div class="inline-flex ml-3 rounded-md">
    <button
       @click="toggleTheme"
      class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-500 transition duration-150 ease-in-out border border-transparent rounded-md hover:border-indigo-500 hover:text-indigo-500 focus:outline-none"
      >
      <Icon name="hi-moon" class="h-5" v-show="!darkMode" />  
      <Icon name="hi-sun" class="h-5 text-yellow-500" v-show="darkMode" />  
      </button
    >
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();

const darkMode = computed(() => store.state.darkMode)

const toggleTheme = () => {
  store.commit('toggleDarkMode')
}


</script>
