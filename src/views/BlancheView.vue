<template>
  <div>
    
    <h1 class="titre">
      Blanche
    </h1>
    
    <div class="pain">
      
      <div v-for="pain in pains" :key="pain.nom">
        <hr/>
        <PainInput
            :nom="pain.nom"
            :poids="pain.poids"
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
        <span>{{ state.poidsTotalAvecEau }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Sans eau</span>
        <span>{{ state.poidsTotalSansEau }}</span>
      </div>
      
      <hr class="grosse-ligne-point"/>
      
      <div class="texte">
        <span>Poids voulu</span>
        <input
            type="number"
            v-model="poidsVoulu"
            @keyup="calculerPate"
        />
      </div>
    
    </div>
    
    <div class="recette">
      
      <div class="texte-centre">
        Recette
      </div>
      
      <div class="texte">
        <span>Blanche</span>
        <span>{{ state.blanche }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Eau</span>
        <span>{{ state.eau }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Sel</span>
        <span>{{ state.sel }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Levure</span>
        <span>{{ state.levure }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Pâte Fermentée</span>
        <span>{{ state.pateFermentee }}</span>
      </div>
    
    </div>
    
    <hr>
  
  </div>
</template>


<script setup>

import PainInput from "@/components/PainInput.vue";
import {reactive} from "vue";

import {ref} from "vue";

const poidsVoulu = ref("");

const pains = [
  {nom: "Carré", poids: 650, total: 0},
  {nom: "Miche", poids: 650, total: 0},
  {nom: "Parisien", poids: 550, total: 0},
  {nom: "Belge", poids: 450, total: 0},
  {nom: "Bagette", poids: 350, total: 0},
]

const humidite = 0.62
const blanche = 1
const sel = 0.02
const levure = 0.006
const pateFermentee = 0.15

const state = reactive({
  poidsTotalAvecEau: 0,
  poidsTotalSansEau: 0,
  eau: 0,
  sel: 0,
  levure: 0,
  pateFermentee: 0,
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
  state.poidsTotalSansEau = Math.round(state.poidsTotalAvecEau / (1 + humidite))
}

function calculerPate() {
  state.blanche = Math.round(poidsVoulu.value * blanche)
  state.eau = Math.round(poidsVoulu.value * humidite)
  state.sel = Math.round(poidsVoulu.value * sel)
  state.levure = Math.round(poidsVoulu.value * levure)
  state.pateFermentee = Math.round(poidsVoulu.value * pateFermentee)
}

</script>

<style scoped>
@import "src/styles/views/views.css";
</style>