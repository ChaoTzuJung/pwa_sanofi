<script>
export default {
  name: 'Header',
  methods: {
    async openDialog() {
      await this.$store.dispatch('toggleComfirm', { type: 'leaveConfirm' });
    },
  },
};
</script>

<template>
  <header>
    <a @click="openDialog()">
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
  padding: 16px 0;
  padding-left: 20px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 769px) {
    padding-left: 40px;
  }

  & > a {
    display: flex;
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
</style>
