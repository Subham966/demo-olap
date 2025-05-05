import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";

const Container = styled(Stack)`
gap: 20px;
box-shadow: 24 ;
border-radius: 2 ;
box-shadow: 12 ;
margin-left: auto ;
margin-right: auto ;
margin-top: 8vh ;
background-color: white ;
`;
const ButtonContainer = styled(Box)`
display: flex ;
gap: 20px ; 
justify-content: center ;
`;

const RestartHeading = styled(Typography)`
padding:20px ;
font-size:24px !important ;
`;

const CustomaCssButton = styled(CustomButton)`
width: 200px;
background-color: ${({ theme }) => theme.palette.primary.activeButton};
color: ${({ theme }) => theme.palette.text.activeButtonText};
font-size: 18px;
  @keyframes blink {
    0% { filter: brightness(100%); }
    50% { filter: brightness(75%); }
    100% { filter: brightness(100%); }
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: ${({ theme }) => theme.palette.text.activeButtonText};
  }
`;

const HeadinText = styled(Box)`
text-align:center ;
font-weight:500 ;
font-size:24px ;
color:gray ;
`;


export {CustomaCssButton,ButtonContainer, RestartHeading,HeadinText,Container};

