<template>
  <div class="neofetchTerminal rounded" ref="modal">
    <div class="drag-bar" @mousedown="mouseDownHandler"></div>
    <div class="contentNeoFetch pa-2">neoFetch</div>
  </div>
</template>

<script setup>
import useDraggable from '../js/dragable.js'

const { modal, mouseDownHandler } = useDraggable()
</script>

<style>
.neofetchTerminal {
  margin-bottom: 20px;
  text-align: left;
  margin-top: 5px;
  background: black;
  height: 45vh;
  position: absolute;
  width: 49%;
}

.drag-bar {
  cursor: grab;
  height: 20px;
  width: 100%;
  background-color: red;
}
</style>
