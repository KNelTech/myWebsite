<template>
    <vue-command :commands="commands" :not-found="notFound" :hide-bar="hideBar" :key="componentKey" />
</template>

<script setup>
import VueCommand, { createStdout, createStderr, newDefaultHistory, createReset } from 'vue-command';
import 'vue-command/dist/vue-command.css';
import { ref } from 'vue';

const hideBar = ref(true);
const componentKey = ref(0); // Initialize the componentKey


const commands = {
    "hello-world": () => {
        dispatchedQueries.value.push("hello-world");
        return createStdout("Hello world");
    },
    "history": () => {
        // Display each command stored in dispatchedQueries
        return createStdout(dispatchedQueries.value.map((entry, index) => `${index}: ${entry}`).join('\n'));
    },
    //This is the problem child causing that scroll error
    "clear": () => {
        componentKey.value++;

    },
    "date": () => {
        const command = "date";
        dispatchedQueries.value.push(command);
        const date = new Date().toLocaleString();
        return createStdout(`Current date and time: ${date}`);
    },
    "echo": (args) => {
        const command = `echo ${args.join(' ')}`;
        dispatchedQueries.value.push(command);
        return createStdout(args.join(' '));
    },
};

const notFound = (input) => {
    dispatchedQueries.value.push(input);
    return createStderr(`Command not found: ${input}`);
};
</script>

<style>
.vue-command {
    height: 320px;
    height: 100%;
}

.vue-command .vue-command__history {
    background-color: #11131600;
    color: #019e09;
}
</style>