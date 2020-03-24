<script>
import Footer from 'components/Common/Footer.vue';
import CalculatorLayout from '@/layouts/Calculator/index.vue';

export default {
  name: 'CalculatorPage',
  components: {
    Footer,
    CalculatorLayout,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <div>
    <CalculatorLayout />
    <Footer />
  </div>
</template>
