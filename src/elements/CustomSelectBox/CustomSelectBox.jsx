import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  useMediaQuery,
} from "@mui/material";
import {
  StyledInputLabelMobile,
  StyledMuiSelectMobile,
} from "./CustomSelectBox.mobile.styles";
import {
  StyledInputLabelDesktop,
  StyledMuiSelectDesktop,
} from "./CustomSelectBox.desktop.styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      //   width: 250,
    },
  },
};

// Utility function for styling selected items
// const getStyles = (name, selectedValues, theme) => ({
//   fontWeight: selectedValues.includes(name)
//     ? theme.typography.fontWeightMedium
//     : theme.typography.fontWeightRegular,
// });

const CustomSelectBox = ({
  label,
  options = [],
  value,
  onChange,
  width = 300,
  parentFullWidth,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const StyledInputLabelWrapper = isMobile
    ? StyledInputLabelMobile
    : StyledInputLabelDesktop;
  const StyledMuiSelectWrapper = isMobile
    ? StyledMuiSelectMobile
    : StyledMuiSelectDesktop;
  const handleChange = (event) => {
    const { value: selectedValue } = event.target;
    onChange(
      typeof selectedValue === "string"
        ? selectedValue.split(",")
        : selectedValue
    );
  };

  return (
    <FormControl>
      <StyledInputLabelWrapper id={`multiple-${label}-label`}>
        {label}
      </StyledInputLabelWrapper>
      <StyledMuiSelectWrapper
        labelId={`multiple-${label}-label`}
        id={`multiple-${label}`}
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,
              overflowY: "auto",
              marginTop: "0px",
              paddingTop: "10px",
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            value={option}
            // style={getStyles(option, value, theme)}
          >
            {option}
          </MenuItem>
        ))}
      </StyledMuiSelectWrapper>
    </FormControl>
  );
};

export default CustomSelectBox;
