<script>
import FrontChest from 'assets/images/front-chest.png';
import BackChest from 'assets/images/back-chest.png';

export default {
  name: 'HeadNeckExhibition',
  data() {
    return {
      FrontChest,
      BackChest,
      showFrontImage: false,
      showBackImage: false,
    };
  },
};
</script>

<template>
  <div class="body-image">
    <div class="front">
      <div class="title" v-if="showFrontImage">Front</div>
      <img
        class="desktop"
        :src="FrontChest"
        @load="showFrontImage=true"
        height="402px"
      >
      <img
        class="mobile"
        :src="FrontChest"
        @load="showFrontImage=true"
        height="335px"
      >
      <div class="score" v-if="showFrontImage">
        <div class="percentage scoreA" style="background: #f7ee7f">17%</div>
        <div class="percentage scoreB" style="background: #f0dd00">33%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showBackImage">Back</div>
      <img
        class="desktop"
        :src="BackChest"
        @load="showBackImage=true"
        height="402px"
      >
      <img
        class="mobile"
        :src="BackChest"
        @load="showBackImage=true"
        height="335px"
      >
      <div class="score" v-if="showBackImage">
        <div class="percentage scoreA" style="background: #f7ee7f">17%</div>
        <div class="percentage scoreB" style="background: #f0dd00">33%</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./exhibition.scss"></style>
