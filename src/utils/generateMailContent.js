const generateMailContent = (req, newReceiverName) => `
    Dear ${newReceiverName},
    <br/>
    <br/>
    Thank you for using the EASI score calculator. Please refer to the attached PDF for your score report.
    <br/>
    <br/>
    <b>Information</b>
    <br/>
    <br/>
    Patient: ${req.Patient_Name}
    <br/>
    Age: ${req.Age}
    <br/>
    Gender: ${req.Gender}
    <br/>
    <br/>
    Report date: ${req.Report_Date}
    <br/>
    BSA: ${req.BSA}
    <br/>
    Interpretation: ${req.Interpretation}
    <br/>
    IGA: ${req.IGA}
    <br/>
    <br/>
    <b>Body Regions</b>
    <br/>
    <br/>
    H: Er: ${req.H_Er} / Ed: ${req.H_Ed}  / Ex: ${req.H_Ex}  / Li: ${req.H_Li} / Region: ${req.H_Area} / Body: ${req.H_BodyScore}<br/>
    T: Er: ${req.T_Er} / Ed: ${req.T_Ed}  / Ex: ${req.T_Ex}  / Li: ${req.T_Li} / Region: ${req.T_Area} / Body: ${req.T_BodyScore}<br/>
    U: Er: ${req.U_Er} / Ed: ${req.U_Ed}  / Ex: ${req.U_Ex}  / Li: ${req.U_Li} / Region: ${req.U_Area} / Body: ${req.U_BodyScore}<br/>
    L: Er: ${req.L_Er} / Ed: ${req.L_Ed}  / Ex: ${req.L_Ex}  / Li: ${req.L_Li} / Region: ${req.L_Area} / Body: ${req.L_BodyScore}<br/>
    <br/>
    EASI score: ${req.EASI_Score}
    <br/>
    <br/>
    Disclaimer:
    <br/>
    This free online tool aims to help physicians and patients in the computation of EASI. These materials have been prepared for medical and scientific information sharing/exchange purposes and not intended to encourage the use of any products.
    <br>
`;

export default generateMailContent;
