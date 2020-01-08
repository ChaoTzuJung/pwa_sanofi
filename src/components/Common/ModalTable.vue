<script>
export default {
  name: 'ModalTable',
  props: ['title', 'isTableModalOpen'],
  data() {
    return {
      open: false,
      positionY: 0,
    };
  },
  computed: {
    tableData() {
      return [
        { score: 'Score', description: 'Morphological Description' },
        { score: '0 – Clear', description: 'No inflammatory signs of atopic dermatitis (no erythema, no induration/papulation, no lichenification, no oozing/crusting). Post-inflammatory hyperpigmentation and/or hypopigmentation may be present.' },
        { score: '1 – Almost clear', description: 'Barely perceptible erythema, barely perceptible induration/papulation, and/or minimal lichenification. No oozing or crusting.' },
        { score: '2 – Mild', description: 'Slight but definite erythema (pink), slight but definite induration/papulation, and/or slight but definite lichenification. No oozing or crusting.' },
        { score: '3 – Moderate', description: 'Clearly perceptible erythema (dull red), clearly perceptible induration/papulation, and/or clearly perceptible lichenification. Oozing and crusting may be present.' },
        { score: '4 – Severe', description: 'Marked erythema (deep or bright red), marked induration/papulation, and/or marked lichenification. Disease is widespread in extent. Oozing or crusting may be present.' },
      ];
    },
    screenWidth() {
      if (window.screen.width < 768) {
        return window.screen.width - 20;
      }
      return document.documentElement.clientWidth - 40;
    },
    screenHeight() {
      if (window.screen.width < 768) {
        return window.screen.height - 40;
      }
      return document.documentElement.clientHeight * 0.95;
    },
  },
  watch: {
    isTableModalOpen() {
      this.open = this.isTableModalOpen;
    },
    open() {
      if (this.open) {
        this.positionY = window.scrollY;
        document.body.style.position = 'fixed';
      } else {
        document.body.style.position = 'static';
        window.scrollTo(0, this.positionY);
      }
    },
  },
};
</script>

<template>
    <transition name="modal" v-if="open">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <button
                        class="close"
                        @click="$emit('close')"
                    ></button>
                    <div class="modal-title">{{title}}</div>
                    <div class="modal-content">
                      <div class="modal-text">
                        The IGA score is selected using the descriptors
                        below that best describe the overall appearance
                        of the lesions at a given time point.
                        It is not necessary that all characteristics
                        under Morphological Description be present.
                      </div>
                      <div class="table-container">
                        <table border="0" cellSpacing="0">
                            <tr :key="row.score" v-for="row in tableData">
                                <td>{{row.score}}</td>
                                <td>{{row.description}}</td>
                            </tr>
                        </table>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: table;
  transition: opacity .3s ease;

  & > .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;

    & > .modal-container {
      position: relative;
      width: calc(100% - 40px);
      height: 95vh;
      margin: 0px auto;
      background-color: #fff;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
      padding: 0 16px;
      overflow-y: scroll;

      @media screen and (min-width: 769px) {
        padding: 20px 0;
      }

      & > .modal-title {
        padding: 40px 20px 10px 20px;
        font-weight: 300;
        font-size: 20px;
        line-height: 1.4;
        letter-spacing: 0.5px;
        color: #000000;
        text-align: center;

        @media screen and (min-width: 769px) {
          padding: 20px 0;
        }
      }

      & > .modal-content {
        width: 100%;
        padding: 0 0 40px 0;
        margin: 0 auto;

        @media screen and (min-width: 769px) {
          width: 784px;
        }

        & > .modal-text {
          width: 100%;
          margin-bottom: 20px;
          font-family: Arial;
          font-size: 14px;
          line-height: 1.5;
          color: #000000;

          @media screen and (min-width: 769px) {
            font-size: 16px;
            margin-bottom: 36px;
          }
        }

        & > .table-container {
          height: 60vh;

          @media screen and (min-width: 769px) {
            height: 100%;
            overflow-y: hidden;
          }

          & > table {
            border: 1px solid #eeeeee;
            width: 100%;

            & > tr {
              & > td {
                color: #000000;
                font-family: Arial;
                font-size: 14px;
                line-height: 1.57;
                height: auto;

                @media screen and (min-width: 769px) {
                  height: 90px;
                }

                // 第一列 td(直)
                &:nth-child(1) {
                  padding-left: 20px;
                  padding-top: 12px;
                  display: flex;
                  width: auto;

                  @media screen and (min-width: 769px) {
                    align-items: center;
                    width: 183px;
                    padding-top: 0;
                  }
                }

                // 第二列 td(直)
                &:nth-child(2) {
                  padding: 12px 16px;
                  width: 60%;

                  @media screen and (min-width: 769px) {
                    width: 601px;
                    padding: 12px 0;
                  }
                }
              }

              &:nth-child(2n + 1) {
                background: #eeeeee;
              }

              // 第一個 tr(橫)
              &:first-child {
                background: #525ca3;

                & > td {
                  color: #ffffff;
                  font-family: Arial;
                  font-size: 14px;
                  line-height: 1.57;
                  height: 45px;

                  // 第一排橫 第一個td score
                  &:first-child {
                    padding-left: 16px;

                    @media screen and (min-width: 769px) {
                      padding-left: 20px;
                    }
                  }
                  // 第二排橫 第一個td Morphological Description
                  &:last-child {
                  }
                }
              }
            }
          }
        }
      }

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
        top: 28%;
        height: 18px;
        width: 1px;
        background-color: #ffffff;
      }

      & > .close:before {
        transform: rotate(45deg);
      }

      & > .close:after {
        transform: rotate(-45deg);
      }
    }
  }
}

/*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

// .modal-enter {
//     opacity: 0;
// }

// .modal-leave-active {
//     opacity: 0;
// }

// .modal-enter .modal-container,
// .modal-leave-active .modal-container {
//     -webkit-transform: scale(1.1);
//     transform: scale(1.1);
// }
</style>
