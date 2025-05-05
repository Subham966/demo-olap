import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import NoFood from "@/assets/NoFood.svg";
import NoDrinks from "@/assets/NoDrinks.svg";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "@/elements/CustomButton";
import { useSelector } from "react-redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { useTheme } from "@emotion/react";
import { COLORS } from "@/theme/provider/MultiThemeProvider";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import {
  ButtonContainerMobile,
  ChildContainerMobile,
  ContainerMobile,
  CustomaCssButtonMobile,
  FastingDurationTextMobile,
  FastingHoursMobile,
  FastingQuestionContainerMobile,
  FastingQuestionTextMobile,
  QuestionHeadingMobile,
} from "./FastingQuestion.mobile.style";
import {
  ButtonContainerDesktop,
  ChildContainerDesktop,
  ContainerDesktop,
  CustomaCssButtonDesktop,
  FastingDurationTextDesktop,
  FastingHoursDesktop,
  FastingQuestionContainerDesktop,
  FastingQuestionTextDesktop,
  QuestionHeadingDesktop,
} from "./FastingQuestion.desktop.style";

function FastingQuestion({ isActive }) {
  const navigate = useNavigate();
  const [askToReconfirm, setAskToReconfirm] = useState(false);
  const curr = useSelector((state) => state.chatDetails);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const { setChatDetails } = chatDetailsActions;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const ChildContainerWrapper = isMobile
    ? ChildContainerMobile
    : ChildContainerDesktop;
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const FastingDurationTextWrapper = isMobile
    ? FastingDurationTextMobile
    : FastingDurationTextDesktop;
  const FastingHoursWrapper = isMobile
    ? FastingHoursMobile
    : FastingHoursDesktop;
  const FastingQuestionContainerWrapper = isMobile
    ? FastingQuestionContainerMobile
    : FastingQuestionContainerDesktop;
  const FastingQuestionTextWrapper = isMobile
    ? FastingQuestionTextMobile
    : FastingQuestionTextDesktop;
  const QuestionHeadingWrapper = isMobile
    ? QuestionHeadingMobile
    : QuestionHeadingDesktop;

  return (
    <Stack>
      <ContainerWrapper>
        <QuestionHeadingWrapper
          variant="h2"
          textAlign={"center"}
          color={theme.palette.primary.activeButton}
        >
          Fasting question{" "}
        </QuestionHeadingWrapper>

        {!isHandleUtteranceApiPending && (
          <FastingQuestionContainerWrapper>
            <FastingQuestionTextWrapper>
              <FastingDurationTextWrapper>
                Fasting Duration :{" "}
                <FastingHoursWrapper variant="innerText">
                  {curr.fastingTime / 60} Hours
                </FastingHoursWrapper>
              </FastingDurationTextWrapper>
              <Box
                sx={{
                  margin: "auto",
                  marginTop: isMobile ? "5px" : "10px",
                  gap: "10px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                {curr.fastingText}
              </Box>
            </FastingQuestionTextWrapper>
            <FastingQuestionTextWrapper>
              <Box
                sx={{
                  fontWeight: "600",
                }}
              >
                {askToReconfirm
                  ? "Fasting is mandatory for this scan. Please confirm ?"
                  : "Are you OK to proceed ?"}
              </Box>
            </FastingQuestionTextWrapper>
            <ButtonContainerWrapper>
              <CustomaCssButtonWrapper
                sx={{
                  fontWeight: "600",
                  lineHeight: "20px",
                  backgroundColor: theme.palette.text.activeButtonText,
                  ...(askToReconfirm && isMobile && {
                    maxHeight: "60px !important",
                  }),
                  color: askToReconfirm
                    ? "green"
                    : theme.palette.primary.activeButton,
                  "&:hover": {
                    color: askToReconfirm
                      ? "white"
                      : theme.palette.text.activeButtonText,
                    border: `1px solid ${theme.palette.text.activeButtonText}`,
                    backgroundColor: askToReconfirm
                      ? "green"
                      : theme.palette.primary.activeButton,
                  },
                }}
                onClick={async () => {
                  setIsHandleUtteranceApiPending(true);
                  await useHandleUtterance({
                    conversation_id: curr.conversationId,
                    utterance: "yes",
                  });
                  setIsHandleUtteranceApiPending(false);
                }}
              >
                {askToReconfirm ? "Patient can fast" : "Yes"}
              </CustomaCssButtonWrapper>
              <CustomaCssButtonWrapper
                sx={{
                  fontWeight: "600",
                  lineHeight: "20px",
                  ...(askToReconfirm && isMobile && {
                    maxHeight: "60px !important",
                  }),
                  backgroundColor: theme.palette.text.activeButtonText,
                  color: askToReconfirm
                    ? "red"
                    : theme.palette.primary.activeButton,
                  "&:hover": {
                    color: askToReconfirm
                      ? "white"
                      : theme.palette.text.activeButtonText,
                    border: `1px solid ${theme.palette.text.activeButtonText}`,
                    backgroundColor: askToReconfirm
                      ? "red"
                      : theme.palette.primary.activeButton,
                  },
                }}
                onClick={async () => {
                  if (askToReconfirm) {
                    setIsHandleUtteranceApiPending(true);
                    await useHandleUtterance({
                      conversation_id: curr.conversationId,
                      utterance: "No",
                    });
                    setIsHandleUtteranceApiPending(false);
                  } else {
                    setAskToReconfirm(true);
                  }
                }}
              >
                {askToReconfirm ? "Patient cannot fast" : "No"}
              </CustomaCssButtonWrapper>
            </ButtonContainerWrapper>
          </FastingQuestionContainerWrapper>
        )}
        {isHandleUtteranceApiPending && (
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              margin: "auto",
              marginTop: "15vh",
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

export default FastingQuestion;
