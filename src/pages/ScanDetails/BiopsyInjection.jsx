import React, { useRef, useState } from "react";
import ScanDetailsMobileView from "./ScanDetailsMobileView";
import ScanDetailsDesktopView from "./ScanDetailsDesktopView";
import { useTheme } from "@emotion/react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { CustomTextField } from "@/elements/CustomTextField";
import { useSelector } from "react-redux";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { HandleNer } from "@/api/nerApi/HandleNer";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import {
  ContainerMobile,
  CustomConfirmButtonMobile,
  CustomTextFieldBoxMobile,
  HeadingTextMobile,
  InputBoxHeadingTextMobile,
  ProcedureBoxMobile,
  RadioButtonTextMobile,
  StyledRadioGroupMobile,
  SubmitButtonStackMobile,
} from "./BiopsyInjection.mobile.style";
import {
  ContainerDesktop,
  CustomConfirmButtonDesktop,
  CustomTextFieldBoxDesktop,
  HeadingTextDesktop,
  InputBoxHeadingTextDesktop,
  ProcedureBoxDesktop,
  RadioButtonTextDesktop,
  StyledRadioGroupDesktop,
  SubmitButtonStackDesktop,
} from "./BiopsyInjection.desktop.style";

const BiopsyInjection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { injectionBiopsyModality, conversationId, injectionBiopsyText } =
    useSelector((state) => state.chatDetails);
  const [selectedScanType, setSelectedScanType] = useState(injectionBiopsyText);
  const { screenHeight } = useSelector((state) => state.screenSize);
  const { setPopupScreen } = chatDetailsActions;
  const [showBodypartError, setShowBodypartError] = useState(false);
  const [showModalityNotMatchingError, setShowModalityNotMatchingError] =
    useState(false);
  const [textFieldValue, setTextFieldValue] = useState(
    `${injectionBiopsyModality} ${injectionBiopsyText}`
  );
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const { errorMessage, isErrorPresent, loading } = useSelector(
    (state) => state.chatDetails
  );
  const inputRef = useRef(null);
  const HandleCheckNer = (serviceName) => {
    const HandleNerData = HandleNer({
      scan: serviceName,
    });
    return HandleNerData;
  };

  const handleChange = (e) => {
    const currentValue = e?.target?.value?.toUpperCase();
    setTextFieldValue(currentValue);
  };

  const handleScanSelection = async (scanName) => {
    setIsHandleUtteranceApiPending(true);
    setShowBodypartError(false);
    let { bodypart, modality, purpose_of_study } = await HandleCheckNer(
      textFieldValue
    );
    setIsHandleUtteranceApiPending(false);
    let serviceRequestText = textFieldValue;

    if (!modality && !purpose_of_study) {
      serviceRequestText = `${serviceRequestText} ${selectedScanType} ${injectionBiopsyModality}`;
    } else {
      if (!modality) {
        serviceRequestText = `${serviceRequestText} ${injectionBiopsyModality}`;
      }
      if (!purpose_of_study) {
        serviceRequestText = `${serviceRequestText} ${selectedScanType}`;
      }
    }
    if (!modality) {
      setShowModalityNotMatchingError(true);
      return;
    }
    if (
      !purpose_of_study
    ) {
      setShowModalityNotMatchingError(true);
      return;
    }
    if (!bodypart) {
      setShowBodypartError(true);
      return;
    }
    setShowBodypartError(false);
    setShowModalityNotMatchingError(false);

    setIsHandleUtteranceApiPending(true);
    await useHandleUtterance({
      conversation_id: conversationId,
      utterance: serviceRequestText,
    });
    setIsHandleUtteranceApiPending(false);
  };
  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const CustomConfirmButtonWrapper = isMobile
    ? CustomConfirmButtonMobile
    : CustomConfirmButtonDesktop;
  const CustomTextFieldBoxWrapper = isMobile
    ? CustomTextFieldBoxMobile
    : CustomTextFieldBoxDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const InputBoxHeadingTextWrapper = isMobile
    ? InputBoxHeadingTextMobile
    : InputBoxHeadingTextDesktop;
  const ProcedureBoxWrapper = isMobile
    ? ProcedureBoxMobile
    : ProcedureBoxDesktop;
  const RadioButtonTextWrapper = isMobile
    ? RadioButtonTextMobile
    : RadioButtonTextDesktop;

  const StyledRadioGroupWrapper = isMobile
    ? StyledRadioGroupMobile
    : StyledRadioGroupDesktop;

  const SubmitButtonStackWrapper = isMobile
    ? SubmitButtonStackMobile
    : SubmitButtonStackDesktop;

  if (isHandleUtteranceApiPending || loading) return <CustomLoader />;

  return (
    <ContainerWrapper>
      <Box
        sx={{
          paddingY: isMobile ? "0px" : "40px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          margin: "auto",
          marginTop: isMobile && "20px",
        }}
      >
        <ProcedureBoxWrapper
          sx={{
            width: isMobile ? "100%" : "100%",
            margin: "auto",
            display: isMobile ? "grid" : "flex",
            alignItems: "center",
            gap: isMobile ? "10px" : "40px",
          }}
        >
          <HeadingTextWrapper
            variant="h1"
            color={theme.palette.primary.activeButton}
            textAlign={"center"}
          >
            Select Procedure :
          </HeadingTextWrapper>
          <FormControl
            sx={{
              display: "flex",
              gap: "40px",
              marginTop: isMobile && "0px",
            }}
          >
            <StyledRadioGroupWrapper
              row
              aria-labelledby="procedure-radio-buttons-group-label"
              value={selectedScanType}
              name="procedure-radio-buttons-group"
              sx={{
                gap: !isMobile && "20px",
              }}
              onChange={(e) => {
                if (e?.target?.value == "help") {
                  useAppDispatch(
                    setPopupScreen({
                      showPopup: true,
                      popupScreenName: "InjectionBiopsyHelp",
                    })
                  );
                  setSelectedScanType("");
                  setShowModalityNotMatchingError(false);
                  setShowBodypartError(false);
                  return;
                }
                setSelectedScanType(e?.target?.value);
                setTextFieldValue(
                  `${injectionBiopsyModality?.toUpperCase()} ${e?.target?.value?.toUpperCase()} `
                );
              }}
            >
              <FormControlLabel
                value="Injection"
                control={<Radio />}
                label={
                  <RadioButtonTextWrapper>Injection</RadioButtonTextWrapper>
                }
              />
              <FormControlLabel
                value="Biopsy"
                control={<Radio />}
                label={<RadioButtonTextWrapper>Biopsy</RadioButtonTextWrapper>}
              />
              <FormControlLabel
                value="Injection/Biopsy"
                control={<Radio />}
                label={
                  <RadioButtonTextWrapper> Not Sure</RadioButtonTextWrapper>
                }
              />
            </StyledRadioGroupWrapper>
          </FormControl>
        </ProcedureBoxWrapper>
      </Box>

      <Stack
        sx={{
          width: isMobile ? "100%" : "95%",
          margin: "auto",
          marginTop: isMobile && "20px",
          display: selectedScanType ? "flex" : "none",
        }}
      >
        <InputBoxHeadingTextWrapper
          variant="subtitle"
          sx={{
            color: theme.palette.primary.activeButton,
            marginBottom:
              screenHeight < 900 ? "10px !important" : "20px !important",
          }}
        >
          Please confirm or complete the details (as mentioned in the referral
          letter)
        </InputBoxHeadingTextWrapper>
        <CustomTextFieldBoxWrapper
          value={textFieldValue}
          inputRef={inputRef}
          height={
            isMobile
              ? "40px"
              : screenHeight < 600
                ? "30px"
                : screenHeight < 700
                  ? "30px"
                  : screenHeight < 800
                    ? "38px"
                    : screenHeight < 900
                      ? "42px"
                      : "50px"
          }
          sx={{ margin: "0px" }}
          padding="0px"
          name="bodyPart"
          onChange={(e) => {
            const { selectionStart } = e.target; // Get cursor position
            handleChange(e);
            setTimeout(() => {
              inputRef.current.setSelectionRange(selectionStart, selectionStart);
            }, 0);
          }}
        />
        {showBodypartError && (
          <Stack alignItems="left">
            <ErrorState
              errorMsg={
                <div>
                  <span style={{ fontWeight: "600" }}>Bodypart</span>{" "}
                  information is missing, Please type the complete details as
                  mentioned in your referral letter
                </div>
              }
            />
          </Stack>
        )}
        {showModalityNotMatchingError && !showBodypartError && (
          <Stack alignItems="left">
            <ErrorState
              errorMsg={
                <div>{`Looks like you have entered the incorrect details , as it does not look like '${injectionBiopsyModality ? injectionBiopsyModality : "Ultrasound/CT"}-${selectedScanType}' Procedure. Please type the details as mentioned in your referral letter.`}</div>
              }
            />
          </Stack>
        )}
      </Stack>

      {isErrorPresent && (
        <Stack marginTop="5px" alignItems="left">
          <ErrorState errorMsg={errorMessage} isTextAlignCenter />
        </Stack>
      )}

      <SubmitButtonStackWrapper>
        <CustomConfirmButtonWrapper
          sx={{
            margin: "auto",
            marginTop: isMobile
              ? "20px"
              : screenHeight < 600
                ? "10px"
                : screenHeight < 700
                  ? "15px"
                  : screenHeight < 800
                    ? "20px"
                    : screenHeight < 900
                      ? "30px"
                      : "50px",
            display: selectedScanType ? "flex" : "none",
            backgroundColor: theme.palette.text.activeButtonText,
            color: selectedScanType
              ? theme.palette.primary.activeButton
              : "lightgray",
            "&:hover": selectedScanType != "" && {
              color: theme.palette.text.activeButtonText,
              backgroundColor: theme.palette.primary.activeButton,
              animation: "blink 0.7s",
            },
          }}
          onClick={() => {
            if (!isHandleUtteranceApiPending) {
              handleScanSelection();
            }
          }}
        >
          Proceed
        </CustomConfirmButtonWrapper>
      </SubmitButtonStackWrapper>
    </ContainerWrapper>
  );
};

export default BiopsyInjection;
