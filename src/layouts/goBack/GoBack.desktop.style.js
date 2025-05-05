// stepper.style.js

import { Box, StepConnector, stepConnectorClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CustomArrowBackIcon, GoBackText} from "./GoBack.style";
// Define the styled component
const GoBackTextDesktop = styled(GoBackText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 11px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 13px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 14px;
  } 

`;

const CustomArrowBackIconDesktop = styled(CustomArrowBackIcon)`


  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height:20px;
  width:20px ;
  margin-right:2px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }  
`;

export { GoBackTextDesktop, CustomArrowBackIconDesktop};
