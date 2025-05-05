import { styled } from "@mui/material";

import { COLORS, FONT } from "../../theme/theme";
import { DateField as CustomDateField } from "@mui/x-date-pickers";
import { MuiDateField } from "./CustomDateField.styles";

const MuiDateFieldMobile = styled(MuiDateField)`
    .MuiInputBase-input {
     font-size: 12px !important;
    }
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

export { MuiDateFieldMobile };
