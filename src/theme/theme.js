import { createTheme } from '@mui/material'
import '@fontsource-variable/inter'
import '@fontsource/poppins'
import { useSelector } from 'react-redux'

// Define colours to be used throughout the app

export const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000',
  BLACK_2: '#101010',
  GREY: '#939393',
  GREY_2: '#F5F5F5',
  GREY_3: '#ececec',
  GREY_4: '#525252',
  BLUE: '#0353E9'
}

export const FONT = {
  // Define available font-families to be used throughout the app
  FAMILY: {
    POPPINS: ['Poppins', 'sans-serif'].join(','),
    INTER: ['Inter Variable'].join(',')
  },
  LINE_HEIGHT: '136.4%',
  // Define font weights that would be used throughout the app
  WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700
  },
  // Define font sizes that would be used throughout the app in rem
  // the numbers on the left indicates the px equivalent of the rem values
  SIZES: {
    48: '3rem',
    36: '2.25rem',
    32: '2rem',
    30: '1.875rem',
    28: '1.75rem',
    24: '1.5rem',
    22.5: '1.40625rem',
    22: '1.375rem',
    20: '1.25rem',
    18: '1.125rem',
    17: '1.0625 rem',
    16: '1rem',
    15: '0.9375rem',
    14: '0.875rem',
    12: '0.75rem',
    10: '0.625rem',
    9: '0.563rem',
    8: '0.5rem'
  },
  LINE_HEIGHTS: {
    11: '0.688rem',
    12: '0.75rem',
    13: '0.813rem',
    14: '0.875rem',
    16: '1rem',
    17: '1.0625 rem',
    19: '1.188rem',
    20: '1.25rem',
    22: '1.375rem',
    26: '1.563rem',
    27: '1.688rem',
    30: '1.875rem',
    32: '2rem',
    33: '2.063rem',
    38: '2.375rem',
    49: '3.063rem'
  }
}

export const BORDERS = {
  BORDER_1: `0.0625rem solid ${COLORS.GREY_2}`,
  BORDER_2: `0.0625rem solid ${COLORS.GREY}`
}

export const theme = createTheme({
  palette: {
    text: {
      primary: COLORS.BLACK
    },
    primary: {
      main: COLORS.BLUE
    },
    secondary: {
      main: COLORS.WHITE
    }
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: FONT.SIZES['32'],
      lineHeight: FONT.LINE_HEIGHT[32],
      fontWeight: FONT.WEIGHT.SEMIBOLD,
      color: COLORS.BLACK_2,
      '@media (max-width: 768px)': {
        fontSize: FONT.SIZES['17']
      }
    },

    h2: {
      fontSize: FONT.SIZES[24],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.MEDIUM
    },
    h3: {
      fontSize: FONT.SIZES[22],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.BOLD
    },
    h4: {
      fontSize: FONT.SIZES[20],
      lineHeight: FONT.LINE_HEIGHT
    },
    h5: {
      fontSize: FONT.SIZES[16],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR
    },
    h6: {
      fontSize: FONT.SIZES[14],
      lineHeight: FONT.LINE_HEIGHT,
      fontWeight: FONT.WEIGHT.REGULAR
    },
    subtitle: {
      fontSize: FONT.SIZES[14],
      lineHeight: FONT.LINE_HEIGHT[20],
      fontWeight: FONT.WEIGHT.MEDIUM,
      color: COLORS.GREY
    },
    innerText: {
      fontFamily: 'Inter Variable'
    }
  }
})
