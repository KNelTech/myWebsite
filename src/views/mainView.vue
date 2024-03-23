<template>
  <v-layout class="layout-container rounded rounded-md" background="black">
    <navBar />
    <interactiveTerminal />
  </v-layout>
</template>

<script setup>
import navBar from '../components/navBar.vue'
import interactiveTerminal from '../components/interactiveTerminal.vue'
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

#navDrawer {
  border-right: 5px;
  border-style: solid;
  border-color: rgb(0, 255, 42);
}

.layout-container {
  width: 100vw;
  height: 100vh;
}
</style>
