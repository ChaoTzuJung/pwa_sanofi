<script>
// import { mapState, mapGetters } from 'vuex';
// import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import Button from 'components/Common/Button.vue';
// import Radio from 'components/Common/Radio.vue';
// import ModalTable from '@/components/ModalTable.vue';
// import Slider from '@/components/Slider.vue';

const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const Question = `${IMG_PATH}/asset/pic/2019-10-14-06-39-08-541a7391941d878f29d1dc7f071cee7f.png`;

export default {
  name: 'ResultSection',
  components: {
    Button,
    // Radio,
    // VueSlider,
    // ModalTable,
    // Slider,
  },
  props: {
    headneckScore: {
      require: true,
      type: Number,
    },
    upperScore: {
      require: true,
      type: Number,
    },
    trunkScore: {
      require: true,
      type: Number,
    },
    lowerScore: {
      require: true,
      type: Number,
    },
  },
  data() {
    return {
      radioValid: false,
      Question,
      IGA: '',
      ages: [
        { text: '0 - 5' },
        { text: '6 - 11' },
        { text: '12 - 17' },
        { text: '18 - 30' },
        { text: '30 - 40' },
        { text: '40 - 50' },
        { text: '50 - 60' },
        { text: '60+' },
        { text: 'unknown' },
      ],
      igas: [
        { text: '0 - Clear' },
        { text: '1 - Almost clear' },
        { text: '2 - Mild' },
        { text: '3 - Moderate' },
        { text: '4 - Severe' },
      ],
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
      showTableModal: false,
    };
  },
  computed: {
    // ...mapState({
    //   area: state => state.area,
    //   body: state => state.body,
    //   patient: state => state.patient,
    // }),
    // // ...mapGetters({
    //   totalBodyScore: 'totalBodyScore',
    // }),
    totalBodyScore() {
      return parseFloat(this.headneckScore, 10)
        + parseFloat(this.upperScore, 10)
        + parseFloat(this.trunkScore, 10)
        + parseFloat(this.lowerScore, 10);
    },
    Interpretation() {
      let result;
      if (this.totalBodyScore <= 0) {
        result = 'Clear';
      }

      if (this.totalBodyScore >= 0.1 && this.totalBodyScore <= 1.0) {
        result = 'Almost Clear';
      }

      if (this.totalBodyScore >= 1.1 && this.totalBodyScore <= 7.0) {
        result = 'Mild';
      }

      if (this.totalBodyScore >= 7.1 && this.totalBodyScore <= 21.0) {
        result = 'Moderate';
      }

      if (this.totalBodyScore >= 21.1 && this.totalBodyScore <= 50.0) {
        result = 'Severe';
      }

      if (this.totalBodyScore >= 50.1 && this.totalBodyScore <= 72.0) {
        result = 'Very Severe';
      }

      if (this.totalBodyScore > 72.0) {
        result = 'Very Severe';
      }
      return result;
    },
    scores() {
      return [
        {
          name: 'Head & Neck',
          score: parseFloat(this.headneckScore, 10).toFixed(1),
        },
        {
          name: 'Upper extremities',
          score: parseFloat(this.upperScore, 10).toFixed(1),
        },
        {
          name: 'Trunk',
          score: parseFloat(this.trunkScore, 10).toFixed(1),
        },
        {
          name: 'Lower extremities',
          score: parseFloat(this.lowerScore, 10).toFixed(1),
        },
      ];
    },
    BSA() {
      // return parseInt(this.patient.BSA, 10).toFixed(0);
      return 0;
    },
    // 在這頁不用Media Query做RWD是因為用display:none會造成IGA要點兩次才會打勾
    isMobile() {
      if (window.screen.width < 768 || document.documentElement.clientWidth < 768) {
        return true;
      }
      return false;
    },
  },
  activated() {
    window.scroll(0, 0);
  },
  methods: {
    switchTab(component) {
      this.$store.commit('changeTab', { sectionName: component });
    },
    selectTab() {
      this.$attrs.selectTab('HeadNeck');
      this.$attrs.goToFirstSlide();
    },
    sendResultToStore() {
      this.$store.commit('setBodyEasiScore', this.totalBodyScore);
      this.$store.commit('setBodyInterpretationScore', this.Interpretation);
    },
    valid(IGA) {
      if (IGA) {
        this.radioValid = false;
        this.sendResultToStore();
        this.$store.commit('savePatientBsaAndIga', { BSA: this.BSA, IGA: this.IGA });
        // 產生 uuid後不給上一頁
        this.$router.push('/patient');
      } else {
        this.radioValid = true;
      }
    },
    openModalTable() {
      this.showTableModal = true;
    },
    closeModalTable() {
      this.showTableModal = false;
    },
    sliderHandler(val) {
      this.$store.commit('savePatientBsaAndIga', { BSA: val, IGA: this.IGA });
    },
  },
};
</script>

<template>
  <div class="result-section">
    <ModalTable
      title="Investigator Global Assessment scale"
      :isTableModalOpen="showTableModal"
      @close="closeModalTable"
    >
    </ModalTable>
    <div class="content-section">
      <div class="result-section">
        <div class="test mobile">
          <div class="block">
            <div class="text">EASI score</div>
            <div class="text">Interpretation:</div>
          </div>
          <div class="block">
            <div class="level">{{totalBodyScore}}</div>
            <div class="level">{{Interpretation}}</div>
          </div>
        </div>
        <div class="test desktop">
          <div class="block">
            <div class="text">EASI score:</div>
            <div class="level">= {{totalBodyScore}}</div>
          </div>
          <hr>
          <div class="block">
            <div class="text">Interpretation:</div>
            <div class="level">{{Interpretation}}</div>
          </div>
        </div>
      </div>
      <hr>
      <div class="score-section">
        <div class="mobile">
          <div class="body-region">Score per body region:</div>
          <div :key="score.name" class="score" v-for="score in scores">
            <div class="body-title">{{score.name}}</div>
            <div class="body-score">{{score.score}}</div>
          </div>
        </div>
        <div class="desktop">
          <div :key="score.name" class="score" v-for="(score,idx) in scores">
            <div class="score-block">
              <div class="body-title">{{score.name}}</div>
              <div class="body-region">Score per body region:</div>
              <div class="body-score">
                {{score.score}}
                <span class="plus" v-if="idx !== 3">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mobile">
    </div>
    <div class="slider-section">
      <div class="row" :class="{ 'change-margin': radioValid }">
        <div class="label">
          IGA (Investigator Global Assessment)
          <img :src="Question" @click="openModalTable" />
        </div>
        <div class="value">
          <label for="0 - Clear">
            <input
              type="radio"
              name="radio-group"
              id="0 - Clear"
              value="0 - Clear"
              v-model="IGA"
            >
            <span class="checkmark"></span>
            <span class="radio-text">0 - Clear</span>
          </label>
          <label for="1 - Almost clear">
            <input
              type="radio"
              name="radio-group"
              id="1 - Almost clear"
              value="1 - Almost clear"
              v-model="IGA"
            >
            <span class="checkmark"></span>
            <span class="radio-text">1 - Almost clear</span>
          </label>

          <label for="2 - Mild">
            <input
              type="radio"
              name="radio-group"
              id="2 - Mild"
              value="2 - Mild"
              v-model="IGA"
            >
            <span class="checkmark"></span>
            <span class="radio-text">2 - Mild</span>
          </label>

          <label for="3 - Moderate">
            <input
              type="radio"
              name="radio-group"
              id="3 - Moderate"
              value="3 - Moderate"
              v-model="IGA"
            >
            <span class="checkmark"></span>
            <span class="radio-text">3 - Moderate</span>
          </label>

          <label for="4 - Severe">
            <input
              type="radio"
              name="radio-group"
              id="4 - Severe"
              value="4 - Severe"
              v-model="IGA"
            >
            <span class="checkmark"></span>
            <span class="radio-text">4 - Severe</span>
          </label>
        </div>
        <div class="error error2" v-if="radioValid">*Required fields.</div>
      </div>
      <div class="row">
        <Slider
          label="BSA (Body Surface Area)"
          :BSA="BSA"
          @onChangeSlider="sliderHandler"
        />
      </div>
    </div>
    <div class="button-section">
      <div class="border-button" @click="switchTab('HeadNeckSection');selectTab()">
        <a>Back to calculator</a>
      </div>
      <Button text="Generate the report" :width="235" @click.native="valid(IGA)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.result-section {
    & > .content-section {
        display: flex;
        flex-direction: column;
        width: 100vw;
        padding: 0 20px;

        @media screen and (min-width: 769px) {
            display: flex;
            flex-direction: column-reverse;
            width: 944px;
            padding: 0;
        }

        & > .result-section {
            display: flex;
            justify-content: space-between;
            width: 100%;


            & > .test {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;

                @media screen and (min-width: 769px) {
                    display: flex;
                    align-items: center;
                    width: auto;
                    margin-bottom: 45px;
                }


                & > .block {
                    display: flex;
                    flex-direction: column;

                    @media screen and (min-width: 769px) {
                        display: block;
                    }

                    & .text {
                        opacity: 0.5;
                        font-weight: 300;
                        font-size: 24px;
                        line-height: 1.33;
                        letter-spacing: normal;
                        color: #000000;

                        &:nth-child(2n + 1) {
                            font-size: 24px;
                            line-height: 1.33;
                            margin-top: 40px;
                        }

                        &:nth-child(2n) {
                            font-size: 16px;
                            line-height: 1.5;
                            margin-top: 22px;
                        }

                        @media screen and (min-width: 769px) {
                            font-size: 28px;
                            line-height: 1.29;

                            &:nth-child(2n + 1) {
                                font-size: 28px;
                                line-height: 1.29;
                                margin-top: 0;
                            }

                            &:nth-child(2n) {
                                font-size: 28px;
                                line-height: 1.29;
                                margin-top: 0;
                            }
                        }
                    }

                    & .level {
                        font-size: 32px;
                        font-weight: 300;
                        line-height: 1;
                        color: #333333;
                        letter-spacing: normal;

                        &:nth-child(2n + 1) {
                            font-size: 32px;
                            line-height: 1;
                            margin-top: 40px;
                        }

                        &:nth-child(2n) {
                            font-size: 20px;
                            line-height: 1.5;
                            margin-top: 22px;
                        }

                        @media screen and (min-width: 769px) {
                            font-size: 40px;
                            line-height: 1.2;

                            &:nth-child(2n + 1) {
                                font-size: 40px;
                                line-height: 1.2;
                                margin-top: 0;
                            }

                            &:nth-child(2n) {
                                font-size: 40px;
                                line-height: 1.2;
                                margin-top: 0;
                            }
                        }


                    }
                }

                /* desktop */
                & > hr {
                    margin: 0 40px;
                    width: 2px;
                    height: 74px;
                    background-color: #eeeeee;
                }
            }
        }


        & > hr {
            margin: 20px 0;

            @media screen and (min-width: 769px) {
                margin: 40px 0;
                width: 944px;
                height: 2px;
                background-color: #eeeeee;
            }
        }

        & > .score-section {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.5;
            color: #333333;

            @media screen and (min-width: 769px) {
                display: flex;
                align-items: center;
                width: 944px;
            }

            & > .mobile {
                flex-direction: column;

                & > .body-region {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 1.5;
                    color: #333333;
                    margin-bottom: 24px;
                }

                & > .score {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 18px;

                    &:nth-child(5) {
                        margin-bottom: 4px;
                    }

                    & > .body-title {

                    font-weight: 700;
                    font-size: 14px;
                    font-weight: bold;
                    line-height: 1.57;
                    color: #333333;
                    }

                    & > .body-score {
                        font-weight: 300;
                        font-size: 24px;
                        line-height: 1.25;
                        color: #333333;
                    }
                }
            }

            & > .desktop {
                & > .score {
                    margin-right: 40px;

                    & > .score-block {
                        & > .body-title {

                            font-size: 16px;
                            font-weight: 700;
                            line-height: 1.5;
                            color: #333333;
                        }

                        & > .body-region {

                            font-size: 14px;
                            font-weight: 500;
                            line-height: 1.57;
                            color: #333333;
                            margin-top: 8px;
                            margin-bottom: 16px;
                        }

                        & > .body-score {

                            font-size: 32px;
                            font-weight: 300;
                            line-height: 1.25;
                            color: #333333;

                            & > span {
                                margin-left: 115px;
                            }
                        }
                    }
                }
            }
        }
    }

    & > .slider-section {
        padding: 0 20px;

        @media screen and (min-width: 769px) {
            padding: 0;
        }

        & > .row {

            @media screen and (min-width: 769px) {
                position: relative;
                margin-bottom: 40px;
            }

            & > input {
                @media screen and (min-width: 769px) {
                    width: 100%;
                    height: 38px;
                    opacity: 0.5;
                    border: solid 1px rgba(0, 0, 0, 0.2);
                    padding: 8px 0 8px 14px;
                }
            }

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

                & > img {
                    margin-left: 16px;
                    cursor: pointer;

                    @media screen and (min-width: 769px) {
                        margin-left: 10px;
                    }
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

                @media screen and (min-width: 769px) {
                    align-items: center;
                    width: 100%;
                    margin-top: 10px;
                }

                // Radio 的 css
                & > label {
                    position: relative;
                    color: #333333;
                    font-family: Arial;
                    font-size: 14px;
                    line-height: 1.57;
                    margin-bottom: 10px;
                    width: 40%;

                    @media screen and (min-width: 769px) {
                        width: auto;
                        margin-right: 30px;
                        margin-bottom: 0px;
                    }

                    & > input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        z-index: 100;

                        // 當input tag 被點擊時，隔壁的.checkmark 顏色改變
                        &:checked ~ .checkmark {
                            background: #525ca3;

                            // 當點擊時的勾勾顯示
                            &:after {
                                display: block;
                            }
                        }
                    }

                    // ratio 本體
                    & > .checkmark {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 20px;
                        width: 20px;
                        background-color: #ffffff;
                        border: 2px solid #525ca3;
                        border-radius: 50%;

                        // 當點擊ratio時的勾勾(預設先隱藏)
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

                    & > .radio-text {
                        margin-left: 28px;
                    }
                }

                & > div {
                    margin-bottom: 10px;

                    @media screen and (min-width: 769px) {
                        margin-bottom: 0;
                    }
                }

                & > .vue-slider {
                    margin-top: 40px;
                    width: 100% !important;
                    height: 10px !important;
                    padding-right: 20px !important;
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
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 1.57;
                    text-align: center;
                    color: #ffffff;
                    transform: translate(0%, -35%);
                }
            }
        }

        & > .change-margin {
            margin-bottom: 24px;
        }

        // progress bar 欄位
        & > :nth-child(5) {
            & > :last-child {
                @media screen and (min-width: 769px) {
                    margin-top: 50px;
                }
            }
        }
    }

    & > .button-section {
        display: inline-flex;
        justify-content: flex-end;
        flex-direction: column-reverse;
        margin-top: 40px;
        margin-bottom: 60px;
        width: 100%;

        @media screen and (min-width: 769px) {
            display: flex;
            flex-direction: row;
            width: auto;
            margin-top: 0;
            margin-bottom: 40px;
        }

        & .border-button {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;

            @media screen and (min-width: 769px) {
                margin-bottom: 0;
            }

            & > a {
                display: block;
                width: 235px;
                height: 56px;
                border-radius: 32px;
                background-color: #ffffff;
                font-size: 20px;
                line-height: 1.4;
                text-align: center;
                color: #bcbc1c;
                border: solid 2px #bcbc1c;
                font-weight: 500;
                text-align: center;
                line-height: 56px;
                margin-top: 20px;

                @media screen and (min-width: 769px) {
                    margin-top: 0;
                    margin-right: 10px;
                }
            }
        }
    }
}

.desktop {
    display: none !important;

    @media screen and (min-width: 769px) {
        display: flex !important;
    }
}

.mobile {
    display: flex !important;

    @media screen and (min-width: 769px) {
        display: none !important;
    }
}
</style>
