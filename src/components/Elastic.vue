<script lang="ts">
export default {
  name: 'ElasticComponent',
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