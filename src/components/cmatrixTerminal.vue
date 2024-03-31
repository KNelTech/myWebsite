<template>
  <div class="cmatrixTerminal rounded" ref="modal">
    <div class="drag-bar" @mousedown="mouseDownHandler"></div>
    <div class="contentCmatrix pa-2">This is where im gonna put the fuckin things</div>
  </div>
</template>

<script setup>
import useDraggable from '../js/dragable.js'

const { modal, mouseDownHandler } = useDraggable()
</script>

<style>
.cmatrixTerminal {
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
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

/* border shit i found
.cmatrixTerminal {
  background: linear-gradient(0deg, #000, #272727);
}

.cmatrixTerminal:before,
.cmatrixTerminal:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(
    45deg,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000
  );
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.cmatrixTerminal:after {
  filter: blur(50px);
} */
</style>
