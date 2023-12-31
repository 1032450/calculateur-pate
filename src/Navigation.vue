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
            v-for="(route, index) in store.routes"
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
          <RouterLink :to="route.path">
            <v-list-item-title class="v-list-item-title">
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

.v-list-item{
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