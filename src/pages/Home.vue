<script>
import Footer from 'components/Common/Footer.vue';
import HomeLayout from '@/layouts/Home/index.vue';

export default {
  name: 'HomePage',
  components: {
    Footer,
    HomeLayout,
  },
};
</script>

<template>
  <div>
    <HomeLayout />
    <Footer />
  </div>
</template>
