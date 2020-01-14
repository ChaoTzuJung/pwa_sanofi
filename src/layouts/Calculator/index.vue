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
          name: 'Head & Neck',
          id: '1',
          component: 'HeadNeckSection',
          abbreviation: 'HeadNeck',
          score: 0.0,
          complete: false,
        },
        UpperExtremitiesSection: {
          name: 'Upper extremities',
          id: '2',
          component: 'UpperExtremitiesSection',
          abbreviation: 'UpperExtremities',
          score: 0,
          complete: false,
        },
        TrunkSection: {
          name: 'Trunk',
          id: '3',
          component: 'TrunkSection',
          abbreviation: 'Trunk',
          score: 0,
          complete: false,
        },
        LowerExtremitiesSection: {
          name: 'Lower extremities',
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
          score: null,
          complete: true,
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
      headNeck: 0,
      upperExtremities: 0,
      trunk: 0,
      lowerExtremities: 0,
      currentTabComponent: 'HeadNeckSection',
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
      if (tab.name === 'Result' && !this.allTabComplete) {
        this.canCheckTab = true;
        return;
      }

      this.currentTabComponent = tab.component;
    },
    goToNextSlide() {
      this.$refs.mySwiper.swiper.slideNext();
    },
    goToFirstSlide() {
      this.$refs.mySwiper.swiper.slideTo(0);
    },
    changeBodyScore(e) {
      this.tabs[this.currentTabComponent].score = parseFloat(e, 10).toFixed(1);
    },
    changeTabStatus(status) {
      this.tabs[this.currentTabComponent].complete = status;
    },
    goToResult(tabName) {
      this.currentTabComponent = tabName;
    },
  },
};
</script>

<template src="./template.html"></template>
<style scoped lang="scss" src="./style.scss"></style>
