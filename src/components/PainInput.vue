<template>
  <div class="pain">
    <span>{{ props.nom }}</span>
    <span class="input">
      <button
          v-if="nombre !== ''"
          class="button"
          @click="effacer"
      >
        X
      </button>
      <input class="qte"
             type="number"
             v-model="nombre"
             @keyup="calculer"
      />
    </span>
  </div>
  
  <UnIngredientDisplay
      v-if="props.nbIngredient === 1"
      :key="nombre"
      :nomIngredient="props.ingredient1.nom"
      :qteIngredient="props.ingredient1.qte"
      :poids="props.poids"
      :nombre="nombre"
  />
  
  <DeuxIngredientDisplay
      v-if="props.nbIngredient === 2"
      :key="nombre"
      :nomIngredient1="props.ingredient1.nom"
      :qteIngredient1="props.ingredient1.qte"
      :nomIngredient2="props.ingredient2.nom"
      :qteIngredient2="props.ingredient2.qte"
      :poids="props.poids"
      :nombre="nombre"
  />

</template>

<script setup>

import {ref} from "vue";
import UnIngredientDisplay from "@/components/UnIngredientDisplay.vue";
import DeuxIngredientDisplay from "@/components/DeuxIngredientDisplay.vue";

const props = defineProps([
  "nom",
  "poids",
  "grains",
  "nbIngredient",
  "ingredient1",
  "ingredient2",
]);

const nombre = ref("");

const emit = defineEmits(["calculer"]);

function calculer() {
  const total = nombre.value * props.poids;
  emit("calculer", props.nom, total);
}

function effacer() {
  if (nombre.value !== "") {
    nombre.value = ""
    calculer()
  }
}

</script>

<style scoped>
.pain {
  font-size: 25px;
  font-weight: bold;
  margin-inline: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input {
  display: flex;
  align-items: center;
}

.button:active {
  background-color: red;
  color: white;
}

.button {
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  border-width: 1px;
  font-size: 20px;
  margin-inline: 10px;
  width: 32px;
  background-color: white;
}

.qte {
  width: 50px;
  margin-block: 5px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 7px;
  text-align: center;
  background: white;
}

</style>