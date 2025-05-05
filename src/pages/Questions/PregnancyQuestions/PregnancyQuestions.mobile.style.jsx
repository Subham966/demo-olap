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

const ContainerMobile = styled(Container)`
  margin-top: -10px;
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const PregnancyQuestionsContainerMobile = styled(PregnancyQuestionsContainer)`
  height: 420px;
  @media (min-width: 320px) and (max-width: 400px) {
    height: 460px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
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

const PregnancyQuestionsTextMobile = styled(PregnancyQuestionsText)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 14px;
    margin: 5px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 14px;
    margin: 5px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 14px;
    margin: 5px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const PregnancyOptionsContainerMobile = styled(PregnancyOptionsContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
    height: 8vh;
    width: 28vw;
    padding: 10px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    height: 8vh;
    width: 28vw;
    padding: 10px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    height: 8vh;
    width: 28vw;
    padding: 10px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    height: 10vh;
    width: 14vw;
    padding: 10px;
  }
`;

const PregnancyOptionsTextMobile = styled(PregnancyOptionsText)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 12px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 12px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 12px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    font-size: 17px;
  }
`;
const InputBoxLabelMobile = styled(InputBoxLabel)`
  font-size: 14px;
  padding-top: 11px;
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const PregnancyOptionsWeeksMobile = styled(PregnancyOptionsWeeks)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 12px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 12px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 12px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    font-size: 17px;
  }
`;
const ScanTypeHeadingMobile = styled(ScanTypeHeading)`
  padding-top: 0px;
  margin-top: 0px;
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;
const MultiPregnancyBoxMobile = styled(MultiPregnancyBox)`
  margin-top: 1vh;
  margin-bottom: 1vh;
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const CustomCheckboxMobile = styled(CustomCheckbox)`
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const CheckBoxLabelMobile = styled(CheckBoxLabel)`
  margin-top: 10px;
  text-align: left;
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 13px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 14px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 14px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    font-size: 14px;
  }
`;

const InputTextContainerMobile = styled(InputTextContainer)`
  margin-left: 1vh;
  margin-right: 1vh;
  @media (min-width: 320px) and (max-width: 400px) {
  }

  @media (min-width: 400px) and (max-width: 440px) {
  }

  @media (min-width: 440px) and (max-width: 480px) {
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const WeeksInputContainerMobile = styled(WeeksInputContainer)`
  width: auto;
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
  ScanTypeHeadingMobile,
  PregnancyOptionsContainerMobile,
  PregnancyOptionsTextMobile,
  PregnancyOptionsWeeksMobile,
  ChildContainerMobile,
  CustomaCssButtonMobile,
  PregnancyQuestionsContainerMobile,
  ButtonContainerMobile,
  PregnancyQuestionsTextMobile,
  CheckBoxLabelMobile,
  CustomCheckboxMobile,
  InputBoxLabelMobile,
  MultiPregnancyBoxMobile,
  InputTextContainerMobile,
  WeeksInputContainerMobile,
};
