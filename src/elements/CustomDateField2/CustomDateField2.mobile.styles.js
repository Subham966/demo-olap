import { Typography, styled } from "@mui/material";

import { COLORS, FONT } from "../../theme/theme";
import { DateField as CustomDateField } from "@mui/x-date-pickers";
import { ErrorText, LabelText, MuiDateField } from "./CustomDateField2.styles";

const MuiDateFieldMobile = styled(MuiDateField)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;


const LabelTextMobile = styled(LabelText)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;


const ErrorTextMobile = styled(ErrorText)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;


export { MuiDateFieldMobile ,LabelTextMobile, ErrorTextMobile};
