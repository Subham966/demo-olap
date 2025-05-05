import { styled } from "@mui/material";

import { COLORS, FONT } from "../../theme/theme";
import { DateField as CustomDateField } from "@mui/x-date-pickers";
import { MuiDateField } from "./CustomDateField.styles";

const MuiDateFieldDesktop = styled(MuiDateField)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    .MuiInputBase-input {
     font-size: 12px !important;
    }
   
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    .MuiInputBase-input {
     font-size: 14px !important;
    }
 }
 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   .MuiInputBase-input {
     font-size: 16px !important;
    }
 }
`;

export { MuiDateFieldDesktop };
