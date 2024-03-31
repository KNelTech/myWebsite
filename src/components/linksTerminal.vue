<template>
  <div class="linksTerminal rounded" ref="modal">
    <div class="drag-bar" @mousedown="mouseDownHandler"></div>
    <div class="contentLinks pa-2">Links</div>
  </div>
</template>

<script setup>
import useDraggable from '../js/dragable.js'
const { modal, mouseDownHandler } = useDraggable()
</script>

<style>
.linksTerminal {
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
  margin-top: 5px;
  background: black;
  height: 45vh;
  position: absolute;
  width: 49%;
}
</style>
