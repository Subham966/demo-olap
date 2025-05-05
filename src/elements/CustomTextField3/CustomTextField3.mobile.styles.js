import { styled, TextField as CustomTextField } from "@mui/material";
import { MuiTextField } from "./CustomTextField3.styles";
const MuiTextFieldMobile = styled(MuiTextField)`
  .MuiInputLabel-shrink {
    transform: translate(14px, -10px) scale(0.75);
    font-size: 16px;
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

export { MuiTextFieldMobile };
