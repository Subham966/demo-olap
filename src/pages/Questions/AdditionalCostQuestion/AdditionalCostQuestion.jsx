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
import { useAppDispatch } from "@/redux";
import {
  AdditionalCostQuestionContainerMobile,
  AdditionalCostQuestionTextMobile,
  ButtonContainerMobile,
  ChildContainerMobile,
  ContainerMobile,
  CustomaCssButtonMobile,
  QuestionHeadingMobile,
} from "./AdditionalCostQuestion.mobile.style";
import {
  AdditionalCostQuestionContainerDesktop,
  AdditionalCostQuestionTextDesktop,
  ButtonContainerDesktop,
  ChildContainerDesktop,
  ContainerDesktop,
  CustomaCssButtonDesktop,
  QuestionHeadingDesktop,
} from "./AdditionalCostQuestion.desktop.style";

function AdditionalCostQuestion({ isActive }) {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const curr = useSelector((state) => state.chatDetails);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const { setChatDetails, setAdditionalCostQuestion } = chatDetailsActions;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const reconfirm = curr?.responseCode.includes(
    "img_service_request.sr.reconfirm_from_patient_on_additional_cost_denied_by_patient"
  );
  const splitText = curr?.question
    ?.split(".")
    ?.map((sentence) => sentence.trim())
    ?.filter(Boolean)
    ?.map((sentence) => {
      if (sentence.includes("$")) {
        // Replace the dollar value part with bolded text
        return sentence.replace(
          /\$[\d,]+(\.\d{2})?/g,
          (match) => `<b>${match}</b>`
        );
      }
      return sentence;
    });

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
  const AdditionalCostQuestionContainerWrapper = isMobile
    ? AdditionalCostQuestionContainerMobile
    : AdditionalCostQuestionContainerDesktop;
  const AdditionalCostQuestionTextWrapper = isMobile
    ? AdditionalCostQuestionTextMobile
    : AdditionalCostQuestionTextDesktop;
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
          Indicative Pricing
        </QuestionHeadingWrapper>

        {!isHandleUtteranceApiPending && (
          <AdditionalCostQuestionContainerWrapper>
            <AdditionalCostQuestionTextWrapper>
              {splitText.map((sentence, index) => (
                <div>
                  <Box
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: `${sentence}${index !== splitText?.length - 1 ? "." : !sentence?.includes("?") ? "." : ""
                        }`,
                    }}
                    sx={{
                      marginTop: splitText?.length - 1 == index && sentence?.includes("?") && "20px",
                      fontWeight: splitText?.length - 1 == index && sentence?.includes("?") && "600",
                    }}
                  />
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: `${"Do you wish to proceed?"}`,
                    }}
                    sx={{
                      marginTop: "20px",
                      fontWeight: "600",
                      display: splitText?.length - 1 != index ? "none" : sentence?.includes("?") && "none"
                    }}
                  />
                </div>
              ))}
            </AdditionalCostQuestionTextWrapper>

            <ButtonContainerWrapper>
              <CustomaCssButtonWrapper
                sx={{
                  fontWeight: "600",
                  lineHeight: "20px",
                  backgroundColor: theme.palette.text.activeButtonText,
                  color: reconfirm
                    ? "green"
                    : theme.palette.primary.activeButton,
                  "&:hover": {
                    color: reconfirm
                      ? "white"
                      : theme.palette.text.activeButtonText,
                    border: `1px solid ${theme.palette.text.activeButtonText}`,
                    backgroundColor: reconfirm
                      ? "green"
                      : theme.palette.primary.activeButton,
                  },
                }}
                onClick={async () => {
                  useAppDispatch(
                    setAdditionalCostQuestion({
                      additionalCostQuestion: curr.question,
                    })
                  );
                  setIsHandleUtteranceApiPending(true);
                  await useHandleUtterance({
                    conversation_id: curr.conversationId,
                    utterance: "yes",
                  });
                  setIsHandleUtteranceApiPending(false);
                }}
              >
                {reconfirm ? "Yes, Proceed" : "Yes"}
              </CustomaCssButtonWrapper>
              <CustomaCssButtonWrapper
                sx={{
                  fontWeight: "600",
                  lineHeight: "20px",
                  backgroundColor: theme.palette.text.activeButtonText,
                  color: reconfirm ? "red" : theme.palette.primary.activeButton,
                  "&:hover": {
                    color: reconfirm
                      ? "white"
                      : theme.palette.text.activeButtonText,
                    border: `1px solid ${theme.palette.text.activeButtonText}`,
                    backgroundColor: reconfirm
                      ? "red"
                      : theme.palette.primary.activeButton,
                  },
                }}
                onClick={async () => {
                  setIsHandleUtteranceApiPending(true);
                  await useHandleUtterance({
                    conversation_id: curr.conversationId,
                    utterance: "No",
                  });
                  setIsHandleUtteranceApiPending(false);
                }}
              >
                {reconfirm ? "Need help" : "No"}
              </CustomaCssButtonWrapper>
            </ButtonContainerWrapper>
          </AdditionalCostQuestionContainerWrapper>
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

export default AdditionalCostQuestion;
