<script>
const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const FrontHead = `${IMG_PATH}/asset/pic/2019-10-14-07-25-41-0822ccdfef6934af24567a4db51e3257.png`;
const BackHead = `${IMG_PATH}/asset/pic/2019-10-14-07-25-56-b75c481cb999da9ba70bf2f380a33376.png`;
const smallFrontHead = `${IMG_PATH}/asset/pic/2019-10-14-07-27-49-95ede67e4be9bf5a856a9d22d9a7ac4e.png`;
const smallBackHead = `${IMG_PATH}/asset/pic/2019-10-14-07-28-00-6ea885f20eb544b078a301417d5ef408.png`;

export default {
  name: 'BodyImage',
  data() {
    return {
      FrontHead,
      BackHead,
      smallFrontHead,
      smallBackHead,
      showImage1: false,
      showImage2: false,
    };
  },
};
</script>

<template>
  <div class="body-image">
    <div class="front">
      <div class="title" v-if="showImage1">Front</div>
      <img class="desktop" :src="FrontHead" @load="showImage1=true">
      <img class="mobile" :src="smallFrontHead" @load="showImage2=true">
      <div class="score" v-if="showImage1">
        <div class="percentage scoreA">17%</div>
        <div class="percentage scoreB">33%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showImage2">Back</div>
      <img class="desktop" :src="BackHead" @load="showImage2=true">
      <img class="mobile" :src="smallBackHead" @load="showImage2=true">
      <div class="score" v-if="showImage2">
        <div class="percentage scoreA">17%</div>
        <div class="percentage scoreB">33%</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0 40px 0;
  width: 100%;

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    margin: 60px 0;
    /* padding: 0 260px; */
  }

  & > .front {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding: 0 60px;
    margin: 0 30px;

    & > .title {
      font-size: 20px;
      font-weight: 300;
      line-height: 1.4;
      letter-spacing: 0.5px;
      color: #000000;
    }

    & > img {
      margin-top: 20px;
      margin-bottom: 25px;

      @media screen and (min-width: 769px) {
        margin-top: 40px;
        margin-bottom: 0;
      }
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

    & > .score {
      display: flex;
      justify-content: space-between;
      width: 100%;
      top: 70px;
      position: absolute;

      & > .percentage {
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        font-family: Arial;
        font-size: 20px;
        font-weight: bold;
        color: #000000;
      }

      & > .percentage.scoreA {
        background: #f7ee7f;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
      }

      & > .percentage.scoreB {
        background: #f0dd00;
        transform: translateY(-50%);
      }
    }
  }

  & > .back {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding: 0 60px;
    margin: 0 30px;

    & > .title {
      width: 51px;
      height: 28px;
      font-size: 20px;
      font-weight: 300;
      line-height: 1.4;
      letter-spacing: 0.5px;
      color: #000000;
    }

    & > img {
      margin-top: 40px;
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

    & > .score {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 70px;
      width: 100%;

      & > .percentage {
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
        font-family: Arial;
        font-size: 20px;
        font-weight: bold;
        color: #000000;
      }

      & > .percentage.scoreA {
        background: #f7ee7f;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
      }

      & > .percentage.scoreB {
        background: #f0dd00;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
