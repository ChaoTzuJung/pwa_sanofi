<script>
import { mapState } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'Modal',
  props: ['title', 'imageGroup', 'infos', 'selectId', 'body', 'grids', 'isModalOpen'],
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      open: false,
      selected: false,
      addBorder: 'border: solid 4px #bcbc1c',
      images: this.imageGroup,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height - 60,
      pickedImage: '',
      positionY: 0,
    };
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
  // 單一來源可以用set()，多重來源不ok
  computed: {
    ...mapState({
      area: state => state.area,
    }),
    symptomscore: {
      get() {
        if (this.area[this.body].SymptomScore[this.title] === '0') {
          return this.selected;
        }
        return this.area[this.body].SymptomScore[this.title];
      },
      set(val) {
        this.selected = true;
        this.$store.commit('setSymptomScore', { body: this.body, symptom: this.title, val });
      },
    },
    slides() {
      if (this.selectId === 'None') {
        return [
          {
            image: this.images[0],
            name: 'None',
            score: 0,
            info: this.infos[0],
          },
          {
            image: this.images[1],
            name: 'Mild',
            score: 1,
            info: this.infos[1],
          },
          {
            image: this.images[2],
            name: 'Moderate',
            score: 2,
            info: this.infos[2],
          },
          {
            image: this.images[3],
            name: 'Severe',
            score: 3,
            info: this.infos[3],
          },
          {
            image: this.divide,
          },
        ];
      } if (this.selectId === 'Mild') {
        return [
          {
            image: this.images[1],
            name: 'Mild',
            score: 1,
            info: this.infos[1],
          },
          {
            image: this.images[2],
            name: 'Moderate',
            score: 2,
            info: this.infos[2],
          },
          {
            image: this.images[3],
            name: 'Severe',
            score: 3,
            info: this.infos[3],
          },
          {
            image: this.divide,
          },
          {
            image: this.images[0],
            name: 'None',
            score: 0,
            info: this.infos[0],
          },
        ];
      } if (this.selectId === 'Moderate') {
        return [
          {
            image: this.images[2],
            name: 'Moderate',
            score: 2,
            info: this.infos[2],
          },
          {
            image: this.images[3],
            name: 'Severe',
            score: 3,
            info: this.infos[3],
          },
          {
            image: this.divide,
          },
          {
            image: this.images[0],
            name: 'None',
            score: 0,
            info: this.infos[0],
          },
          {
            image: this.images[1],
            name: 'Mild',
            score: 1,
            info: this.infos[1],
          },
        ];
      } if (this.selectId === 'Severe') {
        return [
          {
            image: this.images[3],
            name: 'Severe',
            score: 3,
            info: this.infos[3],
          },
          {
            image: this.divide,
          },
          {
            image: this.images[0],
            name: 'None',
            score: 0,
            info: this.infos[0],
          },
          {
            image: this.images[1],
            name: 'Mild',
            score: 1,
            info: this.infos[1],
          },
          {
            image: this.images[2],
            name: 'Moderate',
            score: 2,
            info: this.infos[2],
          },
        ];
      }
      return [
        {
          image: this.images[0],
          name: 'None',
          score: 0,
          info: this.infos[0],
        },
        {
          image: this.images[1],
          name: 'Mild',
          score: 1,
          info: this.infos[1],
        },
        {
          image: this.images[2],
          name: 'Moderate',
          score: 2,
          info: this.infos[2],
        },
        {
          image: this.images[3],
          name: 'Severe',
          score: 3,
          info: this.infos[3],
        },
        {
          image: this.divide,
        },
      ];
    },
    modalTitle() {
      if (this.title === 'EdemaPapulation') {
        return 'Edema / papulation';
      }
      return this.title;
    },
    clickGrid() {
      if (this.symptomscore === 0) {
        if (this.selectId === 'None') {
          return [true, false, false, false, false];
        }

        if (this.selectId === 'Mild') {
          return [false, false, false, false, true];
        }

        if (this.selectId === 'Moderate') {
          return [false, false, false, true, false];
        }

        if (this.selectId === 'Severe') {
          return [false, false, true, false, false];
        }
      }

      if (this.symptomscore === 1) {
        if (this.selectId === 'None') {
          return [false, true, false, false, false];
        }

        if (this.selectId === 'Mild') {
          return [true, false, false, false, false];
        }

        if (this.selectId === 'Moderate') {
          return [false, false, false, false, true];
        }

        if (this.selectId === 'Severe') {
          return [false, false, false, true, false];
        }
      }

      if (this.symptomscore === 2) {
        if (this.selectId === 'None') {
          return [false, false, true, false, false];
        }

        if (this.selectId === 'Mild') {
          return [false, true, false, false, false];
        }

        if (this.selectId === 'Moderate') {
          return [true, false, false, false, false];
        }

        if (this.selectId === 'Severe') {
          return [false, false, false, false, true];
        }
      }

      if (this.symptomscore === 3) {
        if (this.selectId === 'None') {
          return [false, false, false, true, false];
        }

        if (this.selectId === 'Mild') {
          return [false, false, true, false, false];
        }

        if (this.selectId === 'Moderate') {
          return [false, true, false, false, false];
        }

        if (this.selectId === 'Severe') {
          return [true, false, false, false, false];
        }
      }

      if (!this.symptomscore) {
        return [false, false, false, false, false];
      }

      return [false, false, false, false, false];
    },
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
          score = NaN;
          break;
      }
      return score;
    },
    swiper() {
      return this.$refs.swiper.swiper;
    },
    haveRelativeImage() {
      return this.grids[this.pickedScore].relative.length > 1;
    },
  },
  watch: {
    selected() {
      if (this.title === 'Erythema') {
        this.$store.commit('setSymptomCompleted', { body: this.body, symptom: 'ERYTHEMA', completed: true });
      }

      if (this.title === 'EdemaPapulation') {
        this.$store.commit('setSymptomCompleted', { body: this.body, symptom: 'EDEMAPAPULATION', completed: true });
      }

      if (this.title === 'Excoriation') {
        this.$store.commit('setSymptomCompleted', { body: this.body, symptom: 'EXCORIATION', completed: true });
      }

      if (this.title === 'Lichenification') {
        this.$store.commit('setSymptomCompleted', { body: this.body, symptom: 'LICHENIFICATION', completed: true });
      }

      this.$store.commit('checkSymptomCompleted', { body: this.body });
    },
    selectId() {
      this.pickedImage = this.selectId;
    },
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
};
</script>

<template>
    <transition name="modal" v-if="open">
        <div>
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="close" @click="$emit('close')"></div>
                        <div class="switch">
                            <div class="modal-title">
                                {{modalTitle}}
                                <div class="current-name">{{pickedImage}}: {{pickedScore}}</div>
                            </div>
                            <div class="tab-menu">
                                <div
                                  class="tab"
                                  v-for="grid in grids"
                                  :key="grid.name"
                                  @click="changeTab(grid.name)"
                                >
                                    <img
                                      :src="grid.image"
                                      :class="{'img-picked': pickedImage === grid.name}"
                                    />
                                    <div
                                      class="name"
                                      :class="{'name-picked': pickedImage === grid.name}">
                                        {{grid.name}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider">
                            <!-- swiper -->
                            <swiper ref="swiper">
                                <swiperSlide
                                  v-for="(imgurl, idx) in grids[pickedScore].relative"
                                  :key="idx">
                                    <img :src="imgurl" :alt="idx" v-if="imgurl" />
                                </swiperSlide>
                            </swiper>
                            <a
                              v-if="haveRelativeImage"
                              class="swiper-navigation is-previous"
                              @click="swiper.slidePrev()"></a>
                            <a
                              v-if="haveRelativeImage"
                              class="swiper-navigation is-next"
                              @click="swiper.slideNext()"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: table;
    transition: opacity .3s ease;

    & > .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        height: 100%;

        & > .modal-container {
            position: relative;
            width: 100%;
            height: 100%;
            margin: 0px auto;
            background-color: #fff;
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

            & > .close {
                position: absolute;
                top: 0;
                right: 0;
                width: 40px;
                height: 40px;
                background-color: #525ca3;
                cursor: pointer;

                &:before {
                    content: ' ';
                    position: absolute;
                    left: 50%;
                    top: 28%;
                    height: 18px;
                    width: 1px;
                    background-color: #ffffff;
                    transform: rotate(45deg);
                }

                &:after {
                    content: ' ';
                    position: absolute;
                    left: 50%;
                    top: 28%;
                    height: 18px;
                    width: 1px;
                    background-color: #ffffff;
                    transform: rotate(-45deg);
                }
            }

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
    }
}
</style>
