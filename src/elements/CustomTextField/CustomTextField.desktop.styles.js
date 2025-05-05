import { styled, TextField as CustomTextField } from "@mui/material";
import { COLORS, FONT } from "../../theme/theme";
import { MuiTextField } from "./CustomTextField.styles";

const MuiTextFieldDesktop = styled(MuiTextField)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   font-size: 12px;
  .MuiInputBase-input {
    font-size: 12px;
  }

  .MuiInputLabel-root {
    transform: translate(12px, 6px) scale(1);
  }

  .MuiInputLabel-shrink {
    transform: translate(14px, -10px) scale(0.75);
  }

 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size: 14px;
  .MuiInputBase-input {
    font-size: 14px;
  }

  .MuiInputLabel-root {
    transform: translate(14px, 10px) scale(1);
  }

  .MuiInputLabel-shrink {
    transform: translate(14px, -10px) scale(0.75);
  }
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   font-size: 18px;
     .MuiInputBase-input {
    font-size: 14px;
  }

  .MuiInputLabel-root {
    transform: translate(14px, 10px) scale(1);
  }

  .MuiInputLabel-shrink {
    transform: translate(14px, -10px) scale(0.75);
  }
 }
  }
`;

export { MuiTextFieldDesktop };
