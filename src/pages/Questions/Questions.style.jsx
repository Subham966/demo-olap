import { CustomButton } from "@/elements/CustomButton";
import { Box, Button, Stack, Typography, styled } from "@mui/material";

const Container = styled(Stack)`
  height: 600px;
  overflow: auto;
  width: 700px;
  margin: auto;
  margin-top: 20px;

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

const QuestionHeading = styled(Typography)``;

const PreviousQuestionListContainer = styled(Stack)`
  gap: 10px;
  display: flex;
  margin-top: 10px;
`;
const PreviousQuestionList = styled(Stack)``;
const PreviousQuestionText = styled(Typography)`
  font-size: 16px;
  color: black;
  font-family: Inter Variable;
  display: inline;
`;

const PreviousQuestionAnswer = styled(Typography)`
  font-size: 18px;
  font-family: Inter Variable;
  margin-top: -1px;
  font-weight: 600;
  display: inline;
`;
const ActiveQuestionStack = styled(Stack)`
  height: 55vh;
  overflow: auto;
  margin-top: 20px;
`;

export {
  PreviousQuestionListContainer,
  PreviousQuestionText,
  PreviousQuestionAnswer,
  QuestionHeading,
  Container,
  PreviousQuestionList,
  ActiveQuestionStack,
};
