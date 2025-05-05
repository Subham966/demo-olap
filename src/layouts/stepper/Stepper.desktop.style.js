// stepper.style.js

import { Box, Stack, StepConnector, stepConnectorClasses } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { ColorlibConnector, ColorlibStepIconBox, LabelText, ModeEditPencilIcon, StepperContainer, StepperLabel } from "./Stepper.style";
// Define the styled component



const ColorlibStepIconBoxDesktop = styled(ColorlibStepIconBox)`
  display: none;
  ${(props) => ({
    ...props.ColorlibStepIconStyle.base,
    ...(props.active
      ? {
        ...props.ColorlibStepIconStyle.active,
        backgroundColor: "white",
        border: `3px solid ${alpha(props.theme.palette.primary.activeButton, 0.7)}`,
        color: "white",
        width: 20,
        height: 20,
      }
      : {
        width: 20,
        height: 20,
        border: `3px solid ${alpha(props.theme.palette.primary.activeButton, 0.3)}`,
        backgroundColor: "white",
        color: "white",
      }),
    ...(props.completed
      ? {
        ...props.ColorlibStepIconStyle.completed,
        backgroundColor: props.theme.palette.primary.activeButton,
        color: "white",
        width: 20,
        height: 20,
      }
      : {
        width: 20,
        height: 20,
      }),
  })}
  @media (max-width: 780px) {
  ${(props) => ({
    ...props.ColorlibStepIconStyle.base,
    ...(props.active
      ? {
        ...props.ColorlibStepIconStyle.active,
        backgroundColor: "white",
        border: `3px solid ${alpha(props.theme.palette.primary.activeButton, 0.7)}`,
        color: "white",
        width: 15,
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
        height: 15,
      }),
  })}
  }


  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    ${(props) => ({
    ...props.ColorlibStepIconStyle.base,
    ...(props.active
      ? {
        ...props.ColorlibStepIconStyle.active,
        backgroundColor: "white",
        border: `2px solid ${alpha(props.theme.palette.primary.activeButton, 0.7)}`,
        color: "white",
        width: 13,
        height: 13,
      }
      : {
        width: 13,
        height: 13,
        border: `2px solid ${alpha(props.theme.palette.primary.activeButton, 0.3)}`,
        backgroundColor: "white",
        color: "white",
      }),
    ...(props.completed
      ? {
        ...props.ColorlibStepIconStyle.completed,
        backgroundColor: props.theme.palette.primary.activeButton,
        color: "white",
        width: 13,
        height: 13,
      }
      : {
        width: 13,
        height: 13,
      }),
  })}
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   ${(props) => ({
    ...props.ColorlibStepIconStyle.base,
    ...(props.active
      ? {
        ...props.ColorlibStepIconStyle.active,
        backgroundColor: "white",
        border: `2px solid ${alpha(props.theme.palette.primary.activeButton, 0.7)}`,
        color: "white",
        width: 17,
        height: 17,
      }
      : {
        width: 17,
        height: 17,
        border: `3px solid ${alpha(props.theme.palette.primary.activeButton, 0.3)}`,
        backgroundColor: "white",
        color: "white",
      }),
    ...(props.completed
      ? {
        ...props.ColorlibStepIconStyle.completed,
        backgroundColor: props.theme.palette.primary.activeButton,
        color: "white",
        width: 17,
        height: 17,
      }
      : {
        width: 17,
        height: 17,
      }),
  })}
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
     ${(props) => ({
    ...props.ColorlibStepIconStyle.base,
    ...(props.active
      ? {
        ...props.ColorlibStepIconStyle.active,
        backgroundColor: "white",
        border: `3px solid ${alpha(props.theme.palette.primary.activeButton, 0.7)}`,
        color: "white",
        width: 20,
        height: 20,
      }
      : {
        width: 20,
        height: 20,
        border: `3px solid ${alpha(props.theme.palette.primary.activeButton, 0.3)}`,
        backgroundColor: "white",
        color: "white",
      }),
    ...(props.completed
      ? {
        ...props.ColorlibStepIconStyle.completed,
        backgroundColor: props.theme.palette.primary.activeButton,
        color: "white",
        width: 20,
        height: 20,
      }
      : {
        width: 20,
        height: 20,
      }),
  })}
  } 
`;

const LabelTextDesktop = styled(LabelText)`

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 12px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 14px;
  }     
`;

const ModeEditPencilIconDesktop = styled(ModeEditPencilIcon)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 height:10px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 height:15px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 height:15px ;
  }       
`;

const StepperLabelDesktop = styled(StepperLabel)`

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-left: -8px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }     
`;

const StepperContainerDesktop = styled(StepperContainer)`
  width:75% ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  padding-top: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }  
        
`;

export { LabelTextDesktop, StepperLabelDesktop, StepperContainerDesktop, ColorlibStepIconBoxDesktop, ModeEditPencilIconDesktop };
