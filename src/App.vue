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
    backToHome() {
      // this.$store.commit('resetStoreData');
      this.$router.replace('/');
      this.closeDialog();
    },
    openDialog(type) {
      this.DialogType = type;
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.isDialogOpen = false;
    },
  },
};
</script>

<template>
  <div class="route">
    <Dialog
      :type="DialogType"
      :isDialogOpen="isDialogOpen"
      @closeDialog="closeDialog"
      @callback="backToHome"
    />
    <Header @openDialog="openDialog('comfirm')" />
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer />
  </div>
</template>
