import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { NeedHelpBox } from "./NeedHelp.style";
const NeedHelpBoxDesktop = styled(NeedHelpBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 20px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 40px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    margin-top: 60px;
  }
`;

export {
NeedHelpBoxDesktop
};
