import { ref, computed, onMounted, nextTick } from 'vue'

export function spicyTerminal() {
  const inputText = ref('')
  const messages = ref([])
  const outputRef = ref(null)
  const scrollRef = ref(null)
  const dialog = ref(false)
  const name = computed(() => inputText.value.trim())
  let isLogging = false

  const displayOutput = async (message, symbol = '# ') => {
    if (!message) return
    messages.value.push(symbol + message)
    await nextTick()
    scrollToBottom()
  }

  const scrollToBottom = () => {
    if (scrollRef.value) {
      scrollRef.value.scrollTop = scrollRef.value.scrollHeight
    }
  }

  const executeCommand = (input) => {
    displayOutput(input, 'user@root:~$')
    const [command, ...args] = input.split(' ')
    const handler = commandHandlers[command.toLowerCase()]
    if (handler) {
      handler(args)
    } else {
      displayOutput(`Invalid Command: ${command}`)
      displayOutput(`Available commands: ${Object.keys(commandHandlers).join(', ')}.`)
    }
    inputText.value = ''
  }

  const handleInput = () => {
    const trimmedInput = inputText.value.trim()
    if (!trimmedInput) return

    if (!name.value) {
      name.value = trimmedInput
    } else {
      executeCommand(trimmedInput)
    }
  }

  onMounted(() => {
    interceptConsoleLog()
  })

  const interceptConsoleLog = () => {
    const originalConsoleLog = console.log
    console.log = (...args) => {
      if (isLogging) return
      isLogging = true

      const message = args
        .map((arg) => (typeof arg === 'object' ? JSON.stringify(arg) : arg))
        .join(' ')
      displayOutput(message)
      originalConsoleLog.apply(console, args)

      isLogging = false
    }
  }

  const clearOutput = () => {
    messages.value = []
  }

  const handleLogCommand = (args) => {
    if (!args.length) {
      displayOutput('Usage: log [message]')
    } else {
      console.log(args.join(' '))
    }
  }

  const getTime = () => {
    const date = new Date()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')
    return displayOutput(`Current time: ${hours}:${minutes}:${seconds}`)
  }

  const getDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return displayOutput(`Current date: ${year}-${month}-${day}`)
  }

  const timeAndDate = () => {
    return Promise.all([getTime(), getDate()])
  }

  const calc = (args) => {
    const input = args.join('')
    const regex = /(\d+(\.\d+)?|\(|\)|[\+\-\*\/])/g
    const tokens = input.match(regex)

    if (!tokens) {
      displayOutput('Usage: calc [expression]')
      return
    }

    try {
      const result = evaluateExpression(tokens)
      displayOutput(`Result: ${result}`)
    } catch (error) {
      displayOutput(`Error: ${error.message}`)
    }
  }

  const evaluateExpression = (tokens) => {
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    }

    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
    }

    const outputQueue = []
    const operatorStack = []

    for (const token of tokens) {
      if (token in operators) {
        while (
          operatorStack.length > 0 &&
          precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
        ) {
          outputQueue.push(operatorStack.pop())
        }
        operatorStack.push(token)
      } else if (token === '(') {
        operatorStack.push(token)
      } else if (token === ')') {
        while (operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop())
          if (operatorStack.length === 0) {
            throw new Error('Mismatched parentheses')
          }
        }
        operatorStack.pop()
      } else {
        outputQueue.push(parseFloat(token))
      }
    }

    while (operatorStack.length > 0) {
      const operator = operatorStack.pop()
      if (operator === '(' || operator === ')') {
        throw new Error('Mismatched parentheses')
      }
      outputQueue.push(operator)
    }

    const stack = []
    for (const token of outputQueue) {
      if (token in operators) {
        const b = stack.pop()
        const a = stack.pop()
        if (b === undefined || a === undefined) {
          throw new Error('Invalid expression')
        }
        stack.push(operators[token](a, b))
      } else {
        stack.push(token)
      }
    }

    if (stack.length !== 1) {
      throw new Error('Invalid expression')
    }

    return stack[0]
  }

  const helpText = () => {
    displayOutput(`Available commands: ${Object.keys(commandHandlers).join(', ')}`)
    displayOutput(`Use "help" or "h" to display this message.`)
    displayOutput(`Use "help gui" or "h gui" to display the help modal.`)
    displayOutput(`Use "log [message]" to log a message.`)
    displayOutput(`Use "calc [number] [operator] [number]" to perform basic arithmetic.`)
    displayOutput(`Use "time", "t" or "gettime" to get the current time.`)
    displayOutput(`Use "date", "d" or "getdate" to get the current date.`)
    displayOutput(`Use "td" or "timeanddate" to get the current time and date.`)
    displayOutput(`Use "cls", "clr" or "clear" to clear the output.`)
  }

  const displayHelp = (command) => {
    if (String(command).endsWith('gui')) {
      dialog.value = true
    } else {
      helpText()
    }
  }

  const commandHandlers = {
    log: handleLogCommand,
    calc: calc,
    ...Object.fromEntries(['timeanddate', 'td'].map((alias) => [alias, timeAndDate])),
    ...Object.fromEntries(['date', 'd', 'getdate'].map((alias) => [alias, getDate])),
    ...Object.fromEntries(['time', 't', 'gettime'].map((alias) => [alias, getTime])),
    ...Object.fromEntries(
      ['help', '?', 'h', 'halp', 'hlp', 'helpgui', 'hgui'].map((alias) => [alias, displayHelp])
    ),
    ...Object.fromEntries(['cls', 'clr', 'clear'].map((alias) => [alias, clearOutput]))
  }

  return {
    inputText,
    messages,
    outputRef,
    scrollRef,
    dialog,
    name,
    clearOutput,
    displayHelp,
    handleInput
  }
}
