<script>
import Button from 'components/Common/Button.vue';

const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const Banner = `${IMG_PATH}/asset/pic/2019-10-14-06-55-47-a93525992c75a11cee708cc7089c8db3.png`;

export default {
  name: 'Banner',
  components: {
    Button,
  },
  data() {
    return {
      Banner,
    };
  },
};
</script>

<template>
  <div class="banner">
    <div class="imgbox">
      <div class="img" :style="{backgroundImage: 'url(' + Banner + ')'}"></div>
      <div class="watermark">
        <div class="top">
          <h1 class="bold">EASI</h1>
          <h1 class="medium">score</h1>
        </div>
        <div class="bottom">
          <h2>
            Quickly calculate the eczema area and severity index to
            determine atopic dermatitis severity.
          </h2>
          <div class="button-section">
            <div class="button-wrapper">
              <Button text="Tutorial Version" link="/calculator" />
              <div class="btn-detail">Step by step guide</div>
            </div>
            <div class="button-wrapper">
              <Button text="Quick Version" link="/faster" color="#525ca3" />
              <div class="btn-detail">Faster calculation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100%;
  min-height: 245px;
  overflow: hidden;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );

  @media screen and (min-width: 769px) {
    min-height: 204px;
  }

  & > .imgbox {
    width: 100%;
    height: 100%;
    min-height: 245px;
    position: relative;

    @media screen and (min-width: 769px) {
      min-height: 204px;
    }

    & > h1 {
      color: #fff;
    }

    & > .img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    & > .watermark {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 20px;
      z-index: 10;
      top: 0%;
      left: 0%;
      color: #ffffff;

      @media screen and (min-width: 769px) {
        padding: 40px;
      }

      & > .top {
        display: flex;
        color: #ffffff;
        margin-bottom: 5px;

        @media screen and (min-width: 769px) {
          margin-bottom: 20px;
        }

        & > .bold {
          font-weight: 700;
          font-size: 32px;

          @media screen and (min-width: 769px) {
            font-size: 40px;
          }
        }

        & > .medium {
          font-weight: 500;
          font-size: 32px;

          @media screen and (min-width: 769px) {
            font-size: 40px;
          }
        }
      }

      & > .bottom {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 769px) {
          flex-direction: row;
          justify-content: space-between;
        }

        & > h2 {
          width: 100%;
          color: #ffffff;
          font-weight: 300;
          font-size: 16px;

          @media screen and (min-width: 769px) {
            width: 500px;
            font-size: 20px;
          }
        }

        & > .button-section {
          display: flex;
          justify-content: space-around;
          margin-top: 26px;
          width: 100%;

          @media screen and (min-width: 769px) {
            margin: 0 0 0 0;
            width: auto;
          }

          & > .button-wrapper {
            display: flex;
            flex-direction: column;

            &:first-child {
              /* margin-right: 15px; */

              @media screen and (min-width: 769px) {
                margin-right: 24px;
              }
            }

            & > .btn-detail {
              display: none;
              text-align: center;
              margin-top: 8px;
              font-family: Arial;
              font-size: 14px;
              line-height: 1.57;

              @media screen and (min-width: 769px) {
                display: block;
              }
            }

            // button
            & > div.button {
              width: 160px;
              height: 50px;
              font-size: 16px;

              @media screen and (min-width: 769px) {
                width: 235px;
                min-height: 50px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
