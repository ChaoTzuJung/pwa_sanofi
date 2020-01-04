<script>
import Banner from 'components/Banner.vue';
import BodyImage from 'components/BodyImage.vue';
import BodyImage2 from 'components/BodyImage2.vue';
import BodyImage3 from 'components/BodyImage3.vue';
import BodyImage4 from 'components/BodyImage4.vue';
import Button from 'components/Common/Button.vue';

export default {
  name: 'HomeContainer',
  components: {
    Banner,
    BodyImage,
    BodyImage2,
    BodyImage3,
    BodyImage4,
    Button,
  },
  data() {
    return {
      tabs: [
        {
          name: 'Head & Neck', color: '#f0dd00', id: 'BodyImage', isSeclected: true,
        },
        {
          name: 'Upper extremities', color: '#00a590', id: 'BodyImage2', isSeclected: false,
        },
        {
          name: 'Trunk', color: '#fbba00', id: 'BodyImage3', isSeclected: false,
        },
        {
          name: 'Lower extremities', color: '#bcbc1c', id: 'BodyImage4', isSeclected: false,
        },
      ],
      activeTab: BodyImage,
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
