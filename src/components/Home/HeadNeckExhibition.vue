<script>
import FrontHead from 'assets/images/front-head.svg';
import FrontHeadSm from 'assets/images/front-head-sm.svg';
import BackHead from 'assets/images/back-head.svg';
import BackHeadSm from 'assets/images/back-head-sm.svg';

export default {
  name: 'HeadNeckExhibition',
  data() {
    return {
      FrontHead,
      BackHead,
      FrontHeadSm,
      BackHeadSm,
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
      <img class="desktop" :src="FrontHead" @load="showFrontImage=true">
      <img class="mobile" :src="FrontHeadSm" @load="showFrontImage=true">
      <div class="score" v-if="showFrontImage">
        <div class="percentage scoreA">17%</div>
        <div class="percentage scoreB">33%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showBackImage">Back</div>
      <img class="desktop" :src="BackHead" @load="showBackImage=true">
      <img class="mobile" :src="BackHeadSm" @load="showBackImage=true">
      <div class="score" v-if="showBackImage">
        <div class="percentage scoreA">17%</div>
        <div class="percentage scoreB">33%</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./exhibition.scss"></style>
