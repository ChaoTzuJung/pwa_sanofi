<script>
import PatientLayout from '@/layouts/Patient/index.vue';

export default {
  name: 'PatientPage',
  components: {
    PatientLayout,
  },
  beforeRouteEnter(to, from, next) {
    const comimgPath = ['/report/text-report', '/report/full-report', '/calculator'];
    if (comimgPath.indexOf(from.path) === -1) {
      // console.log('來源驗證失敗:', from.path);
      return next('/');
    }
    return next();
  },
};
</script>

<template>
  <PatientLayout />
</template>
