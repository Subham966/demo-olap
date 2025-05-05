import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useSelector } from "react-redux";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import {
  ButtonContainerMobile,
  ContainerMobile,
  CustomContainerMobile,
  CustomaCssButtonMobile,
  HeadingContainerMobile,
  HeadingTextMobile,
  SubHeadingTextMobile,
} from "./MultipleModalityWalkin.mobile.style";
import {
  ButtonContainerDesktop,
  ContainerDesktop,
  CustomContainerDesktop,
  CustomaCssButtonDesktop,
  HeadingContainerDesktop,
  HeadingTextDesktop,
  SubHeadingTextDesktop,
} from "./MultipleModalityWalkin.desktop.style";

const MultipleModalityWalkin = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { resetPopupScreen, setAutomationLogicLoadingStatus } =
    chatDetailsActions;
  const { conversationId, asrCorrectedUtterance, responseCode, question } = useSelector(
    (state) => state.chatDetails
  );
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
  const ConfirmOptions = ["Confirm"];
  return (
    <ContainerWrapper>
      <CustomContainerWrapper
        sx={{
          backgroundColor: "white",
          boxShadow: 24,
        }}
      >
        <HeadingContainerWrapper>
          <HeadingTextWrapper >
            {question}
          </HeadingTextWrapper>
          <SubHeadingTextWrapper
            color={theme.palette.primary.activeButton}
          >
            Please Confirm ?
          </SubHeadingTextWrapper>
        </HeadingContainerWrapper>
        <ButtonContainerWrapper>
          {ConfirmOptions?.map((options, index) => (
            <CustomaCssButtonWrapper
              sx={{
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: "black",
                gridColumn:
                  index === ConfirmOptions?.length - 1 &&
                  ConfirmOptions?.length % 2 !== 0 &&
                  "span 2", // Center last button
                marginLeft:
                  index === ConfirmOptions?.length - 1 &&
                  ConfirmOptions?.length % 2 !== 0 &&
                  "25%",
                marginRight:
                  index === ConfirmOptions?.length - 1 &&
                  ConfirmOptions?.length % 2 !== 0 &&
                  "25%",
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                  backgroundColor:
                    options.toLowerCase() == "operator"
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
                  utterance: "yes",
                });
                // setIsHandleUtteranceApiPending(false);
                useAppDispatch(setAutomationLogicLoadingStatus(false));
              }}
            >
              {options.toLowerCase() == "operator" ? "Need Help?" : options}
            </CustomaCssButtonWrapper>
          ))}
        </ButtonContainerWrapper>
      </CustomContainerWrapper>
    </ContainerWrapper>
  );
};

export default MultipleModalityWalkin;
