<template>
    <div ref="terminal" class="terminal"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

const terminalRef = ref(null)

onMounted(() => {
    const terminal = new Terminal()
    terminal.open(terminalRef.value)
    terminal.writeln('raawrrr')
    terminal.onData(data => {
        terminal.writeln(data)
    })
})
</script>