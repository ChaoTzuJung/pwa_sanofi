<script>
import Footer from 'components/Common/Footer.vue';
import CalculatorLayout from '@/layouts/Calculator/index.vue';
import calculatorModule from '@/store/modules/calculator';
import patientModule from '@/store/modules/patient';

export default {
  name: 'CalculatorPage',
  components: {
    Footer,
    CalculatorLayout,
  },
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {
    if (!this.$store.hasModule('calculator')) {
      this.$store.registerModule('calculator', calculatorModule());
    }
    if (!this.$store.hasModule('patient')) {
      this.$store.registerModule('patient', patientModule());
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
