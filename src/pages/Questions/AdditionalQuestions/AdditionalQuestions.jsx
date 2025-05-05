import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { CustomButton } from "@/elements/CustomButton";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { COLORS } from "@/theme";
import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Step,
  StepButton,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import {
  AdditionalQuestionContainerMobile,
  AdditionalQuestionTextMobile,
  ButtonContainerMobile,
  ContainerMobile,
  CustomaCssButtonMobile,
  QuestionHeadingMobile,
} from "./AdditionalQuestions.mobile.style";
import {
  AdditionalQuestionContainerDesktop,
  AdditionalQuestionTextDesktop,
  ButtonContainerDesktop,
  ContainerDesktop,
  CustomaCssButtonDesktop,
  QuestionHeadingDesktop,
} from "./AdditionalQuestions.desktop.style";

function AdditionalQuestions({ isActive }) {
  const theme = useTheme();
  const curr = useSelector((state) => state.chatDetails);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const additionalQuestion = curr.additionalQuestion;
  console.log("additionalQuestion", additionalQuestion);
  const { addAdditionalQuestion } = chatDetailsActions;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  function capitalizeFirstLetter(string) {
    if (!string) return string; // If the string is empty or undefined, return it as is
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const AdditionalQuestionContainerWrapper = isMobile
    ? AdditionalQuestionContainerMobile
    : AdditionalQuestionContainerDesktop;
  const AdditionalQuestionTextWrapper = isMobile
    ? AdditionalQuestionTextMobile
    : AdditionalQuestionTextDesktop;
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const QuestionHeadingWrapper = isMobile
    ? QuestionHeadingMobile
    : QuestionHeadingDesktop;

  useEffect(() => {
    setSelectedValue(null);
  }, [curr.formatedQuestion]);

  return (
    <Stack>
      <ContainerWrapper>
        <QuestionHeadingWrapper
          variant="h2"
          textAlign={"center"}
          color={theme.palette.primary.activeButton}
        >
          Few More Details
        </QuestionHeadingWrapper>

        {!isHandleUtteranceApiPending && (
          <AdditionalQuestionContainerWrapper>
            <AdditionalQuestionTextWrapper>
              <Box> {curr.question}</Box>
            </AdditionalQuestionTextWrapper>

            <ButtonContainerWrapper>
              {curr.questionOptions?.map((item, index) => (
                <CustomaCssButtonWrapper
                  sx={{
                    fontWeight: "600",
                    lineHeight: "20px",
                    backgroundColor: theme.palette.text.activeButtonText,
                    color: theme.palette.primary.activeButton,
                    "&:hover": {
                      color: theme.palette.text.activeButtonText,
                      border: `1px solid ${theme.palette.text.activeButtonText}`,
                      backgroundColor: theme.palette.primary.activeButton,
                    },
                  }}
                  onClick={async () => {
                    setIsHandleUtteranceApiPending(true);
                    const handleUtteranceCallback = () => {
                      useAppDispatch(
                        addAdditionalQuestion({
                          question: curr.formatedQuestion,
                          answer: item?.text_in_english,
                        })
                      );
                    };
                    await useHandleUtterance(
                      {
                        conversation_id: curr.conversationId,
                        utterance: item?.text_in_english,
                      },
                      handleUtteranceCallback
                    );
                    setIsHandleUtteranceApiPending(false);
                  }}
                >
                  {item?.text_in_english?.charAt(0).toUpperCase() +
                    item?.text_in_english?.slice(1).toLowerCase()}
                </CustomaCssButtonWrapper>
              ))}
            </ButtonContainerWrapper>
          </AdditionalQuestionContainerWrapper>
        )}

        {isHandleUtteranceApiPending && (
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: "auto",
              marginTop: "7vh",
              width: "10vw",
            }}
          >
            <LoaderDots />
          </Box>
        )}
      </ContainerWrapper>
    </Stack>
  );
}

export default AdditionalQuestions;
