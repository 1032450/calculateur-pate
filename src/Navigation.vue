<template>
  <div>
    <v-btn
        id="menu-activator"
        color="white"
        density="comfortable"
        size="x-large"
        style="
          text-transform: none;
          font-size: 25px;
          width: 100%;
          border-radius: 0;
          font-weight: bold;
        "
    >
      Menu
    </v-btn>
    
    <v-menu activator="#menu-activator">
      <v-list>
        <v-list-item
            v-for="(route, index) in store.routes"
            :key="index"
            :value="index"
            :border="true"
            :rounded="true"
        >
          <RouterLink :to="route.path">
            <v-list-item-title
                style="font-size: 20px;"
            >
              {{ route.name }}
            </v-list-item-title>
          </RouterLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>


<script setup>
import {store} from "./store.js";


</script>


<style scoped>
a {
  text-decoration: none;
  color: black;
}

</style>