<script>
import { mapState } from 'vuex';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import HeadNeckSection from 'components/Calculator/HeadNeckSection.vue';
import UpperExtremitiesSection from 'components/Calculator/UpperExtremitiesSection.vue';
import TrunkSection from 'components/Calculator/TrunkSection.vue';
import LowerExtremitiesSection from 'components/Calculator/LowerExtremitiesSection.vue';
// import ResultSection from 'components/ResultSection.vue';

export default {
  name: 'CalculatorContainer',
  components: {
    HeadNeckSection,
    UpperExtremitiesSection,
    TrunkSection,
    LowerExtremitiesSection,
    // ResultSection,
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
          score: 0,
        },
        UpperExtremitiesSection: {
          name: 'Upper extremities',
          id: '2',
          component: 'UpperExtremitiesSection',
          abbreviation: 'UpperExtremities',
          score: 0,
        },
        TrunkSection: {
          name: 'Trunk',
          id: '3',
          component: 'TrunkSection',
          abbreviation: 'Trunk',
          score: 0,
        },
        LowerExtremitiesSection: {
          name: 'Lower extremities',
          id: '4',
          component: 'LowerExtremitiesSection',
          abbreviation: 'LowerExtremities',
          score: 0,
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
      // activeTab: state => state.activeTab,
      // area: state => state.area,
      // body: state => state.body,
      patient: state => state.patient,
    }),
    // bodyPoint: {
    //   get() {
    //     result = Area
    //       * (parseInt(Erythema, 10)
    //       + parseInt(EdemaPapulation, 10)
    //       + parseInt(Excoriation, 10)
    //       + parseInt(Lichenification, 10))
    //       * 0.1;
    //   },
    //   set() {

    //   },
    // },
    // bodyscore() {
    //   const score = [];
    //   this.tabs.forEach((tab) => {
    //     let Area;
    //     let Erythema;
    //     let EdemaPapulation;
    //     let Excoriation;
    //     let Lichenification;
    //     let Weight;
    //     let result;
    //     /* eslint-disable prefer-destructuring */ // TODO:
    //     switch (tab.abbreviation) {
    //       case 'HeadNeck':
    //         Area = this.area.HeadNeck.AreaScore;
    //         Erythema = this.area.HeadNeck.SymptomScore.Erythema;
    //         EdemaPapulation = this.area.HeadNeck.SymptomScore.EdemaPapulation;
    //         Excoriation = this.area.HeadNeck.SymptomScore.Excoriation;
    //         Lichenification = this.area.HeadNeck.SymptomScore.Lichenification;
    //         Weight = this.body.HeadNeck.weight;
    //         result = Area
    //           * (parseInt(Erythema, 10)
    //           + parseInt(EdemaPapulation, 10)
    //           + parseInt(Excoriation, 10)
    //           + parseInt(Lichenification, 10))
    //           * Weight;
    //         this.$store.commit(
    //           'setBodyResultScore',
    //           { name: 'HeadNeck', score: result.toFixed(1) }
    //         );
    //         break;
    //       case 'UpperExtremities':
    //         Area = this.area.UpperExtremities.AreaScore;
    //         Erythema = this.area.UpperExtremities.SymptomScore.Erythema;
    //         EdemaPapulation = this.area.UpperExtremities.SymptomScore.EdemaPapulation;
    //         Excoriation = this.area.UpperExtremities.SymptomScore.Excoriation;
    //         Lichenification = this.area.UpperExtremities.SymptomScore.Lichenification;
    //         Weight = this.body.UpperExtremities.weight;
    //         result = Area
    //           * (parseInt(Erythema, 10)
    //           + parseInt(EdemaPapulation, 10)
    //           + parseInt(Excoriation, 10)
    //           + parseInt(Lichenification, 10))
    //           * Weight;
    //         this.$store.commit(
    //           'setBodyResultScore',
    //           { name: 'UpperExtremities', score: result.toFixed(1) }
    //         );
    //         break;
    //       case 'Trunk':
    //         Area = this.area.Trunk.AreaScore;
    //         Erythema = this.area.Trunk.SymptomScore.Erythema;
    //         EdemaPapulation = this.area.Trunk.SymptomScore.EdemaPapulation;
    //         Excoriation = this.area.Trunk.SymptomScore.Excoriation;
    //         Lichenification = this.area.Trunk.SymptomScore.Lichenification;
    //         Weight = this.body.Trunk.weight;
    //         result = Area
    //           * (parseInt(Erythema, 10)
    //           + parseInt(EdemaPapulation, 10)
    //           + parseInt(Excoriation, 10)
    //           + parseInt(Lichenification, 10))
    //           * Weight;
    //         this.$store.commit(
    //           'setBodyResultScore',
    //           { name: 'Trunk', score: result.toFixed(1) }
    //         );
    //         break;
    //       case 'LowerExtremities':
    //         Area = this.area.LowerExtremities.AreaScore;
    //         Erythema = this.area.LowerExtremities.SymptomScore.Erythema;
    //         EdemaPapulation = this.area.LowerExtremities.SymptomScore.EdemaPapulation;
    //         Excoriation = this.area.LowerExtremities.SymptomScore.Excoriation;
    //         Lichenification = this.area.LowerExtremities.SymptomScore.Lichenification;
    //         Weight = this.body.LowerExtremities.weight;
    //         result = Area
    //           * (parseInt(Erythema, 10)
    //           + parseInt(EdemaPapulation, 10)
    //           + parseInt(Excoriation, 10)
    //           + parseInt(Lichenification, 10))
    //           * Weight;
    //         this.$store.commit(
    //           'setBodyResultScore',
    //           { name: 'LowerExtremities', score: result.toFixed(1) }
    //         );
    //         break;
    //       default:
    //         Area = 0;
    //         Erythema = 0;
    //         EdemaPapulation = 0;
    //         Excoriation = 0;
    //         Lichenification = 0;
    //         Weight = 0;
    //         result = 0;
    //     }
    //     score.push(result);
    //   });
    //   return score;
    // },
    // haveCalculatorCompleted() {
    //   return this.body.HeadNeck.areaIsCompleted
    //     && this.body.HeadNeck.allSymptomIsCompleted
    //     && this.body.UpperExtremities.areaIsCompleted
    //     && this.body.UpperExtremities.allSymptomIsCompleted
    //     && this.body.Trunk.areaIsCompleted
    //     && this.body.Trunk.allSymptomIsCompleted
    //     && this.body.LowerExtremities.areaIsCompleted
    //     && this.body.LowerExtremities.allSymptomIsCompleted;
    // },
    // currentTabComponent() {
    //   return this.activeTabName;
    // },
    // canAccessToResult() {
    //   const {
    //     HeadNeck, UpperExtremities, Trunk, LowerExtremities,
    //   } = this.body;
    //   const completeHeadNeck = HeadNeck.allSymptomIsCompleted
    //                             && HeadNeck.areaIsCompleted;
    //   const completeUpperExtremities = UpperExtremities.allSymptomIsCompleted
    //                             && UpperExtremities.areaIsCompleted;
    //   const completeTrunk = Trunk.allSymptomIsCompleted
    //                             && Trunk.areaIsCompleted;
    //   const completeLowerExtremities = LowerExtremities.allSymptomIsCompleted
    //                             && LowerExtremities.areaIsCompleted;

    //   return [
    //     completeHeadNeck,
    //     completeUpperExtremities,
    //     completeTrunk,
    //     completeLowerExtremities
    //   ];
    // },
    // isSelected() {
    //   // (HeadNeck, UpperExtremities, Trunk, LowerExtremities) => [ture, false, false, false]
    //   return Object.values(this.body).map(tab => tab.isSelect);
    // },
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
    // 讓被點選的 tab 亮起
    selectTab(name) {
      this.$store.commit('selectTab', { name });
      // 把其他4個Tab關掉
      // this.tabs.forEach((tab) => {
      //   tab.isSelected = this.body[tab.abbreviation].isSelect;
      // });
    },
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
      console.log('bodyscore', e);
      this.tabs[this.currentTabComponent].score = parseFloat(e, 10).toFixed(1);
    },
  },
};
</script>

<template src="./template.html"></template>
<style scoped lang="scss" src="./style.scss"></style>
