<template>
  <div>
    
    <h1 class="titre">
      Italienne
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
    
    <div class="olive">
      
      <div class="texte-centre">
        Pâte olive
      </div>
      
      <div class="texte">
        <span>Avec olive</span>
        <span>{{ state.poidsOlive || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Sans olive</span>
        <span>{{ state.poidsOliveSansOlive || "" }}</span>
      </div>
      
      <hr class="grosse-ligne-point"/>
      
      <div class="texte">
        <span>Poids voulu</span>
        <span class="input">
          <button
              v-if="poidsOliveVoulu !== ''"
              class="button"
              @click="effacerOlive"
          >
            X
          </button>
          <input
              class="qte"
              type="number"
              v-model="poidsOliveVoulu"
              @keyup="calculerPateOlive"
          />
        </span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Qte olive</span>
        <span v-if="state.poidsOlive">
          {{ state.olive || "" }}
        </span>
      </div>
    
    </div>
    
    <div class="tomate">
      
      <div class="texte-centre">
        Pâte tomate
      </div>
      
      <div class="texte">
        <span>Avec tomate</span>
        <span>{{ state.poidsTomate || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Sans tomate</span>
        <span>{{ state.poidsTomateSansTomate || "" }}</span>
      </div>
      
      <hr class="grosse-ligne-point"/>
      
      <div class="texte">
        <span>Poids voulu</span>
        <span class="input">
          <button
              v-if="poidsTomateVoulu !== ''"
              class="button"
              @click="effacerTomate"
          >
            X
          </button>
          <input
              class="qte"
              type="number"
              v-model="poidsTomateVoulu"
              @keyup="calculerPateTomate"
          />
        </span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Qte tomate</span>
        <span v-if="state.poidsTomate">
          {{ state.tomate || "" }}
        </span>
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
                 @keyup="calculerPateVoulu"
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
        <span>Seigle</span>
        <span>{{ state.seigle || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Eau</span>
        <span>{{ state.eau || "" }}</span>
      </div>
      
      <hr/>
      
      <div class="texte">
        <span>Huile</span>
        <span>{{ state.huile || "" }}</span>
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
    
    <hr>
  
  </div>
</template>


<script setup>

import PainInput from "@/components/PainInput.vue";
import {reactive} from "vue";

import {ref} from "vue";

const poidsVoulu = ref("");
const poidsOliveVoulu = ref("");
const poidsTomateVoulu = ref("");

const pains = [
  {nom: "Olive", poids: 450, total: 0},
  {nom: "Fromage", poids: 450, total: 0},
  {nom: "Tomate", poids: 450, total: 0},
  {nom: "Pizza Olive", poids: 250, total: 0},
  {nom: "Pizza Tomate", poids: 250, total: 0},
  {nom: "Pizza Saumon", poids: 200, total: 0},
  {nom: "Emp. Jambon", poids: 150, total: 0},
  {nom: "Emp. Tomate", poids: 150, total: 0},
  {nom: "Hamburger", poids: 75, total: 0},
  {nom: "Sous-marin", poids: 75, total: 0},
]

const humidite = 0.58
const olive = 0.2
const tomate = 0.15
const blanche = 0.9
const seigle = 0.1
const huile = 0.05
const sel = 0.02
const levure = 0.006

const state = reactive({
  poidsPartielAvecEau: 0,
  poidsTotalAvecEau: 0,
  poidsTotalSansEau: 0,
  poidsOlive: 0,
  poidsOliveSansOlive: 0,
  poidsTomate: 0,
  poidsTomateSansTomate: 0,
  Olive: 0,
  Tomate: 0,
  blanche: 0,
  seigle: 0,
  eau: 0,
  huile: 0,
  sel: 0,
  levure: 0,
})

function calculer(nom, total) {
  state.poidspartielAvecEau = 0
  state.poidsOlive = 0
  state.poidsTomate = 0
  for (let i = 0; i < pains.length; i++) {
    if (pains[i].nom === nom) {
      pains[i].total = total;
    }
    if (pains[i].nom === "Olive" || pains[i].nom === "Pizza Olive") {
      state.poidsOlive += pains[i].total
    } else if (pains[i].nom === "Tomate" || pains[i].nom === "Pizza Tomate" || pains[i].nom === "Emp. Tomate") {
      state.poidsTomate += pains[i].total
    } else {
      state.poidsPartielAvecEau += pains[i].total
    }
  }
  
  state.poidsOliveSansOlive = Math.round(state.poidsOlive / (1 + olive))
  state.poidsTomateSansTomate = Math.round(state.poidsTomate / (1 + tomate))
  calculerPateOlive()
  calculerPateTomate()
}

function calculerPateOlive() {
  if(poidsOliveVoulu.value) {
    state.olive = state.poidsOlive - poidsOliveVoulu.value
    calculerPate()
  }
}

function effacerOlive() {
  if (poidsOliveVoulu.value !== "") {
    poidsOliveVoulu.value = ""
    state.olive = 0
    calculerPate()
  }
}

function calculerPateTomate() {
  if(poidsTomateVoulu.value) {
    state.tomate = state.poidsTomate - poidsTomateVoulu.value
    calculerPate()
  }
}

function effacerTomate() {
  if (poidsTomateVoulu.value !== "") {
    poidsTomateVoulu.value = ""
    state.tomate = 0
    calculerPate()
  }
}

function calculerPate() {
  state.poidsTotalAvecEau = state.poidsPartielAvecEau + Number(poidsOliveVoulu.value) + Number(poidsTomateVoulu.value)
  state.poidsTotalAvecEau = Math.round(state.poidsTotalAvecEau)
  state.poidsTotalSansEau = Math.round(state.poidsTotalAvecEau / (1 + humidite))
}

function effacer() {
  if (poidsVoulu.value !== "") {
    poidsVoulu.value = ""
    calculerPate()
  }
}

function calculerPateVoulu() {
  state.blanche = Math.round(poidsVoulu.value * blanche)
  state.seigle = Math.round(poidsVoulu.value * seigle)
  state.eau = Math.round(poidsVoulu.value * humidite)
  state.huile = Math.round(poidsVoulu.value * huile)
  state.sel = Math.round(poidsVoulu.value * sel)
  state.levure = Math.round(poidsVoulu.value * levure)
}

</script>

<style scoped>
@import "src/styles/views/views.css";
</style>