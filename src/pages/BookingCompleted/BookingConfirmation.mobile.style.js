import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import {
  BookingCompletedSubheading,
  BookingCompletedText,
  CheckCircleOutlineIconBox,
  Container,
  IconBox,
} from "./BookingConfirmation.style";
const ContainerMobile = styled(Container)`
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
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
const BookingCompletedTextMobile = styled(BookingCompletedText)`
  font-size: 17px !important;
  // text-align:center ;
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const CheckCircleOutlineIconBoxMobile = styled(CheckCircleOutlineIconBox)`
  width: 23px ;
  height:23px ;
  @media (min-width: 320px) and (max-width: 400px) {

  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const BookingCompletedSubheadingMobile = styled(BookingCompletedSubheading)``;
export {
  BookingCompletedTextMobile,
  ContainerMobile,
  IconBoxMobile,
  BookingCompletedSubheadingMobile,
  CheckCircleOutlineIconBoxMobile
};
