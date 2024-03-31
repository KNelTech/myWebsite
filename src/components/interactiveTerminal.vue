<template>
  <div class="terminalInteractive rounded" ref="modal">
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
    </div>
  </div>
</template>

<script setup>
import useDraggable from '../js/dragable.js'

const { modal, mouseDownHandler } = useDraggable()
</script>

<style>
.contentInteractive {
}
.drag-bar {
  cursor: grab;
  height: 20px;
  width: 100%;
  background-color: red;
}

.terminalInteractive {
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
  margin-top: 5px;
  background: black;
  height: 45vh;
  position: absolute;
  width: 49%;
}

#titleASCII {
  color: green;
  font-size: 8px;
}
</style>
