import {
  FormControl,
  FormLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { get } from "lodash";
import { COLORS } from "../../theme/theme";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@emotion/react";
import { MuiDateFieldMobile } from "./CustomDateField.mobile.styles";
import { MuiDateFieldDesktop } from "./CustomDateField.desktop.styles";

export const CustomDateField = ({
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
  defaultValue,
  emptyValue = "",
  ...props
}) => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const MuiDateFieldWrapper = isMobile
    ? MuiDateFieldMobile
    : MuiDateFieldDesktop;
  return (
    <FormControl fullWidth={parentFullWidth}>
      <Typography
        variant="fontSize14"
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MuiDateFieldWrapper
                defaultValue={defaultValue}
                {...field}
                error={hasError}
                placeholder={placeholder}
                disabled={disabled}
                onChange={(e) => {
                  onInputChange(e);
                }}
                autoComplete={"off"}
                data-testid={dataTestId}
                helperText={errorMessages?.message}
                {...props}
              />
            </LocalizationProvider>
          )}
        />
      ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MuiDateFieldWrapper
            data-testid={dataTestId}
            name={name}
            value={value}
            placeholder={placeholder}
            fullWidth
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
        </LocalizationProvider>
      )}
    </FormControl>
  );
};

export default CustomDateField;
