<script>
import Grid from 'components/Common/Grid.vue';

export default {
  name: 'EdemaPapulation',
  components: {
    Grid,
  },
  props: {
    symptom: {
      require: true,
      type: String,
    },
    gridData: {
      require: true,
      type: Array,
    },
    checkedValue: {
      type: Number,
    },
  },
  data() {
    return {

    };
  },
  computed: {

  },
  watch: {
  },
  created() {

  },
  methods: {
    changeScore(e) {
      this.$emit('changeScore', e);
    },
  },
};
</script>

<template>
  <Grid
    :symptom="symptom"
    :gridData="gridData"
    :checkedValue="checkedValue"
    :score="checkedValue"
    @changeScore="changeScore"
  />
</template>

<style scoped lang="scss">
</style>
