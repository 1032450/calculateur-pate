<template>
  <div
      v-if="props.nombre > 2"
      class="ingredient"
  >
    <span>pâte {{ Math.round((props.poids) * props.nombre) }}</span>
    <span>{{ props.nomIngredient }} {{state.qte}}</span>
  </div>

</template>


<script setup>
import {onBeforeMount, reactive} from "vue";

const props = defineProps(["nomIngredient", "qteIngredient", "poids", "nombre"]);

const state = reactive({
  qte: 0,
})

onBeforeMount(() => {
  state.qte = Math.round(props.nombre * props.qteIngredient)
})

</script>


<style scoped>
@import "src/styles/ingredient/ingredient.css";
</style>