import { COLORS } from "@/theme";
import { Box, styled } from "@mui/material";
import { StyledLoader } from "./CustomLoader.style";

const StyledLoaderDesktop = styled(StyledLoader)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height: 350px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  height: 400px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  height: 450px;
  }
`;

export { StyledLoaderDesktop };
