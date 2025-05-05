import { COLORS } from "@/theme";
import { Box, styled } from "@mui/material";
import { StyledLoader } from "./CustomLoader.style";

const StyledLoaderMobile = styled(StyledLoader)`
  height: 400px;
  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {

  }
  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
 
  }
`;

export { StyledLoaderMobile };
