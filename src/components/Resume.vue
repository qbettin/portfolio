<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';



export default defineComponent({
  name: 'StyledResume',
  setup() {
    const panel = ref<string[]>([]);

    return {
      name: 'Quinten Bettin',
      email: 'qbettin@udel.edu',
      phone: '410-652-3831',
      linkedin: 'https://www.linkedin.com/in/quinten-bettin/',
      github: 'https://github.com/qbettin',
      university: 'University of Delaware, Newark',
      major: 'Computer Science Bachelor of Science major with a Software Enginnering concentration',
      panel,
    };
  },
});
</script>
<template>
    <v-container class="styled-resume">
      <!-- Contact Information -->
      <v-list bg-color="grey-darken-4" class="contact-info">
        <v-row >
          <v-col>
            <!-- Email -->
            <v-list-item class="contact-info">
              <v-list-item-title class="custom-text-color-title">
                <v-icon>mdi-email-outline</v-icon>
                {{ email }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col>
            <!-- Phone -->
            <v-list-item class="contact-info">
              <v-list-item-title class="custom-text-color-title">
                <v-icon class="contact-icon">mdi-phone-outline</v-icon>
                {{ phone }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col>
            <!-- LinkedIn -->
            <v-list-item class="contact-info">
              <v-list-item-title class="custom-text-color-title">
                <v-icon class="contact-icon">mdi-linkedin</v-icon>
                <a :href="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col>
            <!-- GitHub -->
            <v-list-item class="contact-info">
              <v-list-item-title class="custom-text-color-title">
                <v-icon class="contact-icon">mdi-github</v-icon>
                <a :href="github" target="_blank" rel="noopener noreferrer">GitHub</a>
              </v-list-item-title>
            </v-list-item>
          </v-col>
        </v-row>
      </v-list>
  
      <!-- Education Section -->
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel bg-color="grey-darken-4" value="education">
          <v-expansion-panel-title color="grey-darken-4">
            <v-list-item-title class="custom-text-color-title">
              <v-list-item-title class="font-weight-bold">Education</v-list-item-title>
            </v-list-item-title>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-card elevation="20" color="grey-darken-4">
              <v-card-text>
                <p class="first-line"><strong class="custom-text-color-name">{{ university }}</strong><em class="custom-text-color-first-line">Expected May 2025</em></p>
                <div class="custom-text-color-description">
                  <p>{{ major }}</p>
                  <p>Cumulative - GPA 3.2</p>
                  <p>Sophomore - GPA 3.42</p>
                  <p>Coursework: Data Structures, Object Oriented Programming, Intro to Software Engineering, Calculus A & B, Discrete/Logistical Mathematics, Intro to Algorithms</p>
                </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
  
      <!-- Languages/Technologies Section -->
        <v-expansion-panel bg-color="grey-darken-4" value="langtech">
          <v-expansion-panel-title color="grey-darken-4">
            <v-list-item-title class="custom-text-color-title">
              <v-list-item-title class="font-weight-bold">Languages/Technologies</v-list-item-title>
            </v-list-item-title>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-card elevation="20" color="grey-darken-4">
              <v-card-text>
                <strong class="custom-text-color-name">Languages</strong>
                <p class="custom-text-color-description">Java, Python, C, C++, Armv8 Assembly, HTML, CSS, React Libraries, TypeScript/JavaScript</p>
                <strong class="custom-text-color-name">Technologies</strong>
                <p class="custom-text-color-description">IntelliJ, VS Code, Git, Atlassian Suite, Docker, ActiveMQ, ELK Stack, MongoDB, SourceTree</p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
  
      <!-- Projects Section -->
        <v-expansion-panel bg-color="grey-darken-4" value="projects">
          <v-expansion-panel-title color="grey-darken-4">
            <v-list-item-title class="custom-text-color-title">
              <v-list-item-title class="font-weight-bold">Projects</v-list-item-title>
            </v-list-item-title>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-card elevation="20" color="grey-darken-4">
              <v-card-text>
                <p class="first-line"><strong class="custom-text-color-name">React Website</strong><em class="custom-text-color-first-line">Student Project</em></p>
                <p class="custom-text-color-description">Using React Framework, HTML, CSS, TypeScript, and Git. Launched a website using task-based organization in an agile environment. Created TypeScript functions for object-oriented programming.</p>
                <!-- Add other projects as needed -->
              </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
  
      <!-- Work Experience Section -->
        <v-expansion-panel bg-color="grey-darken-4" value="work">
          <v-expansion-panel-title color="grey-darken-4">
            <v-list-item-title class="custom-text-color-title">
              <v-list-item-title class="font-weight-bold">Work Experience</v-list-item-title>
            </v-list-item-title>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-card elevation="20" color="grey-darken-4">
              <v-card-text>
                <p class = "first-line"><strong class="custom-text-color-name">DCS Corp</strong><em class="custom-text-color-first-line">June 2023 - August 2023</em></p>
                <p class="custom-text-color-description">Used Atlassian suite (Jira, Bitbucket, Confluence) for Agile Development Process. Dockerized ELK stack and MongoDB instances. Processed and curated data from ActiveMQ to ElasticDB. Utilized Kibana for data visualizations.</p>
                <p class="custom-text-color-first-line right-line"><em>Jan 2024 - Feb 2024</em></p>
                <p class="custom-text-color-description">Made custom Vue components for a company site that is being reworked with Vue3 and TypeScript. Re-worked Java backend to accept webservice calls with a new emulator request class which allowed for custom Docker Kickoff messages for emulator creation. </p>

              </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
  
      <!-- Activities/Clubs Section -->
        <v-expansion-panel bg-color="grey-darken-4" value="clubs">
          <v-expansion-panel-title color="grey-darken-4">
            <v-list-item-title class="custom-text-color-title">
              <v-list-item-title class="font-weight-bold">Activities/Clubs</v-list-item-title>
            </v-list-item-title>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-card elevation="20" color="grey-darken-4">
              <v-card-text>
                <p class="first-line"><strong class="custom-text-color-name">Delaware Innovations Fellow (DIF)</strong><em class="custom-text-color-first-line">Sep 2021 - Present</em></p>
                <p class="custom-text-color-description">Students creating opportunities with personalized projects and spirit-building events. Showcasing overlapping projects to find solutions that fit students' expertise.</p>
                <p class="first-line"><strong class="custom-text-color-name">CS + Social Good Club</strong><em class="custom-text-color-first-line">March 2022 - December 2023</em></p>
                <p class="custom-text-color-description">Students actively involved in using CS for positive social change. App creation, website deployment, and problem-solving for specific organizations.</p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </template>
  
  
  <style scoped>
  .styled-resume {
    padding: 0px;
  }
  .contact-info {
    justify-content: space-around;
    overflow: hidden;
    display: flex;
    padding: 20px;

  }
  .contact-icon {
    justify-content: center;
  }
  
  .contact-info p {
    margin: 0;
  }
  
  .contact-info a {
    color: #34669b;
    text-decoration: none;
  }
  
  .font-weight-bold {
    font-weight: bold;
  }
.custom-text-color-name {
  color: rgb(45, 82, 181) !important;
  font-size: large;
  text-align: justify;
  line-height: 1.5
}
.custom-text-color-title {
  color: rgb(199, 199, 199) !important;
  text-align: justify;
}
.custom-text-color-description {
  color: rgb(171, 171, 174) !important;
  font-size: medium;
  line-height: 1.5;
}
.custom-text-color-first-line {
  color: rgb(202, 202, 202) !important;
  font-size: small;
}
.first-line{
  justify-content: space-between;
  align-items: baseline;
  display: flex;
}
.right-line{
  justify-content: right;
  align-items: baseline;
  display: flex;
}

</style>
  