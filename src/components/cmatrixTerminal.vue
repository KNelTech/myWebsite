<template>
  <!-- <div id="terminal">hi im kodi</div> -->
  <v-sheet class="cmatrixTerminal rounded"> test </v-sheet>
</template>

<script setup></script>

<style>
.cmatrixTerminal {
  margin-bottom: 20px;
  padding: 20px;
  background: linear-gradient(0deg, #000, #272727);
  min-width: 95%;
  height: 45vh;
}

/* border shit i found
.cmatrixTerminal {
  background: linear-gradient(0deg, #000, #272727);
}

.cmatrixTerminal:before,
.cmatrixTerminal:after {
  content: '';
  position: absolute;
  left: -2px;
  top: -2px;
  background: linear-gradient(
    45deg,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000,
    #fb0094,
    #0000ff,
    #00ff00,
    #ffff00,
    #ff0000
  );
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: steam 20s linear infinite;
}

@keyframes steam {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.cmatrixTerminal:after {
  filter: blur(50px);
} */
</style>
