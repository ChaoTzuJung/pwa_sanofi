
<script>
export default {
  name: 'Popup',
  props: ['description', 'direction'],
  data() {
    return {
      showPopup: true,
    };
  },
  methods: {
    onClickOutside() {
      this.showPopup = false;
    },
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
    <span class="popup" v-click-outside="onClickOutside">
        <span v-if="showRightPopup" class="popupRight">{{description}}</span>
        <span v-if="showUpPopup" class="popupTop">{{description}}</span>
        <span v-if="showLeftPopup" class="popupLeft">{{description}}</span>
    </span>
</template>

<style scoped lang="scss">
.popup {
  position: fixed;
  bottom: 0;
  left: 50%;
  font-family: -apple-system, SF UI Text, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 13px;
  overflow: hidden;
  z-index: 9999999999999999999999998;
  background-color: rgba(255, 255, 255, 0.8);

  & > img {
    display: block;
    cursor: pointer;
  }

  & > .popupRight {
    display: block;
    position: absolute;
    top: calc(100% - 10px); // 10px 是 info icon直徑的一半
    left: calc(100% + 14px); // 14 = 8 (margin) + 6 (三角寬高)
    transform: translateY(-50%);
    padding: 16px;
    width: 270px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    line-height: 1.5;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    white-space: normal;
    z-index: 10;

    &::before {
      display: block;
      content: '';
      position: absolute;
      left: 0%;
      bottom: 50%;
      margin-left: -6px;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 6px solid #000;
      transform: translateY(50%) rotate(-90deg);
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      left: 0%;
      bottom: 50%;
      margin-bottom: 0px;
      margin-left: -6px;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 6px solid white;
      transform: translateY(50%) rotate(-90deg);
    }
  }

  & .popupTop {
    display: block;
    position: absolute;
    // top: -60px;
    bottom: 0;
    left: 10px;
    transform: translate(-50%, -50%);
    padding: 16px;
    width: 200px;
    max-width: 390px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    line-height: 1.5;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    // white-space: pre-wrap;
    z-index: 10;

    &::before {
      display: block;
      content: '';
      position: absolute;
      left: 50%;
      top: calc(100% - 3px);
      margin-left: -3px;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 6px solid #000;
      transform: translateY(50%) rotate(-180deg);
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      left: 50%;
      top: calc(100% - 3px);
      margin-bottom: -1.5px;
      margin-left: -3px;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 6px solid white;
      transform: translateY(50%) rotate(-180deg);
    }
  }

  & .popupLeft {
    display: block;
    position: absolute;
    bottom: 50%;
    left: 12px;
    transform: translate(-98%, -20px);
    padding: 16px;
    width: 200px;
    max-width: 390px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    line-height: 1.5;
    background-color: #eee;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    z-index: 10;

    &::before {
      display: block;
      content: '';
      position: absolute;
      left: calc(100% - 6px);
      top: 100%;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 6px solid #eee;
      transform: translate(-50%, 0) rotate(180deg);
      /* filter: drop-shadow(0 2px 10px #000); */
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      left: calc(100% - 6px);
      top: 100%;
      margin-bottom: -1.5px;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 6px solid #eee;
      transform: translate(-50%, 0) rotate(180deg);
      filter: drop-shadow(0 2px 10px #000);
    }
  }
}
</style>
