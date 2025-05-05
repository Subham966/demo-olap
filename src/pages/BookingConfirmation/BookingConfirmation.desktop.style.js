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

const ContainerDesktop = styled(Container)`
  margin-top: 0;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin: auto;
    min-width: 500px;
    max-width: 600px;
    margin-top: -10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin: auto;
    margin-top: 0px;
    min-width: 650px;
    max-width: 650px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin: auto;
    margin-top: -10px;
    max-width: 800px;
  }
`;

const FieldContainerDesktop = styled(FieldContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;

const FieldTitleDesktop = styled(FieldTitle)`
  width: 150px; 
  font-size: 18px !important;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px !important;
    width: 130px; 
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px !important;
    width: 130px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px !important;
    width: 130px;
  }
`;

const FieldTextDesktop = styled(FieldText)`
  font-size: 17px !important;
  max-width:400px ;
  font-weight:400;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px !important;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px !important;
  }
`;

const PreprationGuidelineHeadingDesktop = styled(PreprationGuidelineHeading)`
  font-size: 20px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
  }
`;

const GuidelinetextDesktop = styled(Guidelinetext)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 13px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px;
  }
`;

const ChangeSlotButtonDesktop = styled(ChangeSlotButton)``;

export {
  ChangeSlotButtonDesktop,
  ContainerDesktop,
  FieldContainerDesktop,
  FieldTitleDesktop,
  FieldTextDesktop,
  PreprationGuidelineHeadingDesktop,
  GuidelinetextDesktop,
};
