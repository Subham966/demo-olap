import {
  styled,
  TextField as CustomTextField,
  Select,
  InputLabel,
} from "@mui/material";
import { COLORS, FONT } from "../../theme/theme";
import { StyledInputLabel, StyledMuiSelect } from "./CustomSelectBox.style";
const StyledMuiSelectDesktop = styled(StyledMuiSelect)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    & .MuiOutlinedInput-root {
      height: 40px;
      display: flex;
      align-items: center;
    }

    & .MuiSelect-select {
      padding: 6px 14px;
    }
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    & .MuiOutlinedInput-root {
      height: 40px;
      display: flex;
      align-items: center;
    }

    & .MuiSelect-select {
      padding: 9px 14px;
    }
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    & .MuiOutlinedInput-root {
      height: 45px;
      display: flex;
      align-items: center;
    }

    & .MuiSelect-select {
      padding: 12px 14px;
    }
  }
`;

const StyledInputLabelDesktop = styled(StyledInputLabel)`
  margin-top: -5px;
  &.MuiInputLabel-shrink {
    margin-top: 0px;
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:13px ;
    margin-top: -8px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size:14px ;
    margin-top: -7px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  }
`;

export { StyledMuiSelectDesktop, StyledInputLabelDesktop };
