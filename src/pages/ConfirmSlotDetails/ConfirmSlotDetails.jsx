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
  SlotDetailsContainerMobile,
  CenterNameTextMobile,
  ColonTextMobile,
  CustomaCssButtonMobile,
  RestartHeadingMobile,
  SlotDateHeadingMobile,
  SlotDetailsBoxMobile,
  SlotDetailsTextMobile,
} from "./ConfirmSlotDetails.mobile.style";
import {
  ButtonContainerDesktop,
  SlotDetailsContainerDesktop,
  CenterNameTextDesktop,
  ColonTextDesktop,
  CustomaCssButtonDesktop,
  RestartHeadingDesktop,
  SlotDateHeadingDesktop,
  SlotDetailsBoxDesktop,
  SlotDetailsTextDesktop,
} from "./ConfirmSlotDetails.desktop.style";
import moment from "moment/moment";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";

function ConfirmSlotDetails() {
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
    resetInformTimeState,
  } = chatDetailsActions;
  const { clearTimer } = conversationTimeoutActions;
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { screenHeight } = useSelector((state) => state.screenSize);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { eReferralWorkflow, selectedSlot, selectedCenter, conversationId, isMultiCenterWorkflow } =
    useSelector((state) => state.chatDetails);
  const handleCofirmSlot = async () => {
    const formattedDateTime = moment(selectedSlot, "YYYY-MM-DD hh:mm A").format(
      "DD MMMM [at] h:mm A"
    );

    const handleUtteranceCallBack = async () => {
      setIsHandleUtteranceApiPending(true);
      await useHandleUtterance({
        conversation_id: conversationId,
        utterance: "yes",
      });

      setIsHandleUtteranceApiPending(false);
      useAppDispatch(
        setPopupScreen({
          showPopup: false,
          popupScreenName: "",
        })
      );
    };
    setIsHandleUtteranceApiPending(true);
    await useHandleUtterance(
      {
        conversation_id: conversationId,
        utterance: formattedDateTime,
      },
      handleUtteranceCallBack
    );

    setIsHandleUtteranceApiPending(false);
  };
  const formattedDate = moment(selectedSlot, "YYYY-MM-DD hh:mm A").format(
    "dddd, Do MMMM"
  );
  const formattedTime = moment(selectedSlot, "YYYY-MM-DD hh:mm A").format(
    "hh:mm A"
  );
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const RestartHeadingWrapper = isMobile
    ? RestartHeadingMobile
    : RestartHeadingDesktop;

  const SlotDetailsBoxWrapper = isMobile
    ? SlotDetailsBoxMobile
    : SlotDetailsBoxDesktop;
  const CenterNameTextWrapper = isMobile
    ? CenterNameTextMobile
    : CenterNameTextDesktop;
  const SlotDetailsTextWrapper = isMobile
    ? SlotDetailsTextMobile
    : SlotDetailsTextDesktop;

  const SlotDetailsContainerWrapper = isMobile
    ? SlotDetailsContainerMobile
    : SlotDetailsContainerDesktop;
  const ColonTextWrapper = isMobile ? ColonTextMobile : ColonTextDesktop;

  const SlotDateHeadingWrapper = isMobile
    ? SlotDateHeadingMobile
    : SlotDateHeadingDesktop;

  // if (isHandleUtteranceApiPending) return <CustomLoader />;
  return (
    <Stack
      sx={{
        gap: "20px",
        // boxShadow: 24,
        borderRadius: 2,
        boxShadow: 12,
        padding: isMobile
          ? "20px 10px"
          : screenHeight < 900
            ? "50px 20px"
            : "80px 20px",
        width: isMobile ? "90%" : "60%",
        margin: isMobile ? "40px 20px" : "0px 10px",
        marginX: "auto",
        marginTop: isMultiCenterWorkflow ? "11vh" : "12vh",
        backgroundColor: "white",
      }}
    >
      {/* <Button onClick={handleOpen} variant="contained">Open Popup</Button> */}
      <Box open={true}>
        <Box>
          <RestartHeadingWrapper
            variant="h1"
            sx={{
              margin: "auto",
              textAlign: "center",
              color: theme.palette.primary.activeButton,
            }}
          >
            Please confirm your slot
          </RestartHeadingWrapper>
          <SlotDetailsBoxWrapper>
            {isMultiCenterWorkflow && <SlotDetailsContainerWrapper>
              <SlotDateHeadingWrapper>Centre</SlotDateHeadingWrapper>
              <ColonTextWrapper>:</ColonTextWrapper>
              <CenterNameTextWrapper>
                {selectedCenter && selectedCenter}
              </CenterNameTextWrapper>
            </SlotDetailsContainerWrapper>}
            <SlotDetailsContainerWrapper>
              <SlotDateHeadingWrapper>Date</SlotDateHeadingWrapper>
              <ColonTextWrapper>:</ColonTextWrapper>
              <SlotDetailsTextWrapper>
                {" "}
                {selectedSlot ? formattedDate : "Details not found"}
              </SlotDetailsTextWrapper>
            </SlotDetailsContainerWrapper>
            <SlotDetailsContainerWrapper>
              <SlotDateHeadingWrapper>Time</SlotDateHeadingWrapper>
              <ColonTextWrapper>:</ColonTextWrapper>
              <SlotDetailsTextWrapper>
                {" "}
                {selectedSlot ? formattedTime : "Details not found"}
              </SlotDetailsTextWrapper>
            </SlotDetailsContainerWrapper>
          </SlotDetailsBoxWrapper>
          <ButtonContainerWrapper sx={{ marginTop: "20px" }}>
            <CustomaCssButtonWrapper
              sx={{
                fontWeight: "600",
                lineHeight: "20px",
                backgroundColor: isHandleUtteranceApiPending
                  ? theme.palette.text.activeButtonText
                  : theme.palette.primary.activeButton,
                color: isHandleUtteranceApiPending
                  ? theme.palette.primary.activeButton
                  : theme.palette.text.activeButtonText,
                "&:hover": {
                  color: isHandleUtteranceApiPending
                    ? theme.palette.text.activeButtonText
                    : theme.palette.primary.activeButton,
                  border: `1px solid ${theme.palette.primary.activeButton}`,
                  backgroundColor: theme.palette.text.activeButtonText,
                },
              }}
              onClick={() => {
                if (!isHandleUtteranceApiPending) {
                  handleCofirmSlot();
                }
              }}
            >
              {isHandleUtteranceApiPending ? <LoaderDots /> : "Confirm"}
            </CustomaCssButtonWrapper>
            <CustomaCssButtonWrapper
              sx={{
                fontWeight: "600",
                lineHeight: "20px",
                backgroundColor: "#939393",
                color: "white",
                "&:hover": {
                  backgroundColor: "#939393",
                  color: "white",
                  animation: "blink 0.5s",
                },
              }}
              onClick={() => {
                if (!isHandleUtteranceApiPending) {
                  useAppDispatch(
                    setPopupScreen({
                      showPopup: false,
                      popupScreenName: "",
                    })
                  );
                  useAppDispatch(resetInformTimeState());
                }
              }}
            >
              Go back
            </CustomaCssButtonWrapper>
          </ButtonContainerWrapper>
        </Box>
      </Box>
    </Stack>
  );
}

export default ConfirmSlotDetails;
