<script>
import { mapState } from 'vuex';
import GridOne from 'components/Common/Grid.vue';
import Accordion from 'components/Common/Accordion.vue';
// import GridOne from 'components/Calculator/SubComponents/Grid.vue';
// import GridTwo from 'components/Calculator/SubComponents/Grid2.vue';
// import GridThree from 'components/Calculator/SubComponents/Grid3.vue';
// import GridFour from 'components/Calculator/SubComponents/Grid4.vue';
import Button from 'components/Common/Button.vue';

const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const headFrontImage = `${IMG_PATH}/asset/pic/2019-10-14-07-12-09-ddf8b1091ccd6d88136fad03400f0f1c.png`;
const headBackImage = `${IMG_PATH}/asset/pic/2019-10-14-07-12-58-f2d16df8e16ec159d87a410d81b5f2d3.png`;

export default {
  name: 'HeadNeckSection2',
  components: {
    Accordion,
    GridOne,
    // GridTwo,
    // GridThree,
    // GridFour,
    Button,
  },
  data() {
    return {
      selected: false,
      headFrontImage,
      headBackImage,
      levels: [
        {
          num: 1, name: 'Erythema', id: '0', isSeclected: true, component: 'GridOne',
        },
        {
          num: 2, name: 'Edema / papulation', id: '1', isSeclected: false, component: 'GridTwo',
        },
        {
          num: 3, name: 'Excoriation', id: '2', isSeclected: false, component: 'GridThree',
        },
        {
          num: 4, name: 'Lichenification', id: '3', isSeclected: false, component: 'GridFour',
        },
      ],
      activeTab: Accordion,
      input: '',
      accordionOpen: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
    };
  },
  computed: {
    ...mapState({
      area: state => state.area,
      body: state => state.body,
    }),
    // areascore() {
    //   return this.area.HeadNeck.AreaScore;
    // },
    // symptom() {
    //   const score = [];
    //   this.levels.forEach((level) => {
    //     let result;
    //     switch (level.name) {
    //       case 'Erythema':
    //         result = this.area.HeadNeck.SymptomScore.Erythema;
    //         break;
    //       case 'Edema / papulation':
    //         result = this.area.HeadNeck.SymptomScore.EdemaPapulation;
    //         break;
    //       case 'Excoriation':
    //         result = this.area.HeadNeck.SymptomScore.Excoriation;
    //         break;
    //       case 'Lichenification':
    //         result = this.area.HeadNeck.SymptomScore.Lichenification;
    //         break;
    //       default:
    //         result = 0;
    //     }
    //     score.push(result);
    //   });
    //   return score;
    // },
    // tabFinish() {
    //   const {
    //     ERYTHEMA, EDEMAPAPULATION, EXCORIATION, LICHENIFICATION,
    //   } = this.body.HeadNeck.finish;
    //   return [ERYTHEMA, EDEMAPAPULATION, EXCORIATION, LICHENIFICATION];
    // },
  },
  watch: {
    selected() {
      this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: true });
    },
    input() {
      // 是否包含小數點，非整數
      if (!this.isInt(this.input)) {
        // 此非整數是空字串沒輸入文字
        if (this.input === '') {
          // Area score 要 歸零
          this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 0, percent: 0 });
          this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: false });
          return;
        }
        this.input = parseInt(this.input, 10);
        this.input = null;
        // Area score 要 歸零
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 0, percent: 0 });
        this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: false });
      }

      // 開頭是0
      if (this.input === 0) {
        this.selected = true; // 送出result不會被警告未完成
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 0, percent: this.input });
        // 已完成 area填答
        this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: true });
      }

      if (this.input >= 1 && this.input <= 9) {
        this.selected = true;
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 1, percent: this.input });
        // 已完成 area填答
        this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: true });
      }

      if (this.input >= 10 && this.input <= 29) {
        this.selected = true;
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 2, percent: this.input });
        // 已完成 area填答
        this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: true });
      }

      if (this.input >= 30 && this.input <= 49) {
        this.selected = true;
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 3, percent: this.input });
        // 已完成 area填答
        this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: true });
      }

      if (this.input >= 50 && this.input <= 69) {
        this.selected = true;
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 4, percent: this.input });
        // 已完成 area填答
        this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: true });
      }

      if (this.input >= 70 && this.input <= 89) {
        this.selected = true;
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 5, percent: this.input });
        // 已完成 area填答
        this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: true });
      }

      if (this.input >= 90 && this.input <= 100) {
        this.selected = true;
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 6, percent: this.input });
        // 已完成 area填答
        this.$store.commit('setAreaCompleted', { body: 'HeadNeck', completed: true });
      }

      if (this.input > 100 || this.input < 0) {
        this.input = null;
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 0, percent: 0 });
      }

      // 若輸入文字
      if (typeof (this.input) === 'string') {
        this.input = null;
        this.$store.commit('setAreaScore', { body: 'HeadNeck', val: 0, percent: 0 });
      }
    },
  },
  activated() {
    window.scrollTo(0, 0);
  },
  methods: {
    selectTab(id) {
      this.levels.forEach((level) => {
        if (level.id === id) {
          level.isSeclected = true;
        } else {
          level.isSeclected = false;
        }
      });
    },
    isInt(n) {
      return typeof n === 'number' && n % 1 === 0;
    },
    openAccordion(id) {
      this.accordionOpen[id] = !this.accordionOpen[id];
    },
    // 切換到隔壁的Tab
    SwitchTabToNext(component) {
      this.$store.commit('changeTab', { sectionName: `${component}Section` });
      this.$attrs.selectTab(component);
    },
    goToNextSlide() {
      this.$attrs.goToNextSlide();
    },
  },
};
</script>

<template>
  <div class="head-neck-section">
    <div class="graph-section">
      <div class="front">
        <div class="title">Front</div>
        <img :src="headFrontImage">
      </div>
      <div class="back">
        <div class="title">Back</div>
        <img :src="headBackImage">
      </div>
    </div>
    <div class="involvement-section">
      <h2>
        Area score:
        <!-- <span>{{`${areascore}.0`}}</span> -->
      </h2>
      <label class="label" for="name">%Involvement:</label>
      <div class="percent">
        <input
          class="value"
          type="tel"
          id="name"
          v-model.trim.number.lazy="input"
          autocomplete="off"
        />
      </div>
      <div class="additional">*Estimate the percentage involvement of this body region.</div>
    </div>
    <div class="tab-section mobile">
        <h2>EASI lesion severity atlas</h2>
        <div class="accordions">
          <div
            :key="level.name"
            v-for="level in levels"
            class="accordion"
            :style="!accordionOpen[level.num] && {margin: '0 0 20px 0'}"
          >
            <div class="top" @click="openAccordion(level.num)">
              <!-- TODO: 移除 :class="{'checked': tabFinish[level.num - 1]} -->
              <div class="no">
                <div>{{level.num}}</div>
              </div>
              <div class="wordings">
                <!-- TODO: 移除 <div class="text">{{level.name}}:
                {{`${symptom[level.id]}.0`}}</div> -->
                <div class="text">{{level.name}}: 0</div>
              </div>
              <svg class="svg-circleplus mobile" viewBox="0 0 100 100">
                <line x1="22.5" y1="50" x2="77.5" y2="50" stroke-width="7.5"></line>
                <line x1="50" y1="22.5" x2="50" y2="77.5" stroke-width="7.5"
                v-if="!accordionOpen[level.num]"></line>
              </svg>
            </div>

            <div class="bottom" v-if="accordionOpen[level.num]">
              <component v-bind="{body: 'HeadNeck'}" :is="level.component"></component>
            </div>
          </div>
        </div>
    </div>
    <div class="tab-section desktop">
      <h2>EASI lesion severity atlas</h2>
      <div class="tabs">
        <div
          :key="level.name"
          v-for="level in levels"
          class="tab"
          :class="{'active': level.isSeclected}"
          @click="activeTab=`${level.component}`; selectTab(level.id)"
        >
        <!-- TODO: 移除 :class="{'checked': tabFinish[level.num - 1]}" -->
          <div class="no">
            <!-- <div :class="{'ball': tabFinish[level.num - 1]}">{{level.num}}</div> -->
          </div>
          <div class="wordings">
            <!-- <div class="text">{{level.name}}: {{`${symptom[level.id]}.0`}}</div> -->
            <div class="text">{{level.name}}: 0</div>
          </div>
        </div>
      </div>
      <keep-alive>
          <component v-bind="{body: 'HeadNeck'}" :is="activeTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head-neck-section {
  & > .graph-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    height: 170px;
    padding: 0px;

    @media screen and (min-width: 769px) {
      margin-top: 0;
    }

    & > .front {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      margin: 0 33px;
      padding: 0;
      width: 104px;

      @media screen and (min-width: 769px) {
        margin: 0 80px;
        padding: 0 60px;
      }

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

        @media screen and (min-width: 769px) {
          margin-top: 40px;
        }
      }
    }

    & > .back {
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      margin: 0 33px;
      padding: 0;
      width: 104px;

      @media screen and (min-width: 769px) {
        margin: 0 80px;
        padding: 0 60px;
      }

      & > .title {
        font-size: 20px;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0.5px;
        color: #000000;
      }

      & > img {
        margin-top: 20px;

        @media screen and (min-width: 769px) {
          margin-top: 40px;
        }
      }
    }
  }

  & > .involvement-section {
    margin: auto;
    width: calc(100vw - 40px);

    @media screen and (min-width: 769px) {
      width: 944px;
    }

    & > h2 {
      color: #333333;
      margin-bottom: 20px;

      & > span {
        color: #333333;
        font-size: 20px;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0.5px;
      }
    }

    & > .label {
      display: block;
      font-family: Arial;
      font-size: 16px;
      line-height: 1.5;
      color: #333333;
      margin-bottom: 10px;
    }

    & > .percent {
      display: inline-block;
      position: relative;

      & > input {
        width: 100px;
        height: 32px;
        border: none;
        border-bottom: solid 1px #a77f7f;
        font-size: 24px;
        font-family: Arial;
        line-height: 1.33;
        color: rgba(0, 0, 0, 0.8);
        text-align: center;
      }
    }

    & > .percent::after {
      content: '%';
      position: absolute;
      top: 0;
      left: calc(100% + 8px);
      opacity: 0.8;
      font-family: Arial;
      font-size: 24px;
      line-height: 1.33;
      color: rgba(0, 0, 0, 0.8);
    }

    & > .additional {
      font-family: Arial;
      font-size: 12px;
      line-height: 1.67;
      color: #a77f7f;
      margin: 0 auto;
      margin-top: 10px;
      width: calc(100vw - 40px);

      @media screen and (min-width: 769px) {
        width: 944px;
        font-size: 14px;
        line-height: 1.57;
      }
    }
  }

  & > .tab-section {
    margin: auto;
    width: 100%;

    @media screen and (min-width: 769px) {
      width: 944px;
    }

    & > h2 {
      color: #333333;
      margin: 40px 20px 20px 20px;

      @media screen and (min-width: 769px) {
        margin: 40px 0;
      }

      & > span {
        color: #333333;
        font-size: 20px;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0.5px;
      }
    }

    & > .tabs {
      display: flex;
      margin-top: 40px;

      & > .tab {
        display: flex;
        width: 224px;
        height: 56px;
        padding: 16px 10px;
        margin-right: 16px;
        margin-bottom: 20px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        line-height: 1.5;
        color: #a77f7f;
        font-family: Arial;
        font-size: 16px;
        cursor: pointer;

        & > .no {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          border-radius: 50%;
          font-family: Arial;
          font-size: 11.7px;
          line-height: 18px;
          text-align: center;
          border: solid 1px rgba(0, 0, 0, 0.15);
          color: rgba(0, 0, 0, 0.5);

          & > .ball {
            display: none;
          }
        }

        & > .checked {
          background-color: #bcbc1c;
          border: 2px solid #bcbc1c;
        }

        & .checked::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 12px;
          border: solid white;
          border-width: 0 1px 1px 0;
          -webkit-transform: rotate(45deg) translate(-3px, 1px);
          -ms-transform: rotate(45deg) translate(-3px, 1px);
          transform: rotate(45deg) translate(-3px, 1px);
        }

        & > .wordings {
          & > .text {
            // margin-left: 28px;
          }

          & > .score {
            font-family: Arial;
            font-size: 16px;
            font-weight: normal;
            line-height: 1.5;
            color: rgba(0, 0, 0, 0.5);
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }

      & > .active {
        width: 224px;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

        & > .no {
          border: solid 1px #525ca3;
          color: #525ca3;

          & > .ball {
            display: none;
          }
        }

        & > .checked {
          background-color: #bcbc1c;
          border: 2px solid #bcbc1c;
        }

        & .checked::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 12px;
          border: solid white;
          border-width: 0 1px 1px 0;
          -webkit-transform: rotate(45deg) translate(-3px, 1px);
          -ms-transform: rotate(45deg) translate(-3px, 1px);
          transform: rotate(45deg) translate(-3px, 1px);
        }

        & > .wordings {
          & > .text {
            color: #000000;
            font-weight: bold;
            font-size: 15px;
          }

          & > .score {
            font-family: Arial;
            font-size: 16px;
            font-weight: normal;
            line-height: 1.5;
            color: #000000;
          }
        }
      }
    }

    // mobile
    & > .accordions {
      & > .accordion {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 44px;
        border-top: 0.5px solid #d8d8d8;
        border-bottom: 0.5px solid #d8d8d8;
        background: #fff;
        line-height: 1.5;
        font-family: Arial;
        font-size: 16px;
        margin-bottom: 400px;
        position: relative;
        cursor: pointer;

        & > .top {
          display: flex;
          align-items: center;
          width: 100vw;
          padding: 0 20px;

          & > .no {
            width: 20px;
            height: 20px;
            margin-right: 12px;
            border-radius: 50%;
            font-family: Arial;
            font-size: 11.7px;
            line-height: 18px;
            text-align: center;
            border: solid 1px #525ca3;
            color: #525ca3;

            & > .ball {
              display: none;
            }
          }

          & > .svg-circleplus {
            height: 20px;
            stroke: #000;
            margin-left: auto;
            cursor: pointer;
          }
        }

        & > .bottom {
          position: absolute;
          top: 44px;
          display: block;
        }
      }
    }

    & > .button {
      margin: 20px 0 80px 0;
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
}
</style>
