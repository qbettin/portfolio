<template>
  <v-app-bar app color="#111111" dark flat class="px-8">
    <v-btn icon>
      <AccountHeart color="red"></AccountHeart>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn @click="scroll('home')">Home</v-btn>
    <v-btn @click="scroll('resume')">Resume</v-btn>
    <v-btn @click="scroll('experience')">Experience</v-btn>
    <v-btn @click="scroll('hobbies')">Hobbies</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  AccountHeart from 'vue-material-design-icons/AccountHeart.vue'
export default defineComponent({
  name: 'NavBar',
  components: {
    AccountHeart
  },
  methods: {
    scroll(refName: string){
      const element = document.getElementById(refName);
      element?.scrollIntoView({behavior: "smooth"})
    }
  }
});
</script>

<style>

</style>