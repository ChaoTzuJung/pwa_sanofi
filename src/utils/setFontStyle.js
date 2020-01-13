import ITCAvantGardeProBk from './ITCAvantGardePro-Bk';
import ITCAvantGardeProMd from './ITCAvantGardePro-Md';
import ITCAvantGardeProBold from './ITCAvantGardePro-Bold';

const FONT_WEIGHT = {
  normal: ITCAvantGardeProBk,
  medium: ITCAvantGardeProMd,
  bold: ITCAvantGardeProBold,
};

const setFontStyle = (doc, weight) => {
  if (FONT_WEIGHT[weight]) FONT_WEIGHT[weight]();
  else console.error(`${weight} doesn't match to FONT_WEIGHT object`);
};

export default setFontStyle;
