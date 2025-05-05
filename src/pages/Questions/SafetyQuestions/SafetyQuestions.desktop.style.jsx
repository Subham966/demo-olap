import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import {
  ButtonContainer,
  ChildContainer,
  Container,
  CustomaCssButton,
  QuestionHeading,
  SafetyQuestionContainer,
  SafetyQuestionText,
} from "./SafetyQuestions.style";

const ContainerDesktop = styled(Container)``;

const QuestionHeadingDesktop = styled(QuestionHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    padding: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 19px;
    margin: 5px;
    padding: 5px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
    margin: 5px;
    padding: 5px;
  }
`;
const SafetyQuestionContainerDesktop = styled(SafetyQuestionContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin: 10px;
    padding: 20px;
    gap: 15px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin: 10px;
    padding: 20px;
    gap: 15px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin: 10px;
    padding: 30px;
    gap: 15px;
  }
`;

const ButtonContainerDesktop = styled(ButtonContainer)``;

const ChildContainerDesktop = styled(ChildContainer)``;

const CustomaCssButtonDesktop = styled(CustomaCssButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px !important;
    max-height: 25px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px !important;
    max-height: 35px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 15px !important;
  }
`;

const SafetyQuestionTextDesktop = styled(SafetyQuestionText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 15px;
  }
`;

export {
  ContainerDesktop,
  ChildContainerDesktop,
  CustomaCssButtonDesktop,
  SafetyQuestionContainerDesktop,
  ButtonContainerDesktop,
  SafetyQuestionTextDesktop,
  QuestionHeadingDesktop,
};
