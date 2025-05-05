import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { createTheme } from "@mui/material";
import "@fontsource-variable/inter";
import "@fontsource/poppins";

// Define colours to be used throughout the app

export const COLORS = {
  WHITE: "#FFFFFF",
  BLACK: "#000",
  BLACK_2: "#101010",
  GREY: "#939393",
  GREY_2: "#F5F5F5",
  GREY_3: "#DADADA",
  GREY_4: "#525252",
  BLUE: "#0353E9",
};

export const FONT = {
  // Define available font-families to be used throughout the app
  FAMILY: {
    POPPINS: ["Poppins", "sans-serif"].join(","),
    INTER: ["Inter Variable"].join(","),
  },
  LINE_HEIGHT: "136.4%",
  // Define font weights that would be used throughout the app
  WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },
  // Define font sizes that would be used throughout the app in rem
  // the numbers on the left indicates the px equivalent of the rem values
  SIZES: {
    48: "3rem",
    36: "2.25rem",
    32: "2rem",
    30: "1.875rem",
    28: "1.75rem",
    24: "1.5rem",
    22.5: "1.40625rem",
    22: "1.375rem",
    20: "1.25rem",
    18: "1.125rem",
    17: "1.0625rem",
    16: "1rem",
    15: "0.9375rem",
    14: "0.875rem",
    12: "0.75rem",
    10: "0.625rem",
    9: "0.563rem",
    8: "0.5rem",
  },
  LINE_HEIGHTS: {
    11: "0.688rem",
    12: "0.75rem",
    13: "0.813rem",
    14: "0.875rem",
    16: "1rem",
    17: "1.0625rem",
    19: "1.188rem",
    20: "1.25rem",
    22: "1.375rem",
    26: "1.563rem",
    27: "1.688rem",
    30: "1.875rem",
    32: "2rem",
    33: "2.063rem",
    38: "2.375rem",
    49: "3.063rem",
  },
};

export const BORDERS = {
  BORDER_1: `0.0625rem solid ${COLORS.GREY_2}`,
  BORDER_2: `0.0625rem solid ${COLORS.GREY}`,
};

function MultiThemeProvider({ children }) {
  const themeData = useSelector((state) => state.multiTheme); // Access theme data from Redux store

  const theme = createTheme({
    palette: {
      text: {
        primary: COLORS.BLACK,
        primaryTheme: themeData.primary_text_color,
        activeButtonText: themeData.active_button_text_color || COLORS.BLACK,
        inActiveButtonText:
          themeData.inactive_button_text_color || COLORS.BLACK,
      },
      primary: {
        main: themeData.primary_color || "#000000",
        activeButton: themeData.active_button_color || "#000000",
        inActiveButton: themeData.inactive_button_color || "#000000",
      },
      secondary: {
        main: COLORS.WHITE,
      },
    },
    typography: {
      fontFamily: "Inter Variable",
      h1: {
        fontSize: FONT.SIZES["24"],
        lineHeight: FONT.LINE_HEIGHT[32],
        fontWeight: FONT.WEIGHT.SEMIBOLD,
        color: COLORS.BLACK_2,
        marginTop: FONT.SIZES["12"],
        marginBottom: FONT.SIZES["18"],
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES["20"],
          marginTop: FONT.SIZES["10"],
          marginBottom: FONT.SIZES["10"],
        },
      },
      h2: {
        fontSize: FONT.SIZES[20],
        lineHeight: FONT.LINE_HEIGHT,
        fontWeight: FONT.WEIGHT.MEDIUM,
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[16],
        },
      },
      h3: {
        fontSize: FONT.SIZES[22],
        lineHeight: FONT.LINE_HEIGHT,
        fontWeight: FONT.WEIGHT.BOLD,
      },
      h4: {
        fontSize: FONT.SIZES[20],
        lineHeight: FONT.LINE_HEIGHT,
      },
      h5: {
        fontSize: FONT.SIZES[16],
        lineHeight: FONT.LINE_HEIGHT,
        fontWeight: FONT.WEIGHT.REGULAR,
      },
      h6: {
        fontSize: FONT.SIZES[14],
        lineHeight: FONT.LINE_HEIGHT,
        fontWeight: FONT.WEIGHT.REGULAR,
      },
      subtitle: {
        fontSize: FONT.SIZES[14],
        lineHeight: FONT.LINE_HEIGHT[20],
        fontWeight: FONT.WEIGHT.MEDIUM,
        color: COLORS.GREY,
      },
      innerText: {
        fontSize: FONT.SIZES[18],
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[16],
        },
      },
      mainheading: {
        fontSize: FONT.SIZES[24],
        textAlign: "center",
        fontFamily: "Inter Variable",
        fontWeight: "600",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[20],
          textAlign: "center",
          marginTop: "25px",
        },
      },
      questionText: {
        fontSize: FONT.SIZES[32],
        textAlign: "center",
        marginTop: "70px",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[22],
          textAlign: "left",
          marginTop: "25px",
        },
      },
      fontSize10: {
        fontSize: "10px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize11: {
        fontSize: "11px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize12: {
        fontSize: "12px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize13: {
        fontSize: "13px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize14: {
        fontSize: "14px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[12],
          marginTop: "5px",
        },
      },
      fontSize15: {
        fontSize: "15px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize16: {
        fontSize: "16px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[14],
        },
      },
      fontSize17: {
        fontSize: "17px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize18: {
        fontSize: "18px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize19: {
        fontSize: "19px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize20: {
        fontSize: "20px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize21: {
        fontSize: "21px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize22: {
        fontSize: "22px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize23: {
        fontSize: "23px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
      fontSize24: {
        fontSize: "24px",
        display: "block",
        fontFamily: "Inter Variable",
        "@media (max-width: 768px)": {
          fontSize: FONT.SIZES[32],
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 780,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MultiThemeProvider;
