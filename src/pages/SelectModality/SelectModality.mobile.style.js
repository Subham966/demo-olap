import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, MenuItem, Stack, Typography, styled } from "@mui/material";
import {
  ButtonContainer,
  CustomaCssButton,
  IconBox,
  InputBoxContainer,
  ModalityBoxContainer,
  ModalityBoxText,
  ScanListContainer,
  ScanListHeading,
  ScanListParentBox,
  ScanSubtitleHeading,
  SelectScanHeading,
  StyledMenuItem,
} from "./SelectModality.style";

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

const IconBoxMobile = styled(IconBox)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const ModalityBoxTextMobile = styled(ModalityBoxText)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 11px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 12px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 12px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    font-size: 17px;
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
  }
`;

const ButtonContainerMobile = styled(ButtonContainer)`
  @media (max-width: 450px) {
    // margin: 4vh
  }
`;

const CustomaCssButtonMobile = styled(CustomaCssButton)`
  @media (min-width: 320px) and (max-width: 400px) {
    height: 30px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    height: 30px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    height: 30px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const ScanListHeadingMobile = styled(ScanListHeading)`
  @media (min-width: 320px) and (max-width: 400px) {
    // display: none;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    // display: none;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    // display: none;
  }
  @media (min-width: 480px) and (max-width: 780px) {
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

const ScanListContainerMobile = styled(ScanListContainer)`
  height: 320px;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const InputBoxContainerMobile = styled(InputBoxContainer)`
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
  ScanListParentBoxMobile,
  SelectScanHeadingMobile,
  ModalityBoxContainerMobile,
  ModalityBoxTextMobile,
  ScanListHeadingMobile,
  ScanSubtitleHeadingMobile,
  StyledMenuItemMobile,
  ButtonContainerMobile,
  CustomaCssButtonMobile,
  IconBoxMobile,
  ScanListContainerMobile,
  InputBoxContainerMobile
};
