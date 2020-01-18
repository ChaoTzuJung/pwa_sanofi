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
  methods: {
    // TODO:
    openDialog() {
      this.$emit('openDialog', 'alert');
    },
  },
};
</script>

<template>
  <div class="text-report">
    <div class="mobile">
      <Form :isFormShow="showMailForm" @openDialog="openDialog" />
    </div>
    <div class="block">
      <div class="title">Infomation</div>
      <div class="item">
        Patient:
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
        BSA:
        <div class="value">{{this.BSA}}%</div>
      </div>
      <div class="item">
        Interpretation:
        <div class="value">{{this.interpretation}}</div>
      </div>
      <div class="item">
        IGA:
        <div class="value">{{this.IGA}}</div>
      </div>
    </div>
    <div class="block">
        <div class="title">Body Regions</div>
        <div class="item">
          H:
          <div class="value">
            Er: {{this.HeadNeck.symptom.Erythema}}
            / Ed: {{this.HeadNeck.symptom.EdemaPapulation}}
            / Ex: {{this.HeadNeck.symptom.Excoriation}}
            / Li: {{this.HeadNeck.symptom.Lichenification}}
            / Region: {{this.HeadNeck.area.areaScore}} ({{this.HeadNeck.area.areaPercent}}%)
            / Body: {{this.HeadNeck.bodypartScore}}
          </div>
        </div>
        <div class="item">
          T:
          <div class="value">
            Er: {{this.Trunk.symptom.Erythema}}
            / Ed: {{this.Trunk.symptom.EdemaPapulation}}
            / Ex: {{this.Trunk.symptom.Excoriation}}
            / Li: {{this.Trunk.symptom.Lichenification}}
            / Region: {{this.Trunk.area.areaScore}}  ({{this.Trunk.area.areaPercent}}%)
            / Body: {{this.Trunk.bodypartScore}}
          </div>
        </div>
        <div class="item">
          U:
          <div class="value">
            Er: {{this.UpperExtremities.symptom.Erythema}}
            / Ed: {{this.UpperExtremities.symptom.EdemaPapulation}}
            / Ex: {{this.UpperExtremities.symptom.Excoriation}}
            / Li: {{this.UpperExtremities.symptom.Lichenification}}
            <!-- eslint-disable-next-line max-len -->
            / Region: {{this.UpperExtremities.area.areaScore}} ({{this.UpperExtremities.area.areaPercent}}%)
            / Body: {{this.UpperExtremities.bodypartScore}}
          </div>
        </div>
        <div class="item">
          L:
          <div class="value">
            Er: {{this.LowerExtremities.symptom.Erythema}}
            / Ed: {{this.LowerExtremities.symptom.EdemaPapulation}}
            / Ex: {{this.LowerExtremities.symptom.Excoriation}}
            / Li: {{this.LowerExtremities.symptom.Lichenification}}
            <!-- eslint-disable-next-line max-len -->
            / Region: {{this.LowerExtremities.area.areaScore}} ({{this.LowerExtremities.area.areaPercent}}%)
            / Body: {{this.LowerExtremities.bodypartScore}}
          </div>
        </div>
    </div>

    <div class="item">
      EASI score:
      <div class="value">{{this.EASI}}</div>
    </div>

    <div class="desktop">
      <Form :isFormShow="showMailForm" @openDialog="openDialog" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-report {

  & > .block {
    width: 100%;

    @media screen and (min-width: 769px) {
      width: 800px;
    }

    &:nth-of-type(2n + 1) {
      margin-bottom: 24px;
      & > .item {
        /* &:nth-child(4) {
          margin-bottom: 24px;
        } */
      }
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

  & > .desktop {
    display: none;

    @media screen and (min-width: 769px) {
      display: block;
    }
  }

  & > .mobile {
    display: block;

    @media screen and (min-width: 769px) {
      display: none;
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
