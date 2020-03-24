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
    <CalculatorLayout />
    <Footer />
  </div>
</template>
