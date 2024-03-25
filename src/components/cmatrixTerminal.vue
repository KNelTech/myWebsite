<template>
  <div class="cmatrixTerminal rounded" ref="modal">
    <div class="drag-bar-cmatrixTerminal" @mousedown="mouseDownHandler"></div>
    This is where im gonna put the fuckin things
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const modal = ref(null)
let offsetX = 0
let offsetY = 0

function mouseDownHandler(event) {
  if (event.target.classList.contains('cmatrixTerminal')) {
    offsetX = event.clientX - modal.value.getBoundingClientRect().left
    offsetY = event.clientY - modal.value.getBoundingClientRect().top

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', stopDrag)
  }
}

function drag(event) {
  let newX = event.clientX - offsetX
  let newY = event.clientY - offsetY

  newX = Math.max(0, Math.min(newX, window.innerWidth - modal.value.offsetWidth))
  newY = Math.max(0, Math.min(newY, window.innerHeight - modal.value.offsetHeight))

  modal.value.style.left = `${newX}px`
  modal.value.style.top = `${newY}px`
}

function stopDrag() {
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
}

onUnmounted(() => {
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDrag)
})

document.addEventListener('mousedown', () => {
  const disableSelect = (e) => e.preventDefault()
  document.addEventListener('selectstart', disableSelect, { once: true })
})
</script>

<style>
.cmatrixTerminal {
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
  font-weight: bold;
  background: linear-gradient(0deg, #000, #272727) !important;
  height: 45vh;
  position: absolute;
  width: 49%;
  color: green;
}

.drag-bar-cmatrixTerminal {
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
