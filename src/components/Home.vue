<template>
    <v-col cols="6">
        <v-img src="headshotEdit.png" contain max-height="500"></v-img>
    </v-col>
    <v-col justify="center" cols="6">
      <div class="center-text-along-pic">
        <h2 class="custom-text-color-name">Hello I'm Quinten</h2>
        <h1 class="custom-text-color-title">Aspiring Software Engineer</h1>
        <p class="custom-text-color-description">
          Currently studying computer science with a software engineering concentration at University of Delaware.<br> Also have been employed as an intern at DCS Corp, <br> exposing me to common industry standards, practices, and technologies. 
        </p>
      </div>
    </v-col>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'StyledHome'

})
</script>

<style scoped>
.custom-text-color-name {
  color: rgb(25, 35, 150) !important;
  
}
.custom-text-color-title {
  color: rgb(199, 199, 199) !important;
  
}
.custom-text-color-description {
  color: rgb(54, 52, 67) !important;
  
}
.center-text-along-pic{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; /* Ensure the div takes the full height */
}
</style>