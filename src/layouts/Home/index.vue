<script>
import Banner from 'components/Home/Banner.vue';
import HeadNeckExhibition from 'components/Home/HeadNeckExhibition.vue';
import TrunkExhibition from 'components/Home/TrunkExhibition.vue';
import LowerExtremitiesExhibition from 'components/Home/LowerExtremitiesExhibition.vue';
import Button from 'components/Common/Button.vue';
import UpperExtremitiesExhibition from '@/components/Home/UpperExtremitiesExhibition.vue';

export default {
  name: 'HomeContainer',
  components: {
    Banner,
    HeadNeckExhibition,
    UpperExtremitiesExhibition,
    TrunkExhibition,
    LowerExtremitiesExhibition,
    Button,
  },
  data() {
    return {
      tabs: [
        {
          name: 'Head & Neck', color: '#f0dd00', id: 'HeadNeckExhibition', isSeclected: true,
        },
        {
          name: 'Upper extremities', color: '#00a590', id: 'UpperExtremitiesExhibition', isSeclected: false,
        },
        {
          name: 'Trunk', color: '#fbba00', id: 'TrunkExhibition', isSeclected: false,
        },
        {
          name: 'Lower extremities', color: '#bcbc1c', id: 'LowerExtremitiesExhibition', isSeclected: false,
        },
      ],
      activeTab: HeadNeckExhibition,
    };
  },
  /* eslint-disable no-param-reassign */
  methods: {
    selectTab(id) {
      this.tabs.forEach((tab) => {
        // TODO:
        if (tab.id === id) {
          tab.isSeclected = true;
        } else {
          tab.isSeclected = false;
        }
      });
    },
  },
};
</script>

<template src="./template.html"></template>
<style scoped lang="scss" src="./style.scss"></style>
