export default {
  headNeckAreaPoint: (state) => {
    let result = 0;
    if (state.HeadNeck.area.areaPercent >= 90
        && state.HeadNeck.area.areaPercent <= 100) result = 6;
    if (state.HeadNeck.area.areaPercent >= 70
        && state.HeadNeck.area.areaPercent <= 89) result = 5;
    if (state.HeadNeck.area.areaPercent >= 50
        && state.HeadNeck.area.areaPercent <= 69) result = 4;
    if (state.HeadNeck.area.areaPercent >= 30
        && state.HeadNeck.area.areaPercent <= 49) result = 3;
    if (state.HeadNeck.area.areaPercent >= 10
        && state.HeadNeck.area.areaPercent <= 29) result = 2;
    if (state.HeadNeck.area.areaPercent >= 1
        && state.HeadNeck.area.areaPercent <= 9) result = 1;
    return result;
  },
  upperExtremitiesAreaPoint: (state) => {
    let result = 0;
    if (state.UpperExtremities.area.areaPercent >= 90
        && state.UpperExtremities.area.areaPercent <= 100) result = 6;
    if (state.UpperExtremities.area.areaPercent >= 70
        && state.UpperExtremities.area.areaPercent <= 89) result = 5;
    if (state.UpperExtremities.area.areaPercent >= 50
        && state.UpperExtremities.area.areaPercent <= 69) result = 4;
    if (state.UpperExtremities.area.areaPercent >= 30
        && state.UpperExtremities.area.areaPercent <= 49) result = 3;
    if (state.UpperExtremities.area.areaPercent >= 10
        && state.UpperExtremities.area.areaPercent <= 29) result = 2;
    if (state.UpperExtremities.area.areaPercent >= 1
        && state.UpperExtremities.area.areaPercent <= 9) result = 1;
    return result;
  },
  trunkAreaPoint: (state) => {
    let result = 0;
    if (state.Trunk.area.areaPercent >= 90
        && state.Trunk.area.areaPercent <= 100) result = 6;
    if (state.Trunk.area.areaPercent >= 70
        && state.Trunk.area.areaPercent <= 89) result = 5;
    if (state.Trunk.area.areaPercent >= 50
        && state.Trunk.area.areaPercent <= 69) result = 4;
    if (state.Trunk.area.areaPercent >= 30
        && state.Trunk.area.areaPercent <= 49) result = 3;
    if (state.Trunk.area.areaPercent >= 10
        && state.Trunk.area.areaPercent <= 29) result = 2;
    if (state.Trunk.area.areaPercent >= 1
        && state.Trunk.area.areaPercent <= 9) result = 1;
    return result;
  },
  lowerExtremitiesAreaPoint: (state) => {
    let result = 0;
    if (state.LowerExtremities.area.areaPercent >= 90
        && state.LowerExtremities.area.areaPercent <= 100) result = 6;
    if (state.LowerExtremities.area.areaPercent >= 70
        && state.LowerExtremities.area.areaPercent <= 89) result = 5;
    if (state.LowerExtremities.area.areaPercent >= 50
        && state.LowerExtremities.area.areaPercent <= 69) result = 4;
    if (state.LowerExtremities.area.areaPercent >= 30
        && state.LowerExtremities.area.areaPercent <= 49) result = 3;
    if (state.LowerExtremities.area.areaPercent >= 10
        && state.LowerExtremities.area.areaPercent <= 29) result = 2;
    if (state.LowerExtremities.area.areaPercent >= 1
        && state.LowerExtremities.area.areaPercent <= 9) result = 1;
    return result;
  },
};
