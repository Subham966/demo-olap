import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Stack, Typography, styled } from "@mui/material";

const Container = styled(Box)`
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const ChildContainer = styled(Box)`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const GreetingMessageContainer = styled(Box)`
  margin: auto;
  margin-top: 30px;
  border-radius: 5px;
`;

const DobBox = styled(Box)``;

const QuestionText = styled(Typography)`
  font-weight: 600;
`;

const HeadingText = styled(Typography)`
  margin-top: 22px;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color};
  font-size: 22px;
`;

const SubHeadingText = styled(Typography)`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
`;

const ConfirmDOBContainer = styled(Box)`
  display: grid;
  gap: 10px;
  overflow: auto;
  margin-top: 20px;
  margin: 20px;
  gap: 10px;
  background-color: ${COLORS.GREY_2};
  border-radius: 5px;
  border: 0px;
  border-radius: 5px;
  padding: 20px;
`;

const DOBContainer = styled(Box)``;

const HelpText = styled(Typography)`
  margin: auto;
  margin-top: 10vh;
  font-size: 17px;
  font-family: Inter Variable;
  font-style: italic;
  font-weight: 400;
  color: gray;
`;

const CustomConfirmButton = styled(CustomButton)`
  font-size: 18px;
  padding: 20px;
  font-family: Inter Variable;
`;

const DobLabel = styled(Box)`
font-size: 19px !important;
margin-top: 50px ;
`;

const InformationText = styled(Box)`
  width: 85%;
  color: gray;
  margin: auto;
  text-align: center;
`;

const InputBoxContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  width: 100%;
  gap: 5px;
  margin-top: 10px;
`;

export {
  Container,
  ConfirmDOBContainer,
  DobBox,
  QuestionText,
  DOBContainer,
  HelpText,
  InputBoxContainer,
  HeadingText,
  SubHeadingText,
  CustomConfirmButton,
  ChildContainer,
  GreetingMessageContainer,
  DobLabel,
  InformationText,
};
