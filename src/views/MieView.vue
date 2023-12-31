<template>
  <div>
    
    <h1 class="titre">
      Mie
    </h1>
    
    <div class="pain">
      
      <div v-for="pain in pains" :key="pain.nom">
        <hr/>
        <PainInput
            :nom="pain.nom"
            :poids="pain.poids"
            :nbIngredient="pain.nbIngredient"
            :ingredient1="pain.ingredient1"
            :ingredient2="pain.ingredient2"
            @calculer="calculer"
        />
      </div>
    
    </div>
    
    <div class="poids-total">
      
      <div class="texte-centre">
        Poids total
      </div>
      
      <div class="texte">
        <span>Avec eau</span>
        <span>{{ state.poidsTotalAvecEau || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Sans eau</span>
        <span>{{ state.poidsTotalSansEau || "" }}</span>
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
          <input class="qte"
                 type="number"
                 v-model="poidsVoulu"
                 @keyup="calculerPate"
          />
        </span>
      </div>
    
    </div>
    
    <div class="recette">
      
      <div class="texte-centre">
        Recette
      </div>
      
      <div class="texte">
        <span>Blanche</span>
        <span>{{ state.blanche || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Eau</span>
        <span>{{ state.eau || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Lait</span>
        <span>{{ state.lait || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Beurre</span>
        <span>{{ state.beurre || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Miel</span>
        <span>{{ state.miel || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Sel</span>
        <span>{{ state.sel || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Levure</span>
        <span>{{ state.levure || "" }}</span>
      </div>
    
    </div>
    
    <hr/>
  
  </div>
</template>


<script setup>

import PainInput from "@/components/PainInput.vue";
import {reactive} from "vue";

import {ref} from "vue";

const poidsVoulu = ref("");

const pains = [
  {nom: "Mie", poids: 650, total: 0},
  {nom: "Raisin", poids: 375, total: 0, nbIngredient: 1, ingredient1: {nom: "raisin", qte: 75}},
  {nom: "Noisette", poids: 775 / 2, total: 0, nbIngredient: 1, ingredient1: {nom: "noisette", qte: 125 / 2}},
  {nom: "Fromage", poids: 375, total: 0, nbIngredient: 1, ingredient1: {nom: "fromage", qte: 75}},
  {
    nom: "Tropical",
    poids: 1500 / 4,
    total: 0,
    nbIngredient: 2,
    ingredient1: {nom: "chocolat", qte: 125 / 4},
    ingredient2: {nom: "noix coco", qte: 125 / 4}
  },
  {
    nom: "Canneberge",
    poids: 450,
    total: 0,
    nbIngredient: 2,
    ingredient1: {nom: "chocolat", qte: 62.5},
    ingredient2: {nom: "canneberge", qte: 62.5}
  },
]

const humiditeAvant = 0.6 // pour diviser
const humiditeApres = 0.57 // pour multiplier
const blanche = 1
const lait = 0.05
const beurre = 0.05
const miel = 0.05
const sel = 0.02
const levure = 0.006

const state = reactive({
  poidsTotalAvecEau: 0,
  poidsTotalSansEau: 0,
  blanche: 0,
  lait: 0,
  beurre: 0,
  miel: 0,
  eau: 0,
  sel: 0,
  levure: 0,
})

function calculer(nom, total) {
  state.poidsTotalAvecEau = 0
  for (let i = 0; i < pains.length; i++) {
    if (pains[i].nom === nom) {
      pains[i].total = total;
    }
    state.poidsTotalAvecEau += pains[i].total
  }
  
  state.poidsTotalAvecEau = Math.round(state.poidsTotalAvecEau)
  state.poidsTotalSansEau = Math.round(state.poidsTotalAvecEau / (1 + humiditeAvant))
}

function effacer() {
  if (poidsVoulu.value !== "") {
    poidsVoulu.value = ""
    calculerPate()
  }
}

function calculerPate() {
  state.blanche = Math.round(poidsVoulu.value * blanche)
  state.lait = Math.round(poidsVoulu.value * lait)
  state.beurre = Math.round(poidsVoulu.value * beurre)
  state.miel = Math.round(poidsVoulu.value * miel)
  state.eau = Math.round(poidsVoulu.value * humiditeApres)
  state.sel = Math.round(poidsVoulu.value * sel)
  state.levure = Math.round(poidsVoulu.value * levure)
}

</script>

<style scoped>
@import "src/styles/views/views.css";
</style>