<template>
  <div class="terminalInteractive rounded" ref="modal">
    <div class="drag-bar" ref="box" @mousedown="mouseDownHandler"></div>
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

// function drag(event) {
//   let newX = event.clientX - offsetX
//   let newY = event.clientY - offsetY

//   newX = Math.max(0, Math.min(newX, window.innerWidth - modal.value.offsetWidth))
//   newY = Math.max(0, Math.min(newY, window.innerHeight - modal.value.offsetHeight))

//   modal.value.style.transform = `translate(${newX}px, ${newY}px)`
// }

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

// import { ref } from 'vue'

// const modal = ref(null)

// const mouseDownHandler = (event) => {
//   const startX = event.clientX
//   const startY = event.clientY
//   let initialX = 0
//   let initialY = 0

//   if (modal.value) {
//     const transform = window.getComputedStyle(modal.value).transform

//     if (transform && transform !== 'none') {
//       const transformValues = transform.match(/matrix.*\((.+)\)/)[1].split(', ')
//       initialX = parseInt(transformValues[4])
//       initialY = parseInt(transformValues[5])
//     }
//   }

//   const moveHandler = (moveEvent) => {
//     const dx = moveEvent.clientX - startX
//     const dy = moveEvent.clientY - startY
//     modal.value.style.transform = `translate(${initialX + dx}px, ${initialY + dy}px)`
//   }

//   const upHandler = () => {
//     document.removeEventListener('mousemove', moveHandler)
//     document.removeEventListener('mouseup', upHandler)
//   }

//   document.addEventListener('mousemove', moveHandler)
//   document.addEventListener('mouseup', upHandler)
// }
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
