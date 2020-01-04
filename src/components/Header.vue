<script>
const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const Logo = `${IMG_PATH}/asset/pic/2019-10-14-06-58-55-8a6d8a174bb4ebee7be31d363b1024df.png`;
const subLogo = `${IMG_PATH}/asset/pic/2019-10-14-06-56-22-64cfc3fc4dee84690adfbb6dbfd37c6d.png`;
const smallLogo = `${IMG_PATH}/asset/pic/2019-10-14-07-03-24-c4ab3f1664c7c69e0a8d5c0f34b8601c.png`;
const smallsubLogo = `${IMG_PATH}/asset/pic/2019-10-14-07-02-49-a4fc0bbc31640192ed7f8644d7edffc1.png`;

export default {
  name: 'Header',
  data() {
    return {
      Logo,
      subLogo,
      smallLogo,
      smallsubLogo,
    };
  },
};
</script>

<template>
  <header>
    <a @click="$emit('openDialog')">
      <img class="desktop" :src="Logo" >
      <img class="mobile" :src="smallLogo">
      <div class="separate"></div>
      <img class="desktop" :src="subLogo">
      <img class="mobile" :src="smallsubLogo">
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
    align-items: baseline;

    & > .separate {
      height: 14px;
      width: 1px;
      background-color: rgba(82, 92, 163, 0.5);
      margin: 6px 10px 0 10px;

      @media screen and (min-width: 769px) {
        height: 16px;
        margin: 6px 16px 0 16px;
      }
    }

    & > img {
      object-fit: contain;
    }

    & > span {
      margin-top: 6px;
      margin-left: 10px;
      font-weight: bold;
    }

    & > .desktop {
      display: none;

      @media screen and (min-width: 769px) {
        display: block;
      }
    }

    & > .mobile {
      display: block;

      @media screen and (min-width: 769px) {
        display: none;
      }
    }
  }
}
</style>
