<template>
  <div class="pain-input">
    <span>{{props.nom}}</span>
    <input class="qte"
        type="number"
        v-model="nombre"
        @keyup="calculer"
    />
  </div>

</template>

<script setup>

import {ref} from "vue";

const props = defineProps(["nom", "poids"]);

const nombre = ref("");

const emit = defineEmits(["calculer"]);

function calculer() {
  const total = nombre.value * props.poids;
  emit("calculer", props.nom, total);
}

</script>

<style scoped>
.pain-input {
  font-size: 25px;
  font-weight: bold;
  margin-inline: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.qte {
  width: 50px;
  margin-block: 5px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 7px;
  text-align: center;
}

</style>