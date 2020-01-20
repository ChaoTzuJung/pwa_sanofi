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
  data() {
    return {
      isDialogOpen: false,
      DialogType: '',
    };
  },
  methods: {
    openDialog(type) {
      this.$store.commit('OPEN_DIALOG', { type, status: true });
    },
  },
};
</script>

<template>
  <div class="route">
    <Dialog />
    <Header @openDialog="openDialog('confirm')" />
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer />
  </div>
</template>
