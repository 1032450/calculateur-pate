<template>
  <div :style="{ background: props.item.couleur }">
    
    <div class="texte-centre">
      Pâte {{ props.item.nom }}
    </div>
    
    <div class="texte">
      <span>Avec {{ props.item.nom }}</span>
      <span>{{ props.item.total || "" }}</span>
    </div>
    
    <hr/>
    
    <div class="texte">
      <span>Sans {{ props.item.nom }}</span>
      <span>{{ state.poidsSans || "" }}</span>
    </div>
    
    <hr class="grosse-ligne-point"/>
    
    <div class="texte">
      <span>Poids voulu</span>
      <span class="input">
          <button
              v-if="poidsVoulu !== ''"
              class="button"
              @click="effacer"
          >
            X
          </button>
          <input
              class="qte"
              type="number"
              v-model="poidsVoulu"
              @keyup="calculer"
          />
        </span>
    </div>
    
    <hr/>
    
    <div class="texte">
      <span>Qte {{ props.item.nom }}</span>
      <span v-if="props.item.poidsVoulu && props.item.total">
          {{ state.qte || "" }}
        </span>
    </div>
  
  </div>
</template>


<script setup>

import {onBeforeUpdate, reactive, ref} from "vue";

const props = defineProps(["item"]);

const emit = defineEmits(["calculer"]);

const poidsVoulu = ref("");

const state = reactive({
  poidsSans: 0,
  qte: 0,
})

onBeforeUpdate(() => {
  state.poidsSans = Math.round(props.item.total / (1 + props.item.qte))
  if(props.item.poidsVoulu) {
    state.qte = props.item.total - poidsVoulu.value
  }
})

function calculer() {
  state.qte = props.item.total - poidsVoulu.value
  emit("calculer", props.item.nom, poidsVoulu.value);
}

function effacer() {
  if (poidsVoulu.value !== "") {
    poidsVoulu.value = ""
    calculer()
  }
}


</script>


<style scoped>
@import "src/styles/views/views.css";
</style>