<!-- This component takes a project object and renders it as a card -->
<template>
  <div class="rounded-xl cursor-pointer flex flex-col group hover:scale-110 dark:border-slate-400 dark:hover:border-indigo-500 hover:border-indigo-500 transition p-8 border border-dashed">
    <a  target="_blank" :href="project.html_url" class="group-hover:text-indigo-500 text-gray-600 dark:text-white font-bold">{{project.full_name  || project.name }}</a>
    <p class="mt-2 dark:text-slate-400">{{project.description}}</p>
    <div class="flex justify-between mt-auto pt-4">
      <div class="flex">
        <a :href="project.html_url" target="_blank" class="text-indigo-500 hover:text-indigo-600">
          <Icon name="fa-github" class="h-5" />
        </a>
      </div>
      <div class="flex">
        <a :href="`${project.html_url}/stargazers`" target="_blank" class="text-indigo-500 hover:text-indigo-600">
          <Icon name="fa-star" class="h-5" />
          <span class="ml-1">{{project.stargazers_count}}</span>
        </a>
        <a :href="`${project.html_url}/issues`" target="_blank" class="ml-4 text-indigo-500 hover:text-indigo-600">
          <Icon name="oi-issue-opened" class="h-5" />
          <span class="ml-1">{{project.open_issues_count}}</span>
        </a>
        <a :href="`${project.html_url}/network`" target="_blank" class="ml-4 text-indigo-500 hover:text-indigo-600">
          <Icon name="co-fork" class="h-5" />
          <span class="ml-1">{{project.forks_count}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['project'])
</script>