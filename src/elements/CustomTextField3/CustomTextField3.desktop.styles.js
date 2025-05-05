import { styled, TextField as CustomTextField } from "@mui/material";
import { COLORS, FONT } from "../../theme/theme";
import { MuiTextField } from "./CustomTextField3.styles";

const MuiTextFieldDesktop = styled(MuiTextField)`
width:90px;

  .MuiInputLabel-root {
    font-size:16px ;
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  .MuiOutlinedInput-root {
    height: 35px;
  }
  .MuiInputLabel-root {
    transform: translate(12px, 6px) scale(1);
    font-size:14px ;
  }

  .MuiInputLabel-shrink {
    transform: translate(14px, -10px) scale(0.75);
  }

 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size: 14px;
    .MuiOutlinedInput-root {
    height: 40px;
  }
  .MuiInputLabel-root {
    transform: translate(12px, 10px) scale(1);
    font-size:14px ;
  }

  .MuiInputLabel-shrink {
    transform: translate(14px, -8px) scale(0.75);
  }
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   font-size: 18px;
    .MuiOutlinedInput-root {
    height: 45px;
  }
  .MuiInputLabel-root {
    transform: translate(12px, 10px) scale(1);
    font-size:14px ;
  }

  .MuiInputLabel-shrink {
    transform: translate(14px, -8px) scale(0.75);
  }
 }
  }
`;

export { MuiTextFieldDesktop };
