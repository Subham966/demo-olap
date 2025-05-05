import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import useHelpText from "@/hooks/useHelpText";
import useHelpTextHeading from "@/hooks/useHelpTextHeading";
import {
  CustomContainerMobile,
  ErrorHeadingMobile,
  ErrorIconBoxMobile,
  HelpTextBoxMobile,
  HelpTextHeadingMobile,
} from "./ErrorMessage4.mobile.style";
import {
  CloseButtonDesktop,
  CustomContainerDesktop,
  ErrorHeadingDesktop,
  ErrorIconBoxDesktop,
  HelpTextBoxDesktop,
  HelpTextHeadingDesktop,
  SelectedModalityListDesktop,
} from "./ErrorMessage4.desktop.style";
import { CustomCssButton } from "@/pages/EscalationErrorsPage/EscalationErrorsPage.style";
import { useAppDispatch } from "@/redux";
import { chatDetailsActions } from "@/redux/reducers/chatDetails";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ErrorMessage4 = ({
  modalityGeneric,
  eroorHeading,
  message,
  CloseButton,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const helpTextHeading = useHelpTextHeading();
  const helpText = useHelpText();
  const navigate = useNavigate("/");
  const {
    setChatDetails,
    setRestartConversationPopup,
    resetChatDetails,
    setBotState,
  } = chatDetailsActions;

  const CustomContainerWrapper = isMobile
    ? CustomContainerMobile
    : CustomContainerDesktop;
  const ErrorHeadingWrapper = isMobile
    ? ErrorHeadingMobile
    : ErrorHeadingDesktop;
  const ErrorIconBoxWrapper = isMobile
    ? ErrorIconBoxMobile
    : ErrorIconBoxDesktop;
  const HelpTextBoxWrapper = isMobile ? HelpTextBoxMobile : HelpTextBoxDesktop;
  const HelpTextHeadingWrapper = isMobile
    ? HelpTextHeadingMobile
    : HelpTextHeadingDesktop;

  const CloseButtonWrapper = isMobile ? CloseButtonDesktop : CloseButtonDesktop;

  console.log(modalityGeneric, "check this modality...");
  const [mriIncluded, setMriIncluded] = useState(false);

  useEffect(() => {
    if (modalityGeneric.includes("MR")) {
      setMriIncluded(true);
    } else {
      setMriIncluded(false);
    }
  });

  return (
    <>
      {!mriIncluded && (
        <CustomContainerWrapper
          sx={{
            position: "relative",
            backgroundColor: "white",
            boxShadow: 24,
          }}
        >
          <CloseButtonWrapper
            className="cross"
            onClick={() => {
              useAppDispatch(
                setRestartConversationPopup({ restartConversationPopup: false })
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
            }}
          >
            X
          </CloseButtonWrapper>
          <ErrorHeadingWrapper
            variant={!isMobile ? "h2" : "h1"}
            sx={{
              textAlign: "center",
              marginY: "0px !important",
              width: "90%",
              margin: "auto",
              fontWeight: 600,
              fontSize: "24px",
            }}
          >
            {eroorHeading}
          </ErrorHeadingWrapper>

          <SelectedModalityListDesktop>
            {modalityGeneric &&
              modalityGeneric?.map((modality, index) => {
                return (
                  <HelpTextHeadingWrapper
                    variant="h1"
                    sx={{
                      textAlign: "center",
                      marginY: "0px !important",
                    }}
                  >
                    {index + 1}. {modality}
                  </HelpTextHeadingWrapper>
                );
              })}
          </SelectedModalityListDesktop>

          <HelpTextHeadingWrapper
            variant="h2"
            sx={{
              textAlign: "center",
              width: isMobile ? "100%" : "80%",
              margin: "auto",
            }}
          >
            {message ? message : helpTextHeading}
          </HelpTextHeadingWrapper>

          <span
            style={{
              margin: "auto",
            }}
          >
            You can book {modalityGeneric[0]} first followed by{" "}
            {modalityGeneric[1]}
          </span>

          <div
            className="proceed"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5%",
            }}
          >
            <CustomCssButton
              sx={{
                fontWeight: "600",
                lineHeight: "20px",
                width: !isMobile ? "20%" : "40%",

                // margin: "auto",
                marginTop: "30px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: theme.palette.primary.activeButton,
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  backgroundColor: theme.palette.primary.activeButton,
                },
              }}
            >
              Proceed with {modalityGeneric[0]}
            </CustomCssButton>

            <CustomCssButton
              sx={{
                // display: "none",
                fontWeight: "600",
                lineHeight: "20px",
                width: !isMobile ? "20%" : "40%",
                // margin: "auto",
                marginTop: "30px",
                backgroundColor: theme.palette.text.activeButtonText,
                color: theme.palette.primary.activeButton,
                "&:hover": {
                  color: theme.palette.text.activeButtonText,
                  backgroundColor: theme.palette.primary.activeButton,
                },
              }}
            >
              Proceed with {modalityGeneric[1]}
            </CustomCssButton>
          </div>
        </CustomContainerWrapper>
      )}

      {mriIncluded && (
        <CustomContainerWrapper
          sx={{
            position: "relative",
            backgroundColor: "white",
            boxShadow: 24,
          }}
        >
          <CloseButtonWrapper
            className="cross"
            onClick={() => {
              useAppDispatch(
                setRestartConversationPopup({ restartConversationPopup: false })
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
            }}
          >
            X
          </CloseButtonWrapper>
          <HelpTextHeadingWrapper
            variant="h1"
            sx={{
              textAlign: "center",
              width: !isMobile ? "90%" : "100%",
              margin: "auto",
              // border: "1px solid red",
              fontSize: !isMobile ? "26px" : "18px",
            }}
          >
            You have requested for {modalityGeneric[0]} and {modalityGeneric[1]}
          </HelpTextHeadingWrapper>
          <HelpTextHeadingWrapper
            variant="span"
            sx={{
              textAlign: "center",
              width: !isMobile ? "45%" : "90%",
              // border: "1px solid red",
              margin: "auto",
              marginTop: !isMobile ? "20px" : "0",
              fontSize: !isMobile ? "16px" : "14px",
            }}
          >
            MRI cannot be booked online.However if you wish you may proceed with
            CT booking.
          </HelpTextHeadingWrapper>
          <HelpTextHeadingWrapper
            sx={{
              textAlign: "center",
              width: !isMobile ? "75%" : "100%",
              padding: 0,
              margin: "auto",
              // border: "1px solid red",
              marginTop: !isMobile ? "10px" : "0",
              fontSize: !isMobile ? "16px" : "14px",
              color: "grey",
            }}
          >
            You can contact us later to schedule your MRI examination.
          </HelpTextHeadingWrapper>

          <CustomCssButton
            sx={{
              margin: "auto",
              marginTop: "10px",
            }}
          >
            Proceed with CT
          </CustomCssButton>
        </CustomContainerWrapper>
      )}
    </>
  );
};

export default ErrorMessage4;
