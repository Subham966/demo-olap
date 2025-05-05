import { Stack, Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { v4 as uuidv4 } from "uuid";
import { FileUploader } from "react-drag-drop-files";
import { HandleProcessReferral } from "@/api/processReferral/HandleProcessReferral.api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHandleUtterance } from "@/api/utterance/HandleUtterance.api";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import CircularProgress from "@mui/material/CircularProgress";

import { COLORS } from "@/theme";
import { ErrorState } from "@/components/ErrorState/ErrorState";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useAppDispatch } from "@/redux";
import { useStartBooking } from "@/api/startBooking/StartBooking.api";
import * as Sentry from "@sentry/react";
import {
  BookAppointmentHeadingLabelMobile,
  BookAppointmentHeadingMobile,
  BookingOptionContainerMobile,
  BookingOptionLabelMobile,
  ContainerMobile,
  CustomBorderColorIconMobile,
  CustomCloudUploadIconMobile,
  CustomEreferralIconMobile,
  FileUploadContainerMobile,
  HeadingContainerMobile,
  HeadingLabelTextMobile,
  HeadingTextMobile,
  OptionContainerMobile,
} from "./UploadReferral.mobile.style";
import {
  BookAppointmentHeadingDesktop,
  BookAppointmentHeadingLabelDesktop,
  BookingOptionContainerDesktop,
  BookingOptionLabelDesktop,
  ContainerDesktop,
  CustomBorderColorIconDesktop,
  CustomCloudUploadIconDesktop,
  CustomEreferralIconDesktop,
  FileUploadContainerDesktop,
  HeadingContainerDesktop,
  HeadingLabelTextDesktop,
  HeadingTextDesktop,
  OptionContainerDesktop,
} from "./UploadReferral.desktop.style";

const UploadReferral = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const centerDetails = useSelector((state) => state.centerDetails);
  const [isStartBookingApiPending, setIsStartBookingApiPending] =
    useState(false);
  const [isHandleUtteranceApiPending, setIsHandleUtteranceApiPending] =
    useState(false);
  const [
    isHandleUploadReferralApiPending,
    setIsHandleUploadReferralApiPending,
  ] = useState(false);
  const { setBotState } = chatDetailsActions;
  const { errorMessage, isErrorPresent, eReferralWorkflow, eReferralCode } =
    useSelector((state) => state.chatDetails);
  const themeData = useSelector((state) => state.multiTheme);
  const emb = themeData?.apply_embedded_view == true ? true : false;
  const gradianStyle = {
    background: `repeating-linear-gradient(
      90deg,
      #f7f8f9,
      #b4b7ba,
      #c5c8cc,
      #f7f8f9,
      #b4b7ba
    )`,
    backgroundRepeat: "repeat",
    backgroundSize: "400% 100%",
    borderRadius: "10px",
    animation: "AnimationName 3s linear infinite",
    "@keyframes AnimationName": {
      "0%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0% 50%",
      },
    },
  };

  const [referralError, setRefferalError] = useState(null);
  const generateUUID = () => {
    const uuid = uuidv4();
    return uuid;
  };
  const handleFileChange = async (file) => {
    const data = {
      file: file,
      uid: generateUUID(),
    };

    const handleUploadReferralSuccessCallback = async (res) => {
      const replay = Sentry.getReplay();
      if (replay) {
        replay.start();
      }
      if (res?.error_code && res?.error_code != 0) {
        setRefferalError(res);
      } else {
        useAppDispatch(
          setBotState({
            botState: "/referral-form",
            responseCode: "/referral-form",
          })
        );
        navigate("/referral-form");
      }
    };
    const handleUploadReferralFailureCallback = async () => {
      setIsHandleUploadReferralApiPending(false);
    };
    setIsHandleUploadReferralApiPending(true);
    await HandleProcessReferral(
      data,
      handleUploadReferralSuccessCallback,
      handleUploadReferralFailureCallback
    );
    setIsHandleUploadReferralApiPending(false);
  };

  const handleStartBooking = async () => {
    const phoneNumber = "";
    const conversation_id = generateUUID();

    let data = {
      conversation_id: conversation_id,
      contact_number: phoneNumber.toString(),
      center_id: centerDetails.center_id,
    };

    const handleUtteranceCallBack = () => {
      navigate("/scanList");
    };

    const onSuccess = async () => {
      setIsHandleUtteranceApiPending(true);
      await useHandleUtterance(
        {
          conversation_id: conversation_id,
          utterance: "yes",
        },
        handleUtteranceCallBack
      );
      setIsHandleUtteranceApiPending(false);
    };

    setIsStartBookingApiPending(true);
    await useStartBooking(data, onSuccess);
    const replay = Sentry.getReplay();
    if (replay) {
      replay.start();
    }
    setIsStartBookingApiPending(false);
  };

  const ContainerWrapper = isMobile ? ContainerMobile : ContainerDesktop;
  const BookingOptionContainerWrapper = isMobile
    ? BookingOptionContainerMobile
    : BookingOptionContainerDesktop;
  const BookingOptionLabelWrapper = isMobile
    ? BookingOptionLabelMobile
    : BookingOptionLabelDesktop;
  const OptionContainerWrapper = isMobile
    ? OptionContainerMobile
    : OptionContainerDesktop;
  const HeadingContainerWrapper = isMobile
    ? HeadingContainerMobile
    : HeadingContainerDesktop;
  const FileUploadContainerWrapper = isMobile
    ? FileUploadContainerMobile
    : FileUploadContainerDesktop;
  const CustomCloudUploadIconWrapper = isMobile
    ? CustomCloudUploadIconMobile
    : CustomCloudUploadIconDesktop;
  const CustomBorderColorIconWrapper = isMobile
    ? CustomBorderColorIconMobile
    : CustomBorderColorIconDesktop;
  const CustomEreferralIconWrapper = isMobile
    ? CustomEreferralIconMobile
    : CustomEreferralIconDesktop;
  const HeadingTextWrapper = isMobile ? HeadingTextMobile : HeadingTextDesktop;
  const BookAppointmentHeadingWrapper = isMobile
    ? BookAppointmentHeadingMobile
    : BookAppointmentHeadingDesktop;
  const BookAppointmentHeadingLabelWrapper = isMobile
    ? BookAppointmentHeadingLabelMobile
    : BookAppointmentHeadingLabelDesktop;
  const HeadingLabelTextWrapper = isMobile
    ? HeadingLabelTextMobile
    : HeadingLabelTextDesktop;

  const BookingOption = ({ icon, headingText, labelText, isPending }) => {
    return (
      <BookingOptionContainerWrapper>
        <Box
          sx={{
            "& svg path": {
              fill: theme.palette.primary.activeButton,
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {icon}
        </Box>
        <Box
          sx={{
            "& svg path": {
              fill: theme.palette.primary.activeButton,
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            variant="innerText"
            color="text.secondary"
            sx={{ fontWeight: "600" }}
          >
            {headingText}
          </Typography>
          {labelText && (
            <BookingOptionLabelWrapper color="text.secondary" gutterBottom>
              {labelText}
            </BookingOptionLabelWrapper>
          )}
        </Box>
      </BookingOptionContainerWrapper>
    );
  };

  if (isStartBookingApiPending || isHandleUtteranceApiPending)
    return <CustomLoader />;

  return (
    <ContainerWrapper>
      <HeadingContainerWrapper>
        <BookAppointmentHeadingWrapper
          variant="h1"
          sx={{
            color: theme.palette.primary.activeButton,
          }}
        >
          Book Your Appointment
        </BookAppointmentHeadingWrapper>
        <BookAppointmentHeadingLabelWrapper variant="h2" fontWeight={"400"}>
          Select one of these options
        </BookAppointmentHeadingLabelWrapper>
      </HeadingContainerWrapper>
      <OptionContainerWrapper>
        {!eReferralWorkflow && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItem: "center",
              height: "60%",
              fontSize: "20px",
              borderRadius: "8px",
            }}
          >
            <FileUploadContainerWrapper
              display={isHandleUploadReferralApiPending && "none"}
              onClick={
                isHandleUtteranceApiPending
                  ? {}
                  : () => {
                    if (!isHandleUploadReferralApiPending) {
                      handleStartBooking();
                    }
                  }
              }
            >
              <BookingOption
                icon={
                  <Stack
                    sx={{
                      "& svg path": {
                        fill: theme.palette.primary.activeButton,
                      },
                    }}
                  >
                    <CustomBorderColorIconWrapper color="primary" />
                  </Stack>
                }
                headingText={
                  <HeadingTextWrapper>
                    Manually enter Scan details
                  </HeadingTextWrapper>
                }
              />
            </FileUploadContainerWrapper>
            <FileUploader
              multiple={false}
              disabled={isHandleUploadReferralApiPending}
              handleChange={handleFileChange}
              name="file"
              types={["heic", "avif", "csv", `jpeg`, `png`, `pdf`, "jpg"]}
              children={
                <FileUploadContainerWrapper
                  sx={{
                    marginTop: isHandleUploadReferralApiPending
                      ? "70px"
                      : "30px",
                    ...(isHandleUploadReferralApiPending ? gradianStyle : {}),
                  }}
                >
                  <BookingOption
                    icon={
                      isHandleUploadReferralApiPending ? (
                        <CircularProgress
                          thickness={3.5}
                          sx={{
                            color: theme.palette.primary.activeButton,
                            marginTop: "5px",
                          }}
                          width="10px"
                          height="10px"
                        />
                      ) : (
                        <CustomCloudUploadIconWrapper color="primary" />
                      )
                    }
                    isPending={isHandleUploadReferralApiPending}
                    headingText={
                      isHandleUploadReferralApiPending ? (
                        <HeadingTextWrapper>
                          {" "}
                          Reading your referral
                        </HeadingTextWrapper>
                      ) : (
                        <HeadingTextWrapper>
                          {" "}
                          Upload your Referral Request
                        </HeadingTextWrapper>
                      )
                    }
                    labelText={
                      <HeadingLabelTextWrapper>
                        {isHandleUploadReferralApiPending
                          ? "This may take upto 1 minute"
                          : `If you have a digital copy of your referral stored on your ${isMobile ? "mobile" : "computer"
                          }`}
                      </HeadingLabelTextWrapper>
                    }
                  />
                </FileUploadContainerWrapper>
              }
            />
          </Box>
        )}
        <Stack alignItems="center" marginTop={isMobile ? "20px" : "40px"}>
          {referralError && !isErrorPresent && (
            <ErrorState
              errorMsg={referralError?.error_description}
              isTextAlignCenter
            />
          )}
        </Stack>
      </OptionContainerWrapper>
    </ContainerWrapper>
  );
};

export default UploadReferral;
