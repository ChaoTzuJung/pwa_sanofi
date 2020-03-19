<script>
import { mapState } from 'vuex';
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
      HeadNeck: state => state.patient.HeadNeck,
      UpperExtremities: state => state.patient.UpperExtremities,
      Trunk: state => state.patient.Trunk,
      LowerExtremities: state => state.patient.LowerExtremities,
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
        <div class="item">
          C:
          <div class="value">
            1st: {{this.HeadNeck.symptom.Erythema}}
            / 2nd: {{this.HeadNeck.symptom.EdemaPapulation}}
            / 3rd: {{this.HeadNeck.symptom.Excoriation}}
            / 4th: {{this.HeadNeck.symptom.Lichenification}}
            / Region: {{this.HeadNeck.area.areaScore}} ({{this.HeadNeck.area.areaPercent}}%)
            / Body: {{this.HeadNeck.bodypartScore}}
          </div>
        </div>
        <div class="item">
          A:
          <div class="value">
            1st: {{this.Trunk.symptom.Erythema}}
            / 2nd: {{this.Trunk.symptom.EdemaPapulation}}
            / 3rd: {{this.Trunk.symptom.Excoriation}}
            / 4th: {{this.Trunk.symptom.Lichenification}}
            / Region: {{this.Trunk.area.areaScore}}  ({{this.Trunk.area.areaPercent}}%)
            / Body: {{this.Trunk.bodypartScore}}
          </div>
        </div>
        <div class="item">
          B:
          <div class="value">
            1st: {{this.UpperExtremities.symptom.Erythema}}
            / 2nd: {{this.UpperExtremities.symptom.EdemaPapulation}}
            / 3rd: {{this.UpperExtremities.symptom.Excoriation}}
            / 4th: {{this.UpperExtremities.symptom.Lichenification}}
            <!-- eslint-disable-next-line max-len -->
            / Region: {{this.UpperExtremities.area.areaScore}} ({{this.UpperExtremities.area.areaPercent}}%)
            / Body: {{this.UpperExtremities.bodypartScore}}
          </div>
        </div>
        <div class="item">
          L:
          <div class="value">
            1st: {{this.LowerExtremities.symptom.Erythema}}
            / 2nd: {{this.LowerExtremities.symptom.EdemaPapulation}}
            / 3rd: {{this.LowerExtremities.symptom.Excoriation}}
            / 4th: {{this.LowerExtremities.symptom.Lichenification}}
            <!-- eslint-disable-next-line max-len -->
            / Region: {{this.LowerExtremities.area.areaScore}} ({{this.LowerExtremities.area.areaPercent}}%)
            / Body: {{this.LowerExtremities.bodypartScore}}
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
