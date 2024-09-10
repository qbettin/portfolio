<script lang="ts">

export default {
  name: 'KeygenComponent',
}
</script>

<template>
  <v-row>
    <v-col align="center">
      <v-card class="visualization-card">
        <v-card-text>
          <h3 class="card-header">Keygen Project</h3>
          <p>
            Created the entire frontend for an existing but new Keygen project. This project was used to <strong>generate signed keys</strong> which were used when connecting to emulated controllers. The problem was creating <strong>lots of keys</strong> at once, as creating them is tedious.
          </p>
          <p>
            Recursively generated keys with the use of <strong>wildcards</strong>. When an asterisk * was present in the keyname, it gave users an option for a <strong>term</strong> or <strong>range</strong> selection.
          </p>
          <p>
            For example, a key named <strong>SIC-*-24-*</strong> would display 2 wildcards. If the first was a term with values <strong>[Bio, Chem]</strong>, and the second was a range with values <strong>[0,1,2]</strong>; the keys <strong> SIC-Bio-24-0, SIC-Bio-24-1, SIC-Bio-24-2, SIC-Chem-24-0, SIC-Chem-24-1, SIC-Chem-24-2 </strong> would be generated.
          </p>
          <p>
            Achieved with <strong>Vue, Typescript, Java, and SpringBoot</strong>
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