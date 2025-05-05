import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import useHelpText from "@/hooks/useHelpText";
import useHelpTextHeading from "@/hooks/useHelpTextHeading";
import {
  CustomContainerMobile,
  ErrorHeadingMobile,
  ErrorIconBoxMobile,
  HelpTextBoxMobile,
  HelpTextHeadingMobile,
} from "./ErrorMessage.mobile.style";
import {
  CustomContainerDesktop,
  ErrorHeadingDesktop,
  ErrorIconBoxDesktop,
  HelpTextBoxDesktop,
  HelpTextHeadingDesktop,
} from "./ErrorMessage.desktop.style";

const ErrorMessage = ({
  modalityGeneric,
  eroorHeading,
  message,
  CloseButton,
  businessHoursMessage
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
          width: "90%",
          margin: "auto",
        }}
      >
        {eroorHeading}
      </ErrorHeadingWrapper>

      {!modalityGeneric && (
        <ErrorIconBoxWrapper
          sx={{
            "& svg path": {
              // fill: theme.palette.primary.activeButton
            },
          }}
        >
          <Box style={{ height: "0px" }}></Box>
        </ErrorIconBoxWrapper>
      )}

      {modalityGeneric &&
        modalityGeneric?.map((modality, index) => {
          return (
            <HelpTextHeadingWrapper
              variant="h1"
              sx={{ textAlign: "center", marginY: "0px !important" }}
            >
              {index + 1}. {modality}
            </HelpTextHeadingWrapper>
          );
        })}
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
      <HelpTextBoxWrapper
        sx={{
          textAlign: "center",
          marginY: "0px !important",
          marginTop: isMobile ? "10px !important" : "20px !important",
          width: "90%",
          margin: "auto",
          display: !businessHoursMessage && "none"
        }}
      >
        {businessHoursMessage}
      </HelpTextBoxWrapper>

      <HelpTextBoxWrapper color={theme.palette.primary.activeButton} sx={{ marginTop: businessHoursMessage && "-10px" }}>
        {helpText}
      </HelpTextBoxWrapper>
      {CloseButton}
    </CustomContainerWrapper>
  );
};

export default ErrorMessage;
