<script>
import { mapState, mapGetters } from 'vuex';
import Button from 'components/Common/Button.vue';
import Radio from 'components/Common/Radio.vue';
import Modal from 'components/Common/Modal.vue';
import Slider from 'components/Common/Slider.vue';


import Question from 'assets/images/question.svg';

export default {
  name: 'ResultSection',
  components: {
    Button,
    Radio,
    Modal,
    Slider,
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
      isValidationFail: false,
      Question,
      IGA: '',
      igaData: [
        { text: '0 - Clear', value: 0 },
        { text: '1 - Almost clear', value: 1 },
        { text: '2 - Mild', value: 2 },
        { text: '3 - Moderate', value: 3 },
        { text: '4 - Severe', value: 4 },
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
      tableData: [
        {
          score: 'Score',
          description: 'Morphological Description',
        },
        {
          score: '0 – Clear',
          description: 'No inflammatory signs of atopic dermatitis (no erythema, no induration/papulation, no lichenification, no oozing/crusting). Post-inflammatory hyperpigmentation and/or hypopigmentation may be present.',
        },
        {
          score: '1 – Almost clear',
          description: 'Barely perceptible erythema, barely perceptible induration/papulation, and/or minimal lichenification. No oozing or crusting.',
        },
        {
          score: '2 – Mild',
          description: 'Slight but definite erythema (pink), slight but definite induration/papulation, and/or slight but definite lichenification. No oozing or crusting.',
        },
        {
          score: '3 – Moderate',
          description: 'Clearly perceptible erythema (dull red), clearly perceptible induration/papulation, and/or clearly perceptible lichenification. Oozing and crusting may be present.',
        },
        {
          score: '4 – Severe',
          description: 'Marked erythema (deep or bright red), marked induration/papulation, and/or marked lichenification. Disease is widespread in extent. Oozing or crusting may be present.',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      headNeckAreaPercent: state => state.patient.HeadNeck.area.areaPercent,
      upperExtremitiesAreaPercent: state => state.patient.UpperExtremities.area.areaPercent,
      trunkAreaPercent: state => state.patient.Trunk.area.areaPercent,
      lowerExtremitiesAreaPercent: state => state.patient.LowerExtremities.area.areaPercent,
    }),
    ...mapGetters({
      headNeckAreaPoint: 'patient/headNeckAreaPoint',
      upperExtremitiesAreaPoint: 'patient/upperExtremitiesAreaPoint',
      trunkAreaPoint: 'patient/trunkAreaPoint',
      lowerExtremitiesAreaPoint: 'patient/lowerExtremitiesAreaPoint',
    }),
    totalBodyScore() {
      return (parseFloat(this.headneckScore, 10)
        + parseFloat(this.upperScore, 10)
        + parseFloat(this.trunkScore, 10)
        + parseFloat(this.lowerScore, 10))
        .toFixed(1);
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
    BSA: {
      get() {
        return parseInt((this.headNeckAreaPercent * 0.1)
        + (this.upperExtremitiesAreaPercent * 0.2)
        + (this.trunkAreaPercent * 0.3)
        + (this.lowerExtremitiesAreaPercent * 0.4), 10);
      },
      set(value) {
        // TODO: 發 commit 到 vuex
        this.$store.commit('patient/SAVE_BSA_PERCENT', value);
        // this.BSA = value; // Not work
      },
    },
  },
  activated() {
    window.scroll(0, 0);
  },
  methods: {
    goToPatient() {
      if (!this.IGA) {
        this.isValidationFail = true;
        return;
      }
      this.isValidationFail = false;

      const patient = {
        interpretation: this.interpretation,
        EASI: this.EASI,
        BSA: this.BSA, // TODO: 更新不會變
        IGA: this.IGA,

        TrunkAreaScore: this.trunkAreaPoint,
        TrunkAreaPercent: this.trunkAreaPercent,
        TrunkScore: this.trunkneckScore,
        LowerAreaScore: this.lowerExtremitiesAreaPoint,
        LowerAreaPercent: this.lowerExtremitiesAreaPercent,
        LowerScore: this.lowerScore,
      };

      this.$store.commit('SAVE_CACULATOR_DATA', patient);
      // TODO: 儲存 Easi(totalBodyScore) 與 Interpretation 與 BSA 與 IGA 到 vuex

      this.$router.push('/patient');
    },
    openModal() {
      this.$store.commit('calculator/OPEN_SYMPTOMS_MODAL', { severity: 'table', status: true });
    },
    sliderChangeHandler(newSliderValue) {
      this.BSA = newSliderValue;
    },
    onPickHandler(e) {
      this.IGA = e;
    },
    backToHeadNeck() {
      this.$emit('changeTab', { component: 'HeadNeckSection' });
    },
  },
};
</script>

<template>
  <div class="result-section">
    <Modal>
      <div slot="modal-content">
        <div class="modal-title">Investigator Global Assessment scale</div>
        <div class="modal-content">
          <div class="modal-text">
            The IGA score is selected using the descriptors
            below that best describe the overall appearance
            of the lesions at a given time point.
            It is not necessary that all characteristics
            under Morphological Description be present.
          </div>
          <div class="table-container">
            <table border="0" cellSpacing="0">
              <tr v-for="row in tableData" :key="row.score">
                <td>{{row.score}}</td>
                <td>{{row.description}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Modal>
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
      <div class="row" :class="{ 'change-margin': isValidationFail }">
        <div class="label">
          IGA (Investigator Global Assessment)
          <img :src="Question" @click="openModal" />
        </div>
        <div class="value">
          <Radio
            v-for="item in igaData"
            :key="item.text"
            :name="item.text"
            :label="item.text"
            :value="item.text"
            :checkedValue="IGA"
            color="#525ca3"
            @input="onPickHandler"
          >
          </Radio>
        </div>
        <div class="error error2" v-if="isValidationFail">*Required fields.</div>
      </div>
      <div class="row">
        <Slider
          label="BSA (Body Surface Area)"
          :BSA="BSA"
          @onChangeSlider="sliderChangeHandler"
        />
      </div>
    </div>
    <div class="button-section">
      <div class="border-button" @click="backToHeadNeck">
        <a>Back to calculator</a>
      </div>
      <Button text="Generate the report" :width="235" @click.native="goToPatient" />
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

.modal-title {
  padding: 40px 20px 10px 20px;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.5px;
  color: #000000;
  text-align: center;

  @media screen and (min-width: 769px) {
    padding: 20px 0;
  }
}

.modal-content {
  width: 100%;
  padding: 0 0 40px 0;
  margin: 0 auto;

  @media screen and (min-width: 769px) {
    width: 784px;
  }

  & > .modal-text {
    width: 100%;
    margin-bottom: 20px;
    font-family: Arial;
    font-size: 14px;
    line-height: 1.5;
    color: #000000;

    @media screen and (min-width: 769px) {
      font-size: 16px;
      margin-bottom: 36px;
    }
  }

  & > .table-container {
      height: 100%;
      overflow-y: hidden;

    @media screen and (max-width: 769px) {
      height: 60vh;
      overflow-y: scroll;
    }

    & > table {
      border: 1px solid #eeeeee;
      width: 100%;

      & > tr {
        & > td {
          color: #000000;
          font-family: Arial;
          font-size: 14px;
          line-height: 1.57;
          height: auto;

          @media screen and (min-width: 769px) {
            height: 90px;
          }

          // 第一列 td(直)
          &:nth-child(1) {
            padding-left: 20px;
            padding-top: 12px;
            display: flex;
            width: auto;

            @media screen and (min-width: 769px) {
              align-items: center;
              width: 183px;
              padding-top: 0;
            }
          }

          // 第二列 td(直)
          &:nth-child(2) {
            padding: 12px 16px;
            width: 60%;

            @media screen and (min-width: 769px) {
              width: 601px;
              padding: 12px 0;
            }
          }
        }

        &:nth-child(2n + 1) {
          background: #eeeeee;
        }

        // 第一個 tr(橫)
        &:first-child {
          background: #525ca3;

          & > td {
            color: #ffffff;
            font-family: Arial;
            font-size: 14px;
            line-height: 1.57;
            height: 45px;

            // 第一排橫 第一個td score
            &:first-child {
              padding-left: 16px;

              @media screen and (min-width: 769px) {
                padding-left: 20px;
              }
            }
            // 第二排橫 第一個td Morphological Description
            &:last-child {
            }
          }
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
