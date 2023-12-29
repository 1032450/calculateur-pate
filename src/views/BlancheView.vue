<template>
  <div>
    
    <h1 style="text-align: center">Blanche</h1>
    
    <hr class="grosse-ligne"/>
    
    <div v-for="pain in pains" :key="pain.nom">
      <hr/>
      <PainInput
          :nom="pain.nom"
          :poids="pain.poids"
          @calculer="calculer"
      />
    </div>
    
    <hr class="grosse-ligne"/>
    
    
    <div class="texte">Poids total :</div>
    <hr/>
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
          class="poids-voulu"
          type="number"
          v-model="poidsVoulu"
          @keyup="calculerPate"
      />
    </div>
    
    <hr class="grosse-ligne"/>
    
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
    
    <hr/>
  
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
  
  state.poidsTotalSansEau = Math.round(state.poidsTotalAvecEau / (1 + humidite))
}

function calculerPate() {
  state.eau = Math.round(poidsVoulu.value * humidite)
  state.sel = Math.round(poidsVoulu.value * 0.02)
  state.levure = Math.round(poidsVoulu.value * 0.006)
  state.pateFermentee = Math.round(poidsVoulu.value * 0.15)
}

/*
somme : 18 400

Diviser par humidité pate : 62%
18 400 / 1.62 = 8 827

redu là tu arrondi à 10 000

10 000 * 62% (pour aller chercher l'eau) : 6 200 ml d'eau

sel : 10 000 * 2% = 200g sel

levure : 10 000 * 0.6% = 60g de levure

Pâte fermentée : 10 000 * 15% = 1500g pâte fermentée

 */

</script>

<style scoped>

.grosse-ligne {
  border-width: 3px;
  border-style: solid;
}

.grosse-ligne-point {
  border-width: 3px;
  border-style: dashed;
}

.texte {
  font-size: 25px;
  font-weight: bold;
  margin-inline: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.poids-voulu {
  width: 100px;
  margin-block: 5px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 7px;
  text-align: center;
}

</style>