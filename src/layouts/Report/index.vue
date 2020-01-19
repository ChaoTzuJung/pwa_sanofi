<script>
import { mapState, mapGetters } from 'vuex';
import Button from 'components/Common/Button.vue';
import Dialog from 'components/Common/Dialog.vue';
import TextReportContent from 'components/Report/TextReportContent.vue';
import FullReportContent from 'components/Report/FullReportContent.vue';

export default {
  components: {
    Button,
    Dialog,
    TextReportContent,
    FullReportContent,
  },
  data() {
    return {
      showMailForm: false,
      isDialogOpen: false,
      DialogType: '',
    };
  },
  methods: {
    switchReport() {
      if (this.reportType === 'Text Report') {
        this.$router.replace('/report/full-report');
      } else {
        this.$router.replace('/report/text-report');
      }
    },
    showMail() {
      this.showMailForm = !this.showMailForm;
      window.scrollTo(0, document.body.scrollHeight + 400);
    },
    openDialog(type) {
      this.DialogType = type;
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
    backToHome() {
      // TODO:
      this.$store.commit('RESET_STORE_DATA');
      this.$router.push('/');
    },
  },
  computed: {
    ...mapState({
      patient: state => state.patient,
    }),
    ...mapGetters(['isLoading']),
    reportType() {
      return this.$route.name === 'text-report' ? 'Text Report' : 'Full Report';
    },
    reportButtonText() {
      return this.reportType === 'Text Report' ? 'View the full report' : 'View the text report';
    },
  },
};
</script>

<template src="./template.html"></template>
<style scoped lang="scss" src="./style.scss"></style>
