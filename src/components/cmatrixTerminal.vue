<template>
  <div class="terminalComponent topRow rounded" ref="terminal">
    <div class="drag-bar" @mousedown="mouseDownHandler"></div>
    <div class="contentCmatrix pa-2">This is where im gonna put the fuckin things</div>
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

<style></style>
