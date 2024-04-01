<template>
  <v-layout>
    <NavBar />
    <v-main class="layout-container">
      <div class="terminals-row">
        <div class="terminal-container topRow ma-1">
          <InteractiveTerminal ref="interactiveTerminal" class="terminal" />
        </div>
        <div class="terminal-container topRow ma-1">
          <CmatrixTerminal ref="cmatrixTerminal" class="terminal" />
        </div>
      </div>
      <div class="terminals-row">
        <div class="terminal-container ma-1">
          <LinksTerminal ref="linksTerminal" class="terminal" />
        </div>
        <div class="terminal-container ma-1">
          <NeofetchTerminal ref="neofetchTerminal" class="terminal" />
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import NavBar from '../components/navBar.vue';
import InteractiveTerminal from '../components/interactiveTerminal.vue';
import CmatrixTerminal from '../components/cmatrixTerminal.vue';
import LinksTerminal from '../components/linksTerminal.vue';
import NeofetchTerminal from '../components/neofetchTerminal.vue';
</script>

<style>
.layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.terminals-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.terminal-container {
  position: relative;
  flex: 1 1 200px;
  max-width: calc(50% - 4px);
  height: 46vh;
}

.terminal {
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate(0, 0);
}

.terminal .drag-bar {
  cursor: grab;
  height: 20px;
  background-color: red;
  width: 100%;
  border-radius: 2px;
}

.topRow {
  margin-top: 5px;
}

</style>
