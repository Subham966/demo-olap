import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import("@mui/material").StepIconProps;
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { HandleGoBack } from "@/api/goBack/HandleGoBack.api";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux";
const {
  setGoBackPopup,
  resetInformTimeState,
  resetServiceRequestState,
  setRestartConversationPopup,
} = chatDetailsActions;
import { CustomArrowBackIcon, GoBackText } from "./GoBack.style";
import {
  CustomArrowBackIconMobile,
  GoBackTextMobile,
} from "./GoBack.mobile.style";
import {
  CustomArrowBackIconDesktop,
  GoBackTextDesktop,
} from "./GoBack.desktop.style";
const CustomizedGoBack = ({ applyEmbeddedView }) => {
  const theme = useTheme();
  const location = useLocation()?.pathname;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { goBackPopup } = useSelector((state) => state.centerDetails);
  const {
    goBackLoadingStatus,
    conversationId,
    isMultiCenterWorkflow,
    eReferralWorkflow,
    conversationTags,
    currentState,
    provisionalBookingFlag
  } = useSelector((state) => state.chatDetails);

  const isProvisional = conversationTags.includes("PROVISIONAL_BOOKING");
  let targetState = null;
  let showGoBackPopup = false;

  if (eReferralWorkflow && currentState != "DemographicState") {
    return;
  } else if (isProvisional && !provisionalBookingFlag) {
    return;
  } else if (location == "/referral-form") {
    targetState = "reset";
    showGoBackPopup = false;
  } else if (location == "/scanDetails") {
    targetState = "ServiceRequestState";
    showGoBackPopup = false;
  } else if (location == "/biopsy-injection") {
    targetState = "ServiceRequestState";
    showGoBackPopup = false;
  } else if (location == "/questions") {
    targetState = isMultiCenterWorkflow ? "MultiCenterState" : "ServiceRequestState";
    showGoBackPopup = true;
  } else if (location == "/questions/pregnancy") {
    targetState = "ServiceRequestState";
    showGoBackPopup = true;
  } else if (location == "/select-center") {
    targetState = "ServiceRequestState";
    showGoBackPopup = true;
  } else if (location == "/select-slots") {
    targetState = "ServiceRequestState";
    showGoBackPopup = true;
  } else if (location == "/multi-center-calendar") {
    targetState = "MultiCenterState";
    showGoBackPopup = true;
  } else if (location == "/confirm-slots") {
    if (isMultiCenterWorkflow) {
      targetState = "InformTimeState";
    } else {
      targetState = "InformTimeState";
    }
    showGoBackPopup = true;
  } else {
    return;
  }

  const handleButtonClick = async () => {
    if (showGoBackPopup) {
      useAppDispatch(
        setGoBackPopup({
          goBackPopup: true,
          goBackPopupState: targetState,
        })
      );
    } else if (targetState === "reset") {
      useAppDispatch(
        setRestartConversationPopup({
          restartConversationPopup: true,
        })
      );
    } else {
      if (targetState == "ServiceRequestState") {
        useAppDispatch(resetServiceRequestState());
      } else if (targetState == "InformTimeState") {
        useAppDispatch(resetInformTimeState());
      }
      await HandleGoBack({
        conversationId: conversationId,
        targetState: targetState,
      });
    }
  };
  const GoBackTextWrapper = isMobile ? GoBackTextMobile : GoBackTextDesktop;
  const CustomArrowBackIconWrapper = isMobile
    ? CustomArrowBackIconMobile
    : CustomArrowBackIconDesktop;

  return (
    <Stack
      sx={{
        position: "absolute",
        left: location == "/referral-form" ? "0px" : isMobile ? "-10px" : "0px",
        paddingTop: isMobile ? "-20px" : applyEmbeddedView ? "0px" : "10px",
        zIndex: 10000
      }}
    >
      <Button
        onClick={async () => {
          await handleButtonClick();
        }}
        // sx={{
        //   "& svg path": {
        //     fill: goBackLoadingStatus && "lightgray !important"
        //   },
        // }}
        disabled={goBackLoadingStatus}
      >
        <CustomArrowBackIconWrapper
          sx={{
            width: isMobile ? "50px" : "30px",
            height: isMobile && "26px",
          }}
        />{" "}
        {!isMobile && <GoBackTextWrapper>Go Back</GoBackTextWrapper>}
      </Button>
    </Stack>
  );
};

export default CustomizedGoBack;
