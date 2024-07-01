<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'StyledExperience',
    setup(){
        const panel = ref<string[]>([]);
        return{
            panel
        }
    }
})
</script>
<template>
    <v-card color="grey-darken-4">
     <v-card-title class="custom-text-color-title"> Experience </v-card-title>
     <v-card-text>
         <v-row>
             <v-col cols="4">
                 <img src="dcscorpLogo.png" alt="DCS Corp Logo" class="logo-img">
             </v-col>
             <v-col cols="8">
                 <ul class="bullet-list">
                     <li>DCS is a firm providing engineering, programmatic and technical support services to the Department of Defense and other customers focused on national security</li>
                     <li>I have worked here for nearly 2 years as an intern</li>
                     <li>I was hired by Greg Donarum who is the Belcamp branch supervisor</li>
                 </ul>
             </v-col>
         </v-row>
     </v-card-text>
     <v-expansion-panels v-model="panel" multiple>
       <v-expansion-panel bg-color="grey-darken-4" value="summer2023">
         <v-expansion-panel-title color="grey-darken-4">
             <v-list-item-title class="custom-text-color-title">Summer 2023</v-list-item-title>
           </v-expansion-panel-title>
           <v-expansion-panel-text>
             <div>test</div>
           </v-expansion-panel-text>
       </v-expansion-panel>
       <v-expansion-panel bg-color="grey-darken-4" value="winter2023-2024">
         <v-expansion-panel-title color="grey-darken-4">
             <v-list-item-title class="custom-text-color-title">Winter 2023-2024</v-list-item-title>
           </v-expansion-panel-title>
           <v-expansion-panel-text>
             <div>test</div>
           </v-expansion-panel-text>
       </v-expansion-panel>
       <v-expansion-panel bg-color="grey-darken-4" value="summer2024">
         <v-expansion-panel-title color="grey-darken-4">
             <v-list-item-title class="custom-text-color-title">Summer 2024</v-list-item-title>
           </v-expansion-panel-title>
           <v-expansion-panel-text>
             <div>test</div>
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
   height: 100%; /* Ensure the div takes the full height */
 }
 
 .transparent-bg {
   background-color: rgb(30, 30, 30);
 }
 
 .logo-img {
   width: 300px; /* Adjust size as needed */
   height: 300px; /* Adjust size as needed */
   border-radius: 25%; /* Circle effect */
   align-self: flex-start; /* Align to the left */
   margin-left: 75px;
 }
 
 .bullet-list {
   color: rgb(199, 199, 199);
   font-size: medium;
   line-height: 2;
   margin-top: 66px;
   margin-right: 50px;
 }
 
 .v-expansion-panel-title .v-list-item-title {
   width: 100%; /* Ensure the expansion panel title spans the full width */
 }
 </style>
 