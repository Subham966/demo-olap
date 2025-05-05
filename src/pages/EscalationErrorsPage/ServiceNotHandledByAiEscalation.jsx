import React from "react";
import { useSelector } from "react-redux";
import { CustomButton } from "@/elements/CustomButton";
import { Box, styled, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useAppDispatch } from "@/redux";
import { useNavigate } from "react-router-dom";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { EscilationErrorBox } from "./EscalationErrorsPage.style";
import { EscilationErrorBoxMobile } from "./EscalationErrorsPage.mobile.style";
import { EscilationErrorBoxDesktop } from "./EscalationErrorsPage.desktop.style";
import ErrorMessage3 from "@/components/ErrorMessage3/ErrorMessage3";

const CustomCssButton = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.activeButton};
  // color: ${({ theme }) => theme.palette.text.activeButtonText};
  color: black !important;
  font-size: 16px;
  padding: 10px;
  width: 150px;
  @keyframes blink {
    0% {
      filter: brightness(100%);
    }
    50% {
      filter: brightness(75%);
    }
    100% {
      filter: brightness(100%);
    }
  }

  &:hover {
    animation: blink 0.7s;
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: ${({ theme }) =>
    `${theme.palette.text.activeButtonText} !important`};
    border: 0px !important;
  }

  @media (max-width: 450px) {
    height: 30px;
    width: 100px;
  }
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 12px !important;
    height: 30px;
    width: 130px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 13px !important;
    width: 140px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px !important;
    height: 40px;
    width: 150px;
  }
`;
const ServiceNotHandledByAiEscalation = () => {
  const curr = useSelector((state) => state.chatDetails);
  const centerDetails = useSelector((state) => state.centerDetails);
  const navigate = useNavigate();
  const {
    setChatDetails,
    setRestartConversationPopup,
    resetChatDetails,
    setBotState,
  } = chatDetailsActions;
  const { clearTimer } = conversationTimeoutActions;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let modalityGeneric = curr?.modalityGeneric.split(",");
  const capitalizeAllLetters = (str) => {
    if (!str) return ""; // Return an empty string if input is falsy
    return str.toUpperCase();
  };
  const EscilationErrorBoxWrapper = isMobile
    ? EscilationErrorBoxMobile
    : EscilationErrorBoxDesktop;
  return (
    <EscilationErrorBoxWrapper>
      <ErrorMessage3
        eroorHeading={`The requested examination '${capitalizeAllLetters(
          curr?.useServiceRequestUtterance
        )}' 
     cannot be booked online`}
        callusMessage={`Call us on`}
        contactNumber={centerDetails?.public_number}
        message={"Our business hours are:"}
        CloseButton={
          <CustomCssButton
            sx={{
              fontWeight: "600",
              lineHeight: "20px",
              margin: "auto",
              marginTop: "20px",
              backgroundColor: theme.palette.text.activeButtonText,
              color: theme.palette.primary.activeButton,
              "&:hover": {
                color: theme.palette.text.activeButtonText,
                backgroundColor: theme.palette.primary.activeButton,
              },
            }}
            onClick={() => {
              useAppDispatch(
                setRestartConversationPopup({ restartConversationPopup: false })
              );
              navigate("/");
              useAppDispatch(resetChatDetails());
              useAppDispatch(clearTimer());
              useAppDispatch(
                setBotState({
                  botState: "/home",
                  responseCode: "/home",
                })
              );
            }}
          >
            Close
          </CustomCssButton>
        }
      />
    </EscilationErrorBoxWrapper>
  );
};

export default ServiceNotHandledByAiEscalation;
