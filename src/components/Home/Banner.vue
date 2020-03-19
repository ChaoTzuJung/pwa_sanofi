<script>
import Button from 'components/Common/Button.vue';
import Banner from 'assets/images/banner@3x.jpg';

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
          <h1 class="bold">Fit</h1>
          <h1 class="medium">ness</h1>
        </div>
        <div class="bottom">
          <h2>
            Quickly calculate the training sets, intensity and frequency to
            determine training volume.
          </h2>
          <div class="button-section">
            <div class="button-wrapper">
              <Button text="Start Calculator" link="/calculator" />
              <div class="btn-detail">Step by step guide</div>
            </div>
            <div class="button-wrapper">
              <Button text="Quick Calculator" link="/faster" color="#434244" :disable="true" />
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
  min-height: 293px;
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
    min-height: 293px;
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
        align-items: baseline;
        color: #ffffff;
        margin-bottom: 5px;

        & > .bold {
          font-weight: 700;
          line-height: 48px;
          letter-spacing: 1px;
        }

        & > .medium {
          font-weight: 500;
          line-height: 48px;
          letter-spacing: 1px;
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
          width: 320px;
          color: #ffffff;
          line-height: 1.5;
          letter-spacing: 0.4px;

          @media screen and (max-width: 769px) {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
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

              @media screen and (max-width: 769px) {
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
