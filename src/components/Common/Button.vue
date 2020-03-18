<script>
// import Spinner from 'components/Common/Spinner.vue';

export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    link: {
      type: String,
      default: '',
    },
    border: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
    },
    color: {
      type: String,
      default: '#bcbc1c',
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isPwa() {
      return window.isMobileDevice && window.isPwa;
    },
  },
};
</script>

<template>
  <div
    class="button"
    :class="{ 'borderButton': border, 'pwaButton': isPwa, 'disable': disable }"
  >
    <router-link
      :to="link"
      :style="{ width: `${width}px`, background: `${color}` }"
      :class="{ 'disable': disable }"
    >
      <div>{{text}}</div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  font-size: 20px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 50px;
    border-radius: 32px;
    background-color: #bcbc1c;
    font-size: inherit;
    line-height: 1.4;
    text-align: center;
    color: #ffffff;
    border: none;
    font-weight: 500;
    text-align: center;
    line-height: 56px;

    @media screen and (min-width: 769px) {
        max-height: 56px;
    }

    & div {
        line-height: 50px;
        font-weight: 500;

        @media screen and (min-width: 769px) {
            line-height: 50px;
        }
    }
  }

  /* & > .loading {
    cursor: wait;
  } */
}

.borderButton {
  display: flex;
  justify-content: center;
  font-size: 20px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 235px;
    max-height: 50px;
    border-radius: 32px;
    background-color: #ffffff;
    font-size: inherit;
    line-height: 1.4;
    text-align: center;
    color: #bcbc1c;
    border: solid 2px #bcbc1c;
    font-weight: 500;
    text-align: center;
    line-height: 56px;

    @media screen and (min-width: 769px) {
      max-height: 56px;
    }
  }
}

.pwaButton {
  &:focus, &:active {
    opacity: 0.2;
  }
}

.disable {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}
</style>
