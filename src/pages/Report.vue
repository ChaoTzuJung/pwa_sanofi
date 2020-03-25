<script>
import Footer from 'components/Common/Footer.vue';
import ReportLayout from '@/layouts/Report/index.vue';

export default {
  name: 'ReportPage',
  components: {
    Footer,
    ReportLayout,
  },
  created() {
    window.scrollTo(0, 0);
  },
  beforeRouteEnter(to, from, next) {
    if (from.path !== '/patient') {
      // console.log('來源驗證失敗:', from.path);
      return next('/');
    }
    return next();
  },
};
</script>

<template>
  <div>
    <ReportLayout />
    <Footer />
  </div>
</template>
