<script lang="ts">
import { defineComponent, ref } from "vue";
import Elastic from '@/components/Elastic.vue'
import Kibana from '@/components/Kibana.vue'

export default defineComponent({
  name: 'StyledExperience',
  components: { Elastic, Kibana },
  setup() {
    const panel = ref<string[]>([]);
    const sliderValue = ref(1); // 0: Elastic, 1: None, 2: Kibana

    const changeSliderValue = (value: number) => {
      sliderValue.value = value;
    };

    return {
      panel,
      sliderValue,
      changeSliderValue
    };
  }
})
</script>

<template>
  <v-card color="grey-darken-4">
    <v-card-title class="custom-text-color-title"> Experience </v-card-title>
    <v-divider />
    <v-card-text class="custom-grey-background">
      <v-row>
        <v-col cols="4" align-self="center">
          <img src="dcscorpLogo.png" alt="DCS Corp Logo" class="logo-img">
        </v-col>
        <v-col cols="8" align-self="center">
          <ul class="bullet-list">
            <li>DCS is a firm providing engineering, programmatic and technical support services to the Department of Defense and other customers focused on national security</li>
            <li>I have worked here for nearly 2 years as an intern</li>
            <li>I was hired by Greg Donarum who is the Belcamp branch supervisor</li>
          </ul>
        </v-col>
      </v-row>
    </v-card-text>

    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel bg-color="grey-darken-4" value="summer2023">
        <v-card color="grey-darken-4">
          <v-expansion-panel-title color="grey-darken-4">
            <v-list-item-title class="custom-text-color-title">Summer 2023</v-list-item-title>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-slider
              v-model="sliderValue"
              :max="2"
              class="mx-4"
              color="primary"
              track-color="grey"
              thumb-color="primary"
            >
              <template v-slot:prepend>
                <v-btn color="primary" @click="this.sliderValue = 0">Sensor Data to ElasticDB</v-btn>
              </template>
              <template v-slot:append>
                <v-btn color="primary" @click="this.sliderValue = 2">Kibana Visualizations</v-btn>
              </template>
            </v-slider>
            <div>
              <Elastic v-if="sliderValue === 0" />
              <Kibana v-if="sliderValue === 2" />
            </div>
          </v-expansion-panel-text>
        </v-card>
      </v-expansion-panel>

      <v-expansion-panel bg-color="grey-darken-4" value="winter2023-2024">
        <v-expansion-panel-title color="grey-darken-4">
          <v-list-item-title class="custom-text-color-title">Winter 2023-2024</v-list-item-title>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div>test</div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel bg-color="grey-darken-4" value="summer2024">
        <v-expansion-panel-title color="grey-darken-4">
          <v-list-item-title class="custom-text-color-title">Summer 2024</v-list-item-title>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div>test</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<style scoped>
.custom-text-color-name {
  color: rgb(25, 35, 150) !important;
}

.custom-text-color-title {
  color: rgb(199, 199, 199) !important;
  text-align: center;
}

.custom-text-color-description {
  color: rgb(90, 88, 99) !important;
}

.center-text-along-pic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.transparent-bg {
  background-color: rgb(30, 30, 30);
}

.logo-img {
  width: 20vw;
  height: 20vw;
  border-radius: 25%;
  margin-left: 3vw;
}

.bullet-list {
  color: rgb(199, 199, 199);
  font-size: medium;
  line-height: 2;
}

.v-expansion-panel-title .v-list-item-title {
  width: 100%;
}

.custom-grey-background {
  background-color: #393939; /* Medium grey */
}
</style>
