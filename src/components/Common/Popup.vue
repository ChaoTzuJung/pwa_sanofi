<script>
import AddToHome from 'assets/images/add_to_home.png';
import ShareIcon from 'assets/images/share.svg';

export default {
  name: 'Popup',
  props: ['description', 'direction'],
  data() {
    return {
      showPopup: true,
      AddToHome,
      ShareIcon,
    };
  },
  computed: {
    showRightPopup() {
      return this.showPopup && this.direction === 'right';
    },
    showUpPopup() {
      return this.showPopup && this.direction === 'up';
    },
    showLeftPopup() {
      return this.showPopup && this.direction === 'left';
    },
  },

};
</script>

<template>
  <span class="popup" v-if="showUpPopup">
      <img :src="AddToHome" width="40" height="40" />
      <span class="popupTop">
        Install this Web App on your iPhone: <br/>
        Tap
        <img class="share" :src="ShareIcon" width="20" height="20" />
        and then Add to Homescreen
      </span>
  </span>
</template>

<style scoped lang="scss">

.popup {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  border-radius: 13px;
  width: 80%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);

  & .popupTop {
    font-family: -apple-system, SF UI Text, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.4;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -12px;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 12px 6px 0 6px;
      border-color: rgba(255, 255, 255, 0.8) transparent transparent transparent;
    }

    & > .share {
      transform: translateY(15%);
    }
  }
}
</style>
