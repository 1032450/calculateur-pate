<template>
  <div>
    <v-btn
        id="menu-activator"
        color="red-darken-4"
        density="comfortable"
        size="x-large"
        style="
          text-transform: none;
          font-size: 25px;
          width: 100%;
          border-radius: 0;
          font-weight: bold;
          height: 50px;
        "
    >
      Menu
    </v-btn>
    
    <v-menu
        activator="#menu-activator"
        content-class="test"
    >
      <v-list
          style="
            width: fit-content;
            padding: 0;
            left: 0;
          "
          bg-color="#C34040"
      >
        <v-list-item
            class="v-list-item"
            v-for="(pate, index) in state.pates"
            :key="index"
            :value="index"
            :border="true"
            :rounded="true"
            style="
              height: 50px;
              margin: 5px;
              background: white;
            "
        >
          <RouterLink :to="{ path: `/${pate.path}` }">
            <v-list-item-title class="v-list-item-title">
              {{ pate.nom }}
            </v-list-item-title>
          </RouterLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>


<script setup>
import {onBeforeMount, reactive} from "vue";
import {getPates} from "@/server/server.js";

onBeforeMount(async () => {
  state.pates = (await getPates())
  state.pates.unshift({nom: "Accueil", path: "/"})
})

const state = reactive({
  pates: [],
})

</script>


<style scoped>

.v-list-item {
  height: 50px;
  margin: 5px;
  background: white;
}

.v-list-item-title {
  font-weight: bold;
  font-size: 25px;
  height: 30px;
}

a {
  text-decoration: none;
  color: black;
}

</style>