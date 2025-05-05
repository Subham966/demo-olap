import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LoaderDots from "@/elements/LoaderDots/LoaderDots";
import { StyledLoaderDesktop } from "./CustomLoader.desktop.style";
import { StyledLoaderMobile } from "./CustomLoader.mobile.style";

const CustomLoader = ({ message = "Please wait...", height }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const StyledLoaderWrapper = isMobile
    ? StyledLoaderMobile
    : StyledLoaderDesktop;
  return (
    <StyledLoaderWrapper sx={{ height: height }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LoaderDots />
        <Typography variant="h6" color="black" marginTop={"15px"}>
          {message}
        </Typography>
      </Box>
    </StyledLoaderWrapper>
  );
};

export default CustomLoader;
