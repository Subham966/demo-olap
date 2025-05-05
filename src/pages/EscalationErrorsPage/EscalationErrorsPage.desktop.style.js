import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import { CustomCssButton, EscilationErrorBox } from "./EscalationErrorsPage.style";

const CustomCssButtonDesktop = styled(CustomCssButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 12px !important;
    height: 30px;
    width: 140px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 13px !important;
    height: 35px;
    width: 160px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px !important;
    height: 40px;
    width: 200px;
  }
`;

const EscilationErrorBoxDesktop=styled(EscilationErrorBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   margin-top:20px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   margin-top:40px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top:60px ;
  }
`;

export {CustomCssButtonDesktop,EscilationErrorBoxDesktop} ;