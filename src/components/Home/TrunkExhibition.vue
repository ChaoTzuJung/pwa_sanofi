<script>
import FrontAbs from 'assets/images/front-abs.svg';
import BackAbs from 'assets/images/back-abs.svg';

export default {
  name: 'TrunkExhibition',
  data() {
    return {
      FrontAbs,
      BackAbs,
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
        :src="FrontAbs"
        @load="showFrontImage=true"
        height="402px"
      >
      <img
        class="mobile"
        :src="FrontAbs"
        @load="showFrontImage=true"
        height="355px"
      >
      <div class="score" v-if="showFrontImage">
        <div
          class="percentage scoreA"
          style="background: #fbba00; transform: translateY(100%); opacity: 0;"
        >
          55%
          </div>
        <div
          class="percentage scoreB"
          style="background: #fbba00; transform: translateY(100%);"
        >
          55%
        </div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showBackImage">Back</div>
      <img
        class="desktop"
        :src="BackAbs"
        @load="showBackImage=true"
        height="402px"
      >
      <img
        class="mobile"
        :src="BackAbs"
        @load="showBackImage=true"
        height="355px"
      >
      <div class="score" v-if="showBackImage">
        <div
          class="percentage scoreA"
          style="background: #fbba00; transform: translateY(100%); opacity: 0;"
        >
          45%
        </div>
        <div
          class="percentage scoreB"
          style="background: #fbba00; transform: translateY(100%);"
        >
          45%
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./exhibition.scss"></style>
