<script lang="ts">

export default {
  name: 'AdvancedEmulator',
}
</script>

<template>
  <v-row>
    <v-col align="center">
      <v-card class="visualization-card">
        <v-card-text>
          <h3 class="card-header">Advanced Emulator Tab</h3>
          <p>
            I made an addition to a company internal tool which allowed users to add emulators and edit all of the properties. This was done by constructing a text area which displayed as an <strong>editable JSON.</strong> Each property was editable and some select properties were set up to mock store values. This payload was sent to the backend to be parsed as a <strong>Docker Kickoff Message</strong> which added that emulator to the map.
          </p>
          <p>
            Created <strong>unit tests</strong> with <strong>MockMvc</strong> to ensure its correctness. This feature on the site is used quite exensively and was my greatest achievement at the time. Increased my knowledge of <strong>Vue and Typescript</strong>, as I had to work with <strong>Pinia stores, watchers, refs</strong>, and other Vue component syntax.
          </p>
        </v-card-text>
      </v-card>
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