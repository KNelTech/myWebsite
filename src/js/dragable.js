// import { ref, onUnmounted } from 'vue'

// export default function useDraggable() {
//   const modal = ref(null)
//   let offsetX = 0
//   let offsetY = 0
//   let isDragging = false
//   let currentX = 0
//   let currentY = 0

//   const mouseDownHandler = (event) => {
//     if (modal.value && event.target.classList.contains('drag-bar')) {
//       isDragging = true
//       offsetX = event.clientX - modal.value.getBoundingClientRect().left
//       offsetY = event.clientY - modal.value.getBoundingClientRect().top
//       currentX = modal.value.getBoundingClientRect().left
//       currentY = modal.value.getBoundingClientRect().top
//       document.addEventListener('mousemove', drag)
//       document.addEventListener('mouseup', stopDrag)
//     }
//   }

//   const drag = (event) => {
//     if (!isDragging) return
//     requestAnimationFrame(() => {
//       const newX = event.clientX - offsetX
//       const newY = event.clientY - offsetY
//       currentX = Math.max(0, Math.min(newX, window.innerWidth - modal.value.offsetWidth))
//       currentY = Math.max(0, Math.min(newY, window.innerHeight - modal.value.offsetHeight))
//       modal.value.style.transform = `translate(${currentX}px, ${currentY}px)`
//     })
//   }

//   const stopDrag = () => {
//     isDragging = false
//     document.removeEventListener('mousemove', drag)
//     document.removeEventListener('mouseup', stopDrag)
//   }

//   onUnmounted(() => {
//     document.removeEventListener('mousemove', drag)
//     document.removeEventListener('mouseup', stopDrag)
//   })

//   document.addEventListener('mousedown', () => {
//     const disableSelect = (e) => e.preventDefault()
//     document.addEventListener('selectstart', disableSelect, { once: true })
//   })

//   return { modal, mouseDownHandler }
// }


// dragHandler.js

export default function createDragHandler(element) {
  let offsetX = 0;
  let offsetY = 0;

  function handleMouseDown(event) {
    offsetX = event.clientX - element.offsetLeft;
    offsetY = event.clientY - element.offsetTop;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event) {
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;

    // Update the position of the element
    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;
  }

  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  // Return the mouse down handler
  return handleMouseDown;
}
