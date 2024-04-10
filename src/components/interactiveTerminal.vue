<template>
  <div class="terminalComponent topRow terminalInteractive rounded" ref="terminal">
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
      <div class="xtermcontainer" ref="terminalContainer"></div>
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
  terminalElement.addEventListener('mousedown', dragHandler)
})
</script>

<style>
#titleASCII {
  color: green;
  font-size: 8px;
}
</style>
