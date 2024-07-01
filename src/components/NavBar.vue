<script lang="ts">
import { defineComponent } from 'vue';
import  Alien from 'vue-material-design-icons/Alien.vue'
export default defineComponent({
  name: 'NavBar',
  components: {
    Alien
  },
  methods: {
    scroll(refName: string){
      const element = document.getElementById(refName);
      element?.scrollIntoView({behavior: "smooth"})
    }
  }
});
</script>
<template>
  <v-app-bar app color="grey-darken-4" dark flat class="px-8">
    <v-btn icon>
      <Alien color="red"></Alien>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="scroll('home')">Home</v-btn>
    <v-btn @click="scroll('resume')">Resume</v-btn>
    <v-btn @click="scroll('experience')">Experience</v-btn>
    <v-btn @click="scroll('hobbies')">Hobbies</v-btn>
  </v-app-bar>
</template>

<style>

</style>