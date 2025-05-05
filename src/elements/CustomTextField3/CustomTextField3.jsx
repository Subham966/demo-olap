import {
  FormControl,
  FormLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { get } from "lodash";
import { COLORS } from "../../theme/theme";
import { useTheme } from "@emotion/react";
import { MuiTextFieldMobile } from "./CustomTextField3.mobile.styles";
import { MuiTextFieldDesktop } from "./CustomTextField3.desktop.styles";

export const CustomTextField3 = ({
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
  variant,
  topLabel,
  inputProps,
  ...props
}) => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const MuiTextFieldWrapper = isMobile
    ? MuiTextFieldMobile
    : MuiTextFieldDesktop;
  console.log();

  return (
    <FormControl fullWidth={parentFullWidth}>
      <Typography
        variant="body1"
        fontFamily={"Inter Variable"}
        color={"#939393"}
      >
        {topLabel}
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
              label={label}
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
                ...inputProps,
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
          sx={{ width: "200px" }}
          data-testid={dataTestId}
          name={name}
          placeholder={placeholder}
          value={!textFieldValue ? (!value ? "" : value) : textFieldValue || ""}
          fullWidth
          label={label}
          variant={variant}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
      )}
    </FormControl>
  );
};

export default CustomTextField3;
