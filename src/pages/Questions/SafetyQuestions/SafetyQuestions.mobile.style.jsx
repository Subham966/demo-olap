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

const ContainerMobile = styled(Container)``;

const QuestionHeadingMobile = styled(QuestionHeading)`
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const SafetyQuestionContainerMobile = styled(SafetyQuestionContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
    margin: 10px;
    padding: 10px 10px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    margin: 10px;
    padding: 10px 10px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    margin: 10px;
    padding: 10px 10px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const ButtonContainerMobile = styled(ButtonContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const ChildContainerMobile = styled(ChildContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
    width: 89vw;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    width: 89vw;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    width: 89vw;
  }
  @media (min-width: 480px) and (max-width: 780px) {
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

const SafetyQuestionTextMobile = styled(SafetyQuestionText)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 14px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 14px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 14px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

export {
  ContainerMobile,
  ChildContainerMobile,
  CustomaCssButtonMobile,
  SafetyQuestionContainerMobile,
  ButtonContainerMobile,
  SafetyQuestionTextMobile,
  QuestionHeadingMobile,
};
