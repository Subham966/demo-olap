import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { NeedHelpBox } from "./NeedHelp.style";

const NeedHelpBoxMobile = styled(NeedHelpBox)`
@media (min-width: 320px) and (max-width: 400px) {
    margin-top:30px;
}
@media (min-width: 400px) and (max-width: 440px) {
    margin-top: 30px;
}
@media (min-width: 440px) and (max-width: 480px) {
    margin-top: 30px;
}
@media (min-width: 480px) and (max-width: 780px) {
     margin-top: 30px;   
}

`;

export {
NeedHelpBoxMobile
};
