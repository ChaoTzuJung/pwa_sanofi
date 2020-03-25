<script>
export default {
  name: 'Card',
  props: {
    title: {
      require: true,
      type: String,
    },
    color: {
      require: false,
      type: String,
      default: '#FFF',
    },
    score: {
      require: true,
      type: Number,
      default: 0,
    },
    row1: {
      type: Number,
      default: 0,
    },
    row2: {
      type: Number,
      default: 0,
    },
    row3: {
      type: Number,
      default: 0,
    },
    row4: {
      type: Number,
      default: 0,
    },
    movement1: {
      type: String,
    },
    movement2: {
      type: String,
    },
    movement3: {
      type: String,
    },
    movement4: {
      type: String,
    },
  },
  data() {
    return {
      cardOpen: false,
    };
  },
  methods: {
    openCard() {
      this.cardOpen = !this.cardOpen;
    },
  },
};
</script>

<template>
  <div
    class="card"
    :class=" cardOpen ? 'extand-card' : ''"
    v-if="movement1 || movement2 || movemont3 || movement4"
  >
    <div class="card-title" @click="openCard">
      <div class="title">
        <div class="head" :style="{'color': color}">
          {{title}}
          <svg class="svg-circleplus mobile" viewBox="0 0 100 100" v-if="openCard">
            <line x1="10" y1="50" x2="90" y2="50" stroke-width="7.5"></line>
            <line x1="50" y1="10" x2="50" y2="90" stroke-width="7.5"></line>
          </svg>
          <svg class="svg-circleplus mobile" viewBox="0 0 100 100" v-else>
            <line x1="10" y1="50" x2="90" y2="50" stroke-width="7.5"></line>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="card-body"
      :class=" cardOpen ? 'show-card-body' : ''"
    >
      <div class="left">
        <div class="key" v-if="movement1">{{movement1}}</div>
        <div class="key" v-if="movement2">{{movement2}}</div>
        <div class="key" v-if="movement3">{{movement3}}</div>
        <div class="key" v-if="movement4">{{movement4}}</div>
        <div class="key" v-if="score">Average volume</div>
      </div>
      <div class="right">
        <div class="value" v-if="row1">{{row1}}</div>
        <div class="value" v-if="row2">{{row2}}</div>
        <div class="value" v-if="row3">{{row3}}</div>
        <div class="value" v-if="row4">{{row4}}</div>
        <div class="value" v-if="score">{{score / 4}}</div>
      </div>
    </div>
    <div class="text" v-if="score">
      Score muscle group:
      <span class="score">{{score}}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 328px;
  height: 264px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  margin-bottom: 0;
  padding: 15px;

  @media screen and (max-width: 944px) {
    width: 100%;
    height: 86px;
    margin-bottom: 20px;
    padding: 16px 24px;
  }

  & > .card-title {
    display: flex;
    margin-bottom: 15px;

    @media screen and (max-width: 944px) {
      margin-bottom: 8px;
    }

    & > .title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      @media screen and (min-width: 944px) {
        width: auto;
        margin-right: 40px;
      }

      & > .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 1.5;
        /* margin-bottom: 5px; */
        cursor: pointer;

        @media screen and (min-width: 944px) {
          display: block;
          cursor: none;
        }

        & > .svg-circleplus {
          height: 16px;
          stroke: #000;
        }
      }
    }
  }

  & .card-body {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 944px) {
      width: calc(100% - 27px);
      display: none;
    }

    & > .left {
      @media screen and (min-width: 944px) {
        margin-right: 26px;
      }

      & .key {
        margin-bottom: 13px;
        font-weight: 300;
        font-size: 14px;
        color: #66757d;
        white-space: nowrap;

        @media screen and (max-width: 944px) {
          line-height: 1.57;
          margin-bottom: 8px;
        }
      }
    }

    & > .right {
      @media screen and (min-width: 944px) {
        margin-right: 69px;
      }

      & .value {
        margin-bottom: 15px;
        font-weight: 300;
        font-size: 16px;
        color: #000000;
        white-space: nowrap;
        transform: translateY(-10%);

        @media screen and (max-width: 944px) {
          font-size: 14px;
          transform: translateY(0%);
        }
      }
    }
  }

  & .show-card-body {
    display: flex;
  }

  & > .text {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;
    color: #333333;

    @media screen and (max-width: 944px) {
      margin-top: 8px;
    }

    & .score {
      align-self: flex-end;
      margin-left: 8px;
      font-weight: 300;
      font-size: 20px;
      line-height: 1;
      color: #000000;

      @media screen and (min-width: 944px) {
        font-size: 32px;
        margin-left: 10px;
      }
    }
  }
}

.extand-card {
  height: 264px;

  @media screen and (max-width: 944px) {
    height: 244px;
  }
}

.desktop {
  display: none;

  @media screen and (min-width: 944px) {
    display: block;
  }
}

.mobile {
  display: block;

  @media screen and (min-width: 944px) {
    display: none;
  }
}
</style>
