<script>
import Info from 'components/Common/Info.vue';
import Radio from 'components/Common/Radio.vue';

export default {
  name: 'SymptomCard',
  components: {
    Info,
    Radio,
  },
  props: {
    info: {
      type: String,
    },
    image: {
      type: String,
    },
    icon: {
      type: String,
    },
    name: {
      require: true,
      type: String,
    },
    value: {
      require: true,
      type: Number,
    },
    checkedValue: {
      type: String,
    },
    bodypart: {
      type: String,
    },
  },
  data() {
    return {
      picked: '', // number
      checked: false,
    };
  },
  watch: {
    picked() {
      this.picked = parseInt(this.picked, 10);
    },
  },
  methods: {
    onPickHandler(e) {
      this.picked = e; // 0 - 3
      this.$emit('onPick', this.picked);
    },
    openModal() {
      this.$store.commit('calculator/OPEN_SYMPTOMS_MODAL', { bodypart: this.bodypart, severity: this.name, status: true });
    },
  },
};
</script>

<template>
  <div class="symptom-card">
    <div class="imgbox">
      <div
        class="img"
        :style="{backgroundImage: 'url(' + image + ')'}"
        @click="openModal"
      >
        <img class="resize-icon" :src="icon" />
      </div>
      <div class="radiobox">
        <Radio
          class="custom-radio"
          :name="name"
          :value="name"
          :checkedValue="checkedValue"
          color="#525ca3"
          @input="onPickHandler"
        ></Radio>
        <div class="check-score">{{name}}</div>
        <Info v-if="info" :description="info" direction='right'></Info>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.symptom-card {
  width: 100%;
  height: 100%;

  & > .imgbox {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    & > .img {
      width: 100%;
      height: 452px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      & > .resize-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        margin: 20px;
      }
    }

    & > .radiobox {
      display: flex;
      align-items: center;
      margin-top: 20px;

      & > .custom-radio {
        position: relative;
        height: 20px;
        width: 20px;
        cursor: pointer;
      }

      & > .check-score {
        margin: 0 10px;
        font-size: 24px;
        font-weight: 300;
        line-height: 1.33;
        color: #333333;
        line-height: 25px;
        height: 20px;
      }
    }
  }
}
</style>
