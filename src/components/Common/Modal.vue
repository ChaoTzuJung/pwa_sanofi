<script>
export default {
  name: 'Modal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    open() {
      this.show = this.open;
    },
    show() {
      this.$emit('close', this.show);
    },
  },
};
</script>

<template>
    <transition name="fade">
        <div class="modal" v-if="show">
          <div class="mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="close" @click="show = false"></div>
                <slot name="modal-content"></slot>
              </div>
            </div>
          </div>
          <slot ></slot>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.mask {
    display: table;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity .3s ease;

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

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s scale(1.1);
}
</style>
