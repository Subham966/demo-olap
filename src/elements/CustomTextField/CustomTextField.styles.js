import { styled, TextField as CustomTextField, TextField } from "@mui/material";
import { COLORS, FONT } from "../../theme/theme";

const MuiTextField = styled(TextField)`
  border-radius: 0.25rem;
  box-sizing: border-box !important;
  // height: 44px;
  height: ${({ height }) => height};
  fontfamily: ${FONT.FAMILY.INTER};

  border: none !important;
  outline: none !important;
  // & fieldset {
  //   border: none;
  // }

  .MuiInputBase-input {
    // height: 40px;
    height: ${({ height }) => height};

    padding: 8px 8px;
    box-sizing: border-box;
    width: ${({ width }) => width};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: ${FONT.SIZES[16]};
    border: none !important;
    outline: none !important;

    font-style: initial;
    ::placeholder {
      font-size: ${FONT.SIZES[14]};
    }
  }

  // .Mui-error .MuiOutlinedInput-notchedOutline {
  //   border: none;
  // }

  .MuiOutlinedInput-input {
    :disabled {
      opacity: 0.4;
      -webkit-text-fill-color: inherit !important;
    }

    @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
      font-size: 12px;
    }
    @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
      font-size: 14px;
    }

    @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
      font-size: 18px;
    }
  }
`;

export { MuiTextField };
