<script>
  export default {
    name: 'FlipCardImage',
    props: {
      imageSrc: String,
      frontText: String,
      scale: Number,
    },
    data() {
      return {
        isFlipped: false,
        isImageLoaded: false,
        loadedImageSrc: '',
        imageHeight: 0,
        imageWidth: 0
      };
    },
    methods: {
      preloadImage() {
        const img = new Image();
        img.onload = () => {
          this.isImageLoaded = true;
          this.loadedImageSrc = this.imageSrc;
          this.imageHeight = img.height;
          this.imageWidth = img.width;
        };
        img.src = this.imageSrc;
      }
    },
    mounted() {
      this.preloadImage();
    }
  };
  </script>
<template>
    <v-card class="flip-card" @click="isFlipped = !isFlipped" color="grey-darken-4" :style="{ height: imageHeight * scale + 'px', width: imageWidth * scale + 'px' }">
      <v-sheet class="flip-card-inner" :class="{ 'flipped': isFlipped }">
        <div v-if="!isFlipped">
          <img v-if="isImageLoaded" :src="imageSrc" alt="Front Image" class="card-image">
        </div>
        <div v-else>
          <v-card-text class="card-text flip-card-back" :style="{ height: imageHeight * scale + 'px' }">{{ frontText }}</v-card-text>
        </div>
      </v-sheet>
    </v-card>
</template>

<style scoped>
  .flip-card {
    perspective: 2000px;
    margin: 10px;
  }

  .flip-card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .card-image {
    height: 100%;
    width: 100%;
  }

  .card-text {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: min(4vw, 4vh, 24px);
    padding: 20px;
    overflow-wrap: break-word;
    line-height: inherit;
  }

  .flip-card-back {
    background-color: #1d2633; /* Back side background */
    color: white;
    transform: rotateY(180deg);
    height: 100%;
    overflow: auto;
  }
</style>
