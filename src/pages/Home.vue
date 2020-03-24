<script>
import Footer from 'components/Common/Footer.vue';
import HomeLayout from '@/layouts/Home/index.vue';
import calculatorModule from '@/store/modules/calculator';
import patientModule from '@/store/modules/patient';

export default {
  name: 'HomePage',
  components: {
    Footer,
    HomeLayout,
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
    <HomeLayout />
    <Footer />
  </div>
</template>
