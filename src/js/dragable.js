import { ref, onUnmounted } from 'vue'

export default function useDraggable() {
  const modal = ref(null)
  let offsetX = 0
  let offsetY = 0

  const mouseDownHandler = (event) => {
    if (modal.value && event.target.classList.contains('drag-bar')) {
      offsetX = event.clientX - modal.value.getBoundingClientRect().left
      offsetY = event.clientY - modal.value.getBoundingClientRect().top

      document.addEventListener('mousemove', drag)
      document.addEventListener('mouseup', stopDrag)
    }
  }

  const drag = (event) => {
    let newX = event.clientX - offsetX
    let newY = event.clientY - offsetY

    newX = Math.max(0, Math.min(newX, window.innerWidth - modal.value.offsetWidth))
    newY = Math.max(0, Math.min(newY, window.innerHeight - modal.value.offsetHeight))

    modal.value.style.left = `${newX}px`
    modal.value.style.top = `${newY}px`
  }

  const stopDrag = () => {
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

  return {
    modal,
    mouseDownHandler
  }
}
