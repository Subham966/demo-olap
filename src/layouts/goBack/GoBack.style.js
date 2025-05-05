// stepper.style.js

import { Box, StepConnector, stepConnectorClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// Define the styled component
const GoBackText = styled(Box)`
   font-family: Inter Variable ;
   display:flex ;
   margin-top: 0px ;
   font-size: 14px ;
   cursor: pointer;

`;

const CustomArrowBackIcon = styled(ArrowBackIcon)`
`;

export { GoBackText, CustomArrowBackIcon };
