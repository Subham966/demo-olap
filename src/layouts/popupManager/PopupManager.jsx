import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import {
  Alert,
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MinimizeIcon from "@mui/icons-material/Minimize";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import CustomizedSteppers from "../stepper/Stepper";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import { COLORS } from "@/theme";
import { lazy } from "react";
import NetworkError from "@/pages/Error/NetworkError";
import ApplicationError from "@/pages/Error/ApplicationError";
import AdditionalCostEscalation from "@/pages/EscalationErrorsPage/AdditionalCostEscalation";
import AdditionalQuestionEscalation from "@/pages/EscalationErrorsPage/AdditionalQuestionEscalation";
import CallerRequestedForAnOperatorEscalation from "@/pages/EscalationErrorsPage/CallerRequestedForAnOperatorEscalation";
import ConfirmRestart from "@/pages/ConfirmRestart";
import ConfirmGoBack from "@/pages/ConfirmGoBack";
import ConversationTimeout from "@/pages/ConversationTimeout";
import DetailsNotCapturedEscalation from "@/pages/EscalationErrorsPage/DetailsNotCapturedEscalation";
import FastingEscalation from "@/pages/EscalationErrorsPage/FastingEscalation";
import InjectionBiopsyHelp from "@/pages/InjectionBiopsyHelp";
import MultipleModalityEscalation from "@/pages/EscalationErrorsPage/MultipleModalityEscalation";
import PythonError from "@/pages/Error/PythonError";
import SafetyQuestionEscalation from "@/pages/EscalationErrorsPage/SafetyQuestionEscalation";
import ServiceNotAvailableAtCenterEscalation from "@/pages/EscalationErrorsPage/ServiceNotAvailableAtCenterEscalation";
import ServiceNotHandledByAiEscalation from "@/pages/EscalationErrorsPage/ServiceNotHandledByAiEscalation";
import SlotQueryEscalation from "@/pages/EscalationErrorsPage/SlotQueryEscalation";
import SystemErrorEscalation from "@/pages/EscalationErrorsPage/SystemErrorEscalation";
import WalkinAppointmentEscalation from "@/pages/EscalationErrorsPage/WalkinAppointmentEscalation";
import TimeoutError from "@/pages/Error/TimeoutError";
import ConversationNotFound from "@/pages/Error/ConversationNotFound";
import ProvisionalBooking from "@/pages/ProvisionalBooking";
import NeedHelp from "@/pages/NeedHelp/NeedHelp";
import TriagingRules from "@/pages/TriagingRules";
import PregnancyQuestion from "@/pages/PregnancyQuestion";
import AskGender from "@/pages/AskGender";
import InputEscalation from "@/pages/InputEscalation";
import FemaleSonographer from "@/pages/FemaleSonographer";
import ConfirmBookNewAppointment from "@/pages/ConfirmBookNewAppointment";
import SlotGetsBooked from "@/pages/SlotGetsBooked";
import ConfirmSlotDetails from "@/pages/ConfirmSlotDetails";
import MultipleModalityWalkin from "@/pages/MultipleModalityWalkin";
import BookSlotForWalkin from "@/pages/BookSlotForWalkin";

function PopupManager() {
  const navigate = useNavigate();
  const {
    setChatBotOpanStatus,
    setBotState,
    resetErrorMessage,
    setRestartConversationPopup,
  } = chatDetailsActions;
  const { clearTimer } = conversationTimeoutActions;
  const { showPopup, popupScreenName } = useSelector(
    (state) => state.chatDetails
  );
  const responseCode = useSelector((state) => state.chatDetails.responseCode);
  const pregnancyWeeks = useSelector(
    (state) => state.chatDetails.pregnancyWeeks
  );
  const restartConversationPopup = useSelector(
    (state) => state.chatDetails.restartConversationPopup
  );
  const pregnancyDays = useSelector((state) => state.chatDetails.pregnancyDays);
  const conversationTags = useSelector(
    (state) => state.chatDetails.conversationTags
  );
  const botState = useSelector((state) => state.chatDetails.botState);
  const themeData = useSelector((state) => state.multiTheme); // Access theme data from Redux store
  const conversationId = useSelector(
    (state) => state.chatDetails.conversationId
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const emb = themeData?.apply_embedded_view == true ? true : false;
  return (
    <Box>
      {popupScreenName == "ApplicationError" && <ApplicationError />}
      {popupScreenName == "AdditionalCostEscalation" && (
        <AdditionalCostEscalation />
      )}
      {popupScreenName == "AdditionalQuestionEscalation" && (
        <AdditionalQuestionEscalation />
      )}
      {popupScreenName == "CallerRequestedForAnOperatorEscalation" && (
        <CallerRequestedForAnOperatorEscalation />
      )}
      {popupScreenName == "ConfirmRestart" && <ConfirmRestart />}
      {popupScreenName == "ConfirmBookNewAppointment" && (
        <ConfirmBookNewAppointment />
      )}
      {popupScreenName == "ConfirmGoBack" && <ConfirmGoBack />}
      {popupScreenName == "ConversationTimeout" && <ConversationTimeout />}
      {popupScreenName == "ConversationNotFound" && <ConversationNotFound />}
      {popupScreenName == "DetailsNotCapturedEscalation" && (
        <DetailsNotCapturedEscalation />
      )}
      {popupScreenName == "FastingEscalation" && <FastingEscalation />}
      {popupScreenName == "InjectionBiopsyHelp" && <InjectionBiopsyHelp />}
      {popupScreenName == "MultipleModalityEscalation" && (
        <MultipleModalityEscalation />
      )}
      {popupScreenName == "NeedHelp" && <NeedHelp />}
      {popupScreenName == "NetworkError" && <NetworkError />}
      {popupScreenName == "PythonError" && <PythonError />}
      {popupScreenName == "ProvisionalBooking" && <ProvisionalBooking />}
      {popupScreenName == "SafetyQuestionEscalation" && (
        <SafetyQuestionEscalation />
      )}
      {popupScreenName == "ServiceNotAvailableAtCenterEscalation" && (
        <ServiceNotAvailableAtCenterEscalation />
      )}
      {popupScreenName == "ServiceNotHandledByAiEscalation" && (
        <ServiceNotHandledByAiEscalation />
      )}
      {popupScreenName == "SlotQueryEscalation" && <SlotQueryEscalation />}
      {popupScreenName == "SystemErrorEscalation" && <SystemErrorEscalation />}
      {popupScreenName == "SlotGetsBooked" && <SlotGetsBooked />}
      {popupScreenName == "ConfirmSlotDetails" && <ConfirmSlotDetails />}
      {popupScreenName == "TimeoutError" && <TimeoutError />}
      {popupScreenName == "WalkinAppointmentEscalation" && (
        <WalkinAppointmentEscalation />
      )}
      {popupScreenName == "TriagingRules" && <TriagingRules />}
      {popupScreenName == "PregnancyQuestion" && <PregnancyQuestion />}
      {popupScreenName == "AskGender" && <AskGender />}
      {popupScreenName == "InputEscalation" && <InputEscalation />}
      {popupScreenName == "FemaleSonographer" && <FemaleSonographer />}
      {popupScreenName == "MultipleModalityWalkin" && <MultipleModalityWalkin />}
      {popupScreenName == "BookSlotForWalkin" && <BookSlotForWalkin />}
    </Box>
  );
}

export default PopupManager;
