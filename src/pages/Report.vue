<script>
import ReportLayout from '@/layouts/Report/index.vue';

export default {
  name: 'ReportPage',
  components: {
    ReportLayout,
  },
  beforeRouteEnter(to, from, next) {
    if (from.path !== '/patient') {
      // console.log('來源驗證失敗:', from.path);
      return next('/');
    }
    return next();
  },
  beforeDestory() {
    if (this.$store.hasModule('patient')) {
      this.$store.unregisterModule('patient');
    }
    if (this.$store.hasModule('calculator')) {
      this.$store.unregisterModule('calculator');
    }
  },
};
</script>

<template>
  <ReportLayout />
</template>
