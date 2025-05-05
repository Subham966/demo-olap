import { styled, Select } from '@mui/material';
import { COLORS, FONT } from '../../theme/theme';

const StyledSelect = styled(Select)`
  border-radius: 0.25rem;
  box-sizing: border-box !important;
  height: 34px;

  .MuiInputBase-input {
    height: 34px;
    padding: 8px 8px;
    box-sizing: border-box;
    width: ${({ width }) => width};
    color: ${COLORS.BLACK};
    background-color: ${COLORS.WHITE};
    font-weight: ${FONT.WEIGHT.REGULAR};
    font-size: ${FONT.SIZES[16]};
    font-style: initial;
    ::placeholder {
      font-size: ${FONT.SIZES[14]};
    }
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.BLACK} !important;
    border-width: 0.0625rem !important;
    box-sizing: border-box;
  }

  .Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.BLACK} !important;
  }

  .MuiOutlinedInput-input {
    :disabled {
      opacity: 0.4;
      -webkit-text-fill-color: inherit !important;
    }
  }
`;

export { StyledSelect };
