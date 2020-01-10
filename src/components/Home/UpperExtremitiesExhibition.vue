<script>
import FrontUpper from 'assets/images/front-upper.svg';
import FrontUpperSm from 'assets/images/front-upper-sm.svg';
import BackUpper from 'assets/images/back-upper.svg';
import BackUpperSm from 'assets/images/back-upper-sm.svg';

export default {
  name: 'UpperExtremitiesExhibition',
  data() {
    return {
      FrontUpper,
      FrontUpperSm,
      BackUpper,
      BackUpperSm,
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
      <img class="desktop" :src="FrontUpper" @load="showFrontImage=true">
      <img class="mobile" :src="FrontUpperSm" @load="showFrontImage=true">
      <div class="score" v-if="showFrontImage">
        <div class="percentage scoreA">25%</div>
        <div class="percentage scoreB">25%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showBackImage">Back</div>
      <img class="desktop" :src="BackUpper" @load="showBackImage=true">
      <img class="mobile" :src="BackUpperSm" @load="showBackImage=true">
      <div class="score" v-if="showBackImage">
        <div class="percentage scoreA">25%</div>
        <div class="percentage scoreB">25%</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./exhibition.scss"></style>
