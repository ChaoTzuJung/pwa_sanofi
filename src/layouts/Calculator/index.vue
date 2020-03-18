<script>
import { mapState } from 'vuex';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import Tab from 'components/Common/Tab.vue';
import HeadNeckSection from 'components/Calculator/HeadNeckSection.vue';
import UpperExtremitiesSection from 'components/Calculator/UpperExtremitiesSection.vue';
import TrunkSection from 'components/Calculator/TrunkSection.vue';
import LowerExtremitiesSection from 'components/Calculator/LowerExtremitiesSection.vue';
import ResultSection from 'components/Calculator/ResultSection.vue';

export default {
  name: 'CalculatorContainer',
  components: {
    Tab,
    HeadNeckSection,
    UpperExtremitiesSection,
    TrunkSection,
    LowerExtremitiesSection,
    ResultSection,
    Carousel3d,
    Slide,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      canCheckTab: false,
      tabs: {
        HeadNeckSection: {
          name: 'Chest & Shoulder',
          id: '1',
          component: 'HeadNeckSection',
          abbreviation: 'HeadNeck',
          score: 0.0,
          complete: false,
        },
        UpperExtremitiesSection: {
          name: 'Biceps & Triceps',
          id: '2',
          component: 'UpperExtremitiesSection',
          abbreviation: 'UpperExtremities',
          score: 0,
          complete: false,
        },
        TrunkSection: {
          name: 'Abs & Backside',
          id: '3',
          component: 'TrunkSection',
          abbreviation: 'Trunk',
          score: 0,
          complete: false,
        },
        LowerExtremitiesSection: {
          name: 'Buttocks & Leg',
          id: '4',
          component: 'LowerExtremitiesSection',
          abbreviation: 'LowerExtremities',
          score: 0,
          complete: false,
        },
        ResultSection: {
          name: 'Result',
          id: '5',
          component: 'ResultSection',
          abbreviation: 'result',
        },
      },
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        slideToClickedSlide: true,
        iOSEdgeSwipeDetection: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<div class="${className} swiper-pagination-bullet-custom"></div>`;
          },
        },
      },
      currentSectionComponent: 'HeadNeckSection',
    };
  },
  computed: {
    ...mapState({
      patient: state => state.patient,
    }),
    valid() {
      return tab => !tab.complete && tab.name !== 'Result' && this.canCheckTab;
    },
    allTabComplete() {
      return Object.values(this.tabs).every(item => item.complete === true);
    },
  },
  methods: {
    changeTab(tab) {
      // NOTE:
      // if (tab.name === 'Result' && !this.allTabComplete) {
      //   this.canCheckTab = true;
      //   return;
      // }

      this.currentSectionComponent = tab.component; // 切換Tab下的 section 內容
    },
    goToNextSlide() {
      this.$refs.mySwiper.swiper.slideNext();
    },
    goToFirstSlide() {
      this.$refs.mySwiper.swiper.slideTo(0);
    },
    changeBodyScore(e) {
      this.tabs[this.currentSectionComponent].score = parseFloat(e, 10).toFixed(1);
    },
    changeTabStatus(status) {
      this.tabs[this.currentSectionComponent].complete = status;
    },
    goToResult(tabName) {
      this.currentSectionComponent = tabName;
    },
  },
};
</script>

<template src="./template.html"></template>
<style scoped lang="scss" src="./style.scss"></style>
