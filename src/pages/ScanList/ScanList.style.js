import { CustomTextField } from "@/elements/CustomTextField";
import { COLORS } from "../../theme/theme";
import { Box, Divider, MenuItem, Stack, Typography, styled } from "@mui/material";
import SearchArrow from "@/assets/SearchArrow.svg?react";
const ScanListHeading = styled(Typography)`
  text-align: center;
  font-family: Inter Variable;
  display: auto;
  margin-top:10px ;
`;

const ScanSubtitleHeading = styled(Typography)`
  font-size: 20px;
  font-family: Inter Variable;
  margin-top: 10px;
  margin-bottom: 10px;

`;

const ScanListParentBox = styled(Stack)`
  margin-left: 46px;
  margin-right: 46px;
  font-family: Inter Variable;

`;

const ModalityInputHeadingBox = styled(Typography)`
  margin-top: 0px;
  margin-bottom: 20px;
`;
const ScanTypeAreaContainer = styled(Stack)`
  height:330px ;
  overflow:auto;
  padding-top:2px ;
  margin-bottom:0px ;
`;
const SelectScanHeading = styled(Typography)`
  margin-bottom: 10px;
  font-family: Inter Variable;
 
`;
const CustomSearchArrow = styled(SearchArrow)`
 
`;
const NextButtonText = styled(Box)`
margin-right: 5px ;
font-size: 16px ;
margin-top: -5px ;
 
`;

const IconBox= styled(Box)`

`;
const ModalityBoxContainer = styled(Stack)`
  height: 147px;
  width: 157px;
  padding: 15px;
  box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 2px 6px 2px;
  border-radius: 5px;
  cursor: pointer;

`;
const DividerLine = styled(Divider)`
 width: 100% ;
 padding-top: 10px ;
 font-size: 20px ;
  
`;
const ModalityBoxText = styled(Typography)`
  font-size: 20px;
  font-weight: 400;
  font-family: Inter Variable;
  
`;
const StyledMenuItem = styled(MenuItem)`
  font-family: "Inter Variable";
  font-size: 14px;
  color: ${({ theme }) => theme.palette.primary.activeButton};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: white;
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.primary.activeButton};
  }

 
`;

const CustomTextFieldBox = styled(CustomTextField)`
  font-family: Inter Variable;
`;

export {
  ModalityBoxContainer,
  ModalityBoxText,
  ScanListHeading,
  ScanSubtitleHeading,
  StyledMenuItem,
  ScanListParentBox,
  ModalityInputHeadingBox,
  CustomTextFieldBox,
  SelectScanHeading,
  IconBox,
  DividerLine,
  CustomSearchArrow,
  NextButtonText,
  ScanTypeAreaContainer
};
