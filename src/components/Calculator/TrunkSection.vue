<script>
import { mapState } from 'vuex';
import Accordion from 'components/Common/Accordion.vue';
import Erythema from 'components/Calculator/SubComponents/Erythema.vue';
import EdemaPapulation from 'components/Calculator/SubComponents/EdemaPapulation.vue';
import Excoriation from 'components/Calculator/SubComponents/Excoriation.vue';
import Lichenification from 'components/Calculator/SubComponents/Lichenification.vue';
import Button from 'components/Common/Button.vue';
import generateGrids from 'utils/generateGrids';

import BodyFrontImage from 'assets/images/body-front.svg';
import BodyBackImage from 'assets/images/body-back.svg';

export default {
  name: 'TrunkSection',
  components: {
    Accordion,
    Erythema,
    EdemaPapulation,
    Excoriation,
    Lichenification,
    Button,
  },
  data() {
    return {
      selected: false,
      BodyFrontImage,
      BodyBackImage,
      tabData: {
        Erythema: {
          num: 1,
          name: 'Erythema',
          id: '0',
          component: 'Erythema',
          score: 0,
          complete: false,
        },
        'Edema / papulation': {
          num: 2,
          name: 'Edema / papulation',
          id: '1',
          component: 'EdemaPapulation',
          score: 0,
          complete: false,
        },
        Excoriation: {
          num: 3,
          name: 'Excoriation',
          id: '2',
          component: 'Excoriation',
          score: 0,
          complete: false,
        },
        Lichenification: {
          num: 4,
          name: 'Lichenification',
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
      area: state => state.area,
      body: state => state.body,
    }),
    areaPoint: {
      get() {
        if (this.input >= 90 && this.input <= 100) return 6;
        if (this.input >= 70 && this.input <= 89) return 5;
        if (this.input >= 50 && this.input <= 69) return 4;
        if (this.input >= 30 && this.input <= 49) return 3;
        if (this.input >= 10 && this.input <= 29) return 2;
        if (this.input >= 1 && this.input <= 9) return 1;
        return 0;
      },
      set(value) {
        console.log(value);
      },
    },
    summary: {
      get() {
        const symptomScore = this.tabData.Erythema.score
        + this.tabData['Edema / papulation'].score
        + this.tabData.Excoriation.score
        + this.tabData.Lichenification.score;

        const sum = this.areaPoint * symptomScore * 0.1;

        const score = sum.toFixed(1);
        return score;
      },
      set(value) {
        console.log('執行', value);
      },
    },
    checked: {
      get() {
        const isEASIFinish = Object.values(this.tabData).every(item => item.complete === true);
        const isAreaFinsih = parseInt(this.input, 10) || false;
        return isAreaFinsih && isEASIFinish;
      },
      set(value) {
        console.log(value);
      },
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
      this.$store.commit('patient/SAVE_AREASCORE_PERCENT', { type: 'Trunk', payload: this.input });
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
    this.gridData = generateGrids('Erythema', 'Head & Neck');
  },
  activated() {
    console.log('[TRUNK] activated');
    window.scrollTo(0, 0);
  },
  deactivated() {
    console.log('[TRUNK] deactivated');
    const trunkData = {
      trunkAreaScore: this.areaPoint,
      trunkAreaPercent: this.input,
      trunkErythema: this.tabData.Erythema.score,
      trunkEdema: this.tabData['Edema / papulation'].score,
      trunkExcoriation: this.tabData.Excoriation.score,
      trunkLichenification: this.tabData.Lichenification.score,
      trunkScore: this.summary,
    };
    this.$store.commit('patient/SAVE_TRUNK_DATA', trunkData);
  },
  destroyed() {
    console.log('[TRUNK] destroyed');
  },
  methods: {
    openAccordion(tabItem) {
      // 點擊 Accordion head 打開 Accordion content
      this.accordionOpen[tabItem.name] = !this.accordionOpen[tabItem.name];
    },
    changeTab(tabItem) {
      this.symptomName = tabItem.name;
      this.currentTabComponent = tabItem.component;
      // 換資料注入不同圖片跟內文
      this.gridData = generateGrids(tabItem.name, 'Head & Neck');
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
    <div class="graph-section">
      <div class="front">
        <div class="title">Front</div>
        <img :src="BodyFrontImage" />
      </div>
      <div class="back">
        <div class="title">Back</div>
        <img :src="BodyBackImage" />
      </div>
    </div>
    <div class="involvement-section">
      <h2>
        Area score:
        <span>{{areaPoint}}.0</span>
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
    <div class="tab-section">
      <h2>EASI lesion severity atlas</h2>
      <div class="tabs">
        <div
          class="tab"
          :class="{'active': tabItem.component === currentTabComponent}"
          v-for="tabItem in Object.values(tabData)"
          :key="tabItem.name"
          @click="changeTab(tabItem)"
        >
          <div class="top" @click="openAccordion(tabItem)">
            <div class="no" :class="{'checked': tabItem.complete}">
              <div v-if="!tabItem.complete">{{tabItem.num}}</div>
            </div>
            <div class="wordings">
              <div class="text">{{tabItem.name}}: {{tabItem.score}}.0</div>
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
      content: "%";
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

      @media screen and (max-width: 769px) {
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

        @media screen and (max-width: 769px) {
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

          @media screen and (max-width: 769px) {
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

            @media screen and (max-width: 769px) {
              border: solid 1px #525ca3;
              color: #525ca3;
            }

            & > .ball {
              display: none;
            }
          }

          & > .checked {
            background-color: #bcbc1c;
            border: 2px solid #bcbc1c;
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
              @media screen and (max-width: 769px) {
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

            @media screen and (max-width: 769px) {
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

          @media screen and (max-width: 769px) {
            display: block;
          }
        }
      }

      & > .active {
        width: 224px;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

        @media screen and (max-width: 769px) {
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
          background-color: #bcbc1c;
          border: 2px solid #bcbc1c;
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
      @media screen and (max-width: 769px) {
        display: none;
      }
    }

    & > .button {
      margin: 20px 0 80px 0;
    }
  }
}
</style>
