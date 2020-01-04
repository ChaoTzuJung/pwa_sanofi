const IMG_PATH = 'https://s3-ap-northeast-1.amazonaws.com/sanofi.surveycake.com';
const ResizeImage = `${IMG_PATH}/asset/pic/2019-10-14-06-39-22-f34ffa7ebaeca42d6f22c969c55ffe0a.png`;

// GridOne
const ErythemaNoneImage = `${IMG_PATH}/asset/pic/2019-10-10-15-02-01-8ea5f10ba76edfea070843ca8b7d9068.png`;
const ErythemaMildImage = `${IMG_PATH}/asset/pic/2019-10-14-06-19-03-fd6730c36ea60f7759a2781e6a0d5220.png`;
const ErythemaModerateImage = `${IMG_PATH}/asset/pic/2019-10-14-06-19-28-7c460fc56c81de4285e68e480306758c.png`;
const ErythemaSevereImage = `${IMG_PATH}/asset/pic/2019-10-14-06-19-45-8cfd4544866433f08f5364c94223ee31.png`;
// GridTwo
const EdemaNoneImage = `${IMG_PATH}/asset/pic/2019-10-14-06-20-07-c1fd00311a2af77baf02edd39f7f3689.png`;
const EdemaMildImage = `${IMG_PATH}/asset/pic/2019-10-14-06-20-23-485581a548a3dd6b805bbf1212936526.png`;
const EdemaModerateImage = `${IMG_PATH}/asset/pic/2019-10-14-06-20-35-ebccdf27138d1289755d54642fc9c76a.png`;
const EdemaSevereImage = `${IMG_PATH}/asset/pic/2019-10-14-06-20-53-f2e61b872bec02aaf0e907fe67ca9bb1.png`;
// GridThree
const ExcoriationNoneImage = `${IMG_PATH}/asset/pic/2019-10-14-06-21-30-b7b47ae7d4d221b43d1ce2aa54132d93.png`;
const ExcoriationMildImage = `${IMG_PATH}/asset/pic/2019-10-14-06-21-47-09e0289a1355993030134efe74cb01b0.png`;
const ExcoriationModerateImage = `${IMG_PATH}/asset/pic/2019-10-14-06-22-05-58175c4b1efa41557c8f77e3a8be94aa.png`;
const ExcoriationSevereImage = `${IMG_PATH}/asset/pic/2019-10-14-06-22-19-0104151bd11d6be2cee60fc60f373f19.png`;
// GridFour
const LichenificationNoneImage = `${IMG_PATH}/asset/pic/2019-10-14-06-22-39-ff50785b109a4fd6a189333478e45b7d.png`;
const LichenificationMildImage = `${IMG_PATH}/asset/pic/2019-10-14-06-22-53-4e3ebad049a3506617a3c88b89edf6d5.png`;
const LichenificationModerateImage = `${IMG_PATH}/asset/pic/2019-10-14-06-23-05-1dc02725268e9783ec54b6f2341e4385.png`;
const LichenificationSevereImage = `${IMG_PATH}/asset/pic/2019-10-14-06-23-18-c22560660d46ebcfa3fbb8ac513b16ac.png`;

const generateGrids = (bodySymptom, bodyPart) => {
  console.log('bodyPart', bodyPart);
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
      icon: ResizeImage,
      label: 'Erythema_None',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 1,
      name: 'Mild',
      icon: ResizeImage,
      label: 'Erythema_Mild',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 2,
      name: 'Moderate',
      icon: ResizeImage,
      label: 'Erythema_Moderate',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 3,
      name: 'Severe',
      icon: ResizeImage,
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
