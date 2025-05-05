import { FormControl, Typography, useMediaQuery } from "@mui/material";
import { Controller } from "react-hook-form";
import { get } from "lodash";
import { useTheme } from "@emotion/react";
import { MuiTextFieldMobile } from "./CustomTextField.mobile.styles";
import { MuiTextFieldDesktop } from "./CustomTextField.desktop.styles";
import React, { forwardRef } from "react";

export const CustomTextField = forwardRef(
  (
    {
      name,
      errors,
      control,
      dataTestId = "default-input-field",
      parentFullWidth = true,
      isFormControl = false,
      value,
      disabled,
      label,
      placeholder,
      onChange,
      textFieldValue,
      emptyValue = "",
      readOnly,
      fontSize,
      Floatinglabel,
      variant,
      ...props
    },
    ref
  ) => {
    const errorMessages = get(errors, name);
    const hasError = !!(errors && errorMessages);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const MuiTextFieldWrapper = isMobile
      ? MuiTextFieldMobile
      : MuiTextFieldDesktop;

    return (
      <FormControl fullWidth={parentFullWidth}>
        <Typography
          variant="body1"
          sx={{
            fontSize: fontSize
              ? fontSize
              : {
                  xs: "14px",
                  md: "24px",
                },
          }}
          fontFamily={"Inter Variable"}
          color={"#939393"}
        >
          {label}
        </Typography>
        {isFormControl ? (
          <Controller
            name={name}
            control={control}
            render={({
              field: { value: textValue, onChange: onInputChange, ...field },
            }) => (
              <MuiTextFieldWrapper
                {...field}
                error={hasError}
                placeholder={placeholder}
                defaultValue={value ? value.toUpperCase() : ""}
                disabled={disabled}
                value={textValue}
                onChange={(e) => {
                  onInputChange(e);
                  if (onChange) {
                    onChange(e);
                  }
                }}
                variant={variant}
                autoComplete={"off"}
                data-testid={dataTestId}
                helperText={errorMessages?.message}
                type="text"
                {...props}
                inputProps={{
                  readOnly: readOnly ? readOnly : false,
                  style: {
                    textTransform: placeholder ? "capitalize" : "uppercase",
                  },
                }}
              />
            )}
          />
        ) : (
          <MuiTextFieldWrapper
            ref={ref}
            data-testid={dataTestId}
            name={name}
            placeholder={placeholder}
            value={
              !textFieldValue ? (!value ? "" : value) : textFieldValue || ""
            }
            fullWidth
            label={Floatinglabel}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
        )}
      </FormControl>
    );
  }
);

export default CustomTextField;
