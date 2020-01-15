export default {
  OPEN_SYMPTOMS_MODAL(state, { severity, status }) {
    state.currentSeverity = severity;
    state.isModalOpen = status;
  },
  SAVE_CACULATOR_DATA(state, data) {
    state.interpretation = data;
    state.EASI = data;
    state.BSA = data;
    state.IGA = data;

    state.HeadNeck.area.areaScore = data;
    state.HeadNeck.area.areaPercent = data;
    state.HeadNeck.symptom.Erythema = data;
    state.HeadNeck.symptom.EdemaPapulation = data;
    state.HeadNeck.symptom.Excoriation = data;
    state.HeadNeck.symptom.Lichenification = data;
    state.HeadNeck.bodypartScore = data;

    state.UpperExtremities.area.areaScore = data;
    state.UpperExtremities.area.areaPercent = data;
    state.UpperExtremities.symptom.Erythema = data;
    state.UpperExtremities.symptom.EdemaPapulation = data;
    state.UpperExtremities.symptom.Excoriation = data;
    state.UpperExtremities.symptom.Lichenification = data;
    state.UpperExtremities.bodypartScore = data;

    state.Trunk.area.areaScore = data;
    state.Trunk.area.areaPercent = data;
    state.Trunk.symptom.Erythema = data;
    state.Trunk.symptom.EdemaPapulation = data;
    state.Trunk.symptom.Excoriation = data;
    state.Trunk.symptom.Lichenification = data;
    state.Trunk.bodypartScore = data;

    state.LowerExtremities.area.areaScore = data;
    state.LowerExtremities.area.areaPercent = data;
    state.LowerExtremities.symptom.Erythema = data;
    state.LowerExtremities.symptom.EdemaPapulation = data;
    state.LowerExtremities.symptom.Excoriation = data;
    state.LowerExtremities.symptom.Lichenification = data;
    state.LowerExtremities.bodypartScore = data;
  },
};
