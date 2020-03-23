<script>
export default {
  name: 'InvolvementSection',
  props: {
    movement: {
      type: String,
    },
  },
  data() {
    return {
      weight: '',
      reps: '',
      sets: '',
    };
  },
  watch: {
    weight() {
      if (!this.weight) {
        if (this.weight === 0) {
          this.weight = 0;
          return;
        }
        this.weight = '';
      }

      this.$store.commit('patient/UPDATE_WEIGHT', { type: this.movement, payload: this.weight });
    },
    reps() {
      this.reps = parseInt(this.reps, 10);

      if (!this.reps) {
        if (this.reps === 0) {
          this.reps = 0;
          return;
        }
        this.reps = '';
      }

      if (this.reps > 20 || this.reps < 0) {
        this.reps = '';
      }

      this.$store.commit('patient/UPDATE_REPS', { type: this.movement, payload: this.reps });
    },
    sets() {
      this.sets = parseInt(this.sets, 10);

      if (!this.sets) {
        if (this.sets === 0) {
          this.sets = 0;
          return;
        }
        this.sets = '';
      }

      if (this.sets > 100 || this.sets < 0) {
        this.sets = '';
      }

      this.$store.commit('patient/UPDATE_SETS', { type: this.movement, payload: this.sets });
    },
  },
};
</script>

<template>
  <div class="involvement-group">
    <div class="involvement-section">
      <label class="label" for="weight">Weight:</label>
      <div class="weight">
        <input
          class="value"
          id="weight"
          v-model.trim.number.lazy="weight"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="involvement-section">
      <label class="label" for="reps">Reps:</label>
      <div class="reps">
        <input
          class="value"
          type="tel"
          id="reps"
          v-model.trim.number.lazy="reps"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="involvement-section">
      <label class="label" for="sets">Sets:</label>
      <div class="sets">
        <input
          class="value"
          type="tel"
          id="sets"
          v-model.trim.number.lazy="sets"
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
