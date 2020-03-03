<script>
import moment from 'moment';
import footerLogo from 'assets/images/footer-logo.svg';
import footerLogoSm from 'assets/images/footer-logo-sm.svg';

export default {
  name: 'Footer',
  data() {
    return {
      footerLogo,
      footerLogoSm,
      accordionOpen1: false,
      accordionOpen2: false,
      version: 'v1.1',
      year: moment().format('YYYY'),
    };
  },
  methods: {
    openAccordion1() {
      if (window.screen.width < 768 || document.documentElement.clientWidth < 769) {
        this.accordionOpen1 = !this.accordionOpen1;
      }
    },
    openAccordion2() {
      if (window.screen.width < 768 || document.documentElement.clientWidth < 769) {
        this.accordionOpen2 = !this.accordionOpen2;
      }
    },
  },
};
</script>

<template>
  <div class="footer">
    <div class="block">
      <div class="title" @click="openAccordion1">
        References:
        <svg class="svg-circleplus mobile" viewBox="0 0 100 100">
          <line x1="22.5" y1="50" x2="77.5" y2="50" stroke-width="7.5"></line>
          <line
            x1="50" y1="22.5" x2="50" y2="77.5" stroke-width="7.5"
            v-if="!accordionOpen1">
          </line>
        </svg>
      </div>
      <div class="description" v-if="accordionOpen1">EASI<br>
        Hanifin, J. M., Thurston, M., Omoto, M., Cherill, R., Tofte, S. J., Graeber,
        M., ... & Easi, T. (2001). The eczema area and severity index (EASI):
        assessment of reliability in atopic dermatitis.
        Experimental dermatology, 10(1), 11-18.</div>
      <div class="description desktop">EASI<br>
        Hanifin, J. M., Thurston, M., Omoto, M., Cherill, R., Tofte, S. J., Graeber,
        M., ... & Easi, T. (2001). The eczema area and severity index (EASI):
        assessment of reliability in atopic dermatitis.
        Experimental dermatology, 10(1), 11-18.</div>
      <div class="addon left desktop">
        <img :src="footerLogo">
        <span>SATW.DUP.19.10.0345 {{version}}</span>
      </div>
      <hr class="mobile">
    </div>
    <div class="block">
      <div class="title" @click="openAccordion2">
        Disclaimer:
        <svg class="svg-circleplus mobile" viewBox="0 0 100 100">
          <line x1="22.5" y1="50" x2="77.5" y2="50" stroke-width="7.5">
          </line>
          <line
            x1="50" y1="22.5" x2="50" y2="77.5" stroke-width="7.5"
            v-if="!accordionOpen2">
          </line>
        </svg>
      </div>
      <div class="description" v-if="accordionOpen2">
        This free online tool aims to help physicians and patients in the
        computation of EASI. These materials have been prepared for
        medical and scientific information sharing/exchange purposes and
        not intended to encourage the use of any products.</div>
      <div class="description desktop">
        This free online tool aims to help physicians and patients in the
        computation of EASI. These materials have been prepared for
        medical and scientific information sharing/exchange purposes and
        not intended to encourage the use of any products.</div>
      <div class="addon right desktop">Copyright © {{year}} EASIscore. All rights reserved</div>
      <hr class="mobile">
    </div>
    <div class="block mobile">
      <div class="mobile-logo">
        <div class="satw">
          <img class="mobile" :src="footerLogoSm"><span>SATW.DUP.19.10.0345</span>
        </div>
        <div class="addon mobile">Copyright © {{year}} EASIscore. All rights reserved</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  background-color: #333333;
  width: 100%;
  min-height: 230px;
  padding: 20px;

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    padding: 16px 40px 24px 40px;
  }

  & .mobile {
    display: block;

    @media screen and (min-width: 769px) {
      display: none;
    }
  }

  & > .block {
    position: relative;
    width: 100%;
    color: white;
    margin: 0;

    @media screen and (min-width: 769px) {
      width: 400px;

      &:nth-child(2n + 1) {
        margin-right: 68px;
      }

      &:nth-child(2n) {
        margin-left: 68px;
      }
    }

    & > .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 300;
      font-size: 12px;
      line-height: 1.67;
      text-align: justify;
      opacity: 1;
      color: #ffffff;
      cursor: pointer;

      & > .svg-circleplus {
        height: 20px;
        stroke: white;
      }

      @media screen and (min-width: 769px) {
        display: block;
        opacity: 0.3;
        color: #ffffff;
        cursor: none;
      }
    }

    & > .description {
      margin-top: 24px;
      margin-bottom: 24px;
      font-weight: 300;
      opacity: 0.3;
      font-size: 12px;
      text-align: justify;
      color: #ffffff;
    }

    & > hr {
      width: 100%;
      height: 1px;
      border-color: #a77f7f;
      margin: 20px 0;
    }

    & > .addon {
      display: flex;
      align-items: flex-end;
      position: absolute;
      bottom: 0;
      font-weight: 300;
      font-size: 14px;
      line-height: 1.57;
      color: #ffffff;

      & span {
        margin-left: 16px;
        margin-top: 2px;
      }
    }

    & > .right {
      right: 0;
    }

    & > .left {
      left: 0;
    }

    & > .mobile-logo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 20px 0 0 0;

      & > .satw {
        display: flex;
        align-items: baseline;

        & span {
          margin-left: 12px;
          font-size: 12px;
          margin-top: 2px;
        }
      }

      & > .addon {
        position: relative;
        font-weight: 300;
        font-size: 12px;
        line-height: 1.67;
        color: #ffffff;
        margin-top: 10px;
      }
    }

    & .desktop {
      display: none;

      @media screen and (min-width: 769px) {
        display: flex;
        align-items: flex-end;
      }
    }

    & .mobile {
      display: block;

      @media screen and (min-width: 769px) {
        display: none;
      }
    }
  }
}
</style>
