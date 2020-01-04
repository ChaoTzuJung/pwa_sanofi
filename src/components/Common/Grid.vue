<script>
/* eslint-disable vue/no-parsing-error */
import SymptomCard from 'components/Common/SymptomCard.vue';

export default {
  name: 'Grid',
  components: {
    SymptomCard,
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
  },
  data() {
    return {
      score: '',
    };
  },
  computed: {
    tabName: {
      get() {
        return this.symptom;
      },
      set(value) {
        this.$emit('changeScore', value);
        this.score = value;
      },
    },
  },
  watch: {
    score() {
      this.score = parseInt(this.score, 10);
    },
  },
  methods: {
  },
};
</script>

<template>
  <div class="grid">
    <SymptomCard
      class="custom-symptom-card"
      v-for="grid in gridData"
      :key="grid.name"
      :info="grid.info"
      :image="grid.image"
      :icon="grid.icon"
      :name="grid.name"
      :value="grid.score"
      :checkedValue="score"
      @onPick="tabName = $event"
      >
    </SymptomCard>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;

  & > .custom-symptom-card {
    width: 50%;
    height: 50%;
    padding: 20px;

    &:nth-child(2n) {
      padding-right: 0;
    }

    &:nth-child(2n + 1) {
      padding-left: 0;
    }
  }
}
</style>
