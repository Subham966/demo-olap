import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";


const ButtonContainer = styled(Box)`
display: flex ;
gap: 10px ; 
justify-content: center ;
`;

const RestartHeading = styled(Typography)`

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
    animation: blink 0.7s;
    background-color: ${({ theme }) => theme.palette.primary.activeButton};
    color: ${({ theme }) => theme.palette.text.activeButtonText};
  }
`;



export {CustomaCssButton,ButtonContainer, RestartHeading};

