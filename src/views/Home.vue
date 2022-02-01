<script setup>
import LinkTo from '../components/Link.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { onMounted, ref } from "vue";
import { getProjects } from '../services/projects.service.js'
const projects = ref([]);
onMounted(async () => {
  const data = await getProjects();
  projects.value = data;
});
</script>
<template>
  <div class="w-full">
    <section class="px-40 h-screen w-full flex text-center items-center justify-center">
      <div class="flex flex-col">
        <h1 class="text-8xl text-indigo-500">Miguel Rangel</h1>
        <div class="rounded border-dashed border border-slate-500 mt-5 px-5 ml-auto mr-auto">
          <h2 class="text-md font-thin text-slate-500">AKA: denyncrawford</h2>
        </div>
        <p
          class="dark:text-gray-300 text-slate-500 max-w-prose mt-5"
        >I'm a Full-Stack/multipurpose developer from Venezuela living in Argentina. <br> I like to do open source and decentralized stuff, I'm always trying to learn new and weird technologies...
        Right now I'm learning Rust and I am already a proeficient in JavaScript, TypeScript, NodeJS, Deno and their ecosystem.
        </p>
        <code class="dark:bg-gray-700 bg-gray-200 dark:text-white rounded px-2 ml-auto mr-auto mt-5">const { deno , node } = 🖤;</code>
        <div class="mt-10">
          <LinkTo to="https://deno.land/x/astrodon">
            <Icon name="si-deno" class="linkIcon"/>
          </LinkTo>
          <LinkTo to="https://github.com/denyncrawford">
            <Icon name="fa-github" class="linkIcon ml-5" />
          </LinkTo>
          <LinkTo to="https://es.stackoverflow.com/users/44653/d%d1%94%ce%b7y%ce%b7-crawford">
            <Icon name="fa-stack-overflow" class="linkIcon ml-5" />
          </LinkTo>
          <LinkTo to="https://www.linkedin.com/in/miguel-rangel-863373230/">
            <Icon name="fa-linkedin" class="linkIcon ml-5" />
          </LinkTo>
        </div>
        <div class="mt-10">
          <LinkTo :internal="true" to="#support" class="text-md font-thin text-slate-500 rounded border-dashed border border-slate-500 hover:text-indigo-700 hover:border-indigo-700 py-1 px-5">
            Want to support me?
          </LinkTo>
          <LinkTo :internal="true" to="#projects" class="text-md font-thin text-white rounded bg-indigo-500 ml-5 py-1 px-5 hover:bg-indigo-700">
            Check out my featured projects
          </LinkTo>
        </div>
      </div>
    </section>
    <section id="projects" class="px-40 min-h-full w-full flex">
      <div class="flex flex-col">
        <h1 class="text-8xl text-indigo-500 mt-40">Featured Projects</h1>
        <div class="grid mt-20 gap-8 grid-cols-4">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>
  </div>
</template>
