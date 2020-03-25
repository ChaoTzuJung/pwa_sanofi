<script>
import Footer from 'components/Common/Footer.vue';
import HomeLayout from '@/layouts/Home/index.vue';

export default {
  name: 'HomePage',
  components: {
    Footer,
    HomeLayout,
  },
  beforeCreate() {
    console.log('beforeCreate');
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
    <HomeLayout />
    <Footer />
  </div>
</template>
