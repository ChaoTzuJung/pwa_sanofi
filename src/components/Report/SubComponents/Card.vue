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
    AreaScore: {
      require: true,
      type: Number,
      default: 6,
    },
    AreaPercent: {
      require: true,
      type: Number,
      default: 100,
    },
    Erythema: {
      require: true,
      type: Number,
      default: 0,
    },
    EdemaPapulation: {
      require: true,
      type: Number,
      default: 0,
    },
    Excoriation: {
      require: true,
      type: Number,
      default: 0,
    },
    Lichenification: {
      require: true,
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      cardOpen: true,
    };
  },
  computed: {
    showErythema() {
      let result;
      switch (this.Erythema) {
        case 0:
          result = 'None: 0';
          break;
        case 1:
          result = 'Mild: 1';
          break;
        case 2:
          result = 'Moderate: 2';
          break;
        case 3:
          result = 'Severe: 3';
          break;
        default:
          result = 'Null: NaN';
          break;
      }
      return result;
    },
    showEdemaPapulation() {
      let result;
      switch (this.EdemaPapulation) {
        case 0:
          result = 'None: 0';
          break;
        case 1:
          result = 'Mild: 1';
          break;
        case 2:
          result = 'Moderate: 2';
          break;
        case 3:
          result = 'Severe: 3';
          break;
        default:
          result = 'Null: NaN';
          break;
      }
      return result;
    },
    showExcoriation() {
      let result;
      switch (this.Excoriation) {
        case 0:
          result = 'None: 0';
          break;
        case 1:
          result = 'Mild: 1';
          break;
        case 2:
          result = 'Moderate: 2';
          break;
        case 3:
          result = 'Severe: 3';
          break;
        default:
          result = 'Null: NaN';
          break;
      }
      return result;
    },
    showLichenification() {
      let result;
      switch (this.Lichenification) {
        case 0:
          result = 'None: 0';
          break;
        case 1:
          result = 'Mild: 1';
          break;
        case 2:
          result = 'Moderate: 2';
          break;
        case 3:
          result = 'Severe: 3';
          break;
        default:
          result = 'Null: NaN';
          break;
      }
      return result;
    },
    isMobile() {
      if (window.screen.width < 768 || document.documentElement.clientWidth < 768) {
        return true;
      }
      return false;
    },
  },
  methods: {
    openCard() {
      if (window.screen.width < 768 || document.documentElement.clientWidth < 768) {
        this.cardOpen = !this.cardOpen;
      }
    },
  },
};
</script>

<template>
  <div class="card" :style="(!isMobile || !cardOpen) ? {'height': '264px'} : ''">
    <div class="card-title" @click="openCard">
      <div class="title">
        <div class="head" :style="{'color': color}">
          {{title}}
          <svg class="svg-circleplus mobile" viewBox="0 0 100 100">
            <line x1="10" y1="50" x2="90" y2="50" stroke-width="7.5"></line>
            <line
              x1="50" y1="10" x2="50" y2="90" stroke-width="7.5"
              v-if="!(!isMobile || !cardOpen)">
            </line>
          </svg>
        </div>
      </div>
    </div>
    <div class="card-body" v-if="!isMobile || !cardOpen">
      <div class="left">
        <div class="key">Redness/Erythema</div>
        <div class="key">Edema/Papulation</div>
        <div class="key">Scratching/Excoriation</div>
        <div class="key">Lichenification</div>
        <div class="key">Region score</div>
      </div>
      <div class="right">
        <div class="value">{{showErythema}}</div>
        <div class="value">{{showEdemaPapulation}}</div>
        <div class="value">{{showExcoriation}}</div>
        <div class="value">{{showLichenification}}</div>
        <div class="value">{{`${AreaScore}(${AreaPercent}%)`}}</div>
      </div>
    </div>
    <div class="text" :style="(!isMobile || !cardOpen) ? {'margin-top': '8px'} : ''">
      Score per body region:
      <span class="score">{{score}}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 86px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding: 20px 24px;
  margin-bottom: 20px;

  @media screen and (min-width: 769px) {
    width: 340px;
    height: 264px;
    margin-bottom: 0;
  }

  & > .card-title {
    display: flex;
    margin-bottom: 8px;

    & > .title {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      @media screen and (min-width: 769px) {
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
        margin-bottom: 5px;
        cursor: pointer;

        @media screen and (min-width: 769px) {
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

    & > .left {
      @media screen and (min-width: 769px) {
        margin-right: 42px;
      }

      & .key {
        margin-bottom: 8px;
        font-weight: 300;
        font-size: 14px;
        color: #66757d;
        white-space: nowrap;
      }
    }

    & > .right {
      @media screen and (min-width: 769px) {
        margin-right: 69px;
      }

      & .value {
        margin-bottom: 5px;
        font-weight: 300;
        font-size: 16px;
        color: #000000;
        white-space: nowrap;
      }
    }
  }


  & > .text {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;
    color: #333333;

    @media screen and (min-width: 769px) {
      display: block;
    }

    & .score {
      align-self: flex-end;
      margin-left: 8px;
      font-weight: 300;
      font-size: 20px;
      line-height: 1;
      color: #000000;

      @media screen and (min-width: 769px) {
        font-size: 32px;
        margin-left: 34px;
      }
    }
  }
}

.desktop {
  display: none;

  @media screen and (min-width: 769px) {
    display: block;
  }
}

.mobile {
  display: block;

  @media screen and (min-width: 769px) {
    display: none;
  }
}
</style>
