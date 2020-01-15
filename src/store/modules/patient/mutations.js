export default {
  SAVE_AREASCORE_PERCENT(state, { type, payload }) {
    state[type].area.areaPercent = payload;
  },
  SAVE_BSA_PERCENT(state, payload) {
    state.BSA = payload;
  },
};

// handLoadingState(state, bool){
//   state.isLoad = bool;
// },
// goBackError(state, bool){
//   //可以去觸發告訴頁面邏輯目前有錯誤
//   state.errorTrigger = bool;
// },
// // 操作資料狀態 commit('action_type')
// SET_AREA_SCORE(state, { name, val, percent }) {
//   state.area[name].AreaScore = val;
//   state.patient[name].area = val;
//   state.patient[name].areaPercent = percent;
// },
// SET_SYMPTOM_SCORE(state, { parent, name, val }) {
//   state.area[parent].SymptomScore[name] = val;
//   state.patient[parent][name] = val;
// },
// SET_SYMPTOM(state, { name, val }) {
//   state.symptom[name] = val;
// },
// SET_AREA_COMPLETED(state, { name, completed }) {
//   state.body[name].areaIsCompleted = completed;
// },
// CHECK_SYMPTOM_COMPLETED(state, name) {
//   state.body[name].symptomIsCompleted =
//       state.body[name].symptomCompleted.ERYTHEMA &&
//       state.body[name].symptomCompleted.EDEMAPAPULATION &&
//       state.body[name].symptomCompleted.EXCORIATION &&
//       state.body[name].symptomCompleted.LICHENIFICATION;
// },
// SET_SYMPTOM_ERYTHEMA_COMPLETED(state, { name, completed }) {
//   state.body[name].symptomCompleted.ERYTHEMA = completed;
// },
// SET_SYMPTOM_EDEMAPAPULATION_COMPLETED(state, { name, completed }) {
//   state.body[name].symptomCompleted.EDEMAPAPULATION = completed;
// },
// SET_SYMPTOM_EXCORIATION_COMPLETED(state, { name, completed }) {
//   state.body[name].symptomCompleted.EXCORIATION = completed;
// },
// SET_SYMPTOM_LICHENIFICATION_COMPLETED(state, { name, completed }) {
//   state.body[name].symptomCompleted.LICHENIFICATION = completed;
// },
// CHECK_TAB(state, check) {
//   state.body.HeadNeck.checked = check;
//   state.body.UpperExtremities.checked = check;
//   state.body.Trunk.checked = check;
//   state.body.LowerExtremities.checked = check;
// },
// SET_ACTIVE_TAB_TO_RESULT(state, component) {
//   state.activeTab = component;
// },
// SELECT_TAB(state, name) {
//   const all = ['HeadNeck', 'UpperExtremities', 'Trunk', 'LowerExtremities', 'Result'];
//   const unSelected = all.filter(item => item !== name);
//   state.body[name].isSelect = true;
//   state.body[unSelected[0]].isSelect = false;
//   state.body[unSelected[1]].isSelect = false;
//   state.body[unSelected[2]].isSelect = false;
//   state.body[unSelected[3]].isSelect = false;
// },
// SAVE_BODY_RESULT(state, { name, score }) {
//   state.body[name].score = score;
//   state.patient[name].score = score;
// },
// SAVE_BODY_EASI(state, data) {
//   state.body.Result.sum = data;
//   state.patient.EASI = data;
// },
// SAVE_BODY_INTERPRETATION(state, data) {
//   state.body.Result.interpretation = data;
//   state.patient.interpretation = data;
// },
// SAVE_PATIENT_INFORMATION(state, patientData) {
//   state.patient.name = patientData.name;
//   state.patient.reportDate = patientData.reportDate;
//   state.patient.age = patientData.age;
//   state.patient.gender = patientData.gender;
// },
// SAVE_PATIENT_BSA_IGA(state, patientData) {
//   state.patient.BSA = patientData.BSA;
//   state.patient.IGA = patientData.IGA;
// },
// RESET_STORE_DATA(state){
//   const s = initialState();
//   Object.keys(s).forEach(key => {
//       state[key] = s[key]
//   })
// },
// SAVE_SESSION_ID(state, sessionId) {
//   state.patient.sessionId = sessionId;
// },
// SAVE_REQUEST_DATA(state, requestData) {
//   state.requestData = requestData;
// },
