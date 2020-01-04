<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Info from 'components/Common/Info.vue';
import Radio from 'components/Common/Radio.vue';

export default {
  name: 'Accordion',
  components: {
    Info,
    Radio,
    Carousel3d,
    Slide,
  },
  props: {
    gridData: {
      require: true,
      type: Array,
    },
    checkedValue: {
      type: Number,
    },
  },
  data() {
    return {
      picked: '', // number
      checked: false,
    };
  },
  computed: {
  },
  watch: {
    picked() {
      this.picked = parseInt(this.picked, 10);
    },
  },
  methods: {
    onPickHandler(e) {
      this.picked = e; // 0 - 3
      this.$emit('onPickAccordion', this.picked);
    },
  },
};
</script>

<template>
  <div class="accordion">
    <carousel-3d
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
          class="carousel-3d-slide option"
          v-for="(grid, i) in gridData"
          :key="grid.name"
          :index="i"
      >
        <div class="imgbox">
          <div
            class="img"
            :style="{backgroundImage: 'url(' + grid.image + ')'}"
            @click="openModal(grid.name)"
          >
            <img class="resize-icon" :src="grid.icon" />
          </div>
          <!-- id 與 for 決定check綁定的label與radio -->
          <div class="radiobox">
            <Radio
              class="custom-radio"
              :name="grid.name"
              :value="grid.score"
              :checkedValue="picked"
              @input="onPickHandler"
            ></Radio>
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
</template>

<style scoped lang="scss">
.accordion {
  display: flex;
  width: 100vw;
  margin-bottom: 20px;

  & .carousel-3d-container {
    border: 1px solid blue;
    & > .carousel-3d-slider {
      & > .option {
        background: #fff;
        padding: 20px 0;
        width: 50%;

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
          border: 1px solid green;

          & > .img {
            width: 100%;
            height: 300px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border: 1px solid black;

            & > .resize-icon {
              position: absolute;
              top: 0;
              right: 0;
              width: 20px;
              height: 20px;
              margin: 20px;
            }
          }

          & > .radiobox {
            display: flex;
            align-items: center;
            position: relative;
            margin-top: 10px;
            border: 1px solid purple;

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

</style>
