<script>
import { mapState } from 'vuex';
import Card from 'components/Report/SubComponents/Card.vue';
import Form from 'components/Report/SubComponents/Form.vue';
import Body from 'assets/images/body@3x.png';

export default {
  name: 'FullReportContent',
  components: {
    Card,
    Form,
  },
  props: {
    showMailForm: {
      require: true,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      Body,
    };
  },
  computed: {
    ...mapState({
      sessionId: state => state.patient.patientId,
      name: state => state.patient.patientName,
      reportDate: state => state.patient.reportDate,
      age: state => state.patient.age,
      gender: state => state.patient.gender,
      interpretation: state => state.patient.interpretation,
      EASI: state => state.patient.EASI,
      BSA: state => state.patient.BSA,
      IGA: state => state.patient.IGA,
      HeadNeck: state => state.patient.HeadNeck,
      UpperExtremities: state => state.patient.UpperExtremities,
      Trunk: state => state.patient.Trunk,
      LowerExtremities: state => state.patient.LowerExtremities,
    }),
    cardList() {
      return [
        [
          {
            title: 'Head & neck',
            themeColor: '#f0dd00',
            score: this.HeadNeck.bodypartScore,
            AreaScore: this.HeadNeck.area.areaScore,
            AreaPercent: this.HeadNeck.area.areaPercent,
            Erythema: this.HeadNeck.symptom.Erythema,
            EdemaPapulation: this.HeadNeck.symptom.EdemaPapulation,
            Excoriation: this.HeadNeck.symptom.Excoriation,
            Lichenification: this.HeadNeck.symptom.Lichenification,
          },
          {
            title: 'Trunk',
            themeColor: '#fbba00',
            score: this.Trunk.bodypartScore,
            AreaScore: this.Trunk.area.areaScore,
            AreaPercent: this.Trunk.areaPercent,
            Erythema: this.Trunk.symptom.Erythema,
            EdemaPapulation: this.Trunk.symptom.EdemaPapulation,
            Excoriation: this.Trunk.symptom.Excoriation,
            Lichenification: this.Trunk.symptom.Lichenification,
          },
        ],
        [
          {
            title: 'Upper extremities',
            themeColor: '#00a590',
            score: this.UpperExtremities.bodypartScore,
            AreaScore: this.UpperExtremities.area.areaScore,
            AreaPercent: this.UpperExtremities.areaPercent,
            Erythema: this.UpperExtremities.symptom.Erythema,
            EdemaPapulation: this.UpperExtremities.symptom.EdemaPapulation,
            Excoriation: this.UpperExtremities.symptom.Excoriation,
            Lichenification: this.UpperExtremities.symptom.Lichenification,
          },
          {
            title: 'Lower extremities',
            themeColor: '#bcbc1c',
            score: this.LowerExtremities.bodypartScore,
            AreaScore: this.LowerExtremities.area.areaScore,
            AreaPercent: this.LowerExtremities.areaPercent,
            Erythema: this.LowerExtremities.symptom.Erythema,
            EdemaPapulation: this.LowerExtremities.symptom.EdemaPapulation,
            Excoriation: this.LowerExtremities.symptom.Excoriation,
            Lichenification: this.LowerExtremities.symptom.Lichenification,
          },
        ],
      ];
    },
  },
  methods: {
    // TODO:
    openDialog() {
      this.$emit('openDialog', 'alert');
    },
  },
};
</script>

<template>
  <div class="full-report">
    <div class="report">
      <div class="top">
        <div class="date">Report date: <span>{{this.reportDate}}</span></div>
        <div class="hello">Hello<br/>
          This is the report of patient <span>{{this.name}}</span>
        </div>
      </div>
      <div class="middle">
        <div class="item">
          <div class="item-block">
            <div class="key">BSA:</div>
            <div class="value">{{this.BSA}}%</div>
          </div>
        </div>
        <div class="item">
          <div class="item-block">
            <div class="key">Interpretation:</div>
            <div class="value">{{this.interpretation.toUpperCase()}}</div>
          </div>
        </div>
        <div class="item">
          <div class="item-block">
            <div class="key">IGA:</div>
            <div class="value" v-if="this.IGA">
              {{this.IGA.substr(0,1)}}: <span>{{this.IGA.substring(4)}}</span>
            </div>
            <div class="value" v-else>
              {{this.IGA}}
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item-block">
            <div class="key">Gender:</div>
            <div class="value">{{this.gender}}</div>
          </div>
        </div>
        <div class="item">
          <div class="item-block">
            <div class="key">Age:</div>
            <div class="value">{{this.age}}</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="card-warp" :key="idx" v-for="(card, idx) in cardList">
          <Card
            class="custom-card"
            v-for="(item, idx) in card"
            :key="idx"
            :title="item.title"
            :color="item.themeColor"
            :score="item.score"
            :AreaScore="item.AreaScore"
            :AreaPercent="item.AreaPercent"
            :Erythema="item.Erythema"
            :EdemaPapulation="item.EdemaPapulation"
            :Excoriation="item.Excoriation"
            :Lichenification="item.Lichenification"
          >
          </Card>
        </div>
        <img :src="Body" />
      </div>
      <div class="item">
        <div class="item-block">
          <div class="key">EASI score:</div>
          <div class="value">{{this.EASI}}</div>
        </div>
      </div>
    </div>
    <Form :isFormShow="showMailForm" @openDialog="openDialog" />
  </div>
</template>

<style scoped lang="scss">
.full-report {
  & > .report {
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 769px) {
      width: 944px;
      margin-bottom: 80px;
    }

    & > .top {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 60px;

      @media screen and (min-width: 769px) {
        width: 944px;
      }

      & > .date {
        width: 944px;
        text-align: left;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: 0.4px;
        color: #030303;
        opacity: 0.5;

        @media screen and (max-width: 769px) {
          align-self: flex-end;
          margin-bottom: 20px;
          margin-bottom: 20px;
        }

        & > span {
          font-weight: bold;

          @media screen and (max-width: 769px) {
            display: block;
          }
        }
      }

      & > .hello {
        font-weight: 300;
        font-size: 20px;
        line-height: 1.4;
        letter-spacing: 0.5px;
        color: #030303;

        & > span {
          font-weight: bold;

          @media screen and (max-width: 769px) {
            display: block;
          }
        }
      }
    }

    & > .middle {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      margin: 0 auto;
      width: 100%;

      @media screen and (min-width: 769px) {
        width: 944px;
      }

      & > .item {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 33%;

        font-weight: 300;
        font-size: 20px;
        line-height: 1.29;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom: 40px;

        @media screen and (min-width: 769px) {
          width: 33%;
          height: 50%;
          font-size: 28px;
        }

        & > .item-block {
          display: flex;
          flex-direction: column;

          & > .value {
            color: #000;

            & > span {
              font-weight: 500;
            }
          }
        }

        &:nth-child(1) {
          align-items: flex-start;
        }

        &:nth-child(2) {
          align-items: flex-start;
        }

        &:nth-child(3) {
          align-items: flex-start;

          & span {
            font-weight: 500;
          }
        }

        &:nth-child(4) {
          align-items: flex-start;
        }

        &:nth-child(5) {
          align-items: flex-start;
        }

        &:nth-child(6) {
          align-items: flex-start;
        }

        & .value {
          font-size: 40px;
          line-height: 1.2;
          color: #000000;
          white-space: pre-wrap;
          font-size: 24px;

          @media screen and (min-width: 769px) {
            font-size: 40px;
          }
        }
      }
    }

    & > .bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 0;

      @media screen and (min-width: 769px) {
        width: 944px;
        margin-bottom: 40px;
        flex-direction: column;
        justify-content: space-between;
      }

      & > .card-warp {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 36px;

        &:first-child {
          margin-bottom: 0;
        }

        @media screen and (min-width: 769px) {
          margin-bottom: 0;
          flex-direction: row;
        }

        & > .custom-card {
          &:first-child {
            @media screen and (min-width: 769px) {
              margin-bottom: 40px;
            }
          }
        }
      }

      & > img {
        display: none;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 5%);

        @media screen and (min-width: 769px) {
          display: block;
          height: 440px
        }
      }
    }

    // EASI score
    & > .item {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 33%;

      font-weight: 300;
      font-size: 20px;
      line-height: 1.29;
      color: rgba(0, 0, 0, 0.5);
      margin-bottom: 40px;

      @media screen and (min-width: 769px) {
        width: 33%;
        height: 50%;
        font-size: 28px;
      }

      & > .item-block {
        display: flex;
        flex-direction: column;

        & > .value {
          color: #000;
        }
      }

      &:nth-child(1) {
        align-items: flex-start;
      }

      &:nth-child(2) {
        align-items: flex-start;
      }

      &:nth-child(3) {
        align-items: flex-start;

        & span {
          font-weight: 500;
        }
      }

      &:nth-child(4) {
        align-items: flex-start;
      }

      &:nth-child(5) {
        align-items: flex-start;
      }

      &:nth-child(6) {
        align-items: flex-start;
      }

      & .value {
        font-size: 40px;
        line-height: 1.2;
        color: #000000;
        white-space: pre-wrap;
        font-size: 24px;

        @media screen and (min-width: 769px) {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
