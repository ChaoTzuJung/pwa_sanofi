<script>
const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const FrontUpperArm = `${IMG_PATH}/asset/pic/2019-10-14-07-26-30-e459d84c0be98f60d78e7f300114042b.png`;
const BackUpperArm = `${IMG_PATH}/asset/pic/2019-10-14-07-26-42-951a4935336e58e97f4ddb25dbbda486.png`;
const smallFrontUpperArm = `${IMG_PATH}/asset/pic/2019-10-14-07-28-10-5b7d29d92971e65409dbca49318d41d3.png`;
const smallBackUpperArm = `${IMG_PATH}/asset/pic/2019-10-14-07-28-21-f49d24e9e2342286492aec68a32c4614.png`;

export default {
  name: 'BodyImage2',
  data() {
    return {
      FrontUpperArm,
      BackUpperArm,
      smallFrontUpperArm,
      smallBackUpperArm,
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
      <img class="desktop" :src="FrontUpperArm" @load="showImage1=true">
      <img class="mobile"  :src="smallFrontUpperArm" @load="showImage1=true">
      <div class="score" v-if="showImage1">
        <div class="percentage scoreA">25%</div>
        <div class="percentage scoreB">25%</div>
      </div>
    </div>
    <div class="back">
      <div class="title" v-if="showImage2">Back</div>
      <img class="desktop" :src="BackUpperArm" @load="showImage2=true">
      <img class="mobile"  :src="smallBackUpperArm" @load="showImage2=true">
      <div class="score" v-if="showImage2">
        <div class="percentage scoreA">25%</div>
        <div class="percentage scoreB">25%</div>
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
      top: 240px;
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
        background: #00a590;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
      }

      & > .percentage.scoreB {
        background: #00a590;
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

      & > .percentage.scoreA {
        background: #00a590;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
      }

      & > .percentage.scoreB {
        background: #00a590;
      }
    }
  }
}
</style>
