<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import Button from 'components/Common/Button.vue';
import Radio from 'components/Common/Radio.vue';

export default {
  name: 'PatientContainer',
  components: {
    Button,
    Radio,
  },
  data() {
    return {
      patient: {
        name: '',
        age: '',
        gender: '',
        reportDate: '',
      },
      isValidFail: false,
      reportType: '',
      sessionId: '',
      ages: [
        { label: '0 - 5', val: '0 - 5' },
        { label: '6 - 11', val: '6 - 11' },
        { label: '12 - 17', val: '12 - 17' },
        { label: '18 - 30', val: '18 - 30' },
        { label: '31 - 40', val: '31 - 40' },
        { label: '41 - 50', val: '41 - 50' },
        { label: '51 - 60', val: '51 - 60' },
        { label: '61+', val: '61+' },
        { label: 'unknown', val: 'unknown' },
      ],
      genders: [
        { label: 'Male', val: 'Male' },
        { label: 'Female', val: 'Female' },
      ],
    };
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  watch: {
    'patient.name': {
      handler(newName, oldName) {
        console.log('newName: ', newName, 'oldName: ', oldName);
        // Just input English name
        if (!this.patient.name.match(/^[^\u4e00-\u9fa5]+$/)) {
          this.patient.name = '';
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.patient.reportDate = moment().format('YYYY/MM/DD HH:mm:ss');
  },
  methods: {
    ...mapActions({
      updateLoading: 'updateLoading',
    }),
    valid(text) {
      if (text.trim() === '' || text.trim() === null) {
        this.showValidationError = true;
      } else {
        this.showValidationError = false;
        this.isLoading = true;
      }
    },
    handleAgeChange(value) {
      this.patient.age = value;
    },
    handleGenderChange(value) {
      this.patient.gender = value;
    },
    generateReport(reportType) {
      if (!this.patient.name) {
        this.isValidFail = true;
        return;
      }
      console.log(reportType);
      this.updateLoading(true, { root: true });
      this.isValidFail = false;
    },
  },
};
</script>

<template src="./template.html"></template>
<style scoped lang="scss" src="./style.scss"></style>
