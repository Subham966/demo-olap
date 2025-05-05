import { Typography, styled } from "@mui/material";

import { COLORS, FONT } from "../../theme/theme";
import { DateField as CustomDateField } from "@mui/x-date-pickers";
import { ErrorText, LabelText, MuiDateField } from "./CustomDateField2.styles";

const MuiDateFieldDesktop = styled(MuiDateField)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   font-size: 12px !important;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size: 14px;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   font-size: 18px;
 }
`;


const LabelTextDesktop = styled(LabelText)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;


const ErrorTextDesktop = styled(ErrorText)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;


export { MuiDateFieldDesktop ,LabelTextDesktop, ErrorTextDesktop};
