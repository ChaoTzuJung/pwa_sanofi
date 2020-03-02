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
  },
  computed: {
    isPwa() {
      return window.isMobile && window.isPwa;
    },
  },
};
</script>

<template>
  <div
    class="button"
    :class="{ 'borderButton': border, 'pwaButton': isPwa }"
  >
    <!-- :class="{ loading: isLoading }" -->
    <router-link
      :to="link"
      :style="{ width: `${width}px`, background: `${color}` }"
    >
      <!-- <Spinner v-if="isLoading" :color="spinnerColor"></Spinner>
      <div v-else>{{text}}</div> -->
      <div>{{text}}</div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.pwa-button {
  user-select: none;
}

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
</style>
