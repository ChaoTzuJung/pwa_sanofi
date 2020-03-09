<script>
import Header from 'components/Common/Header.vue';
import Dialog from 'components/Common/Dialog.vue';

export default {
  name: 'App',
  components: {
    Header,
    Dialog,
  },
  computed: {
    direction() {
      return this.$store.state.direction;
    },
    isPwa() {
      return window.isMobileDevice && window.isPwa;
    },
  },
};
</script>

<template>
  <div class="route" :style="isPwa ? {'padding-top': '49px'} : ''">
    <Dialog />
    <Header />
    <!-- <keep-alive v-if="$route.meta.keepAlive">
      <transition :name="isPwa ? `${direction}` : ''">
        <router-view style="position: absolute;right: 0;left: 0"></router-view>
      </transition>
    </keep-alive>
    <transition
      :name="isPwa ? `${direction}` : ''">
      <router-view v-if="!$route.meta.keepAlive" style="position: absolute;right: 0;left: 0">
      </router-view>
    </transition> -->
    <keep-alive>
      <transition :name="isPwa ? `${direction}` : ''">
        <router-view class="view">
        </router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<style scoped lang="scss">
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
