<script>
import { mapState, mapGetters } from 'vuex';
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
      'Chest & Shoulder': state => state.patient['Chest & Shoulder'],
      'Biceps & Triceps': state => state.patient['Biceps & Triceps'],
      'Abs & Backside': state => state.patient['Abs & Backside'],
      'Buttocks & Leg': state => state.patient['Buttocks & Leg'],
    }),
    ...mapGetters({
      ChestI: 'patient/ChestI',
      ChestII: 'patient/ChestII',
      ShoulderI: 'patient/ShoulderI',
      ShoulderII: 'patient/ShoulderII',
      TricepsI: 'patient/TricepsI',
      TricepsII: 'patient/TricepsII',
      BicepsI: 'patient/BicepsI',
      BicepsII: 'patient/BicepsII',
      BacksideI: 'patient/BacksideI',
      BacksideII: 'patient/BacksideII',
      AbsI: 'patient/AbsI',
      AbsII: 'patient/AbsII',
      LegI: 'patient/LegI',
      LegII: 'patient/LegII',
      ButtocksI: 'patient/ButtocksI',
      ButtocksII: 'patient/ButtocksII',
    }),
    cardList() {
      return [
        [
          {
            title: 'Chest & Shoulder',
            themeColor: '#f0dd00',
            score: this.ChestI + this.ChestII + this.ShoulderI + this.ShoulderII,
            movement1: this['Chest & Shoulder']['Chest-I'].movement,
            movement2: this['Chest & Shoulder']['Chest-II'].movement,
            movement3: this['Chest & Shoulder']['Shoulder-I'].movement,
            movement4: this['Chest & Shoulder']['Shoulder-II'].movement,
            row1: this.ChestI,
            row2: this.ChestII,
            row3: this.ShoulderI,
            row4: this.ShoulderII,
          },
          {
            title: 'Abs & Backside',
            themeColor: '#fbba00',
            score: this.TricepsI + this.TricepsII + this.BicepsI + this.BicepsII,
            movement1: this['Abs & Backside']['Backside-I'].movement,
            movement2: this['Abs & Backside']['Backside-II'].movement,
            movement3: this['Abs & Backside']['Abs-I'].movement,
            movement4: this['Abs & Backside']['Abs-II'].movement,
            row1: this.TricepsI,
            row2: this.TricepsII,
            row3: this.BicepsI,
            row4: this.BicepsII,
          },
        ],
        [
          {
            title: 'Biceps & Triceps',
            themeColor: '#00a590',
            score: this.BacksideI + this.BacksideII + this.AbsI + this.AbsII,
            movement1: this['Biceps & Triceps']['Triceps-I'].movement,
            movement2: this['Biceps & Triceps']['Triceps-II'].movement,
            movement3: this['Biceps & Triceps']['Biceps-I'].movement,
            movement4: this['Biceps & Triceps']['Biceps-II'].movement,
            row1: this.BacksideI,
            row2: this.BacksideII,
            row3: this.AbsI,
            row4: this.AbsII,
          },
          {
            title: 'Buttocks & Leg',
            themeColor: '#bcbc1c',
            score: this.LegI + this.LegII + this.ButtocksI + this.ButtocksII,
            movement1: this['Buttocks & Leg']['Leg-I'].movement,
            movement2: this['Buttocks & Leg']['Leg-II'].movement,
            movement3: this['Buttocks & Leg']['Buttocks-I'].movement,
            movement4: this['Buttocks & Leg']['Buttocks-II'].movement,
            row1: this.LegI,
            row2: this.LegII,
            row3: this.ButtocksI,
            row4: this.ButtocksII,
          },
        ],
      ];
    },
  },
};
</script>

<template>
  <div class="full-report">
    <div class="report" :class="!showMailForm ? 'add-margin' : ''">
      <div class="top">
        <div class="date">Report date: <span>{{this.reportDate}}</span></div>
        <div class="hello">Hello<br/>
          This is the report of trainee <span>{{this.name}}</span>
        </div>
      </div>
      <div class="middle">
        <div class="item">
          <div class="item-block">
            <div class="key">RM:</div>
            <div class="value">{{this.BSA}}%</div>
          </div>
        </div>
        <div class="item">
          <div class="item-block">
            <div class="key">Strength:</div>
            <div class="value">{{this.interpretation.toUpperCase()}}</div>
          </div>
        </div>
        <div class="item">
          <div class="item-block">
            <div class="key">WTF:</div>
            <div class="value" v-if="this.IGA">
              <span class="bold">{{this.IGA}}</span>
            </div>
            <div class="value" v-else>{{this.IGA}}</div>
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
        <div class="card-wrap" :key="idx" v-for="(card, idx) in cardList">
          <Card
            class="custom-card"
            v-for="(item, idx) in card"
            :key="idx"
            :title="item.title"
            :color="item.themeColor"
            :score="item.score"
            :movement1="item.movement1"
            :movement2="item.movement2"
            :movement3="item.movement3"
            :movement4="item.movement4"
            :row1="item.row1"
            :row2="item.row2"
            :row3="item.row3"
            :row4="item.row4"
          >
          </Card>
        </div>
        <img :src="Body" />
      </div>
      <div class="item">
        <div class="item-block">
          <div class="key">Training volume:</div>
          <div class="value">{{this.EASI}}</div>
        </div>
      </div>
    </div>
    <Form :isFormShow="showMailForm" />
  </div>
</template>

<style scoped lang="scss">
.full-report {
  & > .report {
    width: 944px;
    margin: 0 auto;

    @media screen and (max-width: 944px) {
      width: 100%;
    }

    & > .top {
      display: flex;
      flex-direction: column;
      width: 800px;
      margin: 0 auto 60px auto;

      @media screen and (max-width: 944px) {
        flex-direction: column;
        width: 100%;
        margin: 0 auto 40px auto;
      }

      & > .date {
        width: 800px;
        margin-bottom: 20px;
        text-align: right;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.5;
        letter-spacing: 0.4px;
        color: #030303;
        opacity: 0.5;

        @media screen and (max-width: 944px) {
          width: 100%;
          margin-bottom: 10px;
          text-align: left;
          align-self: flex-end;
        }

        & > span {
          font-weight: normal;

          @media screen and (max-width: 944px) {
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

          @media screen and (max-width: 944px) {
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
      width: 800px;

      @media screen and (max-width: 944px) {
        width: 100%;
      }

      & > .item {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 33%;
        font-weight: 300;
        font-size: 20px;
        line-height: 1.29;
        margin-bottom: 20px;
        color: rgba(0, 0, 0, 0.5);

        @media screen and (min-width: 944px) {
          width: 250px;
          height: 50%;
          font-size: 28px;
          margin-right: 25px;
          margin-bottom: 40px;
        }

        & > .item-block {
          display: flex;
          flex-direction: column;

          & > .key {
            line-height: 1.29;

            @media screen and (max-width: 944px) {
              line-height: 1.9;
            }
          }

          & > .value {
            color: #000;

            & .bold {
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
          margin-right: 0;
          align-items: flex-start;
          position: relative;

          & > .value {
            position: absolute;
            left: -8px;
            top: 29px;
            width: 300px;
          };
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

          @media screen and (min-width: 944px) {
            font-size: 40px;
          }
        }
      }
    }

    & > .bottom {
      width: 944px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 0;

      @media screen and (max-width: 944px) {
        width: 100%;
        justify-content: center;
      }

      & > .card-wrap {
        display: flex;
        justify-content: space-between;
        /* margin-bottom: 36px; */
        margin-bottom: 0;

        &:first-child {
          margin-bottom: 0;
        }

        @media screen and (max-width: 944px) {
          margin-bottom: 0;
          flex-direction: column;
          justify-content: normal;
        }

        & > .custom-card {
          &:first-child {
            @media screen and (min-width: 944px) {
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

        @media screen and (min-width: 944px) {
          display: block;
          height: 440px
        }
      }
    }

    // EASI score
    & > .item {
      display: flex;
      flex-direction: column;
      width: 250px;
      height: 50%;
      margin-bottom: 40px;
      margin-right: 25px;
      margin-left: 74px;
      font-weight: 300;
      font-size: 28px;
      line-height: 1.29;
      color: rgba(0, 0, 0, 0.5);

      @media screen and (max-width: 944px) {
        width: 50%;
        height: 33%;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 0;
        font-size: 20px;
      }

      & > .item-block {
        display: flex;
        flex-direction: column;

        & > .value {
          color: #000;
        }
      }

      & .key {
        line-height: 1.29;

        @media screen and (max-width: 944px) {
          line-height: 1.9;
        }
      }

      & .value {
        font-size: 40px;
        line-height: 1.2;
        color: #000000;
        white-space: pre-wrap;


        @media screen and (max-width: 944px) {
          font-size: 24px;
          line-height: 1.5;
        }
      }
    }
  }

  & .add-margin {
      margin-bottom: 40px;
    @media screen and (max-width: 944px) {
      margin-bottom: 80px;
    }
  }
}
</style>
