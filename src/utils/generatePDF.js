import jsPDF from 'jspdf';
import setFontStyle from './setFontStyle';

const setupTextReportPdf = (doc, data) => {
  const {
    imgWidth,
    imgHeight,
    pdfWidth,
    pdfHeight,
    pdfData,
  } = data;

  setFontStyle(doc, 'bold');
  doc.text(pdfData.Patient_Name, (112 / imgWidth) * pdfWidth, (160 / imgHeight) * pdfHeight + 7);

  setFontStyle(doc, 'nomal');
  doc.text(pdfData.Age, (86 / imgWidth) * pdfWidth, (192 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.Gender, (113 / imgWidth) * pdfWidth, (224 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.Report_Date, (151 / imgWidth) * pdfWidth, (272 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.EASI_Score, (136 / imgWidth) * pdfWidth, (304 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.Interpretation, (163 / imgWidth) * pdfWidth, (336 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.BSA, (82 / imgWidth) * pdfWidth, (368 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.IGA, (87 / imgWidth) * pdfWidth, (400 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.H_BodyScore, (113 / imgWidth) * pdfWidth, (488 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Area, (210 / imgWidth) * pdfWidth - 2, (488 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Er.toString(), (310 / imgWidth) * pdfWidth, (488 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Ed.toString(), (362 / imgWidth) * pdfWidth, (488 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Ex.toString(), (411 / imgWidth) * pdfWidth, (488 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Li.toString(), (455 / imgWidth) * pdfWidth, (488 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.U_BodyScore, (113 / imgWidth) * pdfWidth, (520 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Area, (210 / imgWidth) * pdfWidth - 2, (520 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Er.toString(), (310 / imgWidth) * pdfWidth, (520 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Ed.toString(), (362 / imgWidth) * pdfWidth, (520 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Ex.toString(), (411 / imgWidth) * pdfWidth, (520 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Li.toString(), (455 / imgWidth) * pdfWidth, (520 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.T_BodyScore, (113 / imgWidth) * pdfWidth, (552 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Area, (210 / imgWidth) * pdfWidth - 2, (552 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Er.toString(), (310 / imgWidth) * pdfWidth, (552 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Ed.toString(), (362 / imgWidth) * pdfWidth, (552 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Ex.toString(), (411 / imgWidth) * pdfWidth, (552 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Li.toString(), (455 / imgWidth) * pdfWidth, (552 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.L_BodyScore, (113 / imgWidth) * pdfWidth, (584 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Area, (210 / imgWidth) * pdfWidth - 2, (584 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Er.toString(), (310 / imgWidth) * pdfWidth, (584 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Ed.toString(), (362 / imgWidth) * pdfWidth, (584 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Ex.toString(), (411 / imgWidth) * pdfWidth, (584 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Li.toString(), (455 / imgWidth) * pdfWidth, (584 / imgHeight) * pdfHeight + 7);
};

const setupFullReportPdf = (doc, data) => {
  const {
    imgWidth,
    imgHeight,
    pdfWidth,
    pdfHeight,
    pdfData,
  } = data;

  setFontStyle(doc, 'bold');
  doc.text(pdfData.Patient_Name, (237 / imgWidth) * pdfWidth, (152 / imgHeight) * pdfHeight + 7);

  setFontStyle(doc, 'nomal');
  doc.text(pdfData.Report_Date, (115 / imgWidth) * pdfWidth, (86 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.EASI_Score, (20 / imgWidth) * pdfWidth, (234 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.Interpretation, (208 / imgWidth) * pdfWidth, (234 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.IGA, (423 / imgWidth) * pdfWidth, (234 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.BSA, (20 / imgWidth) * pdfWidth, (301 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.Gender, (208 / imgWidth) * pdfWidth, (301 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.Age, (423 / imgWidth) * pdfWidth, (301 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.H_BodyScore, (160 / imgWidth) * pdfWidth, (416 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Area, (160 / imgWidth) * pdfWidth, (447 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Er.toString(), (160 / imgWidth) * pdfWidth, (467 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Ed.toString(), (160 / imgWidth) * pdfWidth, (487 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Ex.toString(), (160 / imgWidth) * pdfWidth, (507 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.H_Li.toString(), (160 / imgWidth) * pdfWidth, (527 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.U_BodyScore, (506 / imgWidth) * pdfWidth, (416 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Area, (506 / imgWidth) * pdfWidth, (447 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Er.toString(), (506 / imgWidth) * pdfWidth, (467 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Ed.toString(), (506 / imgWidth) * pdfWidth, (487 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Ex.toString(), (506 / imgWidth) * pdfWidth, (507 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.U_Li.toString(), (506 / imgWidth) * pdfWidth, (527 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.T_BodyScore, (506 / imgWidth) * pdfWidth, (594 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Area, (506 / imgWidth) * pdfWidth, (625 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Er.toString(), (506 / imgWidth) * pdfWidth, (645 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Ed.toString(), (506 / imgWidth) * pdfWidth, (665 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Ex.toString(), (506 / imgWidth) * pdfWidth, (685 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.T_Li.toString(), (506 / imgWidth) * pdfWidth, (705 / imgHeight) * pdfHeight + 7);

  doc.text(pdfData.L_BodyScore, (160 / imgWidth) * pdfWidth, (594 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Area, (160 / imgWidth) * pdfWidth, (625 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Er.toString(), (160 / imgWidth) * pdfWidth, (645 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Ed.toString(), (160 / imgWidth) * pdfWidth, (665 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Ex.toString(), (160 / imgWidth) * pdfWidth, (685 / imgHeight) * pdfHeight + 7);
  doc.text(pdfData.L_Li.toString(), (160 / imgWidth) * pdfWidth, (705 / imgHeight) * pdfHeight + 7);
};

const PDF_MAP = {
  text: setupTextReportPdf,
  full: setupFullReportPdf,
};

/* eslint-disable new-cap */
const generatePDF = (data) => {
  // 設定PDF紙張格式
  const doc = new jsPDF('portrait', 'mm', 'a4', true);

  // FAST 是指快速產生PDF，畫質可能略粗糙
  doc.addImage(data.imgSource, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), '', 'FAST');

  if (PDF_MAP[data.type]) PDF_MAP[data.type](doc, data);
  else console.error(`${data.type} doesn't match to PDF_MAP object`);

  return btoa(doc.output());
};

export default generatePDF;
