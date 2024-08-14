<script lang="ts">
import FlipCardImage from "@/components/FlipCardImage.vue";

export default {
  name: 'ElasticComponent',
  components: {FlipCardImage}
}
</script>

<template>
  <v-row>
    <v-col align="center">
      <v-card class="visualization-card">
        <v-card-text>
          <h3 class="card-header">Automated Data Ingestion and Visualization with ElasticDB</h3>
          <p>
            This project involved the <strong>automated ingestion of data</strong> from an ActiveMQ data bus, which was then programmatically stored in an ElasticDB data store. A specialized Query class facilitated <strong>custom queries</strong> to retrieve data based on specific sensor inputs or other defined properties.
          </p>
          <p>
            The system dynamically created new index patterns in ElasticDB, allowing for <strong>targeted data visualization</strong> based on the queried results. This setup was designed to be highly modular, enabling efficient data management and visualization for various use cases.
          </p>
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6" align="center">
      <FlipCardImage
          imageSrc="docker-sensor.PNG"
          frontText="Composing the sensor data docker stack."
          scale=".85"
      />
    </v-col>
    <v-col cols="6" align="center">
      <FlipCardImage
          imageSrc="docker-elastic.PNG"
          frontText="Composing the elastic db docker stack."
          scale=".85"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6" align="center">
      <FlipCardImage
        imageSrc="docker-app.PNG"
        frontText="Docker Desktop with the storageLayer and sensorData docker stacks running."
        scale=".75"
      />
    </v-col>
    <v-col cols="6" align="center">
      <FlipCardImage
          imageSrc="activemqbus.PNG"
          frontText="Code for the ActiveMQ Bus. This was used for reading sensor information off our destination, 'reading.queue', which was then parsed and sent to the Elastic DB."
          scale=".8"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col align="center">
      <FlipCardImage
          imageSrc="elastic-indexpattern.PNG"
          frontText="Index pattern where all our sensor data lives. When the program is running, this is populated with hundreds of messages per minute, and can be refreshed to view the new 'hits'."
          scale=".7"
      />
    </v-col>
  </v-row>
  <v-row>
    <v-col align="center">
      <FlipCardImage
          imageSrc="elastic-testpattern.PNG"
          frontText="Index pattern created by a custom Query. The Query was made for all hits in isa_raw for sensorName == 'sensor40'. This is done programmatically, by using RESTful API calls to the elastic db."
          scale=".7"
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
}</style>