<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Home from '@/components/Home.vue'
import Resume from '@/components/Resume.vue'
import NavBar from '@/components/NavBar.vue'
import Experience from '@/components/Experience.vue'
export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    Home,
    Resume,
    Experience
  },
});
</script>
<template>
<NavBar />
<v-app id="home" :style="{background: '#111111' }">
  <v-container fluid>
    <v-col>
      <v-row justify="center">
        <Home class="home"></Home>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center">
        <Resume class="resume" id="resume"></Resume>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center">
        <Experience class="experience" id="experience"></Experience>
      </v-row>
    </v-col>
  </v-container>
</v-app>
</template>

<style scoped>

.home{
  margin-bottom: 500px;
}
.resume{
  margin-top: 350px;
  width: 80vw;
}
.experience{
  margin-top: 50px;
  width: 80vw;
}
</style>
