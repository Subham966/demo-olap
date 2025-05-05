import { CustomTextField } from "@/elements/CustomTextField";
import { COLORS } from "../../theme/theme";
import { Box, Divider, MenuItem, Stack, Typography, styled } from "@mui/material";
import SearchArrow from "@/assets/SearchArrow.svg?react";
import { CustomSearchArrow, CustomTextFieldBox, DividerLine, IconBox, ModalityBoxContainer, ModalityBoxText, ModalityInputHeadingBox, NextButtonText, ScanListHeading, ScanListParentBox, ScanSubtitleHeading, ScanTypeAreaContainer, SelectScanHeading, StyledMenuItem } from "./ScanList.style";

const ScanListHeadingDesktop = styled(ScanListHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin-bottom:12px ;
    margin-top:0px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    margin-bottom:15px ;
    margin-top:10px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 22px;
    margin-bottom:18px ;
    margin-top:10px ;
  }
`;

const ScanSubtitleHeadingDesktop = styled(ScanSubtitleHeading)`
  @media (min-height: 500px) and (max-height: 900px) and (min-width: 750px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const ScanListParentBoxDesktop = styled(ScanListParentBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-left: 25px;
    margin-right: 25px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

const ModalityInputHeadingBoxDesktop = styled(ModalityInputHeadingBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    margin-bottom:8px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    // margin-top:0px ;
    margin-bottom:10px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    margin-bottom:15px ;
  }
`;
const ScanTypeAreaContainerDesktop = styled(ScanTypeAreaContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height:200px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  height:250px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  height:300px ;
  }
`;
const SelectScanHeadingDesktop = styled(SelectScanHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    margin-bottom:10px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    margin-bottom:10px ;
  }
`;
const CustomSearchArrowDesktop = styled(CustomSearchArrow)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  width: 13px ; 
  height: 13px;
  zoom:0.8 ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: 5px ;
  zoom:0.8 ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top: 5px ;
  }
`;
const NextButtonTextDesktop = styled(NextButtonText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px ;
    margin-top: 0px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px ;
    margin-top: 0px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px ;
    margin-top: 0px ;
  }
`;

const IconBoxDesktop = styled(IconBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  zoom:0.7 ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  zoom:0.85 ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  zoom:0.95 ;
  }
`;
const ModalityBoxContainerDesktop = styled(ModalityBoxContainer)`
  width: ${props => (props.index > 4 ? '135px' : '157px')};
  height: ${props => (props.index > 4 ? '135px' : '147px')};
  padding: 15px;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 85px;
    width: 90%;
    padding: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 105px;
    width: 90%;
    padding: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 130px;
    width: 90%;
    padding: 10px;
  }
`;
const DividerLineDesktop = styled(DividerLine)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 12px ;
  padding-top: 5px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 16px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 18px ;
  }
`;
const ModalityBoxTextDesktop = styled(ModalityBoxText)`
  font-size: 18px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 14px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 16px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 18px;
  }
`;
const StyledMenuItemDesktop = styled(StyledMenuItem)`

`;

const CustomTextFieldBoxDesktop = styled(CustomTextFieldBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

`;

export {
  ModalityBoxContainerDesktop,
  ModalityBoxTextDesktop,
  ScanListHeadingDesktop,
  ScanSubtitleHeadingDesktop,
  StyledMenuItemDesktop,
  ScanListParentBoxDesktop,
  ModalityInputHeadingBoxDesktop,
  CustomTextFieldBoxDesktop,
  SelectScanHeadingDesktop,
  IconBoxDesktop,
  DividerLineDesktop,
  CustomSearchArrowDesktop,
  NextButtonTextDesktop,
  ScanTypeAreaContainerDesktop
};
