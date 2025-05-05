import { useTheme } from "@emotion/react";
import { Box, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { ErrorMessageTextMobile } from "./ErrorState.mobile.style";
import { ErrorMessageTextDesktop } from "./ErrorState.desktop.style";

export const ErrorState = ({
  errorMsg = "Error While processing your request. Please try again.",
  height = "100%",
  width = "100%",
  errorVariant = "DEFAULT",
  isTextAlignCenter = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ErrorMessageTextWrapper = isMobile
    ? ErrorMessageTextMobile
    : ErrorMessageTextDesktop;
  return (
    <Stack
      // justifyContent="center"
      // alignItems="center"
      height={height}
      width={width}
      flexGrow={1}
    >
      {errorVariant === "DEFAULT" && (
        <ErrorMessageTextWrapper
          color="red"
          textAlign={isTextAlignCenter && "center"}
        >
          {errorMsg}
        </ErrorMessageTextWrapper>
      )}
    </Stack>
  );
};
