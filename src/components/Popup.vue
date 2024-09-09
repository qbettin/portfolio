<script lang="ts">

export default {
  name: 'PopupComponent',
}
</script>

<template>
  <v-row>
    <v-col align="center">
      <v-card class="visualization-card">
        <v-card-text>
          <h3 class="card-header">Reusable Popup</h3>
          <p>
            On the same company internal tool, I was tasked to replace all of the generic browser popups for confirmations on certain actions. I created a <strong>modular and reusable</strong> popup component in <strong>Vue </strong>which also looked much nicer than the default popups. I used <strong>props</strong> which controlled the text that was displayed, button names, and functions on button clicks. This made replacing all the popups an easier task.
          </p>
          <p>
            Some popups needed more than <strong>a confirm and cancel button</strong>, which made a modular popup more difficult, but adding more props solved this issue.
          </p>
          <p>
            I even <strong>reused</strong> this component on other company sites, proving its modularity.
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