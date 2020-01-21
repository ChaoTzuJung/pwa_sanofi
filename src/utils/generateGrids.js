import Resize from '../assets/images/resize.svg';


import ErythemaNoneImage from '../assets/images/Erythema_Clear_Skin.jpg';
import ErythemaMildImage from '../assets/images/Erythema_Mild.jpg';
import ErythemaModerateImage from '../assets/images/Erythema_Moderate.jpg';
import ErythemaSevereImage from '../assets/images/Erythema_Severe.jpg';

import EdemaNoneImage from '../assets/images/Edema_Clear_Skin.jpg';
import EdemaMildImage from '../assets/images/Edema_Mild.jpg';
import EdemaModerateImage from '../assets/images/Edema_Moderate.jpg';
import EdemaSevereImage from '../assets/images/Edema_Severe.jpg';

import ExcoriationNoneImage from '../assets/images/Excoriation_Clear_Skin.jpg';
import ExcoriationMildImage from '../assets/images/Excoriation_Mild.jpg';
import ExcoriationModerateImage from '../assets/images/Excoriation_Moderate.jpg';
import ExcoriationSevereImage from '../assets/images/Excoriation_Severe.jpg';

import LichenificationNoneImage from '../assets/images/Lichenification_Clear_Skin.jpg';
import LichenificationMildImage from '../assets/images/Lichenification_Mild.jpg';
import LichenificationModerateImage from '../assets/images/Lichenification_Moderate.jpg';
import LichenificationSevereImage from '../assets/images/Lichenification_Severe.jpg';

const generateGrids = (bodySymptom) => {
  let RelateErythemaNoneImage;
  let RelateErythemaMildImage;
  let RelateErythemaModerateImage;
  let RelateErythemaSevereImage;
  let RelateEdemaNoneImage;
  let RelateEdemaMildImage;
  let RelateEdemaModerateImage;
  let RelateEdemaSevereImage;
  let RelateExcoriationNoneImage;
  let RelateExcoriationMildImage;
  let RelateExcoriationModerateImage;
  let RelateExcoriationSevereImage;
  let RelateLichenificationNoneImage;
  let RelateLichenificationMildImage;
  let RelateLichenificationModerateImage;
  let RelateLichenificationSevereImage;
  let tabImage;
  let infoData;
  let relateImage;

  const GRID_MAP = [
    {
      image: null,
      info: null,
      score: 0,
      name: 'None',
      icon: Resize,
      label: 'Erythema_None',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 1,
      name: 'Mild',
      icon: Resize,
      label: 'Erythema_Mild',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 2,
      name: 'Moderate',
      icon: Resize,
      label: 'Erythema_Moderate',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 3,
      name: 'Severe',
      icon: Resize,
      label: 'Erythema_Severe',
      relative: null,
    },
  ];

  switch (bodySymptom) {
    case 'Erythema':
      tabImage = [
        ErythemaNoneImage,
        ErythemaMildImage,
        ErythemaModerateImage,
        ErythemaSevereImage,
      ];
      infoData = [null, 'Faintly detectable, pink', 'Clearly distinguishable dull red', 'Deep dark or fiery bright red'];
      RelateErythemaNoneImage = [
        ErythemaNoneImage,
      ];
      RelateErythemaMildImage = [
        ErythemaMildImage,
      ];
      RelateErythemaModerateImage = [
        ErythemaModerateImage,
      ];
      RelateErythemaSevereImage = [
        ErythemaSevereImage,
      ];
      relateImage = [
        RelateErythemaNoneImage,
        RelateErythemaMildImage,
        RelateErythemaModerateImage,
        RelateErythemaSevereImage,
      ];
      break;
    case 'Edema / papulation':
      tabImage = [
        EdemaNoneImage,
        EdemaMildImage,
        EdemaModerateImage,
        EdemaSevereImage,
      ];
      infoData = [null, 'Barely perceptible elevation', 'Clearly perceptible elevation but not prominent', 'Prominent elevation'];
      RelateEdemaNoneImage = [
        EdemaNoneImage,
      ];
      RelateEdemaMildImage = [
        EdemaMildImage,
      ];
      RelateEdemaModerateImage = [
        EdemaModerateImage,
      ];
      RelateEdemaSevereImage = [
        EdemaSevereImage,
      ];
      relateImage = [
        RelateEdemaNoneImage,
        RelateEdemaMildImage,
        RelateEdemaModerateImage,
        RelateEdemaSevereImage,
      ];
      break;
    case 'Excoriation':
      tabImage = [
        ExcoriationNoneImage,
        ExcoriationMildImage,
        ExcoriationModerateImage,
        ExcoriationSevereImage,
      ];
      infoData = [null, 'Scant, superficial excoriation', 'Many superficial and/or some deep excoriations', 'Extensive superficial and/or many deep excoriations'];
      RelateExcoriationNoneImage = [
        ExcoriationNoneImage,
      ];
      RelateExcoriationMildImage = [
        ExcoriationMildImage,
      ];
      RelateExcoriationModerateImage = [
        ExcoriationModerateImage,
      ];
      RelateExcoriationSevereImage = [
        ExcoriationSevereImage,
      ];
      relateImage = [
        RelateExcoriationNoneImage,
        RelateExcoriationMildImage,
        RelateExcoriationModerateImage,
        RelateExcoriationSevereImage,
      ];
      break;
    case 'Lichenification':
      tabImage = [
        LichenificationNoneImage,
        LichenificationMildImage,
        LichenificationModerateImage,
        LichenificationSevereImage,
      ];
      infoData = [null, 'Slight skin thickening; markings minimally exaggerated', 'Thickened skin with exaggerated markings and/or some prurigo nodules', 'Prominent thickening, exaggerated markings creating deep furrows and/or many prurigo nodules'];
      RelateLichenificationNoneImage = [
        LichenificationNoneImage,
      ];
      RelateLichenificationMildImage = [
        LichenificationMildImage,
      ];
      RelateLichenificationModerateImage = [
        LichenificationModerateImage,
      ];
      RelateLichenificationSevereImage = [
        LichenificationSevereImage,
      ];
      relateImage = [
        RelateLichenificationNoneImage,
        RelateLichenificationMildImage,
        RelateLichenificationModerateImage,
        RelateLichenificationSevereImage,
      ];
      break;
    default:
      break;
  }

  GRID_MAP.forEach((gridItem, idx) => {
    // 處理每個小圖
    const grid = gridItem;
    grid.image = tabImage[idx];
    grid.label = `${bodySymptom}_${grid.name}`;
    grid.relative = relateImage[idx];
    grid.info = infoData[idx];
  });

  return GRID_MAP;
};

export default generateGrids;
