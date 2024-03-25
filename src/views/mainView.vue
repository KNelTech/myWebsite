<template>
  <v-layout>
    <navBar />
    <v-main class="layout-container">
      <v-row no-gutters>
        <v-col>
          <interactiveTerminal class="pa-2 ma-2" />
        </v-col>
        <v-col>
          <cmatrixTerminal class="pa-2 ma-2" />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <linksTerminal class="pa-2 ma-2" />
        </v-col>
        <v-col>
          <neofetchTerminal class="pa-2 ma-2" />
        </v-col>
      </v-row>

      <!-- <linksTerminal />
      <neofetchTerminal /> -->
    </v-main>
  </v-layout>
</template>

<script setup>
import navBar from '../components/navBar.vue'
import interactiveTerminal from '../components/interactiveTerminal.vue'
import cmatrixTerminal from '../components/cmatrixTerminal.vue'
import linksTerminal from '../components/linksTerminal.vue'
import neofetchTerminal from '../components/neofetchTerminal.vue'
// import homeInfo from '../components/homeInfo.vue'

// const counterUp = ref('')
// const counterDown = ref('')

// onMounted(() => {
//   counterUp.value = 0
//   counterDown.value = 100
// })

// function increment() {
//   counterUp.value++
// }

// function decrement() {
//   counterDown.value--
// }
</script>

<style>
/*
#appMain {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  
  
}

button {
  background-color: purple !important;
  border-style: none;
  color: white;
  margin: 25px;
  height: 35px;
  border-radius: 12px;
}*/

.layout-container {
  margin-top: 5px;
}

.interactiveTerminal {
}
</style>
