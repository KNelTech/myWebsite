<template>
  <div class="terminalComponent topRow rounded" ref="terminal">
    <div class="drag-bar" @mousedown="mouseDownHandler"></div>
    <div class="contentInteractive pa-2">
      <pre id="titleASCII">

███████╗ ██████╗  ██████╗ ████████╗     ██████╗ ██╗   ██╗███╗   ██╗    ██████╗ ███████╗██╗   ██╗
██╔════╝██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝ ██║   ██║████╗  ██║    ██╔══██╗██╔════╝██║   ██║
█████╗  ██║   ██║██║   ██║   ██║       ██║  ███╗██║   ██║██╔██╗ ██║    ██║  ██║█████╗  ██║   ██║
██╔══╝  ██║   ██║██║   ██║   ██║       ██║   ██║██║   ██║██║╚██╗██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║     ╚██████╔╝╚██████╔╝   ██║       ╚██████╔╝╚██████╔╝██║ ╚████║    ██████╔╝███████╗ ╚████╔╝ 
╚═╝      ╚═════╝  ╚═════╝    ╚═╝        ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝ ╚══════╝  ╚═══╝  
      </pre>
      <div class="spicyTerminal" ref="scrollRef">
        <div class="output" ref="outputRef">
          <p v-for="(msg, index) in messages" :key="index" class="message">{{ msg }}</p>
        </div>
      </div>
      <div class="inputContainer">
        <div class="input">
          <v-text-field type="text" class="inputText" color="green" autofocus hide-details variant="plain" active
            v-model.trim="inputText" @keydown.enter="handleInput" aria-label="Input" prefix="user@root:~$" />
        </div>
      </div>
    </div>
    <!-- <vueTerm /> -->
  </div>

</template>

<script setup>
import createDragHandler from '../js/dragable.js'
import { ref, onMounted } from 'vue'
import { spicyTerminal } from '../js/terminal.js'
// import vueTerm from '../components/vueTerm.vue'

const terminal = ref(null)



const { inputText, messages, outputRef, scrollRef, dialog, name, clearOutput, displayHelp, handleInput } =
  spicyTerminal()

onMounted(() => {
  const terminalElement = terminal.value
  const dragHandler = createDragHandler(terminalElement)
  terminalElement.querySelector('.drag-bar').addEventListener('mousedown', dragHandler)
})


</script>

<style>
#titleASCII {
  color: rgb(0, 180, 0);
  font-size: 8px;
}

.v-text-field__prefix__text {
  color: rgb(102, 0, 219);
  font-weight: 600;
}

.message {
  color: rgb(102, 0, 219);
  font-weight: 600;

}

/* not correct below */
.v-field__input {
  color: rgb(102, 0, 219);
  font-weight: 600;
}
</style>
