import { styled, TextField as CustomTextField } from "@mui/material";
import { COLORS, FONT } from "../../theme/theme";
import { MuiTextField } from "./CustomTextField.styles";

const MuiTextFieldMobile = styled(MuiTextField)`
  .MuiInputBase-input {
    font-size: 12px;
  }
  .MuiOutlinedInput-root {
    height: 35px;
  }
  .MuiInputLabel-root {
    transform: translate(12px, 6px) scale(1);
  }

  .MuiInputLabel-shrink {
    transform: translate(14px, -10px) scale(0.75);
  }
  .MuiInputBase-input::placeholder {
    font-size: 12px;
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
