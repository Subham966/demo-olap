import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
// margin-left:20px;
// margin-right:20px ;
`;
const StyledCustomButton = styled(CustomButton)`
height:30px;
width:70px ;
font-size: 12px !important ;
font-weight: 400 ;
line-height: 20px ;
`;
export {
  Container,
  StyledCustomButton
};
