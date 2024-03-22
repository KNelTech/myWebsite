<template>
  <v-layout class="rounded rounded-md" background="black">
    <navBar />

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <terminal />
  </v-layout>
</template>

<script setup>
import navBar from '../components/navBar.vue'
import terminal from '../components/terminal.vue'
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

#main {
  background: black;
}
</style>
