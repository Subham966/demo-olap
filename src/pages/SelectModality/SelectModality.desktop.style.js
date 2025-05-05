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

const ScanSubtitleHeadingDesktop = styled(ScanSubtitleHeading)`
  @media (min-height: 500px) and (max-height: 900px) and (min-width: 750px) {
    margin-bottom: 0px;
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
const ModalityBoxContainerDesktop = styled(ModalityBoxContainer)`
  width: ${props => (props.index > 4 ? '135px' : '157px')};
  height: ${props => (props.index > 4 ? '135px' : '147px')};
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
const IconBoxDesktop = styled(IconBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    zoom: 0.7;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    zoom: 0.85;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    zoom: 0.95;
  }
`;
const ModalityBoxTextDesktop = styled(ModalityBoxText)`
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
const StyledMenuItemDesktop = styled(StyledMenuItem)``;

const ButtonContainerDesktop = styled(ButtonContainer)`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: center;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top: 15px;
  }
`;

const CustomaCssButtonDesktop = styled(CustomaCssButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 15px;
    height: 30px;
    font-size: 13px !important;
    padding: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 10px;
    height: 35px;
    font-size: 15px !important;
    padding: 8px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px !important;
    padding: 15px;
    height: 40px;
    margin-top: 20px;
  }
`;
const ScanListHeadingDesktop = styled(ScanListHeading)`
  margin-left: 10px;
  font-size: 20px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 15px;
    text-align:left ;
    margin-left: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    margin-bottom: 15px;
    margin-top: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    margin-bottom: 18px;
    margin-top: 10px;
  }
`;
const SelectScanHeadingDesktop = styled(SelectScanHeading)`
  font-size: 22px;
  margin-top: 15px;
  margin-left: 10px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin-top: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const ScanListContainerDesktop = styled(ScanListContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 200px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 250px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 300px;
  }
`;

const InputBoxContainerDesktop = styled(InputBoxContainer)`
  margin-left:46px ;
  margin-right:46px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-left:16px ;
  margin-right:16px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-left:26px ;
  margin-right:26px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-left:36px ;
  margin-right:36px ;
  }
`;

export {
  ScanListParentBoxDesktop,
  SelectScanHeadingDesktop,
  ModalityBoxContainerDesktop,
  ModalityBoxTextDesktop,
  ScanListHeadingDesktop,
  ScanSubtitleHeadingDesktop,
  StyledMenuItemDesktop,
  ButtonContainerDesktop,
  CustomaCssButtonDesktop,
  IconBoxDesktop,
  ScanListContainerDesktop,
  InputBoxContainerDesktop
};
