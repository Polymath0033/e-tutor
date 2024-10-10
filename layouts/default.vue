<script setup lang="ts">
import mainHeader from '~/components/atoms/headers/main-header.vue';
</script>

<template>
  <main-header />
  <div>
    Layout: default
    <slot />
  </div>
</template>

<style scoped></style>
