// stepper.style.js

import { Box, StepConnector, stepConnectorClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CustomArrowBackIcon, GoBackText } from "./GoBack.style";
// Define the styled component


const GoBackTextMobile = styled(GoBackText)`
@media (min-width: 320px) and (max-width: 400px) {
    display:none:
    font-size: 10px;
}
@media (min-width: 400px) and (max-width: 440px) {
    display:none:
    font-size: 10px;
}
@media (min-width: 440px) and (max-width: 480px) {
    display:none:
    font-size: 10px;
}
@media (min-width: 480px) and (max-width: 780px) {
        font-size: 14px;
}


`;

const CustomArrowBackIconMobile = styled(CustomArrowBackIcon)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {

}

`;

export {CustomArrowBackIconMobile,GoBackTextMobile};
