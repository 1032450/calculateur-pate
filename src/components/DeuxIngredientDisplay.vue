<template>
  <div
      v-if="props.nombre > 2
      || props.nomIngredient1 === 'm.g.' && props.nombre > 0"
      class="ingredient"
  >
    <span>pâte {{ Math.round((props.poids) * props.nombre) }}</span>
    <span>{{ props.nomIngredient1 }} {{ state.qte1 }}</span>
  </div>
  <div
      v-if="props.nombre > 2
      || props.nomIngredient1 === 'm.g.' && props.nombre > 0"
      class="ingredient"
  >
    <span/>
    <span>{{ props.nomIngredient2 }} {{ state.qte2 }}</span>
  </div>

</template>


<script setup>
import {onBeforeMount, reactive} from "vue";

const props = defineProps([
  "nomIngredient1",
  "qteIngredient1",
  "nomIngredient2",
  "qteIngredient2",
  "poids",
  "nombre"]);

const state = reactive({
  qte1: 0,
  qte2: 0,
})

onBeforeMount(() => {
  state.qte1 = Math.round(props.nombre * props.qteIngredient1)
  state.qte2 = Math.round(props.nombre * props.qteIngredient2)
})

</script>


<style scoped>
@import "src/styles/ingredient/ingredient.css";
</style>