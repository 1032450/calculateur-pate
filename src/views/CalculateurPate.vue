<template>
  <div>
    
    <h1 class="titre">
      {{ state.pate.nom }}
    </h1>
    
    <div class="pain">
      
      <div v-for="pain in state.pate.pains" :key="pain.nom">
        <hr/>
        <PainInput
            :nom="pain.nom"
            :poids="pain.poids"
            :nbIngredient="pain.nbIngredient"
            :ingredient1="pain.ingredient1"
            :ingredient2="pain.ingredient2"
            @calculer="calculerTotal"
        />
      </div>
    
    </div>
    
    <Precalcul
        v-for="precalcul in state.pate.precalcul"
        :key="precalcul.id"
        :item="precalcul"
        @calculer="precalculer"
    />
    
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
              type="button"
              v-if="poidsVoulu !== ''"
              class="button"
              @click="effacer"
          >
            X
          </button>
          <input class="qte"
                 type="number"
                 v-model="poidsVoulu"
                 @keyup="calculerRecette"
          />
        </span>
      </div>
    
    </div>
    
    <div class="recette">
      
      <div class="texte-centre">
        Recette
      </div>
      
      <IngredientPate
          v-for="ingredient in state.pate.ingredients"
          :key="ingredient.nom"
          :ingredient="ingredient"
          :poids-voulu="poidsVoulu"
      />
    
    </div>
  
  </div>
</template>


<script setup>

import PainInput from "@/components/PainInput.vue";
import Precalcul from "@/components/Precalcul.vue";
import IngredientPate from "@/components/IngredientPate.vue";
import {useRoute} from "vue-router";
import {onBeforeMount, onBeforeUpdate, reactive} from "vue";
import {ref} from "vue";
import {getPains} from "@/server/server.js";

const route = useRoute();

onBeforeMount(async () => {
  state.pate = await getPains(route.params.pate)
})

onBeforeUpdate(async () => {
  if (route.params.pate !== state.pate.path) {
    state.pate = {}
    state.poidsTotalAvecEau = 0
    state.poidsTotalSansEau = 0
    state.keyDivIngredient = 0
    state.pate = await getPains(route.params.pate)
  }
})

const poidsVoulu = ref("");

const state = reactive({
  pate: [],
  poidsTotalAvecEau: 0,
  poidsTotalSansEau: 0,
  keyDivIngredient: 0,
})

function calculerTotal(nom, total) {
  state.poidsTotalAvecEau = 0
  if (state.pate.precalcul) {
    for (const key in state.pate.precalcul) {
      state.pate.precalcul[key].total = 0
    }
  }
  
  for (const key in state.pate.pains) {
    
    if (state.pate.pains[key].nom === nom) {
      state.pate.pains[key].total = total
    }
    
    if (state.pate.pains[key].precalcul) {
      const precalculKey = state.pate.pains[key].precalcul
      state.pate.precalcul[precalculKey].total += state.pate.pains[key].total
    } else {
      state.poidsTotalAvecEau += state.pate.pains[key].total
    }
  }
  
  for (const key in state.pate.precalcul) {
    state.poidsTotalAvecEau += state.pate.precalcul[key].poidsVoulu
  }
  
  calculerPoids()
}

function precalculer(nom, poidsVoulu) {
  state.poidsTotalAvecEau += poidsVoulu - state.pate.precalcul[nom].poidsVoulu
  state.pate.precalcul[nom].poidsVoulu = poidsVoulu
  
  calculerPoids()
}

function calculerPoids() {
  state.poidsTotalAvecEau = Math.round(state.poidsTotalAvecEau)
  
  if (state.pate.eauAvant) {
    state.poidsTotalSansEau = Math.round(
        state.poidsTotalAvecEau / (1 + state.pate.eauAvant)
    )
  } else {
    state.poidsTotalSansEau = Math.round(
        state.poidsTotalAvecEau / (1 + state.pate.ingredients.eau.qte)
    )
  }
}

function effacer() {
  if (poidsVoulu.value !== "") {
    poidsVoulu.value = ""
    calculerRecette()
    state.keyDivIngredient += 1
  }
}

function calculerRecette() {
  for (const key in state.pate.ingredients) {
    state.pate.ingredients[key].total = Math.round(poidsVoulu.value * key.qte)
  }
  state.keyDivIngredient += 1;
}


</script>

<style scoped>
@import "src/styles/views/views.css";
</style>