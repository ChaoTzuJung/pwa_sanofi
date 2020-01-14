<script>
import Info from 'assets/images/info.svg';

export default {
  name: 'Info',
  props: ['description', 'direction'],
  data() {
    return {
      showTooltip: false,
      Info,
    };
  },
  methods: {
    onClickOutside() {
      this.showTooltip = false;
    },
  },
  computed: {
    showRightTooltip() {
      return this.showTooltip && this.direction === 'right';
    },
    showUpTooltip() {
      return this.showTooltip && this.direction === 'up';
    },
    showLeftTooltip() {
      return this.showTooltip && this.direction === 'left';
    },
  },

};
</script>

<template>
    <span class="info" v-click-outside="onClickOutside">
        <img
            class="icon"
            :src="Info"
            @click="showTooltip=!showTooltip"
        />
        <span v-if="showRightTooltip" class="tooltipRight">{{description}}</span>
        <span v-if="showUpTooltip" class="tooltipUp">{{description}}</span>
        <span v-if="showLeftTooltip" class="tooltipLeft">{{description}}</span>
    </span>
</template>

<style scoped lang="scss">
.info {
  position: relative;

  & > img {
    display: block;
    cursor: pointer;
  }

  & > .tooltipRight {
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

  & .tooltipUp {
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

  & .tooltipLeft {
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
