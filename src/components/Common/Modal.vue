<script>
import { mapState } from 'vuex';

export default {
  name: 'Modal',
  computed: {
    ...mapState({
      show: state => state.calculator.isModalOpen,
    }),
    isPwa() {
      return window.isMobileDevice && window.isPwa;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('calculator/OPEN_SYMPTOMS_MODAL', { severity: '', status: false });
    },
  },
};
</script>

<template>
  <transition :name="isPwa ? 'slide' : 'fade'">
    <div class="mask" v-if="show">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close" @click="closeModal"></div>
          <slot name="modal-content"></slot>
        </div>
      </div>
    </div>
    <slot ></slot>
  </transition>
</template>

<style scoped lang="scss">
@keyframes slideUp {
  from {
    transform: translate3d(0, 100vh, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slide-enter, .slide-leave-to {
  transform: translate3d(0, 100vh, 0);
};

.slide-enter-to, .slide-leave {
  transform: translate3d(0, 0, 0);
};

.slide-enter-active {
  transition-timing-function: ease-in;
  transition: all 1s;
}

.slide-leave-active {
  transition-timing-function: ease-out;
  transition: all 1s;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.mask {
    display: table;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    animation-duration: .7s;
    animation-fill-mode: both;
    animation-name: fadeInUp;

    & > .modal-wrapper {
      display: table-cell;
      vertical-align: middle;
      width: 100%;
      height: 100%;

        & > .modal-container {
          position: relative;
          width: 100%;
          height: 100%;
          margin: 0px auto;
          background-color: #fff;
          box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

          & > .close {
            position: absolute;
            top: 0;
            right: 0;
            width: 40px;
            height: 40px;
            background-color: #525ca3;
            cursor: pointer;
          }

          & > .close:before,
          .close:after {
            content: ' ';
            position: absolute;
            top: 50%;
            left: 50%;
            height: 18px;
            width: 1px;
            background-color: #ffffff;
          }

          & > .close:before {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          & > .close:after {
            transform: translate(-50%, -50%) rotate(-45deg);
          }
        }
    }
}

</style>
