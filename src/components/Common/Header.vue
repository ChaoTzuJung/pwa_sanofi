<script>
export default {
  name: 'Header',
  methods: {
    async openDialog() {
      if (this.isPwa) return;
      await this.$store.dispatch('toggleComfirm', { type: 'leaveConfirm' });
    },
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
};
</script>

<template>
  <header :class="{'pwa-header': isPwa}">
    <div class="title-text" v-if="headerTitle !== 'home'">
      {{headerTitle}}
    </div>
    <a v-else @click="openDialog()">
      <div class="logo"></div>
      <div class="separate"></div>
      <div class="sublogo"></div>
    </a>
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    padding-left: 0;
  }
}
</style>
