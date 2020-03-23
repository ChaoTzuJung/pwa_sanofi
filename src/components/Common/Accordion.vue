<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Info from 'components/Common/Info.vue';
import Radio from 'components/Common/Radio.vue';
import generateAccordion from 'utils/generateGrids';

export default {
  name: 'Accordion',
  components: {
    Info,
    Radio,
    Carousel3d,
    Slide,
  },
  props: {
    accordionName: {
      require: true,
      type: String,
    },
    checkedValue: {
      type: Number,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      picked: '', // number
      accordionData: [],
      currentSectionComponent: this.$attrs.currentSectionComponent.split('Section')[0],
      currentBody: this.$attrs.currentBody,
    };
  },
  computed: {
  },
  watch: {
    picked() {
      this.picked = parseInt(this.picked, 10);
    },
  },
  created() {
    console.log('this.accordionName', this.accordionName);
    console.log('this.currentBody', this.currentBody);
    this.accordionData = generateAccordion(this.accordionName, this.currentBody);
  },
  methods: {
    onPickHandler(e) {
      this.picked = e; // 0 - 3
      this.$emit('onPickAccordion', this.picked);
    },
    openModal(name) {
      this.$store.commit('calculator/OPEN_SYMPTOMS_MODAL', { severity: name, status: true });
    },
  },
};
</script>

<template>
  <div class="accordion" v-if="open">
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
          v-for="(grid, i) in accordionData"
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
              :name="grid.name + ` - ${accordionName}`"
              :value="grid.score"
              :checkedValue="picked"
              color="#525ca3"
              @input="onPickHandler"
            ></Radio>
            <div class="check-score">{{grid.name}}</div>
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

  & .carousel-3d-container {
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

          & > .img {
            width: 100%;
            height: 300px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

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
            height: 20px;
            cursor: auto;

            & > .custom-radio {
              position: relative;
              width: 20px;
              height: 20px;
            }

            & > .check-score {
              margin: 0 10px;
              font-size: 24px;
              font-weight: 300;
              line-height: 1.33;
              color: #333333;
            }
          }
        }
      }
    }
  }
}

</style>
