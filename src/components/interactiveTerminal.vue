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
      </pre>
      <div ref="outputRef" class="terminalContent"></div>
      <v-text-field class="inputText" variant="text" label="remove this label" v-model.trim="inputText"
        @keydown.enter="handleInput"></v-text-field>
    </div>
    <!-- <vueTerm /> -->
  </div>

</template>

<script setup>
import createDragHandler from '../js/dragable.js'
import { ref, onMounted } from 'vue'
import { spicyTerminal } from '../js/terminal.js'
// import vueTerm from '../components/vueTerm.vue'

const terminal = ref(null)

const { inputText, outputRef, handleInput } = spicyTerminal()

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
