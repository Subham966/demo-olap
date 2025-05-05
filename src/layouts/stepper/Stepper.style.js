// stepper.style.js

import { Box, Stack, StepConnector, stepConnectorClasses } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
// Define the styled component


const ColorlibConnector = styled(StepConnector)`

  &.${stepConnectorClasses.alternativeLabel} {
    top: 8px;
  }

  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width:  120%;
      margin-left: -10%;
    }
  }

  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width:120%;
      margin-left:-10%;
    }
  }

  & .${stepConnectorClasses.line} {
    height: 3px;
    border: 0;
    background-color: ${(props) => alpha(props.theme.palette.primary.activeButton, 0.3)};
    width:120%;
    margin-left: -10%;
    border-radius: 1px;
    ${(props) =>
      props.theme.applyStyles("dark", {
        backgroundColor: props.theme.palette.grey[800],
      })}
  }

  @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {

  &.${stepConnectorClasses.alternativeLabel} {
    top: 6px;
  }

  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width: 150%;
      margin-left: -30%;
    }
  }

  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width: 150%;
      margin-left: -30%;
    }
  }

  & .${stepConnectorClasses.line} {
    height: 3px;
    border: 0;
    background-color: ${(props) => alpha(props.theme.palette.primary.activeButton, 0.3)};
    width: 150%;
    margin-left: -30%;
    border-radius: 1px;
    ${(props) =>
      props.theme.applyStyles("dark", {
        backgroundColor: props.theme.palette.grey[800],
      })}
  }
  }
  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
   &.${stepConnectorClasses.alternativeLabel} {
    top: 6px;
  }

  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width: 150%;
      margin-left: -30%;
    }
  }

  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width: 150%;
      margin-left: -30%;
    }
  }

  & .${stepConnectorClasses.line} {
    height: 3px;
    border: 0;
    background-color: ${(props) => alpha(props.theme.palette.primary.activeButton, 0.3)};
    width: 150%;
    margin-left: -25%;
    border-radius: 1px;
    ${(props) =>
      props.theme.applyStyles("dark", {
        backgroundColor: props.theme.palette.grey[800],
      })}
  }
  }
  @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
   &.${stepConnectorClasses.alternativeLabel} {
    top: 6px;
  }

  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width: 150%;
      margin-left: -30%;
    }
  }

  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width: 150%;
      margin-left: -30%;
    }
  }

  & .${stepConnectorClasses.line} {
    height: 3px;
    border: 0;
    background-color: ${(props) => alpha(props.theme.palette.primary.activeButton, 0.3)};
    width: 150%;
    margin-left: -30%;
    border-radius: 1px;
    ${(props) =>
      props.theme.applyStyles("dark", {
        backgroundColor: props.theme.palette.grey[800],
      })}
  }
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   &.${stepConnectorClasses.alternativeLabel} {
    top: 6px;
  }

  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
    background-color: ${(props) => props.themeColor.palette.primary.activeButton};
    width: ${(props) => props.smallWidth?"160%":"127%"};
    margin-left: ${(props) => props.smallWidth?"-35%":"-14%"};
    }
  }
  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
    background-color: ${(props) => props.themeColor.palette.primary.activeButton};
    width: ${(props) => props.smallWidth?"160%":"127%"};
    margin-left: ${(props) => props.smallWidth?"-35%":"-14%"};
    }
  }

  & .${stepConnectorClasses.line} {
    height: 3px;
    border: 0;
    background-color: ${(props) => alpha(props.theme.palette.primary.activeButton, 0.3)};
    width: ${(props) => props.smallWidth?"160%":"127%"};
    margin-left: ${(props) => props.smallWidth?"-35%":"-14%"};
    border-radius: 1px;
    ${(props) =>
      props.theme.applyStyles("dark", {
        backgroundColor: props.theme.palette.grey[800],
      })}
  }
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
     &.${stepConnectorClasses.alternativeLabel} {
    top: 7px;
  }

  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
     width: ${(props) => props.smallWidth?"140%":"120%"};
     margin-left: ${(props) => props.smallWidth?"-20%":"-9%"};
    }
  }

  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
     width: ${(props) => props.smallWidth?"140%":"120%"};
     margin-left: ${(props) => props.smallWidth?"-20%":"-9%"};
    }
  }

  & .${stepConnectorClasses.line} {
    height: 3px;
    border: 0;
    background-color: ${(props) => alpha(props.theme.palette.primary.activeButton, 0.3)};
     width: ${(props) => props.smallWidth?"140%":"120%"};
     margin-left: ${(props) => props.smallWidth?"-20%":"-9%"};
    border-radius: 1px;
    ${(props) =>
      props.theme.applyStyles("dark", {
        backgroundColor: props.theme.palette.grey[800],
      })}
  }

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  &.${stepConnectorClasses.alternativeLabel} {
    top: 10px;
  }

  &.${stepConnectorClasses.active} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width:  120%;
      margin-left: -10%;
    }
  }

  &.${stepConnectorClasses.completed} {
    & .${stepConnectorClasses.line} {
      background-color: ${(props) => props.themeColor.palette.primary.activeButton};
      width:120%;
      margin-left:-10%;
    }
  }

  & .${stepConnectorClasses.line} {
    height: 3px;
    border: 0;
    background-color: ${(props) => alpha(props.theme.palette.primary.activeButton, 0.3)};
    width:120%;
    margin-left: -10%;
    border-radius: 1px;
    ${(props) =>
      props.theme.applyStyles("dark", {
        backgroundColor: props.theme.palette.grey[800],
      })}
  }

  }   
`;


const ColorlibStepIconBox = styled(Box)`
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
          width:  20,
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
          height:  20,
        }
      : {
          width: 20,
          height:  20,
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
          width:  13,
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
          height:  13,
        }
      : {
          width: 13,
          height:  13,
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
          width:  17,
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
          height:  17,
        }
      : {
          width: 17,
          height:  17,
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
          width:  20,
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
          height:  20,
        }
      : {
          width: 20,
          height:  20,
        }),
})}
  } 
`;

const LabelText = styled(Box)`
   margin:auto ;
  margin-top: -10px;
  font-size: 14px;
  font-family: Inter Variable;
  text-align:center ; 
`;

const ModeEditPencilIcon = styled(ModeEditOutlineIcon)`
  height:15px ;
  
`;

const  StepperLabel = styled(Box)`
 display: inline ;
`;

const StepperContainer = styled(Stack)`
 
`;

export {  LabelText ,StepperLabel,StepperContainer,ColorlibConnector, ColorlibStepIconBox, ModeEditPencilIcon};
