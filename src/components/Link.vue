<template>
  <a :target="internal ? '' : '_blank'" rel="noreferrer" :href="to">
    <slot />
  </a>
</template>

<script setup>
const props = defineProps(['to', 'internal'])
</script>