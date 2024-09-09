<script lang="ts">

export default {
  name: 'TrialTracker',
}
</script>

<template>
  <v-row>
    <v-col align="center">
      <v-card class="visualization-card">
        <v-card-text>
          <h3 class="card-header">Trial Tracker Redesign</h3>
          <p>
            Lead a team of 3 interns in the <strong>complete redesign</strong> of a Trial Tracker application used during live events. We were tasked with making it simpler and faster to use. We fiorst drew <strong>mockups, entity relationship diagrams, and data flow charts</strong> to conceptualize the project.
          </p>
          <p>
            We followed Agile methodolgy in creating workable tickets from user stories, and in estimating and assigning work. This involved <strong>full stack development</strong> using <strong>Vue, Typescript, Java, and SpringBoot</strong>
          </p>
          <p>
            Reworked data structures, controllers, RestAPI calls, storage of data, and the frontend. As the <strong>team lead</strong> I assisted on nearly every ticket, and implemented lots of the core functionality.
          </p>
          <p>
            I demoed this on the last sprint review of the summer and recieved lots of positive feedback from other employees. Especially because we finished this within a <strong>single sprint</strong>.
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