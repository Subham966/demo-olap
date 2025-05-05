import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";


const Container = styled(Box)`
  margin-top: 50px;
`;

const CustomContainer = styled(Box)`
display:grid  ;
gap:10px ;
width:80%;
margin:auto ;
padding-top:100px ;
padding-bottom:150px ;
border-radius:10px ;
`;


const HeadingText = styled(Typography)`
  font-weight: 400;
  font-size: 20px;
  margin-left: 20px;
  text-align: center;
`;


const SubHeadingText = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
  text-align: center;
  margin-top: 10px ;
`;

const ButtonContainer = styled(Box)`
    display: grid ;
    grid-template-columns: repeat(2,1fr) ;
    gap: 20px ;
    width: 70% ;
    margin: auto ;
    margin-top: 20px ;
`;

const CustomaCssButton = styled(CustomButton)`

background-color: ${({ theme }) => theme.palette.primary.activeButton}  !important;
color: ${({ theme }) => theme.palette.text.activeButtonText} !important;
font-size: 16px !important;
font-family:Inter Variable ;
font-weight:400 ;
  @keyframes blink {
    0% { filter: brightness(100%); }
    50% { filter: brightness(75%); }
    100% { filter: brightness(100%); }
  }

  &:hover {
    animation: blink 0.0s;
    // background-color: ${({ theme }) => theme.palette.primary.activeButton};
    // color: ${({ theme }) => theme.palette.text.activeButtonText};
  }

`;

const HeadingContainer = styled(Box)`
 padding:20px ;
`;
export {
  Container,
  CustomContainer,
  CustomaCssButton,
  HeadingText,
  SubHeadingText,
  ButtonContainer,
  HeadingContainer
};
