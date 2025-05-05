import React from "react";
import { TextField } from "@mui/material";

const CustomTextField2 = ({
  iref,
  id,
  label,
  placeholder,
  labelPosition,
  name,
  onChange,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: labelPosition === "left" ? "row" : "column",
          alignItems: labelPosition === "left" ? "center" : "start",
          gap: "10px",
        }}
      >
        <label
          htmlFor={id}
          style={{
            whiteSpace: "nowrap",
            fontSize: "16px",
            color: "#000080",
          }}
        >
          {label}
        </label>
        <TextField
          inputRef={iref}
          id={id}
          name={name}
          size="small"
          variant="outlined"
          fullWidth
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomTextField2;
