<template>
  <v-app-bar id="navBar" color="black">
    <v-icon id="terminalIcon" icon="mdi-console" size="50px"></v-icon>
    <div id="buttons">
      <v-tooltip text="home">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" color="green-accent-3" icon="mdi-home" variant="elevated"></v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="projects" color="yellow-accent-3">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            color="yellow-accent-3"
            icon="mdi-file-code"
            variant="elevated"
          ></v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="contact me">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            color="red-accent-3"
            icon="mdi-account-box"
            variant="elevated"
          ></v-btn>
        </template>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<script setup></script>

<style>
#buttons {
  display: flex;
  flex-direction: row;
  gap: 3%;
  width: 100%;
  justify-content: flex-end;
  margin-right: 60px;
}

#navBar {
  height: 70px;
  border-bottom: 1px;
  border-style: solid;
  border-color: rgb(44, 44, 44);
  color: white;
}

#terminalIcon {
  margin-left: 60px;
}
</style>
