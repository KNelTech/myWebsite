<template>
  <div class="terminalComponent rounded" ref="terminal">
    <div class="drag-bar" @mousedown="mouseDownHandler"></div>
    <div class="contentLinks pa-2">Links</div>
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
