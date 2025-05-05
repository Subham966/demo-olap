import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MinimizeIcon from "@mui/icons-material/Minimize";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import CustomizedSteppers from "../stepper/Stepper";
import { conversationTimeoutActions } from "@/redux/reducers/conversationTimeout";
import ConfirmRestart from "@/pages/ConfirmRestart";
import ConfirmGoBack from "@/pages/ConfirmGoBack";
import PopupManager from "../popupManager/PopupManager";
import CustomizedGoBack from "../goBack/GoBack";
import moment from "moment";
import { networkStatusActions } from "@/redux/reducers/NetworkStatus";
import {
  AppointmentBookingTextMobile,
  BodyContainerMobile,
  BotLayoutContainerMobile,
  BotRibbenMobile,
  ConversationTimeOutAlertMobile,
  NeedHelpContainerMobile,
  OfflineTextMobile,
  PopupBoxMobile,
  StepperContainerMobile,
  TimeoutContainerMobile,
} from "./BotLayout.mobile.style";
import {
  AppointmentBookingTextDesktop,
  BodyContainerDesktop,
  BotLayoutContainerDesktop,
  BotRibbenDesktop,
  ConversationTimeOutAlertDesktop,
  NeedHelpContainerDesktop,
  OfflineTextDesktop,
  PopupBoxDesktop,
  StepperContainerDesktop,
  TimeoutContainerDesktop,
} from "./BotLayout.desktop.style";
import ConfirmBookNewAppointment from "@/pages/ConfirmBookNewAppointment";
import { motion } from "framer-motion";
import { shakeActions } from "@/redux/reducers/shakeReducer/ShakeSlice";
function BotLayout() {
  const [botLoader, setBotLoader] = useState(false);
  const navigate = useNavigate();
  const {
    setChatBotOpanStatus,
    setBotState,
    resetErrorMessage,
    setRestartConversationPopup,
    setPopupScreen,
    setAutomationLogicLoadingStatus,
  } = chatDetailsActions;
  const { setShake } = shakeActions;
  const { setNetworkStatusDetails, resetNetworkStatusDetails } =
    networkStatusActions;
  const { clearTimer, setConversationTimeout } = conversationTimeoutActions;
  const {
    isChatbotOpen,
    errorMessage,
    directReceptionNumber,
    userLastUtterance,
    requestedModality,
    eReferralWorkflow,
    automationLogicLoadingStatus,
    isMultiCenterWorkflow,
    bookNewAppointmentPopup,
  } = useSelector((state) => state.chatDetails);
  const location = useLocation();
  const { showPopup, goBackPopup } = useSelector((state) => state.chatDetails);
  const { isOnline } = useSelector((state) => state.networkStatus);
  const { networkErrorCount } = useSelector((state) => state.errorDetails);
  const responseCode = useSelector((state) => state.chatDetails.responseCode);
  const pregnancyWeeks = useSelector(
    (state) => state.chatDetails.pregnancyWeeks
  );
  const pregnancyDays = useSelector((state) => state.chatDetails.pregnancyDays);
  const botState = useSelector((state) => state.chatDetails.botState);
  const themeData = useSelector((state) => state.multiTheme); // Access theme data from Redux store
  const conversationId = useSelector(
    (state) => state.chatDetails.conversationId
  );
  const slotTiming = useSelector((state) => state.chatDetails.selectedSlot);
  const centerDetails = useSelector((state) => state.centerDetails);
  const restartConversationPopup = useSelector(
    (state) => state.chatDetails.restartConversationPopup
  );
  const conversationTags = useSelector(
    (state) => state.chatDetails.conversationTags
  );
  const { isConversationTerminated, isTimerStarted, startTime, timeout } =
    useSelector((state) => state.conversationTimeout);

  const changeChatbotStatus = () => {
    useAppDispatch(setChatBotOpanStatus(!isChatbotOpen));
  };
  const { screenWidth, screenHeight } = useSelector(
    (state) => state.screenSize
  ); // Access theme data from Redux store

  const [oneMinuteTimer, setOneMinuteTimer] = useState(60);
  const [showOneMinuteTimerAlert, setShowOneMinuteTimerAlert] = useState(false);
  const [showFiveMinuteTimerAlert, setShowFiveMinuteTimerAlert] = useState(false);

  const { shake } = useSelector((state) => state.shakeFunc);
  useEffect(() => {
    if (shake) {
      setTimeout(() => useAppDispatch(setShake(false)), 500);
    }
  }, [shake]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTimerStarted) {
        const elapsedTime = moment().valueOf() - startTime;
        if (elapsedTime > timeout) {
          useAppDispatch(setConversationTimeout());
          setShowOneMinuteTimerAlert(false);
          setShowFiveMinuteTimerAlert(false);
          clearInterval(interval);
        } else if (elapsedTime > timeout - 60000 && elapsedTime <= timeout) {
          // Show 1-minute timer alert
          setShowOneMinuteTimerAlert(true);
          setShowFiveMinuteTimerAlert(false);
          setOneMinuteTimer(Math.ceil((timeout - elapsedTime) / 1000));
        } else if (
          elapsedTime > timeout - 300000 &&
          elapsedTime <= timeout - 240000
        ) {
          // Show 5-minute alert
          setShowFiveMinuteTimerAlert(true);
          setShowOneMinuteTimerAlert(false);
        } else if (
          elapsedTime > timeout - 300000 &&
          elapsedTime <= timeout - 60000
        ) {
          // Disable 10-minute alert for less than 5 minutes remaining
          setShowFiveMinuteTimerAlert(false);
          setShowOneMinuteTimerAlert(false);
        } else {
          setShowFiveMinuteTimerAlert(false);
          setShowOneMinuteTimerAlert(false);
        }
      } else {
        setShowFiveMinuteTimerAlert(false);
        setShowOneMinuteTimerAlert(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerStarted, startTime, timeout]);

  useEffect(() => {
    if (!conversationId) {
      setShowFiveMinuteTimerAlert(false);
      setShowOneMinuteTimerAlert(false);
    }
  }, [conversationId]);

  useEffect(() => {
    if (isConversationTerminated) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "ConversationTimeout",
        })
      );
    }
  }, [isConversationTerminated]);

  useEffect(() => {
    if (eReferralWorkflow) {
      navigate("/ereferral-confirm-dob");
    }
  }, []);

  const applyRoutingLogic = async () => {
    //Select Modality Page
    const allowedCodes = [
      "img_service_request.sr.reask_patient_gender",
      "img_service_request.sr.fasting_duration_and_guideline",
      "img_service_request.sr.first_safety_question",
      "img_service_request.sr.next_safety_question",
      "img_service_request.sr.last_safety_question",
      "img_service_request.sr.additional_question_first_attempt",
      "img_service_request.sr.modality_2",
      "img_service_request.sr.additional_cost_with_gap",
      "img_service_request.sr.additional_cost_exact",
      "img_service_request.sr.additional_cost_approx",
      "img_service_request.sr.additional_cost_dummy",
      "img_service_request.sr.after_business_hours_cost_only_dummy",
      "img_service_request.sr.reconfirm_from_patient_on_additional_cost_denied_by_patient",
      "img_service_request.sr.bodypart",
      "img_service_request.sr.bodypart_2",
      "img_service_request.sr.modality",
      "img_service_request.sr.bodypart_and_modality_2",
      "/biopsy-injection",
      "/referral-form",
      "/booking-completed",
      "/home",
    ]
    if (
      responseCode.includes("img_service_request.sr.bodypart_and_modality_1")
    ) {
      if (eReferralWorkflow) {
        useAppDispatch(setAutomationLogicLoadingStatus(true));
        await useHandleUtterance({
          conversation_id: conversationId,
          utterance: requestedModality,
        });
        useAppDispatch(setAutomationLogicLoadingStatus(false));
      } else {
        navigate("/scanList");
        setBotLoader(false);
        useAppDispatch(setAutomationLogicLoadingStatus(false));
      }
    } else if (
      responseCode.includes("img_service_request.sr.modality") ||
      responseCode.includes("img_service_request.sr.modality_2")
    ) {
      navigate("/scan-modality");
    } else if (
      responseCode.includes(
        "img_service_request.sr.escalate_to_operator_multiple_modality"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "MultipleModalityEscalation",
        })
      );
    } else if (
      responseCode.includes("img_service_request.sr.service_not_handled_by_AI")
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "ServiceNotHandledByAiEscalation",
        })
      );
    } else if (
      responseCode.includes(
        "img_service_request.sr.requested_service_not_available_at_center"
      )
    ) {
      setBotLoader(true);
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "ServiceNotAvailableAtCenterEscalation",
        })
      );
      setBotLoader(false);
    } else if (
      responseCode.includes(
        "img_service_request.sr.escalate_to_operator_explain_additional_cost"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "AdditionalCostEscalation",
        })
      );
    } else if (
      responseCode.includes("common.system_error") ||
      responseCode.includes("img_inform_time.it.slot_query_error_100")
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "SystemErrorEscalation",
        })
      );
    } else if (
      responseCode.includes(
        "img_service_request.sr.service_requested_by_patient_is_a_walkin"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "WalkinAppointmentEscalation",
        })
      );
    } else if (
      responseCode.includes(
        "img_service_request.sr.confirm_single_appointment_in_multiple_booking_scenario"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "MultipleModalityWalkin",
        })
      );
    }
    else if (
      responseCode.includes(
        "img_inform_time.it.slot_query_error_103_machine_for_modality_not_available_at_center"
      )
    ) {
      navigate("/modality-not-available-at-center-escalation");
      setBotLoader(false);
    } else if (
      responseCode.includes("img_inform_time.it.ris_interface_error")
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "SlotQueryEscalation",
        })
      );
    } else if (
      responseCode.includes("img_service_request.sr.triaging_question")
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "TriagingRules",
        })
      );
      setBotLoader(false);
    } else if (
      responseCode.includes("img_service_request.sr.ask_if_scan_for_pregnancy")
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "PregnancyQuestion",
        })
      );
      setBotLoader(false);
    } else if (
      responseCode.includes("img_service_request.sr.ask_patient_gender") ||
      responseCode.includes("img_service_request.sr.reask_patient_gender")
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "AskGender",
        })
      );
      setBotLoader(false);
    }
    //Select Bodypart Page
    else if (
      responseCode.includes("img_service_request.sr.bodypart") ||
      responseCode.includes("img_service_request.sr.bodypart_2")
    ) {
      navigate("/scanDetails");
      setBotLoader(false);
    }

    //Send Service confirm "Yes" Message to backend
    else if (
      responseCode.includes(
        "img_service_request.sr.confirm_bodypart_and_modality"
      )
    ) {
      useAppDispatch(setAutomationLogicLoadingStatus(true));
      await useHandleUtterance({
        conversation_id: conversationId,
        utterance: "yes",
      });
      useAppDispatch(setAutomationLogicLoadingStatus(false));
    } else if (
      responseCode.includes(
        "img_service_request.sr.confirm_bodypart_and_modality_new"
      )
    ) {
      useAppDispatch(setAutomationLogicLoadingStatus(true));
      setBotLoader(true);
      await useHandleUtterance({
        conversation_id: conversationId,
        utterance: "yes",
      });
      useAppDispatch(setAutomationLogicLoadingStatus(false));
    }

    //Answer the fasting question (/questions where fasting question get rendered)
    else if (
      responseCode.includes(
        "img_service_request.sr.fasting_duration_and_guideline"
      )
    ) {
      navigate("/questions");
      // useAppDispatch(setAutomationLogicLoadingStatus(false));
      setBotLoader(false);
    }

    //Redirect to '/fasting-escalation' page.  (If user deny)
    else if (
      responseCode.includes(
        "img_service_request.sr.escalate_to_operator_explain_fasting"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "FastingEscalation",
        })
      );
    }

    //Answer the additional question (/questions where additional question get rendered)
    else if (
      responseCode.includes(
        "img_service_request.sr.additional_question_first_attempt"
      ) ||
      responseCode.includes("img_service_request.sr.additional_cost_with_gap")
    ) {
      setBotLoader(false);
      navigate("/questions");
    } else if (
      responseCode.includes("img_service_request.sr.additional_cost_approx") ||
      responseCode.includes("img_service_request.sr.additional_cost_dummy")
    ) {
      setBotLoader(false);

      navigate("/questions");
    }

    //Redirect to '/additional-question-escalation' page.  (If user info is not validate )
    else if (
      responseCode.includes(
        "img_service_request.sr.additional_question_call_escalation"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "AdditionalQuestionEscalation",
        })
      );
    }

    //Redirect to '/caller-requested-for-an-operator' page.  (If user requested for operator )
    else if (
      responseCode.includes("common.forward_call_to_the_operator") &&
      !responseCode.includes(
        "img_service_request.sr.escalate_to_operator_on_safety_check_failure"
      ) &&
      !responseCode.includes(
        "img_service_request.sr.escalate_to_operator_details_not_captured"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "CallerRequestedForAnOperatorEscalation",
        })
      );
    } else if (
      responseCode.includes(
        "img_service_request.sr.escalate_to_operator_details_not_captured"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "DetailsNotCapturedEscalation",
        })
      );
    } else if (
      responseCode.includes("img_miscellaneous.appointment_provisional_booking")
    ) {
      navigate("/provisional-booking");
      setBotLoader(false);
    } else if (
      responseCode.includes("img_service_request.sr.first_safety_question") ||
      responseCode.includes("img_service_request.sr.next_safety_question") ||
      responseCode.includes("img_service_request.sr.last_safety_question")
    ) {
      navigate("/questions");
      setBotLoader(false);
    }

    //Redirect to '/safety-question-escalation' page.  (If user info is not validate )
    else if (
      responseCode.includes(
        "img_service_request.sr.reconfirm_answer_to_safety_check_failure"
      )
    ) {
      useAppDispatch(setAutomationLogicLoadingStatus(true));
      await useHandleUtterance({
        conversation_id: conversationId,
        utterance: userLastUtterance,
      });
      useAppDispatch(setAutomationLogicLoadingStatus(false));
    }

    //Redirect to '/caller-requested-for-an-operator' page.  (If user requested for operator )
    else if (
      responseCode.includes(
        "img_service_request.sr.escalate_to_operator_on_safety_check_failure"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "SafetyQuestionEscalation",
        })
      );
    } else if (
      responseCode.includes("img_service_request.sr.ask_weeks_since_pregnant")
    ) {
      if (pregnancyWeeks == "0 Weeks") {
        navigate("/questions/pregnancy");
        setBotLoader(false);
      } else {
        useAppDispatch(setAutomationLogicLoadingStatus(true));
        await useHandleUtterance({
          conversation_id: conversationId,
          utterance: `${pregnancyWeeks} ${pregnancyDays}`,
        });
        useAppDispatch(setAutomationLogicLoadingStatus(false));
      }
    } else if (
      responseCode.includes("img_demographics.dm.first_name") ||
      botState === "DemographicState"
    ) {
      navigate("/confirm-slots");
      setBotLoader(false);
      useAppDispatch(setAutomationLogicLoadingStatus(false));
    } else if (
      responseCode.includes(
        "img_multi_center.ml.one_center_found_in_caller_requested_suburb"
      ) &&
      botState == "MultiCenterState"
    ) {
      useAppDispatch(setAutomationLogicLoadingStatus(true));
      await useHandleUtterance({
        conversation_id: conversationId,
        utterance: "yes",
      });
      useAppDispatch(setAutomationLogicLoadingStatus(false));
    } else if (
      responseCode.includes("img_inform_time_v2.ask_for_time") ||
      responseCode.includes("img_inform_time_v2.default.today_or_tomorrow") ||
      responseCode.includes("img_inform_time.it.default.few.tomorrow") ||
      responseCode.includes("img_inform_time.it.default.few.today") ||
      responseCode.includes(
        "img_inform_time.it.request_for_confirmation_default_response_single"
      ) ||
      botState === "InformTimeState"
    ) {
      if (isMultiCenterWorkflow) {
        navigate("/multi-center-calendar");
      } else {
        navigate("/select-slots");
      }
      setBotLoader(false);
    } else if (
      responseCode.includes(
        "common.operator_not_available_during_customer_support_working_hours"
      ) ||
      responseCode.includes("common.system_error") ||
      responseCode.includes(
        "common.operator_not_available_after_customer_support_working_hours"
      )
    ) {
      navigate("/service-not-handled-by-AI");
      setBotLoader(false);
    } else if (
      responseCode.includes("img_service_request.sr.additional_cost_exact")
    ) {
      navigate("/questions");
      setBotLoader(false);
    } else if (botState === "MultiCenterState") {
      navigate("/select-center");
      setBotLoader(false);
    } else if (
      botState === "/booking-completed" &&
      conversationTags.includes("PROVISIONAL_BOOKING")
    ) {
      // useAppDispatch(
      //   setPopupScreen({
      //     showPopup: true,
      //     popupScreenName: "ProvisionalBooking",
      //   })
      // );
    } else if (botState === "/booking-completed") {
      navigate("/booking-completed");
      setBotLoader(false);
    } else if (botState === "/home") {
      navigate("/");
      setBotLoader(false);
    } else if (
      responseCode.includes(
        "img_inform_time.it.ask_if_female_sonographer_required"
      )
    ) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "FemaleSonographer",
        })
      );
    } else if (responseCode.includes(
      "img_service_request.sr.check_if_user_wants_to_book_slot_for_walkin_service"
    )) {
      useAppDispatch(
        setPopupScreen({
          showPopup: true,
          popupScreenName: "BookSlotForWalkin",
        })
      );
      useAppDispatch(setAutomationLogicLoadingStatus(false));
      setBotLoader(false);
    } else if (
      Array.isArray(responseCode)
        ? responseCode.some((code) => allowedCodes.includes(code))
        : [responseCode].some((code) => allowedCodes.includes(code))
    ) {
      setBotLoader(false);
      useAppDispatch(setAutomationLogicLoadingStatus(false));
    } else {
      if (botState) {
        setBotLoader(false);
        useAppDispatch(setAutomationLogicLoadingStatus(false));
        useAppDispatch(
          setPopupScreen({
            showPopup: true,
            popupScreenName: "InputEscalation",
          })
        );
      }
    }
  };

  useEffect(() => {
    const updateOnlineStatus = () => {
      const statusValue = navigator.onLine;
      useAppDispatch(setNetworkStatusDetails(statusValue));
    };

    // Add event listeners for online/offline status changes
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Initial status check
    updateOnlineStatus();

    // Clean up the event listeners
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [navigator.onLine]);

  useEffect(() => {
    applyRoutingLogic();
  }, [responseCode]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const emb = themeData?.apply_embedded_view == true ? true : false;
  const ListOfsteppersScreen = [
    "/upload-referral",
    "/referral-form",
    "/register-phone",
    "/ereferral-confirm-dob",
    "/ereferral-review-details",
    "/scanList",
    "/scan-modality",
    "/scanDetails",
    "/questions",
    "/questions/fasting",
    "/questions/additional",
    "/questions/pregnancy",
    "/select-center",
    "/select-slots",
    "/multi-center-calendar",
    "/confirm-slots",
    "/biopsy-injection",
    eReferralWorkflow && "/",
  ];



  const BotLayoutContainerWrapper = isMobile
    ? BotLayoutContainerMobile
    : BotLayoutContainerDesktop;

  const BotRibbenWrapper = isMobile ? BotRibbenMobile : BotRibbenDesktop;
  const BodyContainerWrapper = isMobile
    ? BodyContainerMobile
    : BodyContainerDesktop;
  const AppointmentBookingTextWrapper = isMobile
    ? AppointmentBookingTextMobile
    : AppointmentBookingTextDesktop;
  const ConversationTimeOutAlertWrapper = isMobile
    ? ConversationTimeOutAlertMobile
    : ConversationTimeOutAlertDesktop;
  const NeedHelpContainerWrapper = isMobile
    ? NeedHelpContainerMobile
    : NeedHelpContainerDesktop;
  const OfflineTextWrapper = isMobile ? OfflineTextMobile : OfflineTextDesktop;
  const PopupBoxWrapper = isMobile ? PopupBoxMobile : PopupBoxDesktop;
  const StepperContainerWrapper = isMobile
    ? StepperContainerMobile
    : StepperContainerDesktop;
  const TimeoutContainerWrapper = isMobile
    ? TimeoutContainerMobile
    : TimeoutContainerDesktop;

  return (
    <BotLayoutContainerWrapper
      emb={emb}
      screenWidth={screenWidth}
      screenHeight={screenHeight}
    >
      <BotRibbenWrapper
        direction="row"
        theme={theme}
        justifyContent={"space-between"}
        emb={emb}
      >
        <Stack alignItems="center">
          <Box sx={{ display: "flex", margin: "auto", marginLeft: "0px" }}>
            <IconButton>
              {!isOnline && (
                <Tooltip title="Offline" arrow>
                  <FiberManualRecordIcon
                    style={{ fill: "red", width: "15px", height: "15px", border: "1px solid green" }}
                  />
                </Tooltip>
              )}
              {isOnline && (
                <FiberManualRecordIcon
                  style={{
                    fill: "lightgreen",
                    width: "15px",
                    height: "15px",
                  }}
                />
              )}
            </IconButton>
            <AppointmentBookingTextWrapper>
              Appointment Booking
            </AppointmentBookingTextWrapper>
          </Box>
        </Stack>

        <Stack direction="row">
          <IconButton onClick={() => changeChatbotStatus()}>
            <Tooltip title="Minimize" arrow>
              <MinimizeIcon style={{ fill: theme.palette.text.primaryTheme }} />
            </Tooltip>
          </IconButton>
          <IconButton>
            <Tooltip title="Homepage" arrow>
              <HomeIcon
                style={{ fill: theme.palette.text.primaryTheme }}
                onClick={() => {
                  if (
                    botState &&
                    botState != "/" &&
                    botState != "/home" &&
                    botState != ""
                  ) {
                    useAppDispatch(
                      setRestartConversationPopup({
                        restartConversationPopup: true,
                      })
                    );
                  }
                }}
              />
            </Tooltip>
          </IconButton>
        </Stack>
      </BotRibbenWrapper>
      <Box sx={{
        position: "absolute", width: "100%", alignContent: "flex-end", justifyContent: "flex-end",
        display: !emb ? "none" : botState &&
          botState != "/" &&
          botState != "/home" &&
          botState != "" ? "flex" : "none", zIndex: 999,
        marginTop: "0px",
      }}>
        <IconButton sx={{ width: "40px", }} onClick={() => {
          if (
            botState &&
            botState != "/" &&
            botState != "/home" &&
            botState != ""
          ) {
            useAppDispatch(
              setRestartConversationPopup({
                restartConversationPopup: true,
              })
            );
          }
        }}>
          <Tooltip title="Homepage" arrow>
            <Box
              sx={{
                "& svg path": {
                  fill: theme.palette.primary.activeButton,
                },
                width: "30px"
              }}

            >
              <HomeIcon sx={{ zoom: "1.15" }} />
            </Box>
          </Tooltip>
        </IconButton>
      </Box>
      <StepperContainerWrapper
        emb={emb}
        isStepperPresent={ListOfsteppersScreen.includes(location.pathname)}
      >
        {(showOneMinuteTimerAlert || showFiveMinuteTimerAlert) && (
          <TimeoutContainerWrapper>
            {showOneMinuteTimerAlert && (
              <ConversationTimeOutAlertWrapper>{`Please respond. otherwise, this session will end in ${oneMinuteTimer} seconds.`}</ConversationTimeOutAlertWrapper>
            )}
            {showFiveMinuteTimerAlert && (
              <ConversationTimeOutAlertWrapper>
                Please respond. otherwise, this session will end in 5
                minutes.
              </ConversationTimeOutAlertWrapper>
            )}
          </TimeoutContainerWrapper>
        )}
        <CustomizedGoBack applyEmbeddedView={emb} />
        <CustomizedSteppers
          activeStep={0}
          theme={theme}
          applyEmbeddedView={emb}
        />
      </StepperContainerWrapper>

      <BodyContainerWrapper
        isStepperPresent={ListOfsteppersScreen.includes(location.pathname)}
        emb={emb}
      >
        {showPopup && (
          <PopupBoxWrapper
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <PopupManager />
          </PopupBoxWrapper>
        )}
        {bookNewAppointmentPopup && (
          <PopupBoxWrapper
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <ConfirmBookNewAppointment />
          </PopupBoxWrapper>
        )}
        {restartConversationPopup && (
          <PopupBoxWrapper
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <ConfirmRestart />
          </PopupBoxWrapper>
        )}
        {goBackPopup && (
          <PopupBoxWrapper
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <ConfirmGoBack />
          </PopupBoxWrapper>
        )}
        {goBackPopup && (
          <PopupBoxWrapper
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <ConfirmGoBack />
          </PopupBoxWrapper>
        )}

        <Box padding={isMobile && "15px"}>
          {botLoader ? <CustomLoader /> : <Outlet />}
        </Box>
      </BodyContainerWrapper>

      <NeedHelpContainerWrapper
        sx={{
          color: theme.palette.primary.main,
          display: location.pathname == "/" ? "none" : "flex",
          justifyContent: "end",
        }}
        emb={emb}
      >
        <Box
          sx={{
            width: "70px",
          }}
          onClick={() => {
            useAppDispatch(
              setPopupScreen({
                showPopup: true,
                popupScreenName: "NeedHelp",
              })
            );
          }}
        >
          Need Help
        </Box>
        {networkErrorCount != 0 && (
          <OfflineTextWrapper
            sx={{
              display: "flex",
              justifyContent: "start",
              paddingLeft: !isMobile ? "50px" : "0px",
              marginLeft: isMobile && "10px",
              position: isMobile ? "absolute" : "",
              left: 0,
              top: -5,
              width: isMobile ? "70%" : "100%",
            }}
          >
            <motion.span
              style={{
                color: "red",
                display: "inline-block",
                backgroundColor: "yellow",
                fontSize: isMobile ? "12px" : "16px"
              }}
              animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              Offline: Please check your internet connection{" "}
              {!isMobile && <span>and try again.</span>}
            </motion.span>
          </OfflineTextWrapper>
        )}
      </NeedHelpContainerWrapper>
    </BotLayoutContainerWrapper>
  );
}

export default BotLayout;
