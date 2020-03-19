<script>
import { mapGetters, mapActions } from 'vuex';
import Button from 'components/Common/Button.vue';
// import formatJsonToCsv from 'utils/formatJsonToCsv';
// import generateMailContent from 'utils/generateMailContent';
// import generateRawMail from 'utils/generateRawMail';

export default {
  name: 'Form',
  components: {
    Button,
  },
  props: {
    isFormShow: {
      require: true,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      reciever: { name: '', email: '' },
      recievers: [],
      validationCategory: {
        isInvalid: '* Please enter a valid email address.',
        isEmpty: '* Required fields.',
      },
      errorMessage: '',
    };
  },
  computed: {
    ...mapGetters(['pdfData']),
  },
  watch: {
    'reciever.name': {
      handler() {
        // Just input English name
        if (!this.reciever.name.match(/^[^\u4e00-\u9fa5]+$/)) {
          this.reciever.name = '';
        }
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions({
      getReportPdf: 'getReportPdf',
      submitPatientData: 'submitPatientData',
      updateLoading: 'updateLoading',
    }),
    showInvalidMessage(type) {
      this.errorMessage = this.validationCategory[type];
    },
    clearInput() {
      this.reciever.name = '';
      this.reciever.email = '';
    },
    async addReciever() {
      const checkedResult = await this.checkFormData();
      if (checkedResult && this.reciever.email) {
        this.recievers.push({
          name: this.reciever.name,
          email: this.reciever.email,
          id: Date.now(),
        });
        this.clearInput();
        this.errorMessage = '';
      }
    },
    removeReciever(id) {
      this.recievers = this.recievers.filter(reciever => reciever.id !== id);
    },
    checkFormData() {
      return new Promise((resolve, reject) => {
        if (this.reciever.email === '' && this.recievers.length >= 1) {
          this.errorMessage = '';
          resolve('Already have reciever and send it!');
        }

        if (this.reciever.email.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) === -1) {
          this.showInvalidMessage('isInvalid');
          reject(new Error('Email address is invalid and can\'t get patient data'));
        }

        if (this.reciever.email === '') {
          this.showInvalidMessage('isEmpty');
          reject(new Error('Email address is empty and can\'t get patient data'));
        }
        resolve('Success to add new patient data to recievers ');
      });
    },
    async getPDFS() {
      const fullReportPdf = await this.getReportPdf({ pdfData: this.pdfData, type: 'full' });
      const textReportPdf = await this.getReportPdf({ pdfData: this.pdfData, type: 'text' });

      return new Promise(((resolve, reject) => {
        resolve({ fullReportPdf, textReportPdf });
        reject(new Error('get pdf error'));
      }));
    },
    async sendData() {
      const checkedResult = await this.checkFormData();
      if (checkedResult) {
        // eslint-disable-next-line no-alert
        this.clearInput();
        this.errorMessage = '';
        this.recievers = [];
        this.$store.commit('OPEN_DIALOG', { type: 'completeAlert', status: true });
      }
    },
  },
};
</script>

<template>
  <div class="form" v-show="isFormShow">
    <hr />
    <div class="row">
      <div class="name">
        <label for="name">Your Name:</label>
        <input
          class="value"
          type="text"
          id="name"
          placeholder="Please enter English only"
          v-model.lazy.trim="reciever.name"
          autocomplete="off"
        />
      </div>
      <div class="email">
        <label for="email">Email Address:</label>
        <div class="error-text" v-if="errorMessage" v-text="errorMessage"></div>
        <input
          :class="{'valid': errorMessage}"
          type="text"
          id="email"
          v-model.lazy.trim="reciever.email"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="row">
      <div class="label" :key="reciever.id" v-for="reciever in recievers">
        <div class="email-address">
          <span v-if="reciever.name">{{reciever.name}}, </span>{{reciever.email}}
        </div>
        <div class="close-btn" @click="removeReciever(reciever.id)"></div>
      </div>
      <!-- event.stopPropagation()，防止事件冒泡，內層div的event執行完就停止，外層酸然一起點擊到，但不會執行 -->
      <!-- TODO: valid reciever -->
      <!-- v-click-outside="()=>showInvalidMessage=false" -->
      <div
        class="add-button"
        @click="addReciever"
      >
        + add recipient
      </div>
    </div>
    <div class="button">
      <Button
        text="Submit"
        @click.native="sendData()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.form {
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 944px) {
        width: 800px;
    }

    hr {
      border: 1px solid #eeeeee;
      margin: 40px 0;

      @media screen and (max-width: 944px) {
        margin: 20px 0;
      }
    }

    & > .row {
        position: relative;
        margin-bottom: 20px;

        &:nth-of-type(2) {
          margin-bottom: 32px;
          @media screen and (max-width: 944px) {
            margin-bottom: 40px;
          }
        }

        & > .name {
            margin-bottom: 32px;

            & > input {
                position: relative;
                display: flex;
                align-items: center;
                width: 100%;
                height: 38px;
                opacity: 0.5;
                border: solid 1px rgba(0, 0, 0, 0.2);
                padding: 8px 0 8px 16px;
                font-family: Arial;
                font-size: 14px;
                line-height: 1.57;
                color: #333333;
            }

            & > label {
                display: flex;
                align-items: center;
                font-family: Arial;
                font-size: 16px;
                line-height: 1.5;
                color: #333333;
                margin-bottom: 10px;

                & > .error {
                    margin-top: 8px;
                    font-family: Arial;
                    font-size: 14px;
                    line-height: 1.57;
                    color: #ea5d45;
                }
            }

            & > .valid {
                opacity: 0.5;
                border: solid 1px #ea5d45;
            }
        }

        & > .email {
            position: relative;
            width: 100%;

            & > .inputWithAdd {
                display: flex;
                align-items: center;
            }

            & > input {
                display: flex;
                align-items: center;
                position: relative;
                width: 100%;
                height: 38px;
                opacity: 0.5;
                border: solid 1px rgba(0, 0, 0, 0.2);
                padding: 8px 0 8px 16px;
                font-family: Arial;
                font-size: 14px;
                line-height: 1.57;
                color: #333333;
            }

            & > label {
                display: flex;
                align-items: center;
                font-family: Arial;
                font-size: 16px;
                line-height: 1.5;
                color: #333333;
                margin-bottom: 10px;
            }

            & > .error-text {
                position: absolute;
                right: 0;
                top: 0;
                font-family: Arial;
                font-size: 14px;
                line-height: 1.57;
                color: #ea5d45;
                margin-left: auto;
            }

            & > .valid {
                opacity: 0.5;
                border: solid 1px #ea5d45;
            }

            & > img {
                display: inline;
                cursor: pointer;
                margin-left: 10px;
            }
        }

        & > .add-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            width: 137px;
            height: 38px;
            border-radius: 19px;
            border: solid 1px #525CA3;
            background: rgba(82, 92, 163, 0.3);
            font-family: Arial;
            font-size: 14px;
            line-height: 1.57;
            color: #434244;
            cursor: pointer;
        }

        & > .label {
            position: relative;
            display: inline-flex;
            align-items: center;
            /* height: 38px; */
            min-height: 38px;
            padding: 8px 20px;
            margin-right: 10px;
            margin-bottom: 10px;
            border-radius: 19px;
            border: solid 1px #525ca3;
            background-color: rgba(82, 92, 163, 0.3);
            opacity: 0.8;
            font-family: Arial;
            font-size: 14px;
            line-height: 1.57;
            color: #000000;

            & > .close-btn {
                width: 14px;
                height: 14px;
                line-height: 21px;
                cursor: pointer;
                position: relative;
                margin-left: 10px;
            }

            & > .close-btn:before,
            .close-btn:after {
                content: ' ';
                height: 14px;
                width: 1px;
                position: absolute;
                top: 10%;
                right: 50%;
                background-color: #525ca3;
            }

            & > .close-btn:before {
                transform: rotate(45deg);
            }

            & > .close-btn:after {
                transform: rotate(-45deg);
            }
        }
    }

    & > .button {
        width: 100%;
        display: flex;
        margin-top: 40px;
        margin-bottom: 80px;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 944px) {
            justify-content: flex-end;
            align-items: flex-end;
            margin-top: 12px;
            margin-bottom: 40px;
        }

        & > div {
            width: 235px;
        }
    }
}
</style>
