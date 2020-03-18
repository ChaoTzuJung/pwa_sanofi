<script>
import FrontLeg from 'assets/images/front-leg.svg';
import BackLeg from 'assets/images/back-leg.svg';

export default {
  name: 'LowerExtremitiesExhibition',
  data() {
    return {
      FrontLeg,
      BackLeg,
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
        :src="FrontLeg"
        @load="showFrontImage=true"
        height="402px"
      >
      <img
        class="mobile"
        :src="FrontLeg"
        @load="showFrontImage=true"
        height="355px"
      >
      <div class="score" v-if="showFrontImage">
        <div class="percentage scoreA">22.5%</div>
        <div class="percentage scoreB">22.5%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showBackImage">Back</div>
      <img
        class="desktop"
        :src="BackLeg"
        @load="showBackImage=true"
        height="402px"
      >
      <img
        class="mobile"
        :src="BackLeg"
        @load="showBackImage=true"
        height="355px"
      >
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
