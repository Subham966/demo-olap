import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import {
  ChildContainer,
  ConfirmDOBContainer,
  Container,
  CustomConfirmButton,
  DOBContainer,
  DobBox,
  DobLabel,
  GreetingMessageContainer,
  HeadingText,
  HelpText,
  InformationText,
  InputBoxContainer,
  QuestionText,
  SubHeadingText,
} from "./DOBConfirmation.style";

const ContainerMobile = styled(Container)`
  margin-top: 10px;
  margin-right: 0px;
  @media (min-width: 320px) and (max-width: 400px) {
    width: 100%;
    margin-top: 15px;
    margin-left: 0px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    width: 100%;
    margin-top: 15px;
    margin-left: 0px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    width: 100%;
    margin-top: 15px;
    margin-left: 0px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const ChildContainerMobile = styled(ChildContainer)`
  height: 420px;
  overflow: auto;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const GreetingMessageContainerMobile = styled(GreetingMessageContainer)`
  width: 95%;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  height: 400px;
  overflow: auto;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const DobBoxMobile = styled(DobBox)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const QuestionTextMobile = styled(QuestionText)`
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const HeadingTextMobile = styled(HeadingText)`
  width: 95%;
  font-size: 16px !important;
  @media (min-width: 320px) and (max-width: 400px) {
    margin-top: 10px;
    margin-bottom: 19px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    margin-top: 10px;
    margin-bottom: 19px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    margin-top: 10px;
    margin-bottom: 19px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const ConfirmDOBContainerMobile = styled(ConfirmDOBContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
    margin: 0px;
    margin-top: 25px;
    padding: 15px 10px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
    margin: 0px;
    margin-top: 25px;
    padding: 15px 10px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
    margin: 0px;
    margin-top: 25px;
    padding: 15px 10px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const DOBContainerMobile = styled(DOBContainer)`
  width: 100%;
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
`;

const CustomConfirmButtonMobile = styled(CustomConfirmButton)`
  font-size: 12px !important;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const DobLabelMobile = styled(DobLabel)`
  margin-left: 10px;
  font-size:14px !important;
  @media (min-width: 320px) and (max-width: 400px) {
  }
  @media (min-width: 400px) and (max-width: 440px) {
  }
  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const InformationTextMobile = styled(InformationText)`
  display: none;
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
  display: grid;
  width: 98%;
  grid-template-columns: 1.4fr 2fr 1.4fr 1fr;
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
  ContainerMobile,
  ConfirmDOBContainerMobile,
  DobBoxMobile,
  QuestionTextMobile,
  DOBContainerMobile,
  HeadingTextMobile,
  CustomConfirmButtonMobile,
  ChildContainerMobile,
  GreetingMessageContainerMobile,
  DobLabelMobile,
  InformationTextMobile,
  InputBoxContainerMobile,
};
