<script>
const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const FrontLowerLeg = `${IMG_PATH}/asset/pic/2019-10-14-07-27-18-2fc3b7ce423ee95e7bb435d74e5befe4.png`;
const BackLowerLeg = `${IMG_PATH}/asset/pic/2019-10-14-07-27-30-e11fd1b17a99de9a034f015d7b36419f.png`;
const smallFrontLowerLeg = `${IMG_PATH}/asset/pic/2019-10-14-07-29-21-ccb018c1f67538e9623adeb0375728a3.png`;
const smallBackLowerLeg = `${IMG_PATH}/asset/pic/2019-10-14-07-29-30-5dc77c29fb285d704131ea6abc1dede0.png`;

export default {
  name: 'BodyImage4',
  data() {
    return {
      FrontLowerLeg,
      BackLowerLeg,
      smallFrontLowerLeg,
      smallBackLowerLeg,
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
      <img class="desktop" :src="FrontLowerLeg" @load="showImage1=true">
      <img class="mobile" :src="smallFrontLowerLeg" @load="showImage1=true">
      <div class="score" v-if="showImage1">
        <div class="percentage scoreA">22.5%</div>
        <div class="percentage scoreB">22.5%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showImage2">Back</div>
      <img class="desktop" :src="BackLowerLeg" @load="showImage2=true">
      <img class="mobile" :src="smallBackLowerLeg" @load="showImage2=true">
      <div class="score-top" v-if="showImage2">
        <div class="percentage scoreC">10%</div>
      </div>
      <div class="score" v-if="showImage2">
        <div class="percentage scoreA">22.5%</div>
        <div class="percentage scoreB">22.5%</div>
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
      top: 320px;
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
        background: #bcbc1c;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
      }

      & > .percentage.scoreB {
        background: #bcbc1c;
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

    & > .score-top {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      position: absolute;
      top: 240px;
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

      & > .percentage.scoreC {
        background: #bcbc1c;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
        background-color: #dddd8d;
      }
    }

    & > .score {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 320px;
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
        background: #bcbc1c;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
      }

      & > .percentage.scoreB {
        background: #bcbc1c;
      }
    }
  }
}
</style>
