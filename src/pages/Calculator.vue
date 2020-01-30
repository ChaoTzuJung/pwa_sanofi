<script>
import CalculatorLayout from '@/layouts/Calculator/index.vue';
import calculatorModule from '@/store/modules/calculator';
import patientModule from '@/store/modules/patient';


export default {
  name: 'CalculatorPage',
  components: {
    CalculatorLayout,
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
  <CalculatorLayout />
</template>
