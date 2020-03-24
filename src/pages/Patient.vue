<script>
import Footer from 'components/Common/Footer.vue';
import PatientLayout from '@/layouts/Patient/index.vue';

export default {
  name: 'PatientPage',
  components: {
    Footer,
    PatientLayout,
  },
  created() {
    window.scrollTo(0, 0);
  },
  beforeRouteEnter(to, from, next) {
    const comimgPath = ['/report/text-report', '/report/full-report', '/calculator'];
    if (comimgPath.indexOf(from.path) === -1) {
      // console.log('來源驗證失敗:', from.path);
      return next('/');
    }
    return next();
  },
  beforeDestory() {
    console.log('beforeDestory');
    if (this.$store.hasModule('patient')) {
      console.log('unregisterModule patient');
      this.$store.unregisterModule('patient');
    }
    if (this.$store.hasModule('calculator')) {
      console.log('unregisterModule calculator');
      this.$store.unregisterModule('calculator');
    }
  },
};
</script>

<template>
  <div>
    <PatientLayout />
    <Footer />
  </div>
</template>
