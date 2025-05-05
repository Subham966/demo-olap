import { CustomTextField } from "@/elements/CustomTextField";
import { COLORS } from "../../theme/theme";
import { Box, Divider, MenuItem, Stack, Typography, styled } from "@mui/material";
import SearchArrow from "@/assets/SearchArrow.svg?react";
import { CustomSearchArrow, CustomTextFieldBox, DividerLine, IconBox, ModalityBoxContainer, ModalityBoxText, ModalityInputHeadingBox, NextButtonText, ScanListHeading, ScanListParentBox, ScanSubtitleHeading, ScanTypeAreaContainer, SelectScanHeading, StyledMenuItem } from "./ScanList.style";

const ScanListHeadingMobile = styled(ScanListHeading)`
  @media (min-width: 320px) and (max-width: 400px) {
  display: none;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  display: none;
  }
  @media (min-width: 440px) and (max-width: 480px) { 
  display: none;
  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }
`;

const ScanSubtitleHeadingMobile = styled(ScanSubtitleHeading)`
  @media (min-width: 320px) and (max-width: 400px) {
  font-size: 16px;
  padding-x: 0px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size: 16px;
  padding-x: 0px;
  }
  @media (min-width: 440px) and (max-width: 480px) { 
  font-size: 16px;
  padding-x: 0px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }
`;

const ScanListParentBoxMobile = styled(ScanListParentBox)`
  margin-top: -20px;
  @media (min-width: 320px) and (max-width: 400px) {
    margin-left: 0px;
    margin-right: 0px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    margin-left: 0px;
    margin-right: 0px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    margin-left: 0px;
    margin-right: 0px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }
`;

const ModalityInputHeadingBoxMobile = styled(ModalityInputHeadingBox)`
  margin-bottom: 10px;
  // font-size:16px !important ;
  @media (min-width: 320px) and (max-width: 400px) {
    margin-top: 20px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    margin-top: 20px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    margin-top: 20px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }
`;
const ScanTypeAreaContainerMobile = styled(ScanTypeAreaContainer)`
  height:330px ;
  @media (min-width: 320px) and (max-width: 400px) {
    margin-top: 10px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    margin-top: 10px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    margin-top: 10px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }
    @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {
    height: 290px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
    height: 290px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
    height: 290px;
  }
  
`;
const SelectScanHeadingMobile = styled(SelectScanHeading)`
  @media (min-width: 320px) and (max-width: 400px) {
    display: none;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    display: none;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    display: none;
  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }

`;
const CustomSearchArrowMobile = styled(CustomSearchArrow)`
  @media (min-width: 320px) and (max-width: 400px) {
  width: 12px ; 
  height: 12px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  width: 12px ; 
  height: 12px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
  width: 12px ; 
  height: 12px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  width: 12px ; 
  height: 12px;
  }

`;
const NextButtonTextMobile = styled(NextButtonText)`
  margin-top:0px ;
  @media (min-width: 320px) and (max-width: 400px) {
  font-size: 14px ;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size: 14px ;
  }
  @media (min-width: 440px) and (max-width: 480px) {
  font-size: 14px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  font-size: 14px ;
  }
`;

const IconBoxMobile= styled(IconBox)`
  @media (min-width: 320px) and (max-width: 400px) {
  
  }
  @media (min-width: 400px) and (max-width: 440px) {
  
  }
  @media (min-width: 440px) and (max-width: 480px) {
  
  }
  @media (min-width: 480px) and (max-width: 780px) {
  
  }
`;
const ModalityBoxContainerMobile = styled(ModalityBoxContainer)`
  height: 147px;
  width: 157px;
  padding: 15px;
 @media (min-width: 320px) and (max-width: 360px) {
    height: 70px;
    width: 65px;
    padding: 5px;
  }
  @media (min-width: 360px) and (max-width: 400px) {
    height: 75px;
    width: 75px;
    padding: 5px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    height: 80px;
    width: 80px;
    padding: 10px 5px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    height: 80px;
    width: 80px;
    padding: 10px 5px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    height: 100px;
    width: 110px;
    padding: 10px;
  }

`;
const DividerLineMobile = styled(DividerLine)`
  @media (min-width: 320px) and (max-width: 400px) {
  font-size: 16px ;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size: 16px ;
  }
  @media (min-width: 440px) and (max-width: 480px) {
  font-size: 16px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  font-size: 16px ;
  }
`;
const ModalityBoxTextMobile = styled(ModalityBoxText)`
  @media (min-width: 320px) and (max-width: 400px) {
  font-size: 11px ;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size: 12px ;
  }
  @media (min-width: 440px) and (max-width: 480px) {
  font-size: 12px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  font-size: 17px ;
  }

`;
const StyledMenuItemMobile = styled(StyledMenuItem)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 30px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 30px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 30px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 30px;
  }
`;

const CustomTextFieldBoxMobile = styled(CustomTextFieldBox)`
  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {

  }
  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {

  }
`;

export {
  ModalityBoxContainerMobile,
  ModalityBoxTextMobile,
  ScanListHeadingMobile,
  ScanSubtitleHeadingMobile,
  StyledMenuItemMobile,
  ScanListParentBoxMobile,
  ModalityInputHeadingBoxMobile,
  CustomTextFieldBoxMobile,
  SelectScanHeadingMobile,
  IconBoxMobile,
  DividerLineMobile,
  CustomSearchArrowMobile,
  NextButtonTextMobile,
  ScanTypeAreaContainerMobile
};
