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
} from "./AskGender.mobile.style";
import {
  ButtonContainerDesktop,
  ContainerDesktop,
  CustomContainerDesktop,
  CustomaCssButtonDesktop,
  HeadingContainerDesktop,
  HeadingTextDesktop,
  SubHeadingTextDesktop,
} from "./AskGender.desktop.style";

const AskGender = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { resetPopupScreen, setAutomationLogicLoadingStatus } =
    chatDetailsActions;
  const { conversationId, asrCorrectedUtterance, responseCode } = useSelector(
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

  const AskGenderOptions = ["Male", "Female", "operator"];
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
            May I know the{" "}
            <Box sx={{ display: "inline", fontWeight: "600" }}>gender</Box> of
            the patient?
            {responseCode.includes(
              "img_service_request.sr.reask_patient_gender"
            ) && ". Please confirm ?"}
          </HeadingTextWrapper>
          <SubHeadingTextWrapper color={theme.palette.primary.activeButton}>
            {""}
            Please select one of the Options
          </SubHeadingTextWrapper>
        </HeadingContainerWrapper>
        <ButtonContainerWrapper>
          {AskGenderOptions?.map((options, index) => (
            <CustomaCssButtonWrapper
              sx={{
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: "black",
                gridColumn:
                  index === AskGenderOptions?.length - 1 &&
                  AskGenderOptions?.length % 2 !== 0 &&
                  "span 2", // Center last button
                marginLeft:
                  index === AskGenderOptions?.length - 1 &&
                  AskGenderOptions?.length % 2 !== 0 &&
                  "25%",
                marginRight:
                  index === AskGenderOptions?.length - 1 &&
                  AskGenderOptions?.length % 2 !== 0 &&
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
                  utterance: options,
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

export default AskGender;
