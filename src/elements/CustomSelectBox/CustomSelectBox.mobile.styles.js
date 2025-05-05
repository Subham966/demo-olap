import {
  styled,
  TextField as CustomTextField,
  Select,
  InputLabel,
} from "@mui/material";
import { COLORS, FONT } from "../../theme/theme";
import { StyledInputLabel, StyledMuiSelect } from "./CustomSelectBox.style";
const StyledMuiSelectMobile = styled(StyledMuiSelect)`
.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select{
    font-size:14px;
    }
  & .MuiOutlinedInput-root {
   & .MuiOutlinedInput-root {
      height: 40px;
      display: flex;
      align-items: center;
      
    }

    

    & .MuiSelect-select {
      padding: 6px 14px;
      
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

// const StyledMuiSelectMobile = styled(StyledMuiSelect)`
//   & .MuiOutlinedInput-root {
//     height: 24px;  /* Reduce height */
//     min-height: 24px; /* Ensure it doesn't expand */
//     display: flex;
//     align-items: center;
//   }

//   & .MuiSelect-select {
//     padding: 4px; /* Reduce padding */
//     height: 24px; /* Match outer height */
//     line-height: normal; /* Ensure text isn't stretching the height */
//   }

//   & .MuiOutlinedInput-notchedOutline {
//     top: 0;
//     height: 100%;
//   }
// `;

const StyledInputLabelMobile = styled(StyledInputLabel)`
  margin-top: -4px;
  font-size: 14px;
  &.MuiInputLabel-shrink {
    margin-top: 0px;
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

export { StyledMuiSelectMobile, StyledInputLabelMobile };
