import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import {
  ChangeSlotButton,
  Container,
  FieldContainer,
  FieldText,
  FieldTitle,
  Guidelinetext,
  PreprationGuidelineHeading,
} from "./BookingConfirmation.style";

const ContainerMobile = styled(Container)`
  @media (min-width: 320px) and (max-width: 400px) {
    width: 100%;
    margin-top: 15px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    width: 100%;
    margin-top: 15px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    width: 100%;
    margin-top: 15px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const FieldContainerMobile = styled(FieldContainer)`
  display:grid ;
  grid-template-columns: 6fr 12fr;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
    grid-template-columns: 6fr 12fr;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    grid-template-columns: 6fr 12fr;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const FieldTitleMobile = styled(FieldTitle)`
  width: 110px;
  white-space: nowrap;
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 15px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 15px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 15px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const FieldTextMobile = styled(FieldText)`
  font-size: 14px !important;
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 15px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 15px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 15px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const PreprationGuidelineHeadingMobile = styled(PreprationGuidelineHeading)`
  font-size: 17px !important;
  font-weight: 550;
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 15px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 15px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 15px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const GuidelinetextMobile = styled(Guidelinetext)`
  font-size: 14px !important;
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 15px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 15px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 15px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const ChangeSlotButtonMobile = styled(ChangeSlotButton)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 14px;
    width: 45%;
    margin-top: 10px;
    padding: 2px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 14px;
    width: 45%;
    margin-top: 10px;
    padding: 2px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 14px;
    width: 45%;
    margin-top: 10px;
    padding: 2px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

export {
  ChangeSlotButtonMobile,
  ContainerMobile,
  FieldContainerMobile,
  FieldTitleMobile,
  FieldTextMobile,
  PreprationGuidelineHeadingMobile,
  GuidelinetextMobile,
};
