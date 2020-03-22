<script>
import { mapState } from 'vuex';

import Accordion from 'components/Common/Accordion.vue';
import Button from 'components/Common/Button.vue';
import Carousel from 'components/Common/Carousel.vue';
import Modal from 'components/Common/Modal.vue';
import Erythema from 'components/Calculator/SubComponents/Erythema.vue';
import EdemaPapulation from 'components/Calculator/SubComponents/EdemaPapulation.vue';
import Excoriation from 'components/Calculator/SubComponents/Excoriation.vue';
import Lichenification from 'components/Calculator/SubComponents/Lichenification.vue';
import generateGrids from 'utils/generateGrids';

import NeckFrontImage from 'assets/images/neck-front.svg';
import NeckBackImage from 'assets/images/neck-back.svg';

export default {
  name: 'HeadNeckSection',
  components: {
    Accordion,
    Button,
    Carousel,
    Modal,
    Erythema,
    EdemaPapulation,
    Excoriation,
    Lichenification,
  },
  data() {
    return {
      selected: false,
      NeckFrontImage,
      NeckBackImage,
      tabData: {
        Erythema: {
          num: 1,
          name: 'Erythema',
          name2: 'Chest I',
          id: '0',
          component: 'Erythema',
          score: 0,
          complete: false,
        },
        'Edema / papulation': {
          num: 2,
          name: 'Edema / papulation',
          name2: 'Chest II',
          id: '1',
          component: 'EdemaPapulation',
          score: 0,
          complete: false,
        },
        Excoriation: {
          num: 3,
          name: 'Excoriation',
          name2: 'Shoulder I',
          id: '2',
          component: 'Excoriation',
          score: 0,
          complete: false,
        },
        Lichenification: {
          num: 4,
          name: 'Lichenification',
          name2: 'Shoulder II',
          id: '3',
          component: 'Lichenification',
          score: 0,
          complete: false,
        },
      },
      gridData: [],
      currentTabComponent: 'Erythema',
      symptomName: 'Erythema',
      input: '',
      accordionOpen: {
        Erythema: false,
        'Edema / papulation': false,
        Excoriation: false,
        Lichenification: false,
      },
    };
  },
  computed: {
    ...mapState({
      calculator: state => state.calculator,
    }),
    areaPoint() {
      if (this.input >= 90 && this.input <= 100) return 6;
      if (this.input >= 70 && this.input <= 89) return 5;
      if (this.input >= 50 && this.input <= 69) return 4;
      if (this.input >= 30 && this.input <= 49) return 3;
      if (this.input >= 10 && this.input <= 29) return 2;
      if (this.input >= 1 && this.input <= 9) return 1;
      return 0;
    },
    summary() {
      const symptomScore = this.tabData.Erythema.score
      + this.tabData['Edema / papulation'].score
      + this.tabData.Excoriation.score
      + this.tabData.Lichenification.score;

      const sum = this.areaPoint * symptomScore * 0.1;

      const score = sum.toFixed(1);
      return score;
    },
    checked() {
      const isEASIFinish = Object.values(this.tabData).every(item => item.complete === true);
      const isAreaFinsih = parseInt(this.input, 10) || false;
      return isAreaFinsih && isEASIFinish;
    },
  },
  watch: {
    selected() {
      this.$store.commit('setAreaCompleted', {
        body: 'HeadNeck',
        completed: true,
      });
    },
    input() {
      this.input = parseInt(this.input, 10);

      if (!this.input) {
        if (this.input === 0) {
          this.input = 0;
          return;
        }
        this.input = '';
      }

      if (this.input > 100 || this.input < 0) {
        this.input = '';
      }
      this.$store.commit('patient/SAVE_AREASCORE_PERCENT', { type: 'HeadNeck', payload: this.input });
    },
    summary() {
      this.$emit('changeBodyScore', this.summary);
    },
    checked() {
      if (this.checked) {
        this.$emit('changeTabStatus', this.checked);
      }
    },
  },
  created() {
    this.gridData = generateGrids('Erythema', 'HeadNeck');
  },
  activated() {
    window.scrollTo(0, 0);
  },
  deactivated() {
    const headneckData = {
      HeadNeckAreaScore: this.areaPoint,
      HeadNeckAreaPercent: this.input,
      HeadNeckErythema: this.tabData.Erythema.score,
      HeadNeckEdema: this.tabData['Edema / papulation'].score,
      HeadNeckExcoriation: this.tabData.Excoriation.score,
      HeadNeckLichenification: this.tabData.Lichenification.score,
      HeadNeckScore: this.summary,
    };
    this.$store.commit('patient/SAVE_HEADNECK_DATA', headneckData);
  },
  methods: {
    openAccordion(tabItem) {
      this.accordionOpen[tabItem.name] = !this.accordionOpen[tabItem.name];
    },
    changeTab(tabItem) {
      this.symptomName = tabItem.name;
      this.currentTabComponent = tabItem.component;
      this.gridData = generateGrids(tabItem.name, 'HeadNeck');
    },
    changeScore(e) {
      this.tabData[this.symptomName].score = parseInt(e, 10);
      this.tabData[this.symptomName].complete = true;
    },
  },
};
</script>

<template>
  <div class="head-neck-section">
    <Modal>
      <div slot="modal-content">
        <Carousel :current="calculator.currentSeverity" :data="gridData"></Carousel>
      </div>
    </Modal>
    <div class="involvement-section">
      <h2>
        One-repetition maximum:
        <span>{{areaPoint}}.0</span>
      </h2>
      <label class="label" for="name">Weight:</label>
      <div class="percent">
        <input
          class="value"
          type="tel"
          id="name"
          v-model.trim.number.lazy="input"
          autocomplete="off"
        />
      </div>
      <div class="additional">*1RM:
        The maximum amount of weight
        that a person can possibly lift for one repetition</div>
    </div>
    <div class="tab-section">
      <h2>Fitness training amd movemont</h2>
      <div class="tabs">
        <div
          class="tab"
          :class="{'active': tabItem.component === currentTabComponent}"
          v-for="tabItem in Object.values(tabData)"
          :key="tabItem.name"
          @click="changeTab(tabItem)"
          @keyup.enter="changeTab(tabItem)"
        >
          <div class="top" @click="openAccordion(tabItem)">
            <div class="no" :class="{'checked': tabItem.complete}">
              <div v-if="!tabItem.complete">{{tabItem.num}}</div>
            </div>
            <div class="wordings">
              <div class="text">{{tabItem.name2}}: {{tabItem.score}}.0</div>
            </div>
            <svg class="svg-circleplus" viewBox="0 0 100 100">
              <line x1="22.5" y1="50" x2="77.5" y2="50" stroke-width="7.5" />
              <line
                x1="50" y1="22.5" x2="50" y2="77.5" stroke-width="7.5"
                v-if="!accordionOpen[tabItem.name]"
              />
            </svg>
          </div>
          <div class="bottom">
            <Accordion
              class="custom-accordion"
              :currentSectionComponent="$attrs.currentSectionComponent"
              :checkedValue="tabData[symptomName].score"
              :accordionName="tabItem.name"
              :open="accordionOpen[tabItem.name]"
              @onPickAccordion="changeScore"
            />
          </div>
        </div>
      </div>
      <keep-alive>
        <component
          class="tab-content"
          bodypart="HeadNeck"
          :symptom="symptomName"
          :gridData="gridData"
          :checkedValue="tabData[symptomName].score"
          :is="currentTabComponent"
          @changeScore="changeScore"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head-neck-section {

  & > .involvement-section {
    margin: auto;
    width: 944px;

    @media screen and (max-width: 812px) {
      width: 100vw;
      padding-left: 20px;
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
      content: "kg";
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
      width: 944px;
      font-family: Arial;
      font-size: 14px;
      line-height: 1.57;
      color: #a77f7f;
      margin: 0 auto;
      margin-top: 10px;

      @media screen and (max-width: 812px) {
        width: calc(100vw - 20px);
        font-size: 12px;
        line-height: 1.67;
      }
    }
  }

  & > .tab-section {
    margin: auto;
    width: 944px;

    @media screen and (max-width: 812px) {
      width: 100vw;
    }

    & > h2 {
      color: #333333;
      margin: 40px 0;

      @media screen and (max-width: 812px) {
        margin: 40px 20px 20px 20px;
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

      @media screen and (max-width: 812px) {
        display: block;
        margin-top: 0px;
      }

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

        @media screen and (max-width: 812px) {
          justify-content: center;
          flex-direction: column;
          width: 100%;
          height: auto;
          padding: 0;
          margin-right: 0;
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          line-height: 1.5;
          position: relative;
        }

        & > .top {
          display: flex;

          @media screen and (max-width: 812px) {
            align-items: center;
            width: 100vw;
            padding: 11px 20px;
            border-top: 0.5px solid #d8d8d8;
            border-bottom: 0.5px solid #d8d8d8;
          }

          & > .no {
            position: relative;
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

            @media screen and (max-width: 812px) {
              border: solid 1px #525ca3;
              color: #525ca3;
            }

            & > .ball {
              display: none;
            }
          }

          & > .checked {
            background-color: #525ca3;
            border: 2px solid #525ca3;;
          }

          & .checked::after {
            content: "";
            position: absolute;
            top: 0;
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
              @media screen and (max-width: 812px) {
                color: #000000;
                font-weight: bold;
                font-size: 15px;
              }
            }

            & > .score {
              font-family: Arial;
              font-size: 16px;
              font-weight: normal;
              line-height: 1.5;
              color: rgba(0, 0, 0, 0.5);
            }
          }

          & > .svg-circleplus {
            display: none;

            @media screen and (max-width: 812px) {
              display: block;
              height: 20px;
              stroke: #000;
              margin-left: auto;
              cursor: pointer;
            }
          }

          &:last-child {
            margin-right: 0;
          }
        }

        & > .bottom {
          display: none;

          @media screen and (max-width: 812px) {
            display: block;
          }
        }
      }

      & > .active {
        width: 224px;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

        @media screen and (max-width: 812px) {
          width: auto;
          box-shadow: none;
        }

        & > .no {
          border: solid 1px #525ca3;
          color: #525ca3;

          & > .ball {
            display: none;
          }
        }

        & > .checked {
          background-color: #FBB63F;
          border: 2px solid #FBB63F;
        }

        & .checked::after {
          content: "";
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

    & > .tab-content {
      @media screen and (max-width: 812px) {
        display: none;
      }
    }

    & > .button {
      margin: 20px 0 80px 0;
    }
  }
}
</style>
