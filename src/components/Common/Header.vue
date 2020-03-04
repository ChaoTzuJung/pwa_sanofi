<script>
import IosBack from 'assets/images/ios_back.svg';

export default {
  name: 'Header',
  data() {
    return {
      IosBack,
    };
  },
  computed: {
    isPwa() {
      return window.isMobileDevice && window.isPwa;
    },
    headerTitle() {
      if (this.$route.path === '/') return 'home';
      return this.$route.path.split('/')[1];
    },
  },
  methods: {
    async openDialog() {
      if (this.isPwa) return;
      await this.$store.dispatch('toggleComfirm', { type: 'leaveConfirm' });
    },
  },
};
</script>

<template>
  <header :class="{'pwa-header': isPwa}">
    <transition name="fade">
      <div
        class="back-btn"
        v-if="headerTitle !== 'home'"
        @click="$router.go(-1)"
      >
        <img :src="IosBack"/>
      </div>
    </transition>
    <transition name="fade">
      <div class="title-text" v-if="headerTitle !== 'home'">
        {{headerTitle}}
      </div>
    </transition>
    <transition name="fade">
      <a @click="openDialog()" v-if="headerTitle === 'home'">
        <div class="logo"></div>
        <div class="separate"></div>
        <div class="sublogo"></div>
      </a>
    </transition>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  background: #fff;
  padding: 20px 0;
  padding-left: 40px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 769px) {
    padding: 16px 0;
    padding-left: 20px;
    position: relative;
  }

  & > .back-btn {
    display: none;
    position: absolute;
    left: 6px;
    bottom: 8px;
    transform: scale(0.8);
    cursor: pointer;

    &:focus, &:active {
      opacity: 0.6;
    }
  }

  & > .title-text {
    font-size: 14px; // or 15px
    font-weight: 300; // semibold
    text-transform: capitalize;
  }

  & > a {
    display: inline-flex;
    vertical-align: bottom;
    align-items: center;

    & > .logo {
      background-image: url('~assets/images/logo.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100px;
      height: 16px;
      transform: translateY(-4%);

      @media screen and (max-width: 769px) {
        background-image: url('~assets/images/logo-m.svg');
        width: 80px;
        height: 14px;
        transform: translateY(-5%);
      }
    }

    & > .separate {
      height: 16px;
      width: 1px;
      margin: 0 10px;
      background-color: rgba(82, 92, 163, 0.5);

      @media screen and (max-width: 769px) {
        height: 14px;
      }
    }

    & > .sublogo {
      background-image: url('~assets/images/sub-logo.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 104px;
      height: 22px;

      @media screen and (max-width: 769px) {
        background-image: url('~assets/images/sub-logo-m.svg');
        width: 76px;
        height: 16px;
      }
    }
  }
}

.pwa-header {
  @media screen and (max-width: 769px) {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 12px 0;
    padding-left: 0;
    z-index: 999;
  }

  & > .back-btn {
    display: block;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
