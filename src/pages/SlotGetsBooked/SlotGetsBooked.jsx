import { HandleGoBack } from "@/api/goBack/HandleGoBack.api";
import { stopBooking } from "@/api/stopBooking/stopBooking.api";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { errorDetailsActions } from "@/redux/reducers/errorDetails";
import { useTheme } from "@emotion/react";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    ButtonContainerDesktop,
    CustomaCssButtonDesktop,
    MessageTextDesktop,
} from "./SlotGetsBooked.desktop.style";
import {
    ButtonContainerMobile,
    CustomaCssButtonMobile,
    MessageTextMobile,
} from "./SlotGetsBooked.mobile.style";
function SlotGetsBooked() {
  const { setPopupScreen, resetPopupScreen, resetErrorMessage, resetChatDetails, setBotState } = chatDetailsActions;
  const { resetNetworkErrorState } = errorDetailsActions;
  const { clearTimer, setConversationTimeout } = conversationTimeoutActions;
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  const { conversationId } = useSelector((state) => state.chatDetails);
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const MessageTextWrapper = isMobile ? MessageTextMobile : MessageTextDesktop;
  return (
    <Stack
      sx={{
        gap: "20px",
        boxShadow: 24,
        borderRadius: 2,
        boxShadow: 12,
        padding: isMobile
          ? "30px 10px"
          : screenHeight < 900
          ? "50px 20px"
          : "80px 20px",
        width: isMobile ? "90%" : "60%",
        margin: isMobile ? "60px 20px" : "0px 10px",
        marginX: "auto",
        marginTop: "18vh",
        backgroundColor: "white",
      }}
    >
      <Box open={true}>
        <Box>
          <MessageTextWrapper
            variant="h1"
            sx={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            We are sorry but the selected slot is no longer available. <br></br>
            Would you like to select another slot now?
          </MessageTextWrapper>
          <ButtonContainerWrapper sx={{ marginTop: "20px" }}>
            <CustomaCssButtonWrapper
              sx={{
                fontWeight: "600",
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: theme.palette.primary.activeButton,
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                  backgroundColor: theme.palette.primary.activeButton,
                },
              }}
              onClick={async () => {

                await HandleGoBack({
                    conversationId: conversationId,
                    targetState: "InformTimeState",
                  });

                useAppDispatch(
                  setPopupScreen({
                    showPopup: false,
                    popupScreenName: "",
                  })
                );
              }}
            >
              Yes
            </CustomaCssButtonWrapper>
            <CustomaCssButtonWrapper
              sx={{
                fontWeight: "600",
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: theme.palette.primary.activeButton,
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                  backgroundColor: theme.palette.primary.activeButton,
                },
              }}
              onClick={async () => {
                await stopBooking(conversationId);
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
              No
            </CustomaCssButtonWrapper>
          </ButtonContainerWrapper>
        </Box>
      </Box>
    </Stack>
  );
}

export default SlotGetsBooked;
