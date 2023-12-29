<template>
  
  <header>
    <Navigation/>
  </header>

  <RouterView />
  
</template>


<script setup>

import {RouterView } from 'vue-router'
import Navigation from "@/Navigation.vue";

</script>


<style scoped>

</style>
