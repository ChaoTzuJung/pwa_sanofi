<script>
import FrontTrunk from 'assets/images/front-trunk.svg';
import FrontTrunkSm from 'assets/images/front-trunk-sm.svg';
import BackTrunk from 'assets/images/back-trunk.svg';
import BackTrunkSm from 'assets/images/back-trunk-sm.svg';

export default {
  name: 'TrunkExhibition',
  data() {
    return {
      FrontTrunk,
      FrontTrunkSm,
      BackTrunk,
      BackTrunkSm,
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
      <img class="desktop" :src="FrontTrunk" @load="showFrontImage=true">
      <img class="mobile" :src="FrontTrunkSm" @load="showFrontImage=true">
      <div class="score" v-if="showFrontImage">
        <div class="percentage scoreA">55%</div>
        <div class="percentage scoreB">55%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showBackImage">Back</div>
      <img class="desktop" :src="BackTrunk" @load="showBackImage=true">
      <img class="mobile" :src="BackTrunkSm" @load="showBackImage=true">
      <div class="score" v-if="showBackImage">
        <div class="percentage scoreA">45%</div>
        <div class="percentage scoreB">45%</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./exhibition.scss"></style>
