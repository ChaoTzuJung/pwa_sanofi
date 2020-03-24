<script>
import { mapState, mapGetters } from 'vuex';
import Form from 'components/Report/SubComponents/Form.vue';

export default {
  name: 'TextReportContent',
  components: {
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
      ChestI: this.ChestI,
      ChestII: this.ChestII,
      ShoulderI: this.ShoulderI,
      ShoulderII: this.ShoulderII,
      TricepsI: this.TricepsI,
      TricepsII: this.TricepsII,
      BicepsI: this.BicepsI,
      BicepsII: this.BicepsII,
      BacksideI: this.BacksideI,
      BacksideII: this.BacksideII,
      AbsI: this.AbsI,
      AbsII: this.AbsII,
      LegI: this.LegI,
      LegII: this.LegII,
      ButtocksI: this.ButtocksI,
      ButtocksII: this.ButtocksII,
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
  },
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
};
</script>

<template>
  <div class="text-report">
    <div class="block">
      <div class="title">Infomation</div>
      <div class="item">
        Trainee:
        <div class="value">{{this.name}}</div>
      </div>
      <div class="item">
        Age:
        <div class="value">{{this.age}}</div>
      </div>
      <div class="item">
        Gender:
        <div class="value">{{this.gender}}</div>
      </div>
      <div class="item" style="margin-top: 16px">
        Report date:
        <div class="value">{{this.reportDate}}</div>
      </div>
      <div class="item">
        RM:
        <div class="value">{{this.BSA}}%</div>
      </div>
      <div class="item">
        Strength:
        <div class="value">{{this.interpretation}}</div>
      </div>
      <div class="item">
        WTF:
        <div class="value">{{this.IGA}}</div>
      </div>
    </div>
    <div class="block">
        <div class="title">Body Regions</div>
        <div class="item">
          Chest & Shoulder:
          <div class="value">
            {{this['Chest & Shoulder']['Chest-I'].movement}}: {{ChestI}}
            / {{this['Chest & Shoulder']['Chest-II'].movement}}: {{ChestII}}
            / {{this['Chest & Shoulder']['Shoulder-I'].movement}}: {{ShoulderI}}
            / {{this['Chest & Shoulder']['Shoulder-II'].movement}}: {{ShoulderII}}
          </div>
        </div>
        <div class="item">
          Biceps & Triceps:
          <div class="value">
            {{this['Biceps & Triceps']['Triceps-I'].movement}}: {{TricepsI}}
            / {{this['Biceps & Triceps']['Triceps-II'].movement}}: {{TricepsII}}
            / {{this['Biceps & Triceps']['Biceps-I'].movement}}: {{BicepsI}}
            / {{this['Biceps & Triceps']['Biceps-II'].movement}}: {{BicepsII}}
          </div>
        </div>
        <div class="item">
          Abs & Backside:
          <div class="value">
            {{this['Abs & Backside']['Backside-I'].movement}}: {{BacksideI}}
            / {{this['Abs & Backside']['Backside-II'].movement}}: {{BacksideII}}
            / {{this['Abs & Backside']['Abs-I'].movement}}: {{AbsI}}
            / {{this['Abs & Backside']['Abs-II'].movement}}: {{AbsII}}
          </div>
        </div>
        <div class="item">
          Buttocks & Leg:
          <div class="value">
            {{this['Buttocks & Leg']['Leg-I'].movement}}: {{LegI}}
            / {{this['Buttocks & Leg']['Leg-II'].movement}}: {{LegII}}
            / {{this['Buttocks & Leg']['Buttocks-I'].movement}}: {{ButtocksI}}
            / {{this['Buttocks & Leg']['Buttocks-II'].movement}}: {{ButtocksII}}
          </div>
        </div>
    </div>

    <div class="item">
      Training volume:
      <div class="value">{{this.EASI}}</div>
    </div>
    <Form :isFormShow="showMailForm" />
  </div>
</template>

<style scoped lang="scss">
.text-report {
  & > .block {
    width: 100%;

    @media screen and (min-width: 944px) {
      width: 800px;
    }

    &:nth-of-type(2n + 1) {
      margin-bottom: 24px;
    }

    &:nth-of-type(2n) {
      margin-bottom: 40px;
    }

    & > .title {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
      opacity: 0.5;
      color: #030303;
      margin-bottom: 8px;
    }

    & > .item {
      margin: 8px 0;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;
      color: rgba(3, 3, 3, 0.5);

      & > .value {
        margin-left: 6px;
        display: inline-block;
        opacity: 1;
        color: rgba(3, 3, 3, 1);
      }
    }
  }

  & > .item {
    margin: 8px 0 48px 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
    color: rgba(3, 3, 3, 0.5);

    & > .value {
      margin-left: 6px;
      display: inline-block;
      opacity: 1;
      color: rgba(3, 3, 3, 1);
    }
  }
}
</style>
