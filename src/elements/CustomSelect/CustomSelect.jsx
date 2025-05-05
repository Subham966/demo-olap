import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { COLORS } from "@/theme";

function CustomSelect({
  value,
  optionsList,
  handleChange,
  label,
  placeholder,
  ...props
}) {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <Select
        value={value}
        onChange={handleChange}
        {...props}
        sx={{ height: "34px", backgroundColor: COLORS.WHITE }}
        renderValue={(selected) => {
          const selectedItem = optionsList.find((item) => item.id === selected);
          return selectedItem
            ? selectedItem.label
            : placeholder || "Select something";
        }}
      >
        {optionsList?.map((item, index) => (
          <MenuItem value={item?.id} key={index}>
            {item?.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
