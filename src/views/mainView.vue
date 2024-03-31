<template>
  <v-layout>
    <navBar />
    <v-main class="layout-container">
      <v-row no-gutters>
        <v-col>
          <interactiveTerminal class="ma-2" />
        </v-col>
        <v-col>
          <cmatrixTerminal class="ma-2" />
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <linksTerminal class="ma-2" />
        </v-col>
        <v-col>
          <neofetchTerminal class="ma-2" />
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
</script>

<style>
.layout-container {
  margin-top: 5px;
}

.interactiveTerminal {
}
</style>
