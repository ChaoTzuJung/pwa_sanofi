<script>
import { mapState } from 'vuex';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Modal from 'components/Common/Modal.vue';
import Info from 'components/Common/Info.vue';
import generateGrids from 'utils/generateGrids';

export default {
  name: 'Grid3',
  components: {
    Modal,
    Info,
    Carousel3d,
    Slide,
  },
  data() {
    return {
      selected: false,
      showModal: false,
      selectId: null,
      grids: [],
    };
  },
  // 單一來源可以用set()，多重來源不ok
  computed: {
    ...mapState({
      area: state => state.area,
    }),
    modalImages() {
      return this.grids.map(({ image }) => image);
    },
    modalInfos() {
      return this.grids.map(({ info }) => info);
    },
    symptomscore: {
      get() {
        if (this.area[this.$attrs.body].SymptomScore.Excoriation === '0') {
          return this.selected;
        }
        return this.area[this.$attrs.body].SymptomScore.Excoriation;
      },
      set(val) {
        this.selected = true;
        this.$store.commit('setSymptomScore', { body: this.$attrs.body, symptom: 'Excoriation', val });
      },
    },
  },
  methods: {
    // gridName: None, Mild, Moderate, Server
    openModal(gridName) {
      this.showModal = true;
      this.selectId = gridName;
    },
    closeModal() {
      this.showModal = false;
    },
    // val: 0, 1, 2, 3
    triggerComputed(gridScore) {
      this.selected = true;
      this.$store.commit('setSymptomScore', { body: this.$attrs.body, symptom: 'Excoriation', val: gridScore });
    },
  },
  watch: {
    selected() {
      this.$store.commit('setSymptomCompleted', { body: this.$attrs.body, symptom: 'EXCORIATION', completed: true });
      this.$store.commit('checkSymptomCompleted', { body: this.$attrs.body });
    },
  },
  created() {
    this.grids = generateGrids('Excoriation', 'Head & Neck');
  },
};
</script>

<template>
    <div>
        <Modal
            title="Excoriation"
            :imageGroup = "modalImages"
            :infos= "modalInfos"
            :selectId="selectId"
            :isModalOpen="showModal"
            :body="$attrs.body"
            :type="$attrs.type"
            :grids="grids"
            @close="closeModal"
        >
        </Modal>
        <div class="grid-three desktop">
            <div class="grid"   :key="grid.name" v-for="grid in grids">
                <div class="imgbox">
                    <div
                        class="img"
                        :style="{backgroundImage: 'url(' + grid.image + ')'}"
                        @click="openModal(grid.name)"
                    >
                      <img class="resize" :src="grid.icon" />
                    </div>
                    <div class="select">
                        <label :for="grid.label" class="container">
                            <input
                                type="radio"
                                :id="grid.label"
                                :value="grid.score"
                                v-model="symptomscore"
                            >
                            <span class="checkmark"></span>
                        </label>
                        <div class="check-score">{{grid.name}}: {{grid.score}}</div>
                        <Info v-if="grid.info" :description="grid.info" direction='right'></Info>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-three mobile">
            <carousel-3d
                class="grids"
                :disable3d="true"
                :space="315"
                :clickable="false"
                :controls-visible="false"
                :startIdex="1"
                :border="0"
                :loop="true"
                :display="4"
                :width="300"
                :height="340"
                :minSwipeDistance="100"
            >
                <slide
                    class="carousel-3d-slide grid"
                    :key="grid.name"
                    v-for="(grid, i) in grids"
                    :index="i"
                >
                    <div class="imgbox">
                        <div
                            class="img"
                            :style="{backgroundImage: 'url(' + grid.image + ')'}"
                            @click="openModal(grid.name)"
                        >
                          <img class="resize" :src="grid.icon" />
                        </div>
                        <!-- id 與 for 決定check綁定的label與radio -->
                        <div class="select">
                            <label :for="grid.label" class="container">
                                <input
                                    type="radio"
                                    :id="grid.label"
                                    :value="grid.score"
                                    v-model="symptomscore"
                                >
                                <span class="checkmark"></span>
                            </label>
                            <div class="check-score">{{grid.name}}: {{grid.score}}</div>
                            <Info
                              v-if="grid.info"
                              :description="grid.info"
                              direction='left'
                              style="margin-left: auto;"
                            >
                            </Info>
                        </div>
                    </div>
                </slide>
            </carousel-3d>
        </div>
    </div>
</template>

<style scoped lang="scss">
.grid-three {
  display: flex;
  width: 100vw;
  margin-bottom: 20px;

  @media screen and (min-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  & > .grid {
    width: 50%;
    padding: 20px 0;

    @media screen and (min-width: 769px) {
      padding: 20px;
    }

    &:nth-child(2n) {
      padding-right: 0;
    }

    &:nth-child(2n + 1) {
      padding-left: 0;
    }

    & > .imgbox {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;

      & > .resize {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        margin: 20px;
      }

      & > .img {
        width: 100%;
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @media screen and (min-width: 769px) {
          height: 452px;
        }

        & > .resize {
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 20px;
          margin: 20px;
        }
      }

      & > .select {
        display: flex;
        align-items: center;
        margin-top: 20px;

        & > .container {
          display: block;
          position: relative;
          padding: 0;
          margin: 0;
          height: 20px;
          width: 20px;
          cursor: pointer;

          & > input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;

            // 當點擊時的顏色
            &:checked ~ .checkmark {
              background-color: #bcbc1c;
            }

            // 當點擊時的勾勾顯示
            &:checked ~ .checkmark:after {
              display: block;
            }

            &:checked ~ .checkmark.customColor {
              background-color: #525ca3;
            }

            &:checked ~ .checkmark.customColor:after {
              display: block;
            }
          }

          // ratio 製作
          & > .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #ffffff;
            border: 2px solid #bcbc1c;
            border-radius: 50%;

            // 當點擊ratio時的勾勾製作
            &:after {
              content: '';
              position: absolute;
              display: none;
              left: 6px;
              top: -1px;
              width: 6px;
              height: 12px;
              border: solid white;
              border-width: 0 1px 1px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }

          & > .checkmark.customColor {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #ffffff;
            border: 2px solid #525ca3;
            border-radius: 50%;

            &:after {
              content: '';
              position: absolute;
              display: none;
              left: 6px;
              top: -1px;
              width: 6px;
              height: 12px;
              border: solid white;
              border-width: 0 1px 1px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
        }

        & > .check-score {
          margin: 0 10px;
          font-size: 24px;
          font-weight: 300;
          line-height: 1.33;
          color: #333333;
          line-height: 25px;
          height: 20px;
        }
      }
    }
  }

  // for mobile
  & .carousel-3d-container {
    & > .carousel-3d-slider {
      & > .grid {
        background: #fff;
        padding: 20px 0;
        width: 50%;

        @media screen and (min-width: 769px) {
          width: 50%;
          padding: 20px;
        }

        &:nth-child(2n) {
          padding-right: 0;
        }

        &:nth-child(2n + 1) {
          padding-left: 0;
        }

        & > .imgbox {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: absolute;
          top: 0;

          & > .img {
            width: 100%;
            height: 300px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            @media screen and (min-width: 769px) {
              height: 452px;
            }

            & > .resize {
              position: absolute;
              top: 0;
              right: 0;
              width: 20px;
              height: 20px;
              margin: 20px;
            }
          }

          & > .select {
            display: flex;
            align-items: center;
            margin-top: 10px;

            & > .container {
              display: block;
              position: relative;
              padding: 0;
              margin: 0;
              height: 20px;
              width: 20px;
              cursor: pointer;

              & > input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;

                // 當點擊時的顏色
                &:checked ~ .checkmark {
                  background-color: #bcbc1c;
                }

                // 當點擊時的勾勾顯示
                &:checked ~ .checkmark:after {
                  display: block;
                }

                &:checked ~ .checkmark.customColor {
                  background-color: #525ca3;
                }

                &:checked ~ .checkmark.customColor:after {
                  display: block;
                }
              }

              // ratio 製作
              & > .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 20px;
                width: 20px;
                background-color: #ffffff;
                border: 2px solid #bcbc1c;
                border-radius: 50%;

                // 當點擊ratio時的勾勾製作
                &:after {
                  content: '';
                  position: absolute;
                  display: none;
                  left: 6px;
                  top: -1px;
                  width: 6px;
                  height: 12px;
                  border: solid white;
                  border-width: 0 1px 1px 0;
                  -webkit-transform: rotate(45deg);
                  -ms-transform: rotate(45deg);
                  transform: rotate(45deg);
                }
              }

              & > .checkmark.customColor {
                position: absolute;
                top: 0;
                left: 0;
                height: 20px;
                width: 20px;
                background-color: #ffffff;
                border: 2px solid #525ca3;
                border-radius: 50%;

                &:after {
                  content: '';
                  position: absolute;
                  display: none;
                  left: 6px;
                  top: -1px;
                  width: 6px;
                  height: 12px;
                  border: solid white;
                  border-width: 0 1px 1px 0;
                  -webkit-transform: rotate(45deg);
                  -ms-transform: rotate(45deg);
                  transform: rotate(45deg);
                }
              }
            }

            & > .check-score {
              margin: 0 10px;
              font-size: 24px;
              font-weight: 300;
              line-height: 1.33;
              color: #333333;
              line-height: 25px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}

.desktop {
  display: none;

  @media screen and (min-width: 769px) {
    display: flex;
  }
}

.mobile {
  display: flex;

  @media screen and (min-width: 769px) {
    display: none;
  }
}
</style>
