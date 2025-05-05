// stepper.style.js

import { Box, Stack, StepConnector, stepConnectorClasses } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { ColorlibConnector, ColorlibStepIconBox, LabelText, ModeEditPencilIcon, StepperContainer, StepperLabel } from "./Stepper.style";
// Define the styled component


const ColorlibStepIconBoxMobile = styled(ColorlibStepIconBox)`
  @media (max-width: 780px) {
  ${(props) => ({
    ...props.ColorlibStepIconStyle.base,
    ...(props.active
      ? {
          ...props.ColorlibStepIconStyle.active,
          backgroundColor: "white",
          border: `3px solid ${alpha(props.theme.palette.primary.activeButton, 0.7)}`,
          color: "white",
          width:15,
          height: 15,
        }
      : {
          width: 15,
          height: 15,
          border: `3px solid ${alpha(props.theme.palette.primary.activeButton, 0.3)}`,
          backgroundColor: "white",
          color: "white",
        }),
    ...(props.completed
      ? {
          ...props.ColorlibStepIconStyle.completed,
          backgroundColor: props.theme.palette.primary.activeButton,
          color: "white",
          width: 15,
          height: 15,
        }
      : {
          width: 15,
          height:15,
        }),
})}
  }
`;

const LabelTextMobile = styled(LabelText)`
  @media (max-width: 780px) {
    font-size: 9px;
  } 
`;

const ModeEditPencilIconMobile = styled(ModeEditPencilIcon)`
  @media (max-width: 780px) {
    height:10px ;
  } 
`;

const  StepperLabelMobile = styled(StepperLabel)`
 @media (max-width: 780px) {
     margin-left: -5px ;
  }
`;

const StepperContainerMobile = styled(StepperContainer)`

  @media (max-width: 780px) {
   padding-top: 0px;
  }
        
`;

export { LabelTextMobile ,StepperLabelMobile,StepperContainerMobile, ColorlibStepIconBoxMobile, ModeEditPencilIconMobile};
