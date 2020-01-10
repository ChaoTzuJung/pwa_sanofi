<script>
import FrontLower from 'assets/images/front-lower.svg';
import FrontLowerSm from 'assets/images/front-lower-sm.svg';
import BackLower from 'assets/images/back-lower.svg';
import BackLowerSm from 'assets/images/back-lower-sm.svg';

export default {
  name: 'LowerExtremitiesExhibition',
  data() {
    return {
      FrontLower,
      FrontLowerSm,
      BackLower,
      BackLowerSm,
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
      <img class="desktop" :src="FrontLower" @load="showFrontImage=true">
      <img class="mobile" :src="FrontLowerSm" @load="showFrontImage=true">
      <div class="score" v-if="showFrontImage">
        <div class="percentage scoreA">22.5%</div>
        <div class="percentage scoreB">22.5%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showBackImage">Back</div>
      <img class="desktop" :src="BackLower" @load="showBackImage=true">
      <img class="mobile" :src="BackLowerSm" @load="showBackImage=true">
      <div class="score-top" v-if="showBackImage">
        <div class="percentage scoreC">10%</div>
      </div>
      <div class="score" v-if="showBackImage">
        <div class="percentage scoreA">22.5%</div>
        <div class="percentage scoreB">22.5%</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./exhibition.scss"></style>
