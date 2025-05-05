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
} from "./ConversationTimeoutError.mobile.style";
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
} from "./ConversationTimeoutError.desktop.style";

const ConversationTimeoutError = ({ eroorHeading, message, CloseButton }) => {
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
          color: theme.palette.primary.activeButton,
        }}
      >
        {eroorHeading}
      </ErrorHeadingWrapper>
      <HelpTextBoxWrapper>{message}</HelpTextBoxWrapper>
      <CancelButtonWrapper>{CloseButton}</CancelButtonWrapper>
    </CustomContainerWrapper>
  );
};

export default ConversationTimeoutError;
