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
import {
  ButtonContainer,
  CheckBoxLabel,
  ChildContainer,
  Container,
  CustomCheckbox,
  CustomaCssButton,
  InputBoxLabel,
  InputTextContainer,
  MultiPregnancyBox,
  PregnancyOptionsContainer,
  PregnancyOptionsText,
  PregnancyOptionsWeeks,
  PregnancyQuestionsContainer,
  PregnancyQuestionsText,
  ScanTypeHeading,
  WeeksInputContainer,
} from "./PregnancyQuestions.style";

const ContainerDesktop = styled(Container)``;

const PregnancyQuestionsContainerDesktop = styled(PregnancyQuestionsContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 58vh;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 420px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    height: 490px;
  }
`;

const ButtonContainerDesktop = styled(ButtonContainer)``;

const ChildContainerDesktop = styled(ChildContainer)``;

const CustomaCssButtonDesktop = styled(CustomaCssButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 5px;
    height: 30px;
    font-size: 13px !important;
    padding: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 10px;
    height: 35px;
    font-size: 15px !important;
    padding: 8px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px !important;
    padding: 15px;
    height: 40px;
    margin-top: 20px;
  }
`;

const PregnancyQuestionsTextDesktop = styled(PregnancyQuestionsText)``;

const PregnancyOptionsContainerDesktop = styled(PregnancyOptionsContainer)`
  height: 80px;
  width: 250px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    height: 50px;
    width: 150px;
    padding: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    height: 60px;
    width: 180px;
    padding: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px;
  }
`;
const CustomCheckboxDesktop = styled(CustomCheckbox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    zoom: 0.8;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  }
`;
const PregnancyOptionsTextDesktop = styled(PregnancyOptionsText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
  }
`;
const InputBoxLabelDesktop = styled(InputBoxLabel)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
  }
`;
const PregnancyOptionsWeeksDesktop = styled(PregnancyOptionsWeeks)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 13px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px;
  }
`;
const ScanTypeHeadingDesktop = styled(ScanTypeHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    padding-top: 5px;
    margin-top: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    padding-top: 7px;
    margin-top: 7px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
  }
`;
const MultiPregnancyBoxDesktop = styled(MultiPregnancyBox)`
  margin-top: -10px;
  margin-left: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-left: 5px;
    margin-bottom: -5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-left: 15px;
    margin-top: -10px;
    margin-bottom: 0px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-left: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const CheckBoxLabelDesktop = styled(CheckBoxLabel)`
  margin-top: 8px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 13px;
    margin-top: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
    margin-top: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;
const InputTextContainerDesktop = styled(InputTextContainer)`
  margin-left: 25px;
  margin-right: 25px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const WeeksInputContainerDesktop = styled(WeeksInputContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-left: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-left: 5px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-left: 5px;
  }
`;

export {
  ContainerDesktop,
  ScanTypeHeadingDesktop,
  PregnancyOptionsContainerDesktop,
  PregnancyOptionsTextDesktop,
  PregnancyOptionsWeeksDesktop,
  ChildContainerDesktop,
  CustomaCssButtonDesktop,
  PregnancyQuestionsContainerDesktop,
  ButtonContainerDesktop,
  PregnancyQuestionsTextDesktop,
  CheckBoxLabelDesktop,
  CustomCheckboxDesktop,
  InputBoxLabelDesktop,
  MultiPregnancyBoxDesktop,
  InputTextContainerDesktop,
  WeeksInputContainerDesktop,
};
