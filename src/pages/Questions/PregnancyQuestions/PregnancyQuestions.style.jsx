import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  Typography,
  styled,
} from "@mui/material";

const Container = styled(Stack)``;

const PregnancyQuestionsContainer = styled(Box)`
  height: 550px;
  overflow: auto;
`;

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ChildContainer = styled(Box)`
  border: 1px solid gray;
  width: 40vw;
  margin: auto;
  padding: 5px;
  font-size: 14px;
`;

const CustomaCssButton = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.activeButton};
  color: ${({ theme }) => theme.palette.text.activeButtonText};
  font-size: 16px;
  margin-top: 20px;
  @keyframes blink {
    0% {
      filter: brightness(100%);
    }
    50% {
      filter: brightness(75%);
    }
    100% {
      filter: brightness(100%);
    }
  }

  &:hover {
    animation: blink 0.7s;
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: ${({ theme }) => theme.palette.text.activeButtonText};
  }
`;

const PregnancyQuestionsText = styled(Box)`
  font-size: 16px;
  margin: 5px;
`;

const PregnancyOptionsContainer = styled(Stack)`
  height: 10vh;
  width: 250px;
  padding: 15px;
  box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 2px 6px 2px;
  border-radius: 5px;
  cursor: pointer;
`;
const CheckBoxLabel = styled(Box)`
  font-size: 16px;
  font-family: Inter Variable;
`;
const CustomCheckbox = styled(Checkbox)`
  font-family: Inter Variable;
`;
const PregnancyOptionsText = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  font-family: Inter Variable;
`;
const InputBoxLabel = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  padding-top: 2px;
  font-family: Inter Variable;
`;
const PregnancyOptionsWeeks = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  font-family: Inter Variable;
  margin-left: -5px;
`;
const ScanTypeHeading = styled(Typography)`
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  margin-top: 10px;
  font-family: Inter Variable;
`;
const MultiPregnancyBox = styled(Box)`
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  margin-top: 10px;
  display: flex;
  font-family: Inter Variable;
`;
const InputTextContainer = styled(Box)`
  font-family: Inter Variable;
`;
const WeeksInputContainer = styled(Box)`
  font-family: Inter Variable;
  text-align: left;
  width: 340px;
  margin-bottom: 10px;
`;
export {
  Container,
  ScanTypeHeading,
  PregnancyOptionsContainer,
  PregnancyOptionsText,
  PregnancyOptionsWeeks,
  ChildContainer,
  CustomaCssButton,
  PregnancyQuestionsContainer,
  ButtonContainer,
  PregnancyQuestionsText,
  CheckBoxLabel,
  CustomCheckbox,
  InputBoxLabel,
  MultiPregnancyBox,
  InputTextContainer,
  WeeksInputContainer,
};
