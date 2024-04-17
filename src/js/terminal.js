import { ref, computed, onMounted } from 'vue'

export function spicyTerminal() {
  const inputText = ref('')
  const outputRef = ref(null)

  const name = computed({
    get: () => inputText.value.trim() || '',
    set: (value) => (inputText.value = value)
  })

  onMounted(() => {
    outputRef.value = document.querySelector('.terminalContent')
  })

  const handleInput = () => {
    const trimmedInput = inputText.value.trim()
    if (!trimmedInput) return

    if (!name.value) {
      name.value = trimmedInput
    } else {
      executeCommand(trimmedInput)
    }
  }

  const executeCommand = (input) => {
    const [command, ...args] = input.split(' ')
    const handler = commandHandlers[command]
    if (handler) {
      handler(args)
      inputText.value = ''
    } else {
      // echo cmd
      //   displayOutput(command)
      displayOutput(`Command not recognized: ${command}`)
    }
  }

  const clearOutput = () => {
    outputRef.value.innerHTML = ''
    name.value = ''
  }

  const displayOutput = (message) => {
    if (!outputRef.value) return
    const newOutput = document.createElement('div')
    newOutput.textContent = message
    outputRef.value.appendChild(newOutput)
    inputText.value = ''
  }

  const commandHandlers = {
    ...Object.fromEntries(['cls', 'clr', 'clear'].map((alias) => [alias, clearOutput]))
  }

  return {
    inputText,
    outputRef,
    name,
    handleInput
  }
}
