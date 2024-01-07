<template>
  <div class="texte">
    <span>{{ props.ingredient.nom }}</span>
    <span>{{ state.qte || "" }}</span>
  </div>
  <hr>
</template>


<script setup>

import {onBeforeUpdate, reactive} from "vue";

const props = defineProps(["ingredient", "poidsVoulu"]);

const state = reactive({
  qte: 0,
})

onBeforeUpdate(() => {
  state.qte = Math.round(props.ingredient.qte * props.poidsVoulu)
})

</script>


<style scoped>
@import "src/styles/views/views.css";
</style>