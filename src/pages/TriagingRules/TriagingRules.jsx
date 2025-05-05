import React from "react";
import { useTheme } from "@emotion/react";
import {
  ButtonContainerMobile,
  ContainerMobile,
  CustomContainerMobile,
  CustomaCssButtonMobile,
  HeadingContainerMobile,
  HeadingTextMobile,
  SubHeadingTextMobile,
} from "./TriagingRules.mobile.style";
import {
  ButtonContainerDesktop,
  ContainerDesktop,
  CustomContainerDesktop,
  CustomaCssButtonDesktop,
  HeadingContainerDesktop,
  HeadingTextDesktop,
  SubHeadingTextDesktop,
} from "./TriagingRules.desktop.style";

import { Box, Stack, useMediaQuery } from "@mui/material";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useSelector } from "react-redux";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";

const TriagingRules = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { resetPopupScreen, setAutomationLogicLoadingStatus } =
    chatDetailsActions;
  const { triagingQuestionOptions, conversationId, asrCorrectedUtterance } =
    useSelector((state) => state.chatDetails);
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const CustomContainerWrapper = isMobile
    ? CustomContainerMobile
    : CustomContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const HeadingContainerWrapper = isMobile
    ? HeadingContainerMobile
    : HeadingContainerDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const SubHeadingTextWrapper = isMobile
    ? SubHeadingTextMobile
    : SubHeadingTextDesktop;

  return (
    <ContainerWrapper>
      <CustomContainerWrapper
        sx={{
          backgroundColor: "white",
          boxShadow: 24,
        }}
      >
        <HeadingContainerWrapper>
          <HeadingTextWrapper color={theme.palette.primary.activeButton}>
            As you have requested for{" "}
            <Box sx={{ display: "inline", fontWeight: "600" }}>
              {asrCorrectedUtterance}
            </Box>
            , we require more details.
          </HeadingTextWrapper>
          <SubHeadingTextWrapper color={theme.palette.primary.activeButton}>
            Please select one of the Options
          </SubHeadingTextWrapper>
        </HeadingContainerWrapper>
        <ButtonContainerWrapper>
          {triagingQuestionOptions?.map((options, index) => (
            <CustomaCssButtonWrapper
              sx={{
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: "black",
                gridColumn:
                  index === triagingQuestionOptions?.length - 1 &&
                  triagingQuestionOptions?.length % 2 !== 0 &&
                  "span 2", // Center last button
                marginLeft:
                  index === triagingQuestionOptions?.length - 1 &&
                  triagingQuestionOptions?.length % 2 !== 0 &&
                  "25%",
                marginRight:
                  index === triagingQuestionOptions?.length - 1 &&
                  triagingQuestionOptions?.length % 2 !== 0 &&
                  "25%",
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                  backgroundColor:
                    options.toLowerCase() == "escalation"
                      ? "red"
                      : theme.palette.primary.activeButton,
                },
              }}
              onClick={async () => {
                useAppDispatch(resetPopupScreen());
                // setIsHandleUtteranceApiPending(true);
                useAppDispatch(setAutomationLogicLoadingStatus(true));
                await useHandleUtterance({
                  conversation_id: conversationId,
                  utterance: String(index + 1),
                });
                // setIsHandleUtteranceApiPending(false);
                useAppDispatch(setAutomationLogicLoadingStatus(true));
              }}
            >
              {options.toLowerCase() == "escalation" ? "Need Help?" : options}
            </CustomaCssButtonWrapper>
          ))}
        </ButtonContainerWrapper>
      </CustomContainerWrapper>
    </ContainerWrapper>
  );
};

export default TriagingRules;
