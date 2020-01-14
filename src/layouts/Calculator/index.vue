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
          complete: false,
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
  },
  methods: {
    // 讓 activeTab 改變 (Head/UpperExtremities/Trunk/...)，下面畫面動態渲染
    // switchTab(component) {
    //   this.$store.commit('changeTab', { sectionName: component });
    // },
    // valid(tab) {
    //   return (!this.body[tab.abbreviation].areaIsCompleted
    //   || !this.body[tab.abbreviation].allSymptomIsCompleted)
    //   && this.body[tab.abbreviation].checked;
    // },
    checkTab(evt) {
      evt.stopPropagation();
      this.$store.commit('checkTab', { check: true });
      // this.goToResult();
    },
    stopCheck() {
      this.$store.commit('checkTab', { check: false });
    },
    // goToResult() {
    //   if (this.haveCalculatorCompleted) {
    //     this.selectTab('Result');
    //     this.$store.commit('changeTab', { sectionName: 'ResultSection' });
    //     // 讓回上一步調整 area score，回到result頁，分數會自動調整
    //     const BSA = this.patient.HeadNeck.areaPercent * 0.1
    //     + this.patient.UpperExtremities.areaPercent * 0.2
    //     + this.patient.Trunk.areaPercent * 0.3
    //     + this.patient.LowerExtremities.areaPercent * 0.4;
    //     this.$store.commit('savePatientBsaAndIga', { BSA, IGA: null });
    //   }
    // },
    changeTab(tab) {
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
