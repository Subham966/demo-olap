import {
  styled,
  Autocomplete as MuiSelect,
  TextField,
  Stack,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { BORDERS, COLORS, FONT } from "@/theme";
import ShareLocation from "@/assets/ShareLocation.svg?react";
const Select = styled(MuiSelect)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiInputBase-root {
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing(1)};
    padding-left: 0.9375rem;

    &:hover {
      border-color: ${COLORS.BLACK} !important;
      border-width: 0.0625rem !important;
    }

    &.Mui-focused {
      border-color: black !important;
      border-width: 0.0625rem !important;
    }
  }

  .MuiInputBase-input::placeholder {
    font-size: ${FONT.SIZES[14]};
  }

  .MuiInputBase-input:disabled {
    opacity: 0.6;
  }

  .MuiAutocomplete-popupIndicator:hover {
    background-color: ${COLORS.WHITE};
  }
`;


const MuiTextField = styled(TextField)`
  .MuiInputBase-input {
    color: ${COLORS.BLACK};
  }

  .MuiOutlinedInput-input {
    :disabled {
      opacity: 0.6;
      -webkit-text-fill-color: inherit !important;
    }
  }
`;

const LocationBox = styled(Stack)`
  width: 420.4px;
  background-color: ${COLORS.GREY_2};
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
  border-radius: 10px;
`;

const LocationBoxContainer = styled(Box)`
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  display:flex ;
`;
const CustomShareLocationIcon = styled(ShareLocation)`

`;
const SelectAllCenterBox = styled(Stack)`
   width: 420.4px;
  height: 70.2px;
  background-color: ${COLORS.GREY_2};
  padding: 14px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;
const SelectAllCenterButtonText = styled(Typography)`
  font-size: 17px;
  margin:auto ;
`;


const CenterNameText = styled(Typography)`
  font-size: 17px;
  text-align: left;
`;
const CenterAddressText = styled(Typography)`
`;

const HeaderContainer = styled(Stack)`
  align-items: center;
  margin-top: 15px;
  gap: 30px;
`;
const HeadingText = styled(Typography)`
  text-align: center;
  padding-top: 0px;
  font-size: 24px;
  margin-top: 10px;
  font-family: Inter Variable;
`;
const HeadingLabelText = styled(Typography)`
  font-size: 20px;
  color: black;
`;

const HeadingLabelContainer = styled(Stack)`
gap:2px ;
width:89% ;
text-align:left
align-items:left ;
margin-top:-20px ;
padding-left:20px ;
`;

const NearbyCenterList = styled(Box)`
  display:grid ;
  grid-template-columns:1fr 1fr ;
  gap:10px ;
  padding: 0px 40px;
  max-height: 435px;
  overflow: auto;
  align-items: center;
  justify-content: left;
`;
const DistanceText = styled(Box)`
  font-size: 12px;
  margin-left:10px ;
`;

const NextSlotTimeBox = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 0px;
`;
const NextSlotTimeText = styled(Box)`
  font-size: 8px;
  width:60% ;
  text-align :right ;
  margin-left:10px ;
  font-weight:500 ;

`;
export {
  HeadingText,
  HeadingLabelContainer,
  HeadingLabelText,
  NearbyCenterList,
  Select,
  MuiTextField,
  LocationBox,
  HeaderContainer,
  CenterNameText,
  SelectAllCenterBox,
  SelectAllCenterButtonText,
  CenterAddressText,
  DistanceText,
  NextSlotTimeText,
  LocationBoxContainer,
  NextSlotTimeBox,
  CustomShareLocationIcon
};
