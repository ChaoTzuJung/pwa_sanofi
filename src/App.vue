<script>
import Header from 'components/Common/Header.vue';
import Footer from 'components/Common/Footer.vue';
import Dialog from 'components/Common/Dialog.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
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
    <keep-alive v-if="$route.meta.keepAlive">
      <transition :name="isPwa ? `fade-in-${direction}` : ''">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <transition :name="isPwa ? `fade-in-${direction}` : ''">
      <router-view v-if="!$route.meta.keepAlive">
      </router-view>
    </transition>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
// 下一頁
@keyframes fadeInRight {
  from {
    transform: translate3d(40px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-right-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-right-enter {
  opacity: 0;
  transform: translate3d(40px, 0, 0);
}

.fade-in-right-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInRight;
}

@keyframes fadeInLeft {
  from {
    transform: translate3d(-40px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1
  }
}

.fade-in-left-leave-to {
  opacity: 0;
  transition: opacity .3s;
}

.fade-in-left-enter {
  opacity: 0;
  transform: translate3d(-40px, 0, 0);
}

.fade-in-left-enter-to {
  opacity: 0;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeInLeft;
}
</style>
