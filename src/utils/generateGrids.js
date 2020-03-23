import Resize from '../assets/images/resize.svg';

import ChestPress1 from '../assets/images/ChestPress1.jpg';
import ChestPress2 from '../assets/images/ChestPress2.jpg';
import ChestPress3 from '../assets/images/ChestPress3.jpg';
import ChestPress4 from '../assets/images/ChestPress4.jpg';
import LaterRaise1 from '../assets/images/LaterRaise1.jpg';
import LaterRaise2 from '../assets/images/LaterRaise2.jpg';
import LaterRaise3 from '../assets/images/LaterRaise3.jpg';
import LaterRaise4 from '../assets/images/LaterRaise4.jpg';

import FrontRaise1 from '../assets/images/FrontRaise1.jpg';
import FrontRaise2 from '../assets/images/FrontRaise2.jpg';
import FrontRaise3 from '../assets/images/FrontRaise3.jpg';
import FrontRaise4 from '../assets/images/FrontRaise4.jpg';
import BackRaise1 from '../assets/images/BackRaise1.jpg';
import BackRaise2 from '../assets/images/BackRaise2.jpg';
import BackRaise3 from '../assets/images/BackRaise3.jpg';
import BackRaise4 from '../assets/images/BackRaise4.jpg';

import triceps1 from '../assets/images/triceps1.jpg';
import triceps2 from '../assets/images/triceps2.jpg';
import triceps3 from '../assets/images/triceps3.jpg';
import triceps4 from '../assets/images/triceps4.jpg';
import triceps5 from '../assets/images/triceps5.jpg';
import triceps6 from '../assets/images/triceps6.jpg';
import triceps7 from '../assets/images/triceps7.jpg';
import triceps8 from '../assets/images/triceps8.jpg';

import Biceps1 from '../assets/images/Biceps1.jpg';
import Biceps2 from '../assets/images/Biceps0.jpg';
import Biceps3 from '../assets/images/Biceps3.jpg';
import Biceps4 from '../assets/images/Biceps4.jpg';
import Biceps5 from '../assets/images/Biceps5.jpg';
import Biceps6 from '../assets/images/Biceps6.jpg';
import Biceps7 from '../assets/images/Biceps7.jpg';
import Biceps8 from '../assets/images/Biceps8.jpg';

import Backside1 from '../assets/images/Backside1.jpg';
import Backside2 from '../assets/images/Backside2.jpg';
import Backside3 from '../assets/images/Backside3.jpg';
import Backside4 from '../assets/images/Backside4.jpg';
import Backside5 from '../assets/images/Backside5.jpg';
import Backside6 from '../assets/images/Backside6.jpg';
import Backside7 from '../assets/images/Backside7.jpg';
import Backside8 from '../assets/images/Backside8.jpg';

import Abs1 from '../assets/images/Abs1.jpg';
import Abs2 from '../assets/images/Abs2.jpg';
import Abs3 from '../assets/images/Abs3.jpg';
import Abs4 from '../assets/images/Abs4.jpg';
import Abs5 from '../assets/images/Abs5.jpg';
import Abs6 from '../assets/images/Abs6.jpg';
import Abs7 from '../assets/images/Abs7.jpg';
import Abs8 from '../assets/images/Abs8.jpg';

import Buttocks1 from '../assets/images/Buttocks1.jpg';
import Buttocks2 from '../assets/images/Buttocks2.jpg';
import Buttocks3 from '../assets/images/Buttocks3.jpg';
import Buttocks4 from '../assets/images/Buttocks4.jpg';
import Buttocks5 from '../assets/images/Buttocks5.jpg';
import Buttocks6 from '../assets/images/Buttocks6.jpg';
import Buttocks7 from '../assets/images/Buttocks7.jpg';
import Buttocks8 from '../assets/images/Buttocks8.jpg';

import Leg1 from '../assets/images/Leg1.jpg';
import Leg2 from '../assets/images/Leg2.jpg';
import Leg3 from '../assets/images/Leg3.jpg';
import Leg4 from '../assets/images/Leg4.jpg';
import Leg5 from '../assets/images/Leg5.jpg';
import Leg6 from '../assets/images/Leg6.jpg';
import Leg7 from '../assets/images/Leg7.jpg';
import Leg8 from '../assets/images/Leg8.jpg';

let ErythemaNoneImage;
let ErythemaMildImage;
let ErythemaModerateImage;
let ErythemaSevereImage;

let EdemaNoneImage;
let EdemaMildImage;
let EdemaModerateImage;
let EdemaSevereImage;

let ExcoriationNoneImage;
let ExcoriationMildImage;
let ExcoriationModerateImage;
let ExcoriationSevereImage;

let LichenificationNoneImage;
let LichenificationMildImage;
let LichenificationModerateImage;
let LichenificationSevereImage;
const generateGrids = (bodySymptom, bodypart) => {
  let tabImage;
  let infoData;

  const GRID_MAP = [
    {
      image: null,
      info: null,
      score: 0,
      name: 'Primary',
      icon: Resize,
      label: 'Erythema_None',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 1,
      name: 'Intermediate',
      icon: Resize,
      label: 'Erythema_Mild',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 2,
      name: 'Advanced',
      icon: Resize,
      label: 'Erythema_Moderate',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 3,
      name: 'Superlative',
      icon: Resize,
      label: 'Erythema_Severe',
      relative: null,
    },
  ];

  switch (bodypart) {
    case 'Chest & Shoulder':
      ErythemaNoneImage = ChestPress1;
      ErythemaMildImage = ChestPress2;
      ErythemaModerateImage = ChestPress3;
      ErythemaSevereImage = ChestPress4;

      EdemaNoneImage = LaterRaise1;
      EdemaMildImage = LaterRaise2;
      EdemaModerateImage = LaterRaise3;
      EdemaSevereImage = LaterRaise4;

      ExcoriationNoneImage = FrontRaise1;
      ExcoriationMildImage = FrontRaise2;
      ExcoriationModerateImage = FrontRaise3;
      ExcoriationSevereImage = FrontRaise4;

      LichenificationNoneImage = BackRaise1;
      LichenificationMildImage = BackRaise2;
      LichenificationModerateImage = BackRaise3;
      LichenificationSevereImage = BackRaise4;
      break;
    case 'UpperExtremties':
      ErythemaNoneImage = triceps1;
      ErythemaMildImage = triceps2;
      ErythemaModerateImage = triceps3;
      ErythemaSevereImage = triceps4;

      EdemaNoneImage = triceps5;
      EdemaMildImage = triceps6;
      EdemaModerateImage = triceps7;
      EdemaSevereImage = triceps8;

      ExcoriationNoneImage = Biceps1;
      ExcoriationMildImage = Biceps2;
      ExcoriationModerateImage = Biceps3;
      ExcoriationSevereImage = Biceps4;

      LichenificationNoneImage = Biceps5;
      LichenificationMildImage = Biceps6;
      LichenificationModerateImage = Biceps7;
      LichenificationSevereImage = Biceps8;
      break;
    case 'Trunk':
      ErythemaNoneImage = Backside1;
      ErythemaMildImage = Backside2;
      ErythemaModerateImage = Backside3;
      ErythemaSevereImage = Backside4;

      EdemaNoneImage = Backside5;
      EdemaMildImage = Backside6;
      EdemaModerateImage = Backside7;
      EdemaSevereImage = Backside8;

      ExcoriationNoneImage = Abs1;
      ExcoriationMildImage = Abs2;
      ExcoriationModerateImage = Abs3;
      ExcoriationSevereImage = Abs4;

      LichenificationNoneImage = Abs5;
      LichenificationMildImage = Abs6;
      LichenificationModerateImage = Abs7;
      LichenificationSevereImage = Abs8;
      break;
    case 'LowerExtremties':
      ErythemaNoneImage = Leg1;
      ErythemaMildImage = Leg2;
      ErythemaModerateImage = Leg3;
      ErythemaSevereImage = Leg4;

      EdemaNoneImage = Leg5;
      EdemaMildImage = Leg6;
      EdemaModerateImage = Leg7;
      EdemaSevereImage = Leg8;

      ExcoriationNoneImage = Buttocks1;
      ExcoriationMildImage = Buttocks2;
      ExcoriationModerateImage = Buttocks3;
      ExcoriationSevereImage = Buttocks4;

      LichenificationNoneImage = Buttocks5;
      LichenificationMildImage = Buttocks6;
      LichenificationModerateImage = Buttocks7;
      LichenificationSevereImage = Buttocks8;
      break;
    default:
      ErythemaNoneImage = triceps1;
      ErythemaMildImage = triceps2;
      ErythemaModerateImage = triceps3;
      ErythemaSevereImage = triceps4;

      EdemaNoneImage = triceps5;
      EdemaMildImage = triceps6;
      EdemaModerateImage = triceps7;
      EdemaSevereImage = triceps8;

      ExcoriationNoneImage = Biceps1;
      ExcoriationMildImage = Biceps2;
      ExcoriationModerateImage = Biceps3;
      ExcoriationSevereImage = Biceps4;

      LichenificationNoneImage = Biceps5;
      LichenificationMildImage = Biceps6;
      LichenificationModerateImage = Biceps7;
      LichenificationSevereImage = Biceps8;
      break;
  }

  switch (bodySymptom) {
    case 'Erythema':
      tabImage = [
        ErythemaNoneImage,
        ErythemaMildImage,
        ErythemaModerateImage,
        ErythemaSevereImage,
      ];
      infoData = [null, 'Faintly detectable, pink', 'Clearly distinguishable dull red', 'Deep dark or fiery bright red'];
      break;
    case 'Edema / papulation':
      tabImage = [
        EdemaNoneImage,
        EdemaMildImage,
        EdemaModerateImage,
        EdemaSevereImage,
      ];
      infoData = [null, 'Barely perceptible elevation', 'Clearly perceptible elevation but not prominent', 'Prominent elevation'];
      break;
    case 'Excoriation':
      tabImage = [
        ExcoriationNoneImage,
        ExcoriationMildImage,
        ExcoriationModerateImage,
        ExcoriationSevereImage,
      ];
      infoData = [null, 'Scant, superficial excoriation', 'Many superficial and/or some deep excoriations', 'Extensive superficial and/or many deep excoriations'];
      break;
    case 'Lichenification':
      tabImage = [
        LichenificationNoneImage,
        LichenificationMildImage,
        LichenificationModerateImage,
        LichenificationSevereImage,
      ];
      infoData = [null, 'Slight skin thickening; markings minimally exaggerated', 'Thickened skin with exaggerated markings and/or some prurigo nodules', 'Prominent thickening, exaggerated markings creating deep furrows and/or many prurigo nodules'];
      break;
    default:
      break;
  }

  GRID_MAP.forEach((gridItem, idx) => {
    // 處理每個小圖
    const grid = gridItem;
    grid.image = tabImage[idx];
    grid.label = `${bodySymptom}_${grid.name}`;
    console.log(grid.label);
    grid.info = infoData[idx];
  });

  return GRID_MAP;
};

export default generateGrids;
