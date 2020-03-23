import Resize from '../assets/images/resize.svg';

import Chest1 from '../assets/images/Chest1.jpg';
import Chest2 from '../assets/images/Chest2.jpg';
import Chest3 from '../assets/images/Chest3.jpg';
import Chest4 from '../assets/images/Chest4.jpg';
import Chest5 from '../assets/images/Chest5.jpg';
import Chest6 from '../assets/images/Chest6.jpg';
import Chest7 from '../assets/images/Chest7.jpg';
import Chest8 from '../assets/images/Chest8.jpg';

import Shoulder1 from '../assets/images/Shoulder1.jpg';
import Shoulder2 from '../assets/images/Shoulder2.jpg';
import Shoulder3 from '../assets/images/Shoulder3.jpg';
import Shoulder4 from '../assets/images/Shoulder4.jpg';
import Shoulder5 from '../assets/images/Shoulder5.jpg';
import Shoulder6 from '../assets/images/Shoulder6.jpg';
import Shoulder7 from '../assets/images/Shoulder7.jpg';
import Shoulder8 from '../assets/images/Shoulder8.jpg';

import triceps1 from '../assets/images/triceps1.jpg';
import triceps2 from '../assets/images/triceps2.jpg';
import triceps3 from '../assets/images/triceps3.jpg';
import triceps4 from '../assets/images/triceps4.jpg';
import triceps5 from '../assets/images/triceps5.jpg';
import triceps6 from '../assets/images/triceps6.jpg';
import triceps7 from '../assets/images/triceps7.jpg';
import triceps8 from '../assets/images/triceps8.jpg';

import Biceps1 from '../assets/images/Biceps1.jpg';
import Biceps2 from '../assets/images/Biceps2.jpg';
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

const generateGrids = (bodySymptom, bodypart) => {
  let tabImage;
  let infoData;
  let gridName;

  const GRID_MAP = [
    {
      image: null,
      info: null,
      score: 0,
      name: 'grid name1',
      icon: Resize,
      label: 'Erythema_None',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 1,
      name: 'grid name2',
      icon: Resize,
      label: 'Erythema_Mild',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 2,
      name: 'grid name3',
      icon: Resize,
      label: 'Erythema_Moderate',
      relative: null,
    },
    {
      image: null,
      info: null,
      score: 3,
      name: 'grid name4',
      icon: Resize,
      label: 'Erythema_Severe',
      relative: null,
    },
  ];

  switch (bodypart) {
    case 'Chest & Shoulder':
      break;
    case 'Biceps & Triceps':
      break;
    case 'Abs & Backside':
      break;
    case 'Buttocks & Leg':
      break;
    default:
      break;
  }
  // Assign image and info to grid by each body parts
  switch (bodySymptom) {
    case 'Chest-I':
      tabImage = [Chest1, Chest2, Chest3, Chest4];
      infoData = [];
      gridName = ['槓鈴仰臥推舉', '啞鈴飛鳥', '繩索夾胸', '伏地挺身'];
      break;
    case 'Chest-II':
      tabImage = [Chest5, Chest6, Chest7, Chest8];
      infoData = [];
      gridName = ['坐姿槓鈴肩上推舉', '啞鈴交替肩上推舉', '啞鈴交替肩上推舉轉體', '坐姿啞鈴肩上推舉'];
      break;
    case 'Shoulder-I':
      tabImage = [Shoulder1, Shoulder2, Shoulder3, Shoulder4];
      infoData = [];
      gridName = ['啞鈴側平舉', '坐姿啞鈴側舉', '跪姿俯身飛鳥', '滑輪斜拉'];
      break;
    case 'Shoulder-II':
      tabImage = [Shoulder5, Shoulder6, Shoulder7, Shoulder8];
      infoData = [];
      gridName = ['上斜式 L 字形平舉', '坐姿俯身側平舉', '俯身反手側平舉', '單手 45 度滑輪外旋'];
      break;
    case 'Triceps-I':
      tabImage = [triceps1, triceps2, triceps3, triceps4];
      infoData = [];
      gridName = ['仰臥啞鈴三頭肌伸展', '坐姿啞鈴過頂三頭肌伸展', '下斜啞鈴鎚式彎舉', '滑輪繩索下壓'];
      break;
    case 'Triceps-II':
      tabImage = [triceps5, triceps6, triceps7, triceps8];
      infoData = [];
      gridName = ['仰臥 W 槓三頭肌伸展', '啞鈴單手後屈伸', '重訓椅撐體臂屈伸', '自體重量撐體'];
      break;
    case 'Biceps-I':
      tabImage = [Biceps1, Biceps2, Biceps3, Biceps4];
      infoData = [];
      gridName = ['站式啞鈴二頭肌彎舉', '靜態彎舉', '上斜式啞鈴二頭肌彎舉', 'W 槓斜板彎舉'];
      break;
    case 'Biceps-II':
      tabImage = [Biceps5, Biceps6, Biceps7, Biceps8];
      infoData = [];
      gridName = ['交叉啞鈴鎚式彎舉', '集中彎舉', '滑輪二頭肌彎舉', '槓鈴二頭肌彎舉'];
      break;
    case 'Backside-I':
      tabImage = [Backside1, Backside2, Backside3, Backside4];
      infoData = [];
      gridName = ['坐姿寬握滑輪划船', '單臂屈體划船', '滑輪下拉', '寬握引體向上'];
      break;
    case 'Backside-II':
      tabImage = [Backside5, Backside6, Backside7, Backside8];
      infoData = [];
      gridName = ['架上拉舉', '面拉滑輪', '滑輪直臂下拉', '俯身槓鈴直腿硬舉划船'];
      break;
    case 'Abs-I':
      tabImage = [Abs1, Abs2, Abs3, Abs4];
      infoData = [];
      gridName = ['滑輪側彎', '懸吊提腿', '地板超人式', '反向捲腹'];
      break;
    case 'Abs-II':
      tabImage = [Abs5, Abs6, Abs7, Abs8];
      infoData = [];
      gridName = ['橋式抬臀', '前平板式', '跪姿滑輪俯身捲腹', '增強側平板式'];
      break;
    case 'Leg-I':
      tabImage = [Leg1, Leg2, Leg3, Leg4];
      infoData = [];
      gridName = ['槓鈴深蹲', '槓把硬舉', '啞鈴單手肩推', '站式後揹槓鈴踮腳訓練'];
      break;
    case 'Leg-II':
      tabImage = [Leg5, Leg6, Leg7, Leg8];
      infoData = [];
      gridName = ['保加利亞式啞鈴分腿深蹲', '張腿高腳杯深蹲', '槓鈴直腿硬舉', '槓鈴前蹲推舉'];
      break;
    case 'Buttocks-I':
      tabImage = [Buttocks1, Buttocks2, Buttocks3, Buttocks4];
      infoData = [];
      gridName = ['靜態背部伸展', '頭靠重訓椅槓鈴提臀', '抬臀', '臀部交叉伸展'];
      break;
    case 'Buttocks-II':
      tabImage = [Buttocks5, Buttocks6, Buttocks7, Buttocks8];
      infoData = [];
      gridName = ['臀部左右擺動', '啞鈴反弓步', '胯下繩索前拉', '爬山式'];
      break;
    default:
      break;
  }

  GRID_MAP.forEach((gridItem, idx) => {
    // 處理每個小圖
    const grid = gridItem;
    grid.image = tabImage[idx];
    grid.name = gridName[idx];
    grid.label = `${bodySymptom}_${grid.name}`;
    grid.info = infoData[idx];
  });

  return GRID_MAP;
};

export default generateGrids;
