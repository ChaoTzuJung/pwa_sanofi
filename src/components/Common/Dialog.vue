<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      open: this.isDialogOpen,
      DialogType: {
        confirm: {
          title: 'Reloading this page will lose your data.',
          content: 'Are you sure you want to start the next calculation?',
          buttons: [
            {
              context: 'Stay on this Page',
            },
            {
              context: 'Next Calculation',
            },
          ],
        },
        alert: {
          title: 'The report is successfully sent.',
          content: null,
          buttons: [
            {
              context: 'Yes',
            },
          ],
        },
      },
    };
  },
  computed: {
    ...mapState({
      isDialogOpen: state => state.isDialogOpen,
      dialogType: state => state.dialogType,
    }),
  },
  watch: {
    isDialogOpen() {
      this.open = this.isDialogOpen;
    },
    open() {
      if (this.open) {
        document.body.style.position = 'fixed';
        document.body.style.left = 0;
        document.body.style.right = 0;
      } else {
        document.body.style.position = 'static';
      }
    },
  },
  methods: {
    closeDialog(dialogType, event) {
      this.$store.commit('OPEN_DIALOG', { type: dialogType, status: false });
      if (event.target.textContent === 'Next Calculation') {
        this.$store.dispatch('BACK_TO_HOMEPAGE');
        // TODO: 回首頁 與 清空store
      }
    },
  },
};
</script>

<template>
  <dialog class="dialog-overlay" v-if="open">
    <div class="dialog-container">
      <div class="title">{{DialogType[dialogType].title}}</div>
      <div class="text" v-if="DialogType[dialogType].content">
        {{DialogType[dialogType].content}}
      </div>
      <div class="actions" >
        <button
          v-for="btn in DialogType[dialogType].buttons"
          :key="btn.context"
          @click="closeDialog(dialogType, $event)"
        >
          {{btn.context}}
        </button>
      </div>
    </div>
  </dialog>
</template>

<style scoped lang="scss">
.dialog-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(33, 33, 33, 0.46);
    z-index: 100;

    & > .dialog-container {
        max-width: calc(100vw - 48px);
        max-height: 90%;
        border-radius: 4px;
        background-color: #FFFFFF;
        color: rgba(0, 0, 0, 0.87);
        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        pointer-events: auto;
        overflow-y: auto;

        & > .title {
            padding: 16px 24px;
            font-weight: 700;
            font-size: 1.5rem
        }

        & > .text {
            padding: 0 24px 20px;
            font-size: 0.875rem;
            color: rgba(0, 0, 0, 0.54);
        }

        & > .actions {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;

            @media screen and (min-width: 769px) {
                justify-content: flex-end;
            }

            & > button {
                padding: 8px 20px;
                outline: none;
                border: none;
                color: #FFF;
                background: #bcbc1c;
                font-family: 'itc-avant-garde-gothic-pro', Arial, sans-serif;
                font-size: 1rem;
                border-radius: 19px;
                cursor: pointer;

                &:nth-child(2n) {
                    margin-left: 8px;
                    background: #525ca3;
                }
            }
        }
    }
}
</style>
