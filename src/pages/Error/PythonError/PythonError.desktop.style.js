import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { Container } from "./PythonError.style";
const ContainerDesktop = styled(Container)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top: 30px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: 40px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top: 50px;
  }
  
`;
export { ContainerDesktop};

