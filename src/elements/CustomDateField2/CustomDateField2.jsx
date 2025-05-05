import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@emotion/react";
import { DateField } from "@mui/x-date-pickers";
import { TryOutlined } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";
import {
  ErrorTextMobile,
  LabelTextMobile,
} from "./CustomDateField2.mobile.styles";
import {
  ErrorTextDesktop,
  LabelTextDesktop,
} from "./CustomDateField2.desktop.styles";

const CustomDateField2 = ({
  iref,
  id,
  label,
  placeholder,
  labelPosition,
  format,
  views,
  autoFocus,
  onError,
  errorMessage,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ErrorTextWrapper = isMobile ? ErrorTextMobile : ErrorTextDesktop;
  const LabelTextWrapper = isMobile ? LabelTextMobile : LabelTextDesktop;
  return (
    <div>
      <div
        style={{
          display: labelPosition && "flex",
          gap: "10px",
        }}
      >
        <LabelTextWrapper
          variant="fontSize16"
          htmlFor={id}
          style={{
            whiteSpace: "nowrap",
            margin: "10px",
            color: theme.palette.primary.activeButton,
            marginBottom: labelPosition && "5px",
            marginLeft: labelPosition && "0px",
          }}
        >
          {label}
        </LabelTextWrapper>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box>
            <DateField
              inputRef={iref}
              id={id}
              slotProps={{ textField: { size: "small" } }}
              variant="outlined"
              fullWidth
              placeholder={placeholder}
              format={format || "DD-MM-YYYY"}
              views={views}
              sx={{
                backgroundColor: "white",
              }}
              onChange={(event) => {
                console.log(event.value, event);
              }}
              onInvalid={(event) => {
                console.log("onInvalid", event);
              }}
              onError={(event) => {
                console.log("onError", event);
                onError(event);
              }}
              autoFocus={autoFocus || false}
            />
            {errorMessage && (
              <ErrorTextWrapper variant={"fontSize14"}>
                {errorMessage}
              </ErrorTextWrapper>
            )}
          </Box>
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default CustomDateField2;
