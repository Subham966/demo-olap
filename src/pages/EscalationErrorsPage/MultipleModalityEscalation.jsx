import React from "react";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
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
const CustomCssButton = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.activeButton};
  color: ${({ theme }) => theme.palette.text.activeButtonText};
  font-size: 16px;
  padding: 10px;
  width: 200px;
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
    color: ${({ theme }) => theme.palette.text.activeButtonText};
  }

  @media (max-width: 450px) {
    height: 30px;
    width: 100px;
    margin-top: 20px;
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 12px !important;
    height: 30px;
    width: 140px;
    margin-top: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 13px !important;
    width: 160px;
    margin-top: 10px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px !important;
    height: 40px;
    width: 200px;
    margin-top: 20px;
  }
`;

const MultipleModalityEscalation = () => {
  const curr = useSelector((state) => state.chatDetails);
  let modalityGeneric = curr?.modalityGeneric.split(",");
  let modality_1 = modalityGeneric?.[0];
  let modality_2 = modalityGeneric?.[1];

  if (modality_1?.toLowerCase() === "us") {
    modality_1 = "Ultrasound";
  } else if (modality_1?.toLowerCase() === "cr") {
    modality_1 = "X-ray";
  }

  if (modality_2?.toLowerCase() === "us") {
    modality_2 = "Ultrasound";
  } else if (modality_2?.toLowerCase() === "cr") {
    modality_2 = "X-ray";
  }


  console.log("modalityGeneric", modalityGeneric)

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
  const EscilationErrorBoxWrapper = isMobile
    ? EscilationErrorBoxMobile
    : EscilationErrorBoxDesktop;
  return (
    <EscilationErrorBoxWrapper>
      <ErrorMessage
        modalityGeneric={[modality_1?.toUpperCase(), modality_2?.toUpperCase()]} //optional
        // eroorHeading={"You have requested for multiple examinations:"}
        // message="Kindly book them one after another."
        businessHoursMessage={"Our business hours :"}
        eroorHeading={"You have requested different types of examinations:"}
        message={`You need to book them independently, i.e., you can book ${modality_1} first followed by ${modality_2}.`}
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

export default MultipleModalityEscalation;
