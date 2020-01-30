<script>
import Header from 'components/Common/Header.vue';
import Footer from 'components/Common/Footer.vue';
import Dialog from 'components/Common/Dialog.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Dialog,
  },
};
</script>

<template>
  <div class="route">
    <Dialog />
    <Header />
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view>
        </router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive">
      </router-view>
    <Footer />
  </div>
</template>
