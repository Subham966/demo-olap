import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import { CustomCssButton, EscilationErrorBox } from "./EscalationErrorsPage.style";

const CustomCssButtonMobile = styled(CustomCssButton)`
@media (min-width: 320px) and (max-width: 400px) {
    height: 30px;
    width: 100px;
}
@media (min-width: 400px) and (max-width: 440px) {
    height: 30px;
    width: 100px;
}
@media (min-width: 440px) and (max-width: 480px) {
    height: 30px;
    width: 100px;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const EscilationErrorBoxMobile = styled(EscilationErrorBox)`
margin-top:30px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

export {CustomCssButtonMobile,EscilationErrorBoxMobile} ;