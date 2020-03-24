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
  },
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
        <div class="item" v-if="ChestI || ChestII || ShoulderI || ShoulderII">
          Chest & Shoulder:<br>
          <div class="value">
            <div v-if="ChestI">
              {{this['Chest & Shoulder']['Chest-I'].movement}}: {{ChestI}}
            </div>
            <div v-if="ChestII">
              {{this['Chest & Shoulder']['Chest-II'].movement}}: {{ChestII}}
            </div>
            <div v-if="ShoulderI">
              {{this['Chest & Shoulder']['Shoulder-I'].movement}}: {{ShoulderI}}
            </div>
            <div v-if="ShoulderII">
              {{this['Chest & Shoulder']['Shoulder-II'].movement}}: {{ShoulderII}}
            </div>
          </div>
        </div>
        <div class="item" v-if="TricepsI || TricepsII || BicepsI || BicepsII">
          Biceps & Triceps:<br>
          <div class="value">
            <div v-if="TricepsI">
              {{this['Biceps & Triceps']['Triceps-I'].movement}}: {{TricepsI}}
            </div>
            <div v-if="TricepsII">
              {{this['Biceps & Triceps']['Triceps-II'].movement}}: {{TricepsII}}
            </div>
            <div v-if="BicepsI">
              {{this['Biceps & Triceps']['Biceps-I'].movement}}: {{BicepsI}}
            </div>
            <div v-if="BicepsII">
              {{this['Biceps & Triceps']['Biceps-II'].movement}}: {{BicepsII}}
            </div>
          </div>
        </div>
        <div class="item" v-if="BacksideI || BacksideII || AbsI || AbsII">
          Abs & Backside:<br>
          <div class="value">
            <div v-if="BacksideI">
              {{this['Abs & Backside']['Backside-I'].movement}}: {{BacksideI}}
            </div>
            <div v-if="BacksideII">
              {{this['Abs & Backside']['Backside-II'].movement}}: {{BacksideII}}
            </div>
            <div v-if="AbsI">
              {{this['Abs & Backside']['Abs-I'].movement}}: {{AbsI}}
            </div>
            <div v-if="AbsII">
              {{this['Abs & Backside']['Abs-II'].movement}}: {{AbsII}}
            </div>
          </div>
        </div>
        <div class="item" v-if="LegI || LegII || ButtocksI || ButtocksII">
          Buttocks & Leg:<br>
          <div class="value">
            <div v-if="LegI">
              {{this['Buttocks & Leg']['Leg-I'].movement}}: {{LegI}}
            </div>
            <div v-if="LegII">
              {{this['Buttocks & Leg']['Leg-II'].movement}}: {{LegII}}
            </div>
            <div v-if="ButtocksI">
              {{this['Buttocks & Leg']['Buttocks-I'].movement}}: {{ButtocksI}}
            </div>
            <div v-if="ButtocksII">
              {{this['Buttocks & Leg']['Buttocks-II'].movement}}: {{ButtocksII}}
            </div>
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
