import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { COLORS } from "@/theme";
import styled from "@emotion/styled";
import {
  Box,
  Stack,
  StepConnector,
  stepConnectorClasses,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import {
  ButtonContainerMobile,
  ContainerMobile,
  CustomaCssButtonMobile,
  QuestionHeadingMobile,
  SafetyQuestionContainerMobile,
  SafetyQuestionTextMobile,
} from "./SafetyQuestions.mobile.style";
import {
  ButtonContainerDesktop,
  ContainerDesktop,
  CustomaCssButtonDesktop,
  QuestionHeadingDesktop,
  SafetyQuestionContainerDesktop,
  SafetyQuestionTextDesktop,
} from "./SafetyQuestions.desktop.style";

function SafetyQuestions({ isActive }) {
  const theme = useTheme();
  const curr = useSelector((state) => state.chatDetails);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const safetyAnswers = curr.safetyQuestions;
  const { setChatDetails, addSafetyQuestion } = chatDetailsActions;
  const [askToReconfirm, setAskToReconfirm] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const SafetyQuestionContainerWrapper = isMobile
    ? SafetyQuestionContainerMobile
    : SafetyQuestionContainerDesktop;
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const SafetyQuestionTextWrapper = isMobile
    ? SafetyQuestionTextMobile
    : SafetyQuestionTextDesktop;
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
          Safety Questionnaire
        </QuestionHeadingWrapper>

        {!isHandleUtteranceApiPending && (
          <SafetyQuestionContainerWrapper>
            <SafetyQuestionTextWrapper>
              <Box>
                {askToReconfirm ? "Please confirm. " : ""}{" "}
                {curr.formatedQuestion}
              </Box>
            </SafetyQuestionTextWrapper>

            <ButtonContainerWrapper>
              {curr.questionOptions?.map((item, index) => (
                <CustomaCssButtonWrapper
                  sx={{
                    fontWeight: "600",
                    lineHeight: "20px",
                    backgroundColor: theme.palette.text.activeButtonText,
                    color: askToReconfirm
                      ? item?.text_in_english === "yes" ||
                        item?.text_in_english === "Yes"
                        ? "red"
                        : "green"
                      : theme.palette.primary.activeButton,
                    "&:hover": {
                      color: askToReconfirm
                        ? "white"
                        : theme.palette.text.activeButtonText,
                      border: `1px solid ${theme.palette.text.activeButtonText}`,
                      backgroundColor: askToReconfirm
                        ? item?.text_in_english === "yes" ||
                          item?.text_in_english === "Yes"
                          ? "red"
                          : "green"
                        : theme.palette.primary.activeButton,
                    },
                  }}
                  onClick={async () => {
                    let SelectedOption =
                      item?.text_in_english?.charAt(0).toUpperCase() +
                      item?.text_in_english?.slice(1).toLowerCase();

                    if (SelectedOption == "No") {
                      setIsHandleUtteranceApiPending(true);
                      const handleUtteranceCallback = () => {
                        useAppDispatch(
                          addSafetyQuestion({
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
                      setAskToReconfirm(false);
                    }

                    if (SelectedOption == "Yes") {
                      if (askToReconfirm) {
                        setIsHandleUtteranceApiPending(true);
                        const handleUtteranceCallback = () => {
                          useAppDispatch(
                            addSafetyQuestion({
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
                      } else {
                        setAskToReconfirm(true);
                      }
                    }
                  }}
                >
                  {item?.text_in_english?.charAt(0).toUpperCase() +
                    item?.text_in_english?.slice(1).toLowerCase()}
                </CustomaCssButtonWrapper>
              ))}
            </ButtonContainerWrapper>
          </SafetyQuestionContainerWrapper>
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

export default SafetyQuestions;
