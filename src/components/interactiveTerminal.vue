<template>
  <div class="terminalComponent topRow rounded" ref="terminal">
    <div class="drag-bar" @mousedown="mouseDownHandler"></div>
    <div class="contentInteractive pa-2">
      <pre id="titleASCII">

███████╗ ██████╗  ██████╗ ████████╗     ██████╗ ██╗   ██╗███╗   ██╗    ██████╗ ███████╗██╗   ██╗
██╔════╝██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝ ██║   ██║████╗  ██║    ██╔══██╗██╔════╝██║   ██║
█████╗  ██║   ██║██║   ██║   ██║       ██║  ███╗██║   ██║██╔██╗ ██║    ██║  ██║█████╗  ██║   ██║
██╔══╝  ██║   ██║██║   ██║   ██║       ██║   ██║██║   ██║██║╚██╗██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║     ╚██████╔╝╚██████╔╝   ██║       ╚██████╔╝╚██████╔╝██║ ╚████║    ██████╔╝███████╗ ╚████╔╝ 
╚═╝      ╚═════╝  ╚═════╝    ╚═╝        ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝ ╚══════╝  ╚═══╝  
    </pre
      >
      <div class="xtermcontainer" ref="terminalContainer"></div> <!-- this is where the xterminal will be, this is all youve done besides the installation -->
    </div>
  </div>
</template>

<script setup>
import createDragHandler from '../js/dragable.js'
import { ref, onMounted } from 'vue'
const terminal = ref(null)

onMounted(() => {
  const terminalElement = terminal.value
  const dragHandler = createDragHandler(terminalElement)
  terminalElement.querySelector('.drag-bar').addEventListener('mousedown', dragHandler)
})
</script>

<style>
#titleASCII {
  color: green;
  font-size: 8px;
}
</style>
