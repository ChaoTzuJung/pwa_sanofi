<script>
export default {
  name: 'InvolvementSection',
  data() {
    return {
      input: '',
    };
  },
  watch: {
    input() {
      this.input = parseInt(this.input, 10);

      if (!this.input) {
        if (this.input === 0) {
          this.input = 0;
          return;
        }
        this.input = '';
      }

      if (this.input > 100 || this.input < 0) {
        this.input = '';
      }

      this.$store.commit('patient/SAVE_AREASCORE_PERCENT', { type: 'UpperExtremities', payload: this.input });
    },
  },
};
</script>

<template>
  <div class="involvement-group">
    <div class="involvement-section">
      <label class="label" for="name">Weight:</label>
      <div class="weight">
        <input
          class="value"
          type="tel"
          id="name"
          v-model.trim.number.lazy="input"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="involvement-section">
      <label class="label" for="name">Reps:</label>
      <div class="reps">
        <input
          class="value"
          type="tel"
          id="name"
          v-model.trim.number.lazy="input"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="involvement-section">
      <label class="label" for="name">Sets:</label>
      <div class="sets">
        <input
          class="value"
          type="tel"
          id="name"
          v-model.trim.number.lazy="input"
          autocomplete="off"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.involvement-group {
  display: flex;
  padding: 40px;

  @media screen and (max-width: 812px) {
    display: block;
    padding: 40px 0 0 0;
  }

  & > .involvement-section {
    margin: auto;
    display: flex;
    flex: 1;
    margin-bottom: 16px;

    @media screen and (max-width: 812px) {
      display: block;
      width: 100vw;
      padding: 0 40px;
    }

    & > h2 {
      color: #333333;
      margin-bottom: 20px;

      & > span {
        color: #333333;
        font-size: 20px;
        font-weight: 300;
        line-height: 1.4;
        letter-spacing: 0.5px;
      }
    }

    & > .label {
      display: block;
      font-family: Arial;
      font-size: 16px;
      line-height: 1.5;
      color: #333333;
      margin-bottom: 10px;
    }

    & > .weight {
      display: inline-block;
      position: relative;

      & > input {
        width: 100%;
        height: 32px;
        border: none;
        border-bottom: solid 1px #a77f7f;
        font-size: 24px;
        font-family: Arial;
        line-height: 1.33;
        color: rgba(0, 0, 0, 0.8);
        text-align: center;

        @media screen and (max-width: 812px) {
          width: 100%;
        }
      }
    }

    & > .weight::after {
      content: "kg";
      position: absolute;
      top: 0;
      left: calc(100% + 8px);
      opacity: 0.8;
      font-family: Arial;
      font-size: 24px;
      line-height: 1.33;
      color: rgba(0, 0, 0, 0.8);
    }

    & > .reps {
      display: inline-block;
      position: relative;

      & > input {
        width: 100%;
        height: 32px;
        border: none;
        border-bottom: solid 1px #a77f7f;
        font-size: 24px;
        font-family: Arial;
        line-height: 1.33;
        color: rgba(0, 0, 0, 0.8);
        text-align: center;

        @media screen and (max-width: 812px) {
          width: 100%;
        }
      }
    }

    & > .reps::after {
      content: "下";
      position: absolute;
      top: 0;
      left: calc(100% + 8px);
      opacity: 0.8;
      font-family: Arial;
      font-size: 24px;
      line-height: 1.33;
      color: rgba(0, 0, 0, 0.8);
    }

    & > .sets {
      display: inline-block;
      position: relative;

      & > input {
        width: 100%;
        height: 32px;
        border: none;
        border-bottom: solid 1px #a77f7f;
        font-size: 24px;
        font-family: Arial;
        line-height: 1.33;
        color: rgba(0, 0, 0, 0.8);
        text-align: center;

        @media screen and (max-width: 812px) {
          width: 100%;
        }
      }
    }

    & > .sets::after {
      content: "組";
      position: absolute;
      top: 0;
      left: calc(100% + 8px);
      opacity: 0.8;
      font-family: Arial;
      font-size: 24px;
      line-height: 1.33;
      color: rgba(0, 0, 0, 0.8);
    }

    & > .additional {
      width: 944px;
      font-family: Arial;
      font-size: 14px;
      line-height: 1.57;
      color: #a77f7f;
      margin: 0 auto;
      margin-top: 10px;

      @media screen and (max-width: 812px) {
        width: calc(100vw - 20px);
        font-size: 12px;
        line-height: 1.67;
      }
    }
  }
}
</style>
