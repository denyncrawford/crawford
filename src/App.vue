<template>
  <div class="w-full flex flex-col">
    <Header/>
    <div>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import Header from './components/Heder.vue'
import Footer from './components/Footer.vue'
import { setTheme, getTheme } from './services/localStorage.service.js'
import { useRouter } from 'vue-router'

const router = useRouter()

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'Portfolio'} - Miguel Rangel`
  next()
})

const store = useStore()
const darkMode = computed(() => store.state.darkMode)

onMounted( () => {
  const html = document.getElementsByTagName('html')[0];
  const theme = getTheme() === 'true' ? 'dark' : !getTheme() ? 'dark' : 'light';
  html.classList.add(theme);
  store.commit('setTheme', getTheme() === 'true')
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

