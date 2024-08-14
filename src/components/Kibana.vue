<script lang="ts">
import FlipCardImage from "@/components/FlipCardImage.vue";

export default {
  name: 'KibanaComponent',
  components: {FlipCardImage}
}
</script>

<template>
  <v-row>
    <v-col align="center">
      <v-card class="visualization-card">
        <v-card-text>
          <h3 class="card-header">Programmatically Generated Kibana Visualizations</h3>
          <p>
            The visualizations below were <strong>created programmatically</strong> using RESTful API calls to the ELK stack achieved by the custom Query class. Each visualization type, along with data store creation and retrieval, scaling, titles, and labels, was <strong>automatically configured</strong> for a professional demonstration.
          </p>
          <p>
            These visualizations were showcased during a live presentation. The data was ingested through an <strong>extensible data store</strong> in the demo. For testing and display purposes here, <strong>replayed sensor data</strong> is used.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6" align="center">
      <FlipCardImage
          imageSrc="firstobsALL.PNG"
          frontText="Timeseries visualization of the first occurrences of observation hits for all sensor types."
          scale=".65"
      />
    </v-col>
    <v-col cols="6" align="center">
      <FlipCardImage
          imageSrc="mostrecentobsALL.PNG"
          frontText="Timeseries visualization of the most recent occurrences of observation hits for all sensor types."
          scale=".65"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6" align="center">
      <FlipCardImage
          imageSrc="firstobsEQUIPandUNIT.PNG"
          frontText="Timeseries visualization of the first occurrences of observation hits for equipment sensor types."
          scale=".65"
      />
    </v-col>
    <v-col cols="6" align="center">
      <FlipCardImage
          imageSrc="mostrecentobsEQUIPandUNIT.PNG"
          frontText="Timeseries visualization of the most recent occurrences of observation hits for equipment sensor types."
          scale=".65"
      />
    </v-col>
  </v-row>
</template>

<style scoped>
.visualization-card {
  background-color: #282a2c;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  line-height: 1.6;
  color: white;
}

.visualization-card:hover {
  transform: translateY(3px);
  box-shadow: 0 10px 20px rgba(16, 14, 14, 0.96);
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