<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div ref="terminalRef" class="terminal"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Terminal } from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css'
import { FitAddon } from '@xterm/addon-fit'

const terminalRef = ref(null)

onMounted(() => {
    const terminal = new Terminal()
    const fitAddon = new FitAddon()  // Create an instance of FitAddon
    terminal.loadAddon(fitAddon)     // Load the FitAddon into the Terminal
    terminal.open(terminalRef.value)

    terminal.writeln('Hello, World!')
    fitAddon.fit()
})
</script>