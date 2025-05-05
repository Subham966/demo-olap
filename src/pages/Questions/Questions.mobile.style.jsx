import { CustomButton } from "@/elements/CustomButton";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import {
  ActiveQuestionStack,
  Container,
  PreviousQuestionAnswer,
  PreviousQuestionList,
  PreviousQuestionListContainer,
  PreviousQuestionText,
  QuestionHeading,
} from "./Questions.style";

const ContainerMobile = styled(Container)`
  width: 93vw;
  margin-top: 0px;
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }

  @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {
    height: 450px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
    height: 490px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
    height: 550px;
  }
`;

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

const PreviousQuestionListContainerMobile = styled(
  PreviousQuestionListContainer
)`
  @media (min-width: 320px) and (max-width: 400px) {
    width: 89%;
    gap: 5px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    width: 89%;
    gap: 5px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    width: 89%;
    gap: 5px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const PreviousQuestionListMobile = styled(PreviousQuestionList)`
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const PreviousQuestionTextMobile = styled(PreviousQuestionText)`
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

const PreviousQuestionAnswerMobile = styled(PreviousQuestionAnswer)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 16px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 16px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 16px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const ActiveQuestionStackMobile = styled(ActiveQuestionStack)`
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
  PreviousQuestionListContainerMobile,
  PreviousQuestionTextMobile,
  PreviousQuestionAnswerMobile,
  QuestionHeadingMobile,
  ContainerMobile,
  PreviousQuestionListMobile,
  ActiveQuestionStackMobile,
};
