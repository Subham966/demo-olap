import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Container = styled(Stack)`
  margin-top: 5%;
`;
const IconBox = styled(Box)``;
const BookingCompletedText = styled(Typography)`
  font-family: Inter Variable;
  font-size: 24px;
`;

const BookingCompletedSubheading = styled(Box)`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 450;
  margin-bottom: 12px;
  padding: 0;
`;

const CheckCircleOutlineIconBox = styled(CheckCircleOutlineIcon)`

`
export { BookingCompletedText, Container, IconBox, BookingCompletedSubheading, CheckCircleOutlineIconBox };
