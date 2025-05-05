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
import { errorDetailsActions } from "@/redux/reducers/errorDetails";
import { ContainerMobile } from "./ConversationNotFound.mobile.style";
import { ContainerDesktop } from "./ConversationNotFound.desktop.style";

const CustomCssButton = styled(CustomButton)`
  background-color: ${({ theme }) => theme.palette.primary.activeButton};
  color: ${({ theme }) => theme.palette.text.activeButtonText};
  font-size: 16px;
  padding: 10px;
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
  }
`;

function ConversationNotFound() {
  const curr = useSelector((state) => state.chatDetails);
  const { resetNetworkErrorState } = errorDetailsActions;
  const centerDetails = useSelector((state) => state.centerDetails);
  let modalityGeneric = curr?.modalityGeneric.split(",");
  const navigate = useNavigate();
  const { resetPopupScreen, resetErrorMessage, resetChatDetails, setBotState } =
    chatDetailsActions;
  const { clearTimer } = conversationTimeoutActions;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  return (
    <ContainerWrapper>
      <ErrorMessage
        eroorHeading={"Sorry, it looks like the conversation was not found."}
        businessHoursMessage={"Our business hours :"}
        CloseButton={
          <CustomCssButton
            sx={{
              fontWeight: "600",
              lineHeight: "20px",
              width: isMobile ? "100px" : "8vw",
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
              useAppDispatch(resetPopupScreen());
              useAppDispatch(resetNetworkErrorState());
              useAppDispatch(resetErrorMessage());
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
    </ContainerWrapper>
  );
}

export default ConversationNotFound;
