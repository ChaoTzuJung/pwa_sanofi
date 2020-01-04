<script>
const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const FrontBody = `${IMG_PATH}/asset/pic/2019-10-14-07-26-54-0d7fc8360f6da65a7e027be38d6386c5.png`;
const BackBody = `${IMG_PATH}/asset/pic/2019-10-14-07-27-06-b422ea33946d566b737cad843992ccce.png`;
const smallFrontBody = `${IMG_PATH}/asset/pic/2019-10-14-07-28-59-621ddbecc052fd77953beec85e93bf81.png`;
const smallBackBody = `${IMG_PATH}/asset/pic/2019-10-14-07-29-11-2ade2af10e7574b11b0130c20f810d32.png`;

export default {
  name: 'BodyImage3',
  data() {
    return {
      FrontBody,
      BackBody,
      smallFrontBody,
      smallBackBody,
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
      <img class="desktop" :src="FrontBody" @load="showImage1=true">
      <img class="mobile" :src="smallFrontBody" @load="showImage1=true">
      <div class="score" v-if="showImage1">
        <div class="percentage scoreA">55%</div>
        <div class="percentage scoreB">55%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showImage2">Back</div>
      <img class="desktop" :src="BackBody" @load="showImage2=true">
      <img class="mobile" :src="smallBackBody" @load="showImage2=true">
      <div class="score" v-if="showImage2">
        <div class="percentage scoreA">45%</div>
        <div class="percentage scoreB">45%</div>
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
      width: 51px;
      height: 28px;
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
      top: 170px;
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
        background: #fbba00;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
        opacity: 0;
      }

      & > .percentage.scoreB {
        background: #fbba00;
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
      top: 170px;
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
        background: #fbba00;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
        opacity: 0;
      }

      & > .percentage.scoreB {
        background: #fbba00;
      }
    }
  }
}
</style>
