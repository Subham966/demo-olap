import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import useHelpText from "@/hooks/useHelpText";
import useHelpTextHeading from "@/hooks/useHelpTextHeading";
import {
  CustomContainerMobile,
  ErrorSubHeadingMobile,
  ErrorHeadingMobile,
  ErrorIconBoxMobile,
  HelpTextBoxMobile,
  HelpTextHeadingMobile,
  AdditionalMessageMobile,
  CancelButtonMobile,
  ContactNumberMobile,
} from "./ErrorMessage3.mobile.style";
import {
  CustomContainerDesktop,
  ErrorSubHeadingDesktop,
  ErrorHeadingDesktop,
  ErrorIconBoxDesktop,
  HelpTextBoxDesktop,
  HelpTextHeadingDesktop,
  AdditionalMessageDesktop,
  CancelButtonDesktop,
  ContactNumberDesktop,
} from "./ErrorMessage3.desktop.style";

const ErrorMessage3 = ({
  eroorHeading,
  eroorSubHeading,
  message,
  additionalMessage,
  CloseButton,
  callusMessage,
  contactNumber,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const helpTextHeading = useHelpTextHeading();
  const helpText = useHelpText();

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
  const ErrorSubHeadingWrapper = isMobile
    ? ErrorSubHeadingMobile
    : ErrorSubHeadingDesktop;
  const AdditionalMessageWrapper = isMobile
    ? AdditionalMessageMobile
    : AdditionalMessageDesktop;
  const CancelButtonWrapper = isMobile
    ? CancelButtonMobile
    : CancelButtonDesktop;
  const ContactNumberWrapper = isMobile
    ? ContactNumberMobile
    : ContactNumberDesktop;
  return (
    <CustomContainerWrapper
      sx={{
        backgroundColor: "white",
        boxShadow: 24,
      }}
    >
      <ErrorHeadingWrapper
        variant="h1"
        sx={{
          textAlign: "center",
          marginY: "0px !important",
          margin: "auto",
        }}
      >
        {eroorHeading}
      </ErrorHeadingWrapper>
      <ErrorSubHeadingWrapper
        sx={{
          textAlign: "center",
          marginY: "0px !important",
          width: "90%",
          margin: "auto",
        }}
      >
        {callusMessage}
      </ErrorSubHeadingWrapper>
      <ContactNumberWrapper
        sx={{
          textAlign: "center",
          marginY: "0px !important",
          width: "90%",
          margin: "auto",
          color: theme.palette.primary.activeButton,
        }}
      >
        {contactNumber}
      </ContactNumberWrapper>
      <HelpTextBoxWrapper>{message}</HelpTextBoxWrapper>
      <HelpTextBoxWrapper
        color={theme.palette.primary.activeButton}
        sx={{ marginTop: "-10px" }}
      >
        {helpText}
      </HelpTextBoxWrapper>
      <CancelButtonWrapper>{CloseButton}</CancelButtonWrapper>
    </CustomContainerWrapper>
  );
};

export default ErrorMessage3;
