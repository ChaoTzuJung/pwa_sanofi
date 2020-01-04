<script>
export default {
  name: 'Radio',
  props: {
    name: {
      type: String,
      default: 'name',
    },
    label: {
      type: String,
    },
    color: {
      type: String,
      default: '#bcbc1c',
    },
    value: {
      type: Number,
    },
    customLabelWidth: {
      type: Boolean,
      default: false,
    },
    // 在多個 Radio 中你點擊的 radio 所拿到的值
    checkedValue: {
      require: false,
    },
  },
  computed: {
    radioColor() {
      return {
        checkmark: true,
        // customColor: this.color !== this.defaultColor,
      };
    },
  },
  methods: {
    changeHandler() {
      // $event.target.value = { val: this.val, name: this.name }
      this.$emit('onRadioChange', { val: this.val, name: this.name });
    },
    inputHandler(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<template>
    <label
      :for="name"
      class="label"
      :class="{'labelWidth': customLabelWidth}"
    >
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="value === checkedValue"
        @input="inputHandler"
      >
      <span :class="radioColor"></span>
      <span v-if="label" class="text">{{label}}</span>
    </label>
</template>


<style scoped lang="scss">
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
    /* margin-left: 8px;
    margin-bottom: 12px; */
    font-family: Arial;
    font-size: 14px;
    line-height: 1.57;
    color: #333333;
    width: 90px;

    /* @media screen and (min-width: 769px) {
      margin-right: 23px;
      margin-bottom: 0;
      width: auto;
    } */

    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      height: 100%;
      width:  100%;
      z-index: 100;
      // 抵銷 border
      margin: 1px;
      cursor: pointer;

      // 當點擊時的顏色
      &:checked ~ .checkmark {
        background-color: #bcbc1c;
      }

      // 當點擊時的勾勾顯示
      &:checked ~ .checkmark:after {
        display: block;
      }

      &:checked ~ .checkmark.customColor {
        background-color: #525ca3;
      }

      &:checked ~ .checkmark.customColor:after {
        display: block;
      }
    }

    & > .text {
        margin-left: 28px;
    }

    // ratio 製作
    & > .checkmark {
      border: 1px solid blue;
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #ffffff;
      border: 2px solid #bcbc1c;
      border-radius: 50%;

      // 當點擊ratio時的勾勾製作
      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 6px;
        top: -1px;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 1px 1px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    & > .checkmark.customColor {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #ffffff;
      border: 2px solid #525ca3;
      border-radius: 50%;

      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 6px;
        top: -1px;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 1px 1px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }


  }

  .labelWidth {
    width: 100px;

    @media screen and (min-width: 769px) {
      width: auto;
    }
  }
</style>
