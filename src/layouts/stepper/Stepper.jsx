import { Box, Step, StepLabel, Stepper, useMediaQuery } from "@mui/material";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { HandleGoBack } from "@/api/goBack/HandleGoBack.api";
import {
  ColorlibStepIconBoxDesktop,
  LabelTextDesktop,
  ModeEditPencilIconDesktop,
  StepperContainerDesktop,
  StepperLabelDesktop,
} from "./Stepper.desktop.style";
import {
  ColorlibStepIconBoxMobile,
  LabelTextMobile,
  ModeEditPencilIconMobile,
  StepperContainerMobile,
  StepperLabelMobile,
} from "./Stepper.mobile.style";
import { ColorlibConnector } from "./Stepper.style";
import("@mui/material").StepIconProps;
const ColorlibStepIconStyle = {
  base: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter Variable",
  },
  active: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Inter Variable",
  },
  completed: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Inter Variable",
  },
};

function ColorlibStepIcon(props) {
  const { active, completed, className, theme, isMobile, screenHeight } = props;
  const ColorlibStepIconBoxWrapper = isMobile
    ? ColorlibStepIconBoxMobile
    : ColorlibStepIconBoxDesktop;
  return (
    <ColorlibStepIconBoxWrapper
      theme={theme}
      ColorlibStepIconStyle={ColorlibStepIconStyle}
      active={active}
      completed={completed}
      isMobile={isMobile}
      screenHeight={screenHeight}
      className={className}
    />
  );
}

const CustomizedSteppers = ({ theme, applyEmbeddedView }) => {
  const { setGoBackPopup, resetInformTimeState, resetServiceRequestState } =
    chatDetailsActions;
  const { conversationId, currentState, eReferralWorkflow, loading, provisionalBookingFlag } =
    useSelector((state) => state.chatDetails);
  const { screenHeight } = useSelector((state) => state.screenSize);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const curr = useSelector((state) => state.chatDetails);
  const isProvisional = provisionalBookingFlag ? !provisionalBookingFlag : curr?.conversationTags.includes("PROVISIONAL_BOOKING");
  const centerDetails = useSelector((state) => state.centerDetails);
  let stepperWidth = isMobile ? "100%" : isTablet ? "75%" : "75%";

  let scanDetails = curr?.useServiceRequestUtterance
    ? curr?.useServiceRequestUtterance?.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    )
    : eReferralWorkflow
      ? "Verification"
      : "Scan Details";

  let selectedLocation = curr?.selectedCenter;
  let selectedSlot =
    curr?.selectedSlot &&
    moment(curr?.selectedSlot, "YYYY-MM-DD HH:mm:ss A").format(
      "DD MMM YYYY (h:mm A)"
    );
  let selectedSlotAndLocation =
    selectedLocation && selectedSlot ? (
      <div style={{ fontFamily: "Inter Variable", display: "inline" }}>
        {`${String(selectedLocation).slice(0, 20)}`}
        <div>{selectedSlot}</div>
      </div>
    ) : selectedSlot ? (
      <div style={{ fontFamily: "Inter Variable", display: "inline" }}>
        {selectedSlot}
      </div>
    ) : curr?.isMultiCenterWorkflow ? (
      curr?.selectedCenterName ? curr?.selectedCenterName : "Location & Slot"
    ) : (
      "Slot Selection"
    );
  console.log("curr", curr)
  let DemographicDetails = eReferralWorkflow ? "Confirmation" : "Demographics";
  const steps = [scanDetails, selectedSlotAndLocation, DemographicDetails];
  const location = useLocation();
  let activeStep = 0;
  if (eReferralWorkflow && location.pathname == "/") {
  } else if (location.pathname == "/") {
    steps[0] = "Upload Referral";
    return;
  } else if (location.pathname == "/upload-referral") {
    steps[0] = "Upload Referral";
    stepperWidth = "75%";
    activeStep = 0;
  } else if (location.pathname == "/referral-form") {
    stepperWidth = isMobile ? "90%" : isTablet ? "75%" : "75%";
    activeStep = 0;
  } else if (location.pathname == "/register-phone") {
    activeStep = 0;
  } else if (location.pathname == "/ereferral-confirm-dob") {
    activeStep = 0;
  } else if (location.pathname == "/ereferral-review-details") {
    activeStep = 0;
  } else if (location.pathname == "/scanList") {
    activeStep = 0;
    scanDetails = "Scan Details";
  } else if (location.pathname == "/scan-modality") {
    activeStep = 0;
  } else if (location.pathname == "/scanDetails") {
    activeStep = 0;
  } else if (location.pathname == "/questions") {
    activeStep = 0;
  } else if (location.pathname == "/questions/fasting") {
    activeStep = 1;
  } else if (location.pathname == "/questions/additional") {
    activeStep = 1;
  } else if (location.pathname == "/questions/pregnancy") {
    activeStep = 0;
  } else if (location.pathname == "/questions/cost") {
    return;
  } else if (location.pathname == "/select-center") {
    activeStep = 0;
  } else if (location.pathname == "/select-slots") {
    activeStep = 1;
  } else if (location.pathname == "/multi-center-calendar") {
    steps[1] = "Location & Slot"
    activeStep = 1;
  } else if (location.pathname == "/confirm-slots") {
    activeStep = 2;
  } else if (location.pathname == "/booking-completed") {
    return;
  } else if (location.pathname == "/biopsy-injection") {
    activeStep = 0;
  } else {
    return;
  }

  const StepperContainerWrapper = isMobile
    ? StepperContainerMobile
    : StepperContainerDesktop;

  const LabelTextWrapper = isMobile ? LabelTextMobile : LabelTextDesktop;

  const ModeEditPencilIconWrapper = isMobile
    ? ModeEditPencilIconMobile
    : ModeEditPencilIconDesktop;

  const StepperLabelWrapper = isMobile
    ? StepperLabelMobile
    : StepperLabelDesktop;

  return (
    <StepperContainerWrapper
      sx={{
        width: stepperWidth,
        margin: "auto",
        marginTop: "14px",
      }}
      spacing={4}
    >
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={
          <ColorlibConnector
            theme={theme}
            themeColor={theme}
            isMobile={isMobile}
            isTablet={isTablet}
            screenHeight={screenHeight}
            smallWidth={
              location.pathname === "/w" ||
              location.pathname === "/upload-referral" ||
              location.pathname === "/referral-form"
            }
          />
        }
      >
        {steps.map((label, index) => {
          const handleChange = async () => {
            if (index == 0) {
              useAppDispatch(
                setGoBackPopup({
                  goBackPopup: true,
                  goBackPopupState: "ServiceRequestState"
                })
              );
            } else if (index = 1) {
              useAppDispatch(
                setGoBackPopup({
                  goBackPopup: true,
                  goBackPopupState: "InformTimeState"
                })
              );
            }
          };

          return (
            <Step key={label}>
              <StepLabel
                StepIconComponent={(props) => (
                  <ColorlibStepIcon {...props} theme={theme} />
                )}
              >
                <LabelTextWrapper
                  sx={{
                    textDecoration:
                      activeStep > index &&
                      !eReferralWorkflow &&
                      (!isProvisional || index !== 1) &&
                      "underline",
                    cursor:
                      activeStep > index &&
                      !eReferralWorkflow &&
                      (!isProvisional || index !== 1) &&
                      "pointer",
                  }}
                  onClick={async () => {
                    if (eReferralWorkflow) {
                      return;
                    }
                    if (isProvisional && index == 1) {
                      return;
                    }
                    if (activeStep > index && !eReferralWorkflow) {
                      handleChange();
                    }
                  }}
                >
                  {" "}
                  <Box sx={{ textAlign: "center", justifyContent: "center" }}>
                    {(!isProvisional || index !== 1) &&
                      activeStep > index &&
                      !eReferralWorkflow && <ModeEditPencilIconWrapper />}
                    <StepperLabelWrapper> {label} </StepperLabelWrapper>
                  </Box>
                </LabelTextWrapper>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </StepperContainerWrapper>
  );
};

export default CustomizedSteppers;
