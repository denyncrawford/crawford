<template>
  <div class="h-full w-full flex flex-col dark:bg-slate-900">
    <Heder/>
    <div class="flex-1">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import Heder from './components/Heder.vue'
import { setTheme, getTheme } from './services/localStorage.service.js'

const store = useStore()
const darkMode = computed(() => store.state.darkMode)

onMounted( () => {
  const html = document.getElementsByTagName('html')[0];
  html.classList.add(getTheme() === 'true' ? 'dark' : !getTheme() ? 'dark' : 'light');
  store.commit('setTheme', JSON.parse(getTheme()))
})

watch(darkMode, (value) => {
  const html = document.getElementsByTagName('html')[0];
  if (value) { 
    setTheme(value)
    html.classList.add('dark')
    return 
  };
  setTheme(value)
  html.classList.remove('dark');
})

</script>

