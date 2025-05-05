import { Box, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FastingQuestion from "./FastingQuestion";
import AdditionalQuestions from "./AdditionalQuestions";
import SafetyQuestions from "./SafetyQuestions/SafetyQuestions";
import { useTheme } from "@emotion/react";
import { COLORS } from "@/theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdditionalCostQuestion from "./AdditionalCostQuestion";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import {
  ActiveQuestionStackMobile,
  ContainerMobile,
  PreviousQuestionAnswerMobile,
  PreviousQuestionListContainerMobile,
  PreviousQuestionListMobile,
  PreviousQuestionTextMobile,
  QuestionHeadingMobile,
} from "./Questions.mobile.style";
import {
  ActiveQuestionStackDesktop,
  ContainerDesktop,
  PreviousQuestionAnswerDesktop,
  PreviousQuestionListContainerDesktop,
  PreviousQuestionListDesktop,
  PreviousQuestionTextDesktop,
  QuestionHeadingDesktop,
} from "./Questions.desktop.style";

const QuestionComponent = ({
  isMobile,
  question,
  answer,
  questionNumber,
  theme,
}) => {
  const { screenHeight } = useSelector((state) => state.screenSize);
  const PreviousQuestionAnswerWrapper = isMobile
    ? PreviousQuestionAnswerMobile
    : PreviousQuestionAnswerDesktop;
  const PreviousQuestionListContainerWrapper = isMobile
    ? PreviousQuestionListContainerMobile
    : PreviousQuestionListContainerDesktop;
  const PreviousQuestionTextWrapper = isMobile
    ? PreviousQuestionTextMobile
    : PreviousQuestionTextDesktop;
  return (
    <PreviousQuestionListContainerWrapper direction="row">
      <Box sx={{}}>
        <CheckCircleIcon
          style={{
            fill: "#00d93e",
            width: isMobile
              ? "22px"
              : screenHeight < 700
              ? "17px"
              : screenHeight < 800
              ? "20px"
              : screenHeight < 900
              ? "22px"
              : "25px",
            height: isMobile
              ? "22px"
              : screenHeight < 700
              ? "17px"
              : screenHeight < 800
              ? "20px"
              : screenHeight < 900
              ? "22px"
              : "25px",
          }}
        />
      </Box>
      <PreviousQuestionTextWrapper sx={{ width: "87%" }}>
        {question}{" "}
      </PreviousQuestionTextWrapper>
      <PreviousQuestionAnswerWrapper
        color={theme.palette.primary.activeButton}
        sx={{ display: "inline", marginLeft: "10px" }}
      >
        {answer}
      </PreviousQuestionAnswerWrapper>
    </PreviousQuestionListContainerWrapper>
  );
};

const Questions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const curr = useSelector((state) => state.chatDetails);
  const safetyAnswers = curr.safetyQuestions;
  const additionalQuestion = curr.additionalQuestion;
  const { screenHeight } = useSelector((state) => state.screenSize);
  const responseCode = useSelector((state) => state.chatDetails.responseCode);
  const isFastingQuestionActive = responseCode.includes(
    "img_service_request.sr.fasting_duration_and_guideline"
  );
  const isSafetyQuestionActive =
    responseCode.includes("img_service_request.sr.first_safety_question") ||
    responseCode.includes("img_service_request.sr.next_safety_question") ||
    responseCode.includes("img_service_request.sr.last_safety_question");
  const isAdditionalQuestionActive = responseCode.includes(
    "img_service_request.sr.additional_question_first_attempt"
  );
  const {
    errorMessage,
    isErrorPresent,
    loading,
    automationLogicLoadingStatus,
  } = useSelector((state) => state.chatDetails);
  const isAdditionalCostQuestionActive =
    responseCode.includes("img_service_request.sr.additional_cost_with_gap") ||
    responseCode.includes("img_service_request.sr.additional_cost_exact") ||
    responseCode.includes("img_service_request.sr.additional_cost_approx") ||
    responseCode.includes("img_service_request.sr.additional_cost_dummy") ||
    responseCode.includes(
      "img_service_request.sr.reconfirm_from_patient_on_additional_cost_denied_by_patient"
    ) ||
    responseCode.includes(
      "img_service_request.sr.after_business_hours_cost_only_dummy"
    );
  if (automationLogicLoadingStatus) {
    return <CustomLoader />;
  }

  const ActiveQuestionStackWrapper = isMobile
    ? ActiveQuestionStackMobile
    : ActiveQuestionStackDesktop;
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const PreviousQuestionListWrapper = isMobile
    ? PreviousQuestionListMobile
    : PreviousQuestionListDesktop;
  const QuestionHeadingWrapper = isMobile
    ? QuestionHeadingMobile
    : QuestionHeadingDesktop;

  return (
    <ContainerWrapper>
      <QuestionHeadingWrapper
        variant="h1"
        textAlign={"center"}
        color={theme.palette.primary.activeButton}
      >
        Answer the following questions
      </QuestionHeadingWrapper>
      <PreviousQuestionListWrapper>
        {!isFastingQuestionActive && curr.fastingText && (
          <Tooltip
            title={curr.fastingText}
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: "14px",
                  width: "80vw",
                  top: "-30px",
                  textAlign: "left", // Corrected this to textAlign instead of alignContent
                },
              },
            }}
          >
            <div style={{ width: "100%" }}>
              <QuestionComponent
                question={" The patient is able to fast ?"}
                answer={"Yes"}
                key={"Yes"}
                isMobile={isMobile}
                theme={theme}
              />
            </div>
          </Tooltip>
        )}
        <Stack justifyContent="flex-end">
          {additionalQuestion.map((item, index) => (
            <QuestionComponent
              question={item.question}
              answer={item.answer}
              key={index}
              questionNumber={index + 1}
              isMobile={isMobile}
              theme={theme}
            />
          ))}
        </Stack>
        {!isAdditionalCostQuestionActive && curr?.additionalCostQuestion && (
          <Tooltip
            title={curr?.additionalCostQuestion}
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: "14px",
                  width: "80vw",
                  top: "-30px",
                  textAlign: "left", // Corrected this to textAlign instead of alignContent
                },
              },
            }}
          >
            <div style={{ width: "100%" }}>
              <QuestionComponent
                question={"Patient consent on cost information ?"}
                answer={"Yes"}
                key={"Yes1"}
                isMobile={isMobile}
                theme={theme}
              />
            </div>
          </Tooltip>
        )}
        <Stack justifyContent="flex-end">
          {safetyAnswers.map((item, index) => (
            <QuestionComponent
              question={item.question}
              answer={item.answer}
              key={index}
              questionNumber={index + 1}
              isMobile={isMobile}
              theme={theme}
            />
          ))}
        </Stack>
      </PreviousQuestionListWrapper>
      <ActiveQuestionStackWrapper>
        {isFastingQuestionActive && (
          <FastingQuestion isActive={isFastingQuestionActive} />
        )}
        {isAdditionalQuestionActive && (
          <AdditionalQuestions isActive={isAdditionalQuestionActive} />
        )}
        {isSafetyQuestionActive && (
          <SafetyQuestions isActive={isSafetyQuestionActive} />
        )}
        {isAdditionalCostQuestionActive && (
          <AdditionalCostQuestion isActive={isAdditionalCostQuestionActive} />
        )}

        {isErrorPresent && !curr.loading && (
          <Stack marginTop="5px" alignItems="left">
            <ErrorState errorMsg={errorMessage} isTextAlignCenter />
          </Stack>
        )}
      </ActiveQuestionStackWrapper>
    </ContainerWrapper>
  );
};

export default Questions;
