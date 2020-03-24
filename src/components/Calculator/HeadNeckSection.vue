<script>
import { mapState, mapGetters } from 'vuex';
import Accordion from 'components/Common/Accordion.vue';
import Erythema from 'components/Calculator/SubComponents/Erythema.vue';
import EdemaPapulation from 'components/Calculator/SubComponents/EdemaPapulation.vue';
import Excoriation from 'components/Calculator/SubComponents/Excoriation.vue';
import Lichenification from 'components/Calculator/SubComponents/Lichenification.vue';
import InvolvementSection from 'components/Calculator/SubComponents/InvolvementSection.vue';
import Button from 'components/Common/Button.vue';
import Modal from 'components/Common/Modal.vue';
import generateGrids from 'utils/generateGrids';

export default {
  name: 'HeadNeckSection',
  components: {
    Accordion,
    Button,
    InvolvementSection,
    Modal,
    Erythema,
    EdemaPapulation,
    Excoriation,
    Lichenification,
  },
  data() {
    return {
      selected: false,
      tabData: {
        'Chest-I': {
          num: 1,
          name: 'Chest-I',
          id: '0',
          component: 'Erythema',
          score: '',
          complete: false,
        },
        'Chest-II': {
          num: 2,
          name: 'Chest-II',
          id: '1',
          component: 'EdemaPapulation',
          score: '',
          complete: false,
        },
        'Shoulder-I': {
          num: 3,
          name: 'Shoulder-I',
          id: '2',
          component: 'Excoriation',
          score: '',
          complete: false,
        },
        'Shoulder-II': {
          num: 4,
          name: 'Shoulder-II',
          id: '3',
          component: 'Lichenification',
          score: '',
          complete: false,
        },
      },
      gridData: [],
      currentTabComponent: 'Erythema',
      symptomName: 'Chest-I',
      input: '',
      accordionOpen: {
        'Chest-I': false,
        'Chest-II': false,
        'Shoulder-I': false,
        'Shoulder-II': false,
      },
    };
  },
  computed: {
    ...mapState({
      calculator: state => state.calculator,
      patient: state => state.patient,
    }),
    ...mapGetters({
      ChestI: 'patient/ChestI',
      ChestII: 'patient/ChestII',
      ShoulderI: 'patient/ShoulderI',
      ShoulderII: 'patient/ShoulderII',
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
      return this.ChestI + this.ChestII + this.ShoulderI + this.ShoulderII;
    },
    checked() {
      const isEASIFinish = Object.values(this.tabData)
        .every(item => this.formStatus(item.name) === true);
      return isEASIFinish;
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
    this.gridData = generateGrids('Chest-I', 'Chest & Shoulder');
  },
  activated() {
    window.scrollTo(0, 0);
  },
  // deactivated() {
  //   const headneckData = {
  //     HeadNeckAreaScore: this.areaPoint,
  //     HeadNeckAreaPercent: this.input,
  //     HeadNeckErythema: this.tabData.Erythema.score,
  //     HeadNeckEdema: this.tabData['Edema / papulation'].score,
  //     HeadNeckExcoriation: this.tabData.Excoriation.score,
  //     HeadNeckLichenification: this.tabData.Lichenification.score,
  //     HeadNeckScore: this.summary,
  //   };
  //   this.$store.commit('patient/SAVE_HEADNECK_DATA', headneckData);
  // },
  methods: {
    openAccordion(tabItem) {
      this.accordionOpen[tabItem.name] = !this.accordionOpen[tabItem.name];
    },
    changeTab(tabItem) {
      this.symptomName = tabItem.name;
      this.currentTabComponent = tabItem.component;
      this.gridData = generateGrids(tabItem.name, 'Chest & Shoulder');
    },
    changeScore(e) {
      this.tabData[this.symptomName].score = e;
      this.tabData[this.symptomName].complete = true;
    },
    formStatus(accordionName) {
      return this.patient['Chest & Shoulder'][accordionName].weight !== 0
      && this.patient['Chest & Shoulder'][accordionName].reps !== 0
      && this.patient['Chest & Shoulder'][accordionName].sets !== 0
      && this.tabData[accordionName].complete;
    },
  },
};
</script>

<template>
  <div class="head-neck-section">
    <Modal>
      <div slot="modal-content">
        <div class="modal-title">{{calculator.currentSeverity}}</div>
        <InvolvementSection
          :movement="calculator.currentSeverity"
          :currentBody="$attrs.currentBody"
          :gridName="symptomName"
        />
      </div>
    </Modal>
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
            <div class="no" :class="{'checked': formStatus(tabItem.name)}">
              <div v-if="!formStatus(tabItem.name)">{{tabItem.num}}</div>
            </div>
            <div class="wordings">
              <div class="text">{{tabItem.name}}</div>
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
              :currentBody="$attrs.currentBody"
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
          bodypart="Chest & Shoulder"
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

  & .modal-title {
    padding: 10px 0;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: .5px;
    color: #000;
    text-align: center;
    font-family: itc-avant-garde-gothic-pro,Arial,sans-serif;
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
        margin: 20px;
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
