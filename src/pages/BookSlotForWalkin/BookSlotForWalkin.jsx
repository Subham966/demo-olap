import React, { useState } from "react";
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
} from "./BookSlotForWalkin.mobile.style";
import {
  ButtonContainerDesktop,
  ContainerDesktop,
  CustomContainerDesktop,
  CustomaCssButtonDesktop,
  HeadingContainerDesktop,
  HeadingTextDesktop,
  SubHeadingTextDesktop,
} from "./BookSlotForWalkin.desktop.style";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import { HandleConvertToWalkinAppointment } from "@/api/convertToWalkinAppointment/HandleConvertToWalkinAppointment.api";
import { useLocation } from "react-router-dom";

const BookSlotForWalkin = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { resetPopupScreen, setAutomationLogicLoadingStatus, setShowSlotOfferPopupForWalkinMulticenterFlow } =
    chatDetailsActions;
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { conversationId, asrCorrectedUtterance, responseCode, question, useServiceRequestUtterance, automationLogicLoadingStatus, selectedCenterName, selectedCenterFullName, isMultiCenterWorkflow, showSlotOfferPopupForWalkinMulticenterFlow, botState } = useSelector(
    (state) => state.chatDetails
  );

  const location = useLocation();
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
  const FemaleSonographerOptions = [{ display: "Continue", value: "yes" }, { display: "Walk In", value: "No" }];

  const toTitleCase = (name) => {
    return name
      .split(' ')
      .map(word => word?.charAt(0).toUpperCase() + word.slice(1)?.toLowerCase())
      .join(' ');
  };

  return (
    <ContainerWrapper>
      <CustomContainerWrapper
        sx={{
          backgroundColor: "white",
          boxShadow: 24,
        }}
      >
        <SubHeadingTextWrapper >
          {""}
          You have requested for {toTitleCase(useServiceRequestUtterance)}
        </SubHeadingTextWrapper>
        <HeadingContainerWrapper>
          <HeadingTextWrapper
            sx={{ fontWeight: "400" }}
          >
            No appointment is required for an {toTitleCase(useServiceRequestUtterance)}, You can walk in directly.
          </HeadingTextWrapper>
          <HeadingTextWrapper
            sx={{ color: "gray", fontWeight: "400" }}>
            If you'd still like to book a slot, please click 'Continue'.
          </HeadingTextWrapper>
        </HeadingContainerWrapper>
        <ButtonContainerWrapper>
          {FemaleSonographerOptions?.map((options, index) => (
            <CustomaCssButtonWrapper
              disabled={automationLogicLoadingStatus}
              sx={automationLogicLoadingStatus ? {
                color: `${theme.palette.primary.activeButton} !important`,
                backgroundColor: "white !important",
                border: `1px solid ${theme.palette.primary.activeButton}`,
                lineHeight: "20px",
                cursor: "pointer"
              } : {
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: "black",
                gridColumn:
                  index === FemaleSonographerOptions?.length - 1 &&
                  FemaleSonographerOptions?.length % 2 !== 0 &&
                  "span 2", // Center last button
                marginLeft:
                  index === FemaleSonographerOptions?.length - 1 &&
                  FemaleSonographerOptions?.length % 2 !== 0 &&
                  "25%",
                marginRight:
                  index === FemaleSonographerOptions?.length - 1 &&
                  FemaleSonographerOptions?.length % 2 !== 0 &&
                  "25%",
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                  // backgroundColor:
                  //   options.toLowerCase() == "operator"
                  //     ? "red"
                  //     : theme.palette.primary.activeButton,
                },
              }}
              onClick={async () => {
                setSelectedIndex(index);
                if (!showSlotOfferPopupForWalkinMulticenterFlow && location?.pathname == "/select-center") {
                  useAppDispatch(setShowSlotOfferPopupForWalkinMulticenterFlow(true))
                }

                useAppDispatch(setAutomationLogicLoadingStatus(true));
                const utterYes = async () => {
                  await useHandleUtterance({
                    conversation_id: conversationId,
                    utterance: "yes",
                  }, () => { useAppDispatch(resetPopupScreen()); });
                };

                const utterNo = async () => {
                  await useHandleUtterance({
                    conversation_id: conversationId,
                    utterance: "no",
                  }, () => { useAppDispatch(resetPopupScreen()); });
                };


                const handleUtteranceCallback = async (successData) => {
                  await HandleConvertToWalkinAppointment(conversationId);
                }

                if (index == 0) {
                  if (showSlotOfferPopupForWalkinMulticenterFlow) {
                    await useHandleUtterance(
                      {
                        conversation_id: conversationId,
                        utterance: selectedCenterFullName,
                      }, () => { useAppDispatch(resetPopupScreen()); }
                    );
                  } else {
                    await utterYes()
                  }
                } else {
                  if (showSlotOfferPopupForWalkinMulticenterFlow) {
                    await useHandleUtterance(
                      {
                        conversation_id: conversationId,
                        utterance: selectedCenterFullName,
                      }, handleUtteranceCallback
                    );
                  } else {
                    await utterNo()
                  }
                }
                useAppDispatch(setAutomationLogicLoadingStatus(false));
              }}

            >
              {automationLogicLoadingStatus && index == selectedIndex ? <LoaderDots /> : options?.display.toLowerCase() == "operator" ? "Need Help?" : options?.display}
            </CustomaCssButtonWrapper>
          ))}
        </ButtonContainerWrapper>
      </CustomContainerWrapper>
    </ContainerWrapper >
  );
};

export default BookSlotForWalkin;
