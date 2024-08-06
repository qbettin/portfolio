<script lang="ts">
import FlipCardImage from "@/components/FlipCardImage.vue";

export default {
  name: 'ElasticComponent',
  components: {FlipCardImage}
}
</script>

<template>
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
/* Add any styles for ElasticComponent here */
</style>