import { styled, TextField } from "@mui/material";
import { COLORS, FONT } from "../../theme/theme";

const MuiTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    height: 43px;
    font-size: 14px;
  }

  .MuiOutlinedInput-input {
    font-size: 14px;
    padding: 8px 10px;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
    font-size: 12px;
    padding: 6px 8px;
  }

  .MuiInputLabel-root {
    transform: translate(12px, 12px) scale(1);
    font-size: 14px;
  }

  .MuiInputLabel-shrink {
    transform: translate(14px, -10px) scale(0.75);
    font-size: 12px;
  }
`;

export { MuiTextField };
