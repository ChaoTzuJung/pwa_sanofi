<script>
import Grid from 'components/Common/Grid.vue';

export default {
  name: 'Excoriation',
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
    :bodypart="bodypart"
    :symptom="symptom"
    :gridData="gridData"
    :checkedValue="checkedValue"
    :score="checkedValue"
    @changeScore="changeScore"
  />
</template>

<style scoped lang="scss">
</style>
