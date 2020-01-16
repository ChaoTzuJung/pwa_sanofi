<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'Slider',
  components: {
    VueSlider,
  },
  props: {
    label: {
      require: false,
      type: String,
    },
    BSA: {
      require: false,
    },
  },
  data() {
    return {
      marks: {
        0: {
          label: '0%',
          labelStyle: {
            transform: 'translate(0%, -150%)',
          },
        },
        25: '25%',
        50: '50%',
        75: '75%',
        100: {
          label: '100%',
          labelStyle: {
            transform: 'translate(-50%, -150%)',
          },
        },
      },
      options: {
        width: '100%',
        height: 20,
        contained: true,
        tooltip: 'none',
        dotStyle: {
          display: 'none',
        },
        // 整條進度條 style
        railStyle: {
          borderRadius: '10px',
          backgroundColor: '#eeeeee',
        },
        // 已完成整條進度條 style
        processStyle: {
          opacity: 0,
        },
        // 每個Mark階段的原點 style
        stepStyle: {
          opacity: 0,
        },
        stepActiveStyle: {
          opacity: 0,
        },
        labelStyle: {
          color: '#333333',
          transform: 'translate(-50%, -150%)',
          fontFamily: 'itc-avant-garde-gothic-pro',
          fontSize: '16px',
          fontWeight: '300',
          lineHeight: '1.5',
          paddingBottom: '26px',
        },
      },
      sliderValue: this.BSA,
    };
  },
  watch: {
    BSA() {
      this.sliderValue = this.BSA;
    },
    sliderValue() {
      this.$emit('onChangeSlider', this.sliderValue);
    },
  },
};
</script>

<template>
    <div class="slider">
        <label class="label" for="BSA">{{ label }} : {{sliderValue}}% </label>
        <div class="value">
            <vue-slider
                v-model="sliderValue"
                :marks="marks"
                :lazy="true"
                v-bind="options"
                :tooltip-formatter="`${sliderValue}%`"
            >
                <!-- slot-scope="{value}" -->
                <div class="dot" slot="dot">{{sliderValue}}%</div>
            </vue-slider>
        </div>
    </div>
</template>

<style scoped lang="scss">
.slider {
  & > .label {
    display: flex;
    align-items: center;
    font-family: Arial;
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
    margin-bottom: 20px;
    margin-top: 20px;

    @media screen and (min-width: 769px) {
      margin-bottom: 0;
      margin-top: 0;
    }

    &:last-of-type {
      @media screen and (min-width: 769px) {
        margin-bottom: 45px;
      }
    }

    & > img {
      margin-left: 10px;
      cursor: pointer;
    }
  }

  & > .error {
    margin-top: 8px;
    font-family: Arial;
    font-size: 14px;
    line-height: 1.57;
    color: #ea5d45;
  }


  & > .value {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin-top: 10px;

    & > .vue-slider {
      margin-top: 40px;
      margin-bottom: 10px;
      width: 100% !important;
      height: 10px !important;
      padding-right: 20px !important;

      @media screen and (min-width: 769px) {
        margin-top: 0;
        margin-bottom: 0;
        height: 20px  !important;
        padding-right: 0 !important;
      }

      & .dot {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #525ca3;
        border-radius: 50%;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);
        text-align: center;
        color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.57;
        transform: translate(0%, -35%);

        @media screen and (min-width: 769px) {
          font-weight: 300;
          font-size: 16px;
          line-height: 1.5;
          transform: translate(-40%, -35%);
        }
      }
    }
  }
}
</style>
