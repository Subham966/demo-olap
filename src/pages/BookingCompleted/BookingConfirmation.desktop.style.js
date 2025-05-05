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

const ContainerDesktop = styled(Container)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 2%;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 4%;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-top: 5%;
  }
`;
const IconBoxDesktop = styled(IconBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    zoom: 0.65;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    zoom: 0.8;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    zoom: 0.9;
  }
`;
const BookingCompletedTextDesktop = styled(BookingCompletedText)`
  font-size: 24px;
  margin: 0;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 22px;
  }
`;

const BookingCompletedSubheadingDesktop = styled(BookingCompletedSubheading)`
  font-size: 20px;
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

const BookingCompletedProvisionalSubheadingDesktop = styled(BookingCompletedSubheading)`
  font-size: 20px;
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
const CheckCircleOutlineIconBoxDesktop = styled(CheckCircleOutlineIconBox)`
  width: 27px ;
  height:27px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  width: 27px ;
  height:27px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  width: 25px ;
  height:25px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  width: 27px ;
  height:27px ;
  }
`;
export {
  BookingCompletedTextDesktop,
  ContainerDesktop,
  IconBoxDesktop,
  BookingCompletedSubheadingDesktop,
  CheckCircleOutlineIconBoxDesktop,
  BookingCompletedProvisionalSubheadingDesktop
};
