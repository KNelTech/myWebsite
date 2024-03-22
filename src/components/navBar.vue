<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar id="navBar" color="deep-purple-darken-4">
      <img id="logo" src="@/assets/logo.png" alt="logo" />
      <div id="buttons">
        <v-btn append-icon="mdi-home-lightning-bolt" text="Home" variant="elevated" />
        <v-btn append-icon="mdi-home-lightning-bolt" text="Home" variant="elevated" />
        <v-btn append-icon="mdi-home-lightning-bolt" text="Home" variant="elevated" />
        <v-btn append-icon="mdi-home-lightning-bolt" text="Home" variant="elevated" />
      </div>
    </v-app-bar>
  </v-layout>
</template>
<!-- <template>
  <v-btn color="primary" :text="home">
    <v-menu activator="parent">
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script setup>
defineProps({
  home: { type: String, default: 'Home' }
})

const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' }
]
</script> -->

<style>
#buttons {
  display: flex;
  flex-direction: row;
  gap: 3%;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 30px;
}

#logo {
  width: 60px;
  height: 60px;
  margin-left: 30px;
}

#navBar {
  height: 70px;
}
</style>
