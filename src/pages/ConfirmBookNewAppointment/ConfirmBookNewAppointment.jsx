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
  ContainerMobile,
  CustomaCssButtonMobile,
  HeadinTextMobile,
  RestartHeadingMobile,
} from "./ConfirmBookNewAppointment.mobile.style";
import {
  ButtonContainerDesktop,
  ContainerDesktop,
  CustomaCssButtonDesktop,
  HeadinTextDesktop,
  RestartHeadingDesktop,
} from "./ConfirmBookNewAppointment.desktop.style";
import { Container, HeadinText } from "./ConfirmBookNewAppointment.style";

function ConfirmBookNewAppointment() {
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
    setBookNewAppointmentPopup,
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
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const RestartHeadingWrapper = isMobile
    ? RestartHeadingMobile
    : RestartHeadingDesktop;
  const HeadinTextWrapper = isMobile ? HeadinTextMobile : HeadinTextDesktop;
  return (
    <ContainerWrapper
      sx={{
        boxShadow: 24,
        borderRadius: 2,
        boxShadow: 12,
      }}
    >
      {/* <Button onClick={handleOpen} variant="contained">Open Popup</Button> */}
      <HeadinTextWrapper>No worries</HeadinTextWrapper>
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
              width: "90%",
              margin: "auto",
            }}
          >
            You can also{" "}
            <span style={{ color: theme.palette.primary.activeButton }}>
              book a <b>'New Scan'</b>
            </span>{" "}
            with the correct details
          </RestartHeadingWrapper>
          <ButtonContainerWrapper sx={{ marginTop: "20px" }}>
            <CustomaCssButtonWrapper
              sx={{
                fontWeight: "600",
                lineHeight: "20px",
                color: theme.palette.text.activeButtonText,
                backgroundColor: theme.palette.primary.activeButton,
                "&:hover": {
                  backgroundColor: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.primary.activeButton}`,
                  color: theme.palette.primary.activeButton,
                },
              }}
              onClick={() => {
                navigate("/");
                useAppDispatch(resetEreferralDetails());
                useAppDispatch(
                  setBookNewAppointmentPopup({
                    bookNewAppointmentPopup: false,
                  })
                );
                useAppDispatch(
                  resetChatDetails()
                );
              }}
            >
              New Scan
            </CustomaCssButtonWrapper>
            <CustomaCssButtonWrapper
              sx={{
                fontWeight: "600",
                lineHeight: "20px",
                color: "white",
                backgroundColor: "#939393",
                "&:hover": {
                  backgroundColor: "white",
                  border: `1px solid ${"#939393"}`,
                  color: "#939393",
                },
              }}
              onClick={() => {
                useAppDispatch(
                  setBookNewAppointmentPopup({
                    bookNewAppointmentPopup: false,
                  })
                );
              }}
            >
              Close
            </CustomaCssButtonWrapper>
          </ButtonContainerWrapper>
        </Box>
      </Box>
    </ContainerWrapper>
  );
}

export default ConfirmBookNewAppointment;
