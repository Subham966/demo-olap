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
import { HandleGoBack } from "@/api/goBack/HandleGoBack.api";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import {
  ButtonContainerMobile,
  CustomaCssButtonMobile,
  GoBackHeadingMobile,
  ParentBoxMobile,
} from "./ConfirmGoBack.mobile.style";
import {
  ButtonContainerDesktop,
  CustomaCssButtonDesktop,
  GoBackHeadingDesktop,
  ParentBoxDesktop,
} from "./ConfirmGoBack.desktop.style";
import { HandleConvertToProvisionalBooking } from "@/api/convertToProvisionalBooking/HandleConvertToProvisionalBooking.api";

function ConfirmGoBack() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const {
    conversationId,
    currentState,
    goBackLoadingStatus,
    isMultiCenterWorkflow,
    goBackPopup,
    goBackPopupState,
    provisionalBookingFlag,
  } = useSelector((state) => state.chatDetails);
  const location = useLocation();
  const {
    setChatDetails,
    setGoBackPopup,
    setBotState,
    setPopupScreen,
    resetServiceRequestState,
    resetInformTimeState,
    setProvisionalBooking
  } = chatDetailsActions;
  const { clearTimer } = conversationTimeoutActions;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const centerDetails = useSelector((state) => state.centerDetails);
  // if (isHandleUtteranceApiPending) return <CustomLoader />;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeConvertToProvisional = async (context) => {
    try {
      await HandleConvertToProvisionalBooking("DELETE", conversationId);
      useAppDispatch(setProvisionalBooking(false))
    } catch (error) {
      console.error("Error during API flow:", error);
    } finally {
    }
  }
  const ButtonContainerWrapper = isMobile
    ? ButtonContainerMobile
    : ButtonContainerDesktop;
  const CustomaCssButtonWrapper = isMobile
    ? CustomaCssButtonMobile
    : CustomaCssButtonDesktop;
  const GoBackHeadingWrapper = isMobile
    ? GoBackHeadingMobile
    : GoBackHeadingDesktop;
  const ParentBoxWrapper = isMobile ? ParentBoxMobile : ParentBoxDesktop;
  return (
    <ParentBoxWrapper
      sx={{
        gap: "20px",
        boxShadow: 24,
        borderRadius: 2,
        boxShadow: 12,
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
          <GoBackHeadingWrapper
            variant="h2"
            sx={{
              margin: "auto",
              textAlign: "center",
            }}
          >
            You will be required to{" "}
            {currentState == "ServiceRequestState" && (isMultiCenterWorkflow && location.pathname == "/questions" ? "select a centre" : "enter scan details")}{" "}
            {currentState == "InformTimeState" && (isMultiCenterWorkflow ? "select a centre" : "enter scan details")}{" "}
            {currentState == "MultiCenterState" && "enter scan details"}{" "}
            {currentState == "DemographicState" && "select the slot"}{" "}
            again. Do you wish to go back?
          </GoBackHeadingWrapper>
          <ButtonContainerWrapper sx={{ marginTop: "20px" }}>
            <CustomaCssButtonWrapper
              disabled={goBackLoadingStatus}
              goBackLoadingStatus={goBackLoadingStatus}
              sx={{
                fontWeight: "600",
                lineHeight: "20px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: theme.palette.primary.activeButton,
                "&:hover": !goBackLoadingStatus && {
                  color: theme.palette.text.activeButtonText,
                  border: `1px solid ${theme.palette.text.activeButtonText}`,
                  backgroundColor: theme.palette.primary.activeButton,
                },
              }}
              onClick={async () => {
                if (goBackPopup) {
                  if (goBackPopupState == "ServiceRequestState") {
                    await HandleGoBack({
                      conversationId: conversationId,
                      targetState: "ServiceRequestState",
                    });
                    if (provisionalBookingFlag && isMultiCenterWorkflow) {
                      handleChangeConvertToProvisional()
                    }
                    useAppDispatch(resetServiceRequestState());
                  } else if (goBackPopupState == "InformTimeState") {
                    await HandleGoBack({
                      conversationId: conversationId,
                      targetState: "InformTimeState",
                    });
                    if (provisionalBookingFlag && isMultiCenterWorkflow) {
                      handleChangeConvertToProvisional()
                    }
                    useAppDispatch(resetInformTimeState());
                  } else if (goBackPopupState == "MultiCenterState") {
                    await HandleGoBack({
                      conversationId: conversationId,
                      targetState: "MultiCenterState",
                    });
                    if (provisionalBookingFlag && isMultiCenterWorkflow) {
                      handleChangeConvertToProvisional()
                    }
                    useAppDispatch(resetInformTimeState());
                  }
                } else {
                  if (currentState == "ServiceRequestState" || currentState == "InformTimeState") {
                    await HandleGoBack({
                      conversationId: conversationId,
                      targetState: "ServiceRequestState",
                    });
                    useAppDispatch(resetServiceRequestState());
                  } else if (currentState == "DemographicState") {
                    await HandleGoBack({
                      conversationId: conversationId,
                      targetState: "InformTimeState",
                    });
                    useAppDispatch(resetInformTimeState());
                    // if (provisionalBookingFlag && isMultiCenterWorkflow) {
                    //   handleChangeConvertToProvisional()
                    // }
                  } else if (currentState == "MultiCenterState") {
                    useAppDispatch(resetServiceRequestState());
                    await HandleGoBack({
                      conversationId: conversationId,
                      targetState: "ServiceRequestState",
                    });
                  }
                }
                useAppDispatch(
                  setGoBackPopup({
                    goBackPopup: false,
                    goBackPopupState: null
                  })
                );
              }}
            >
              {goBackLoadingStatus ? <LoaderDots /> : "Yes, go back"}
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
                  setGoBackPopup({
                    goBackPopup: false,
                  })
                );
              }}
            >
              No, continue
            </CustomaCssButtonWrapper>
          </ButtonContainerWrapper>
        </Box>
      </Box>
    </ParentBoxWrapper>
  );
}

export default ConfirmGoBack;
