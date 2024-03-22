<template>
  <div class="homeInfo">
    <div id="homeInfoRow1">
      <p class="homeText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dui ac
        condimentum vehicula. Aliquam ornare enim sit amet nibh lacinia lacinia. Cras felis diam,
        rutrum in mi vel, iaculis ultrices sapien. Cras ut dui in mauris pulvinar feugiat. Sed eget
        libero urna. Suspendisse ac sapien arcu. Nunc rutrum vulputate molestie. Curabitur cursus
        odio
      </p>
      <div id="images">
        <img :src="homeImage" alt="1" />
      </div>
    </div>
    <div id="homeInfoRow2">
      <div id="images">
        <img :src="homeImage" alt="1" />
      </div>
      <p class="homeText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies dui ac
        condimentum vehicula. Aliquam ornare enim sit amet nibh lacinia lacinia. Cras felis diam,
        rutrum in mi vel, iaculis ultrices sapien. Cras ut dui in mauris pulvinar feugiat. Sed eget
        libero urna. Suspendisse ac sapien arcu. Nunc rutrum vulputate molestie. Curabitur cursus
        odio
      </p>
    </div>
  </div>
</template>

<script setup>
import homeImage from '@/assets/download.jpg'
</script>

<style>
#homeInfo {
  width: 10%;
}
#homeInfoRow1,
#homeInfoRow2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 100px;
  justify-content: space-between;
}

.homeText {
  font-size: 15px;
  width: 50%;
}
</style>
