<script>
import Header from 'components/Common/Header.vue';
import Dialog from 'components/Common/Dialog.vue';
import Popup from 'components/Common/Popup.vue';

export default {
  name: 'App',
  components: {
    Header,
    Dialog,
    Popup,
  },
  data() {
    return {
      promptInstallation: window.isIos && !window.isInStandaloneMode,
    };
  },
  computed: {
    direction() {
      return this.$store.state.direction;
    },
    isPwa() {
      return window.isMobileDevice && window.isPwa;
    },
    isOnline() {
      return this.$store.state.online;
    },
  },
  methods: {
    onScroll() {
      this.promptInstallation = false;
    },
  },
};
</script>

<template>
  <div class="route" :style="isPwa ? {'padding-top': '52px'} : ''">
    <transition name="slide">
      <div class="offlie" v-if="!isOnline && isPwa">App is offlie</div>
    </transition>
    <div
      class="overlay"
      v-if="promptInstallation"
      @scroll.once="onScroll"
      @touchmove.once="onScroll"
    >
      <Popup direction='up'></Popup>
    </div>
    <Dialog />
    <Header />
    <transition :name="isPwa ? `${direction}` : ''">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.offlie {
  position: fixed;
  top: 0;
  color: #fff;
  width: calc(100%);
  padding: 8px 0;
  background: #ea5d45;
  font-weight: 300;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  z-index: 999999;
  transition: all 1s ease-out;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  overflow: hidden;
}
.view {
  position: absolute;
  left: 0;
  right: 0;
}

@keyframes enterFromRight {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes leaveToRight {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes enterFromLeft {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes leaveToLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

.slide-enter-active, .slide-leave-active {
  transition: transform .5s;
}
.slide-enter, .slide-leave-to {
  transform: translateY(-34px);
}

/* ------------ 現在這一頁向左離開 ------------- */
.next-leave-active {
  animation: leaveToLeft .4s ease-in;
}

.next-leave-to {
  z-index: 0;
}

/* ------------ 上一頁回來 O ------------- */
.prev-enter-active {
    animation: enterFromLeft .4s ease-out;
}

.prev-enter-to {
  z-index: 1;
}

/* ------------ 下一頁進來 O ------------- */
.next-enter-active {
  animation: enterFromRight .4s ease-in;
}

.next-enter-to {
  z-index: 1;
}

/* ------------ 現在這一頁向右離開 ------------- */
.prev-leave-active {
    animation: leaveToRight .4s ease-out;
}

.prev-leave-to {
  z-index: 0;
}
</style>
