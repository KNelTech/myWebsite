<template>
  <div class="terminalInteractive rounded" ref="modal">
    <div class="drag-bar" @mousedown="mouseDownHandler"></div>
    <pre id="titleASCII">

███████╗ ██████╗  ██████╗ ████████╗     ██████╗ ██╗   ██╗███╗   ██╗    ██████╗ ███████╗██╗   ██╗
██╔════╝██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝ ██║   ██║████╗  ██║    ██╔══██╗██╔════╝██║   ██║
█████╗  ██║   ██║██║   ██║   ██║       ██║  ███╗██║   ██║██╔██╗ ██║    ██║  ██║█████╗  ██║   ██║
██╔══╝  ██║   ██║██║   ██║   ██║       ██║   ██║██║   ██║██║╚██╗██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║     ╚██████╔╝╚██████╔╝   ██║       ╚██████╔╝╚██████╔╝██║ ╚████║    ██████╔╝███████╗ ╚████╔╝ 
╚═╝      ╚═════╝  ╚═════╝    ╚═╝        ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝ ╚══════╝  ╚═══╝  
    </pre>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const modal = ref(null)
let offsetX = 0
let offsetY = 0

function mouseDownHandler(event) {
  if (event.target.classList.contains('drag-bar')) {
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
.drag-bar {
  cursor: grab;
  height: 20px;
  width: 100%;
  background-color: red;
}

.terminalInteractive {
  margin-bottom: 20px;
  padding: 20px;
  text-align: left;
  font-weight: bold;
  margin-top: 5px;
  background: linear-gradient(0deg, #000, #272727) !important;
  height: 45vh;
  position: absolute;
  width: 49%;
}
#titleASCII {
  color: green;
  font-size: 8px;
}
</style>
