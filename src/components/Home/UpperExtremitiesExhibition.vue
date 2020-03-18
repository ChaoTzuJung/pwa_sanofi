<script>
import FrontArm from 'assets/images/front-arm.svg';
import BackArm from 'assets/images/back-arm.svg';

export default {
  name: 'UpperExtremitiesExhibition',
  data() {
    return {
      FrontArm,
      BackArm,
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
        :src="FrontArm"
        @load="showFrontImage=true"
        height="402px"
      >
      <img
        class="mobile"
        :src="FrontArm"
        @load="showFrontImage=true"
        height="355px"
      >
      <div class="score" v-if="showFrontImage">
        <div class="percentage scoreA">25%</div>
        <div class="percentage scoreB">25%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showBackImage">Back</div>
      <img
        class="desktop"
        :src="BackArm"
        @load="showBackImage=true"
        height="402px"
      >
      <img
        class="mobile"
        :src="BackArm"
        @load="showBackImage=true"
        height="355px"
      >
      <div class="score" v-if="showBackImage">
        <div class="percentage scoreA">25%</div>
        <div class="percentage scoreB">25%</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./exhibition.scss"></style>
