<script lang="ts">
import { defineComponent, ref } from "vue";
import Elastic from '@/components/Elastic.vue'
import Kibana from '@/components/Kibana.vue'
import AdvancedEmulator from "./AdvancedEmulator.vue";
import Popup from "./Popup.vue";
import TrialTracker from "./TrialTracker.vue";
import Keygen from "./Keygen.vue";

export default defineComponent({
  name: 'StyledExperience',
  components: { Elastic, Kibana, AdvancedEmulator, Popup, TrialTracker, Keygen },
  setup() {
    const panel = ref<string[]>([]);
    const sliderValue = ref(0);
    const sliderValue2 = ref(0);
    const sliderValue3 = ref(0);


    const changeSliderValue = (value: number) => {
      sliderValue.value = value;
    };
    const changeSliderValue2 = (value: number) => {
      sliderValue2.value = value;
    };
    const changeSliderValue3 = (value: number) => {
      sliderValue3.value = value;
    };

    return {
      panel,
      sliderValue,
      sliderValue2,
      sliderValue3,
      changeSliderValue,
      changeSliderValue2,
      changeSliderValue3,
    };
  }
})
</script>

<template>
  <v-card color="grey-darken-4">
    <v-card-title class="custom-text-color-title"> Work Experience at DCS Corp </v-card-title>
    <v-divider />
    <v-col align="center">
      <v-card class="visualization-card">
          <v-card-text>
            <h3 class="card-header">
              DCS is a firm providing engineering, programmatic and technical support services to the Department of Defense and other customers focused on national security
            </h3>
          </v-card-text>
        </v-card>
    </v-col>

    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel bg-color="grey-darken-4" value="summer2023">
        <v-card color="grey-darken-4">
          <v-expansion-panel-title color="grey-darken-4">
            <v-list-item-title class="custom-text-color-title">Summer 2023</v-list-item-title>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-slider
              v-model="sliderValue"
              :max="1"
              class="mx-4"
              color="primary"
              track-color="grey"
              thumb-color="primary"
            >
              <template v-slot:prepend>
                <v-btn color="primary" @click="this.sliderValue = 0">Sensor Data to ElasticDB</v-btn>
              </template>
              <template v-slot:append>
                <v-btn color="primary" @click="this.sliderValue = 1">Kibana Visualizations</v-btn>
              </template>
            </v-slider>
            <div>
              <Elastic v-if="sliderValue <= 0.5" />
              <Kibana v-else/>
            </div>
          </v-expansion-panel-text>
        </v-card>
      </v-expansion-panel>

      <v-expansion-panel bg-color="grey-darken-4" value="winter2023-2024">
        <v-expansion-panel-title color="grey-darken-4">
          <v-list-item-title class="custom-text-color-title">Winter 2023-2024</v-list-item-title>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-slider
              v-model="sliderValue2"
              :max="1"
              class="mx-4"
              color="primary"
              track-color="grey"
              thumb-color="primary"
            >
              <template v-slot:prepend>
                <v-btn color="primary" @click="this.sliderValue2 = 0">Advanced Emulator Tab</v-btn>
              </template>
              <template v-slot:append>
                <v-btn color="primary" @click="this.sliderValue2 = 1">Reusable Popup</v-btn>
              </template>
            </v-slider>
            <div>
              <AdvancedEmulator v-if="sliderValue2 <= 0.5" />
              <Popup v-else/>
            </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel bg-color="grey-darken-4" value="summer2024">
        <v-expansion-panel-title color="grey-darken-4">
          <v-list-item-title class="custom-text-color-title">Summer 2024</v-list-item-title>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-slider
              v-model="sliderValue3"
              :max="1"
              class="mx-4"
              color="primary"
              track-color="grey"
              thumb-color="primary"
            >
              <template v-slot:prepend>
                <v-btn color="primary" @click="this.sliderValue3 = 0">Keygen Proj</v-btn>
              </template>
              <template v-slot:append>
                <v-btn color="primary" @click="this.sliderValue3 = 1">Trial Tracker</v-btn>
              </template>
            </v-slider>
            <div>
              <Keygen v-if="sliderValue3 <= 0.5" />
              <TrialTracker v-else/>
            </div>
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
.visualization-card {
  background-color: #282a2c;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  line-height: 1.6;
  color: white;
}

.card-header {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 15px;
}

.card-header::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background-color: #00fff7;
  margin-top: 5px;
}

p {
  margin-bottom: 15px;
}

p strong {
  color: #00d9ff;
}
</style>
