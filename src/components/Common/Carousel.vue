<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'Carousel',
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    data: {
      require: true,
      type: Array,
    },
    current: {
      require: false,
      default: 'None',
      type: String,
    },
  },
  data() {
    return {
      title: this.data[0].label.split('_')[0], // Erythema
      images: this.imageGroup,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height - 60,
      pickedImage: this.current,
      positionY: 0,
    };
  },
  computed: {
    pickedScore() {
      let score;
      switch (this.pickedImage) {
        case 'None':
          score = 0;
          break;
        case 'Mild':
          score = 1;
          break;
        case 'Moderate':
          score = 2;
          break;
        case 'Severe':
          score = 3;
          break;
        default:
          score = 0;
      }
      return score;
    },
    swiper() {
      return this.$refs.swiper.swiper;
    },
    haveRelativeImage() {
      return this.data[this.pickedScore].relative.length > 1;
    },
  },
  watch: {
    isModalOpen() {
      this.open = this.isModalOpen;
    },
    open() {
      if (this.open) {
        this.positionY = window.scrollY;
        document.body.style.position = 'fixed';
      } else {
        document.body.style.position = 'static';
        window.scrollTo(0, this.positionY);
      }
    },
  },
  methods: {
    changeTab(gridName) {
      this.pickedImage = gridName;
      // 如果modal內有relative image，雖然swiper有左右切換過圖片，在開啟其他Modal時，swiper內的relative image還是要先呈現在第一張
      if (this.haveRelativeImage) {
        this.swiper.slideTo(0);
      }
    },
  },
};
</script>

<template>
  <div class="carousel">
    <div class="switch">
      <div class="modal-title">
        {{title}}
        <div class="current-name">{{pickedImage}}: {{pickedScore}}</div>
      </div>
      <div class="tab-menu">
        <div class="tab" v-for="grid in data" :key="grid.name" @click="changeTab(grid.name)">
          <img :src="grid.image" :class="{'img-picked': pickedImage === grid.name}"/>
          <div class="name" :class="{'name-picked': pickedImage === grid.name}">{{grid.name}}</div>
        </div>
      </div>
    </div>
    <div class="slider">
      <swiper ref="swiper">
        <swiperSlide v-for="(imgurl, idx) in data[pickedScore].relative" :key="idx">
          <img :src="imgurl" :alt="idx" v-if="imgurl" />
        </swiperSlide>
      </swiper>
      <div
        class="swiper-navigation is-previous"
        v-if="haveRelativeImage"
        @click="swiper.slidePrev()"
      ></div>
      <div
        class="swiper-navigation is-next"
        v-if="haveRelativeImage"
        @click="swiper.slideNext()"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  & > .switch {
      @media screen and (min-width: 769px) {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 40px;
          width: 600px;
          margin: 0 auto;
      }

      & > .modal-title {
          padding: 10px 0;
          font-weight: 300;
          font-size: 20px;
          line-height: 1.5;
          letter-spacing: 0.5px;
          color: #000000;
          text-align: center;
          font-family: 'itc-avant-garde-gothic-pro', Arial, sans-serif;

          @media screen and (min-width: 769px) {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              padding: 0;
              font-weight: 700;
          }

          & > .current-name {
              display: none;

              @media screen and (min-width: 769px) {
                  display: block;
                  font-size: 20px;
                  line-height: 1.5;
                  letter-spacing: 1px;
                  font-weight: 300;
              }
          }
      }

      & > .tab-menu {
          display: flex;
          justify-content: center;

          & > .tab {
              width: 60px;
              height: 60px;
              margin-right: 20px;

              @media screen and (min-width: 769px) {
                  width: 60px;
                  height: 60px;
                  margin-right: 16px;
              }

              &:last-child {
                  margin-right: 0px;
              }

              & > img {
                  width: 100%;
                  height: 100%;
                  opacity: 0.6;
                  cursor: pointer;
              }

              & > .img-picked {
                  padding: 2px;
                  opacity: 1;
                  border: 2px solid #bcbc1c;
              }

              & > .name {
                  font-family: 'itc-avant-garde-gothic-pro', Arial, sans-serif;
                  font-size: 12px;
                  line-height: 1.5;
                  letter-spacing: normal;
                  text-align: center;
                  color: #000000;
                  opacity: 0.6;

                  @media screen and (min-width: 769px) {
                      font-size: 14px;
                  }
              }

              & > .name-picked {
                  opacity: 1;
              }
          }
      }
  }

  & > .slider {
      width: 100vw;
      height: 100vw;
      margin-top: 30px;
      position: relative;

      @media screen and (min-width: 769px) {
          width: 600px;
          height: 600px;;
          margin: 0 auto;
          margin-top: 28px;
      }

      & > .swiper-container {
          width: 100%;
          height: 100%;

          & img {
              width: 100%;
              height: 100%;
              object-fit: cover;
          }
      }

      & .swiper-navigation {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: solid 1px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          z-index: 10;
          cursor: pointer;
      }

      & .swiper-navigation.is-previous {
          left: 0;
          margin-left: 10px;

          @media screen and (min-width: 769px) {
              margin-left: -20px;
          }

          &:before {
              content: '';
              height: 20px;
              width: 20px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-image: url('https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com/asset/pic/2019-10-17-02-18-48-dfae8c7d4b32487e17ed7a652e50675e.png');
          }
      }

      & .swiper-navigation.is-next {
          right: 0;
          margin-right: 10px;

          @media screen and (min-width: 769px) {
              margin-right: -20px;
          }

          &:before {
              content: '';
              height: 20px;
              width: 20px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-image: url('https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com/asset/pic/2019-10-17-02-19-03-17fc552d0864a4996de6198b20053d8d.png');
          }
      }
  }
}
</style>
