<script>
import Grid from 'components/Common/Grid.vue';

export default {
  name: 'Lichenification',
  components: {
    Grid,
  },
  props: {
    bodypart: {
      require: true,
      type: String,
    },
    symptom: {
      require: true,
      type: String,
    },
    gridData: {
      require: true,
      type: Array,
    },
    checkedValue: {
      type: String,
    },
  },
  methods: {
    changeScore(e) {
      this.$emit('changeScore', e);
    },
    goToResult(e) {
      this.$emit('goToResult', e);
    },
  },
};
</script>

<template>
  <div>
    <Grid
      :bodypart="bodypart"
      :symptom="symptom"
      :gridData="gridData"
      :checkedValue="checkedValue"
      :score="checkedValue"
      @changeScore="changeScore"
      @goToResult="goToResult"
    />
  </div>
</template>

<style scoped lang="scss">
</style>
