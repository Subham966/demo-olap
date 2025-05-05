import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import BookIcon from "../../assets/BookAppoinmentIcon.svg?react";
import QueryIcon from "../../assets/QueryIcon.svg?react";
import ModifyIcon from "../../assets/ModifyIcon.svg?react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { useAppDispatch } from "@/redux";
import { stopBooking } from "@/api/stopBooking/stopBooking.api";
import {
  ButtonContainerMobile,
  CustomaCssButtonMobile,
  RestartHeadingMobile,
} from "./ConfirmRestart.mobile.style";
import {
  ButtonContainerDesktop,
  CustomaCssButtonDesktop,
  RestartHeadingDesktop,
} from "./ConfirmRestart.desktop.style";

function ConfirmRestart() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const curr = useSelector((state) => state.chatDetails);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const {
    setChatDetails,
    setRestartConversationPopup,
    resetChatDetails,
    setBotState,
    setPopupScreen,
    resetEreferralDetails,
  } = chatDetailsActions;
  const { clearTimer } = conversationTimeoutActions;
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  // if (isHandleUtteranceApiPending) return <CustomLoader />;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { eReferralWorkflow } = useSelector((state) => state.chatDetails);
  const stopBookingHandler = async () => {
    await stopBooking(curr?.conversationId);
  };
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const RestartHeadingWrapper = isMobile
    ? RestartHeadingMobile
    : RestartHeadingDesktop;
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
        margin: isMobile ? "40px 20px" : "0px 10px",
        marginX: "auto",
        marginTop: "18vh",
        backgroundColor: "white",
      }}
    >
      {/* <Button onClick={handleOpen} variant="contained">Open Popup</Button> */}
      <Box
        open={true}
        //  sx={{
        //   width:"200px",
        //   height:"300px",
        //   position:"absolute"
        //  }}
        // onClose={handleClose}
        // aria-labelledby="popup-title"
        // aria-describedby="popup-description"
      >
        <Box>
          <RestartHeadingWrapper
            variant="h1"
            sx={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            {curr?.botState != "/booking-completed"
              ? "Do you want to restart the booking request?"
              : "Do you want to start a new booking request?"}
          </RestartHeadingWrapper>
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
              onClick={() => {
                useAppDispatch(
                  setPopupScreen({
                    showPopup: false,
                    popupScreenName: "",
                  })
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
                if (location?.pathname != "/ereferral-review-details") {
                  stopBookingHandler();
                }
                if (eReferralWorkflow) {
                  if (location?.pathname == "/booking-completed") {
                    navigate("/");
                    useAppDispatch(resetEreferralDetails());
                  } else {
                    navigate("/ereferral-confirm-dob");
                  }
                }
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
              onClick={() => {
                useAppDispatch(
                  setRestartConversationPopup({
                    restartConversationPopup: false,
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

export default ConfirmRestart;
