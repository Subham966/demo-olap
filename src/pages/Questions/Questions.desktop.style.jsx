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

const ContainerDesktop = styled(Container)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    width: 500px;
    height: 380px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    width: 520px;
    height: 450px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    width: 530px;
    height: 520px;
  }
`;

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

const PreviousQuestionListContainerDesktop = styled(
  PreviousQuestionListContainer
)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    gap: 5px;
    margin-top: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    gap: 10px;
    margin-top: 7px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    gap: 10px;
  }
`;
const PreviousQuestionListDesktop = styled(PreviousQuestionList)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  }
`;
const PreviousQuestionTextDesktop = styled(PreviousQuestionText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 15px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
  }
`;

const PreviousQuestionAnswerDesktop = styled(PreviousQuestionAnswer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 15px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
  }
`;
const ActiveQuestionStackDesktop = styled(ActiveQuestionStack)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 350px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 350px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 550px;
  }
`;

export {
  PreviousQuestionListContainerDesktop,
  PreviousQuestionTextDesktop,
  PreviousQuestionAnswerDesktop,
  QuestionHeadingDesktop,
  ContainerDesktop,
  PreviousQuestionListDesktop,
  ActiveQuestionStackDesktop,
};
