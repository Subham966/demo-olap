import { styled } from "@mui/material";

import { COLORS, FONT } from "../../theme/theme";
import { DateField as CustomDateField } from "@mui/x-date-pickers";

const MuiDateField = styled(CustomDateField)`
  border-radius: 0.25rem;
  height: ${({ height }) => height};
  fontfamily: ${FONT.FAMILY.INTER};

  .MuiInputBase-input {
    height: ${({ height }) => height};

    padding: 8px 8px;
    box-sizing: border-box;
    width: ${({ width }) => width};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: ${FONT.SIZES[16]};
  
    font-style: initial;
    ::placeholder {
      font-size: ${FONT.SIZES[14]};
    }
  }
  .MuiOutlinedInput-input {
    :disabled {
      opacity: 0.4;
      -webkit-text-fill-color: inherit !important;
    }
  }
`;

export { MuiDateField };
