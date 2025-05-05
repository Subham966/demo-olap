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

const SlotDetailsBox = styled(Box)`
font-family:Inter Variable ;
width:100% ;
margin:auto ;
padding:20px ;
display:grid ;
gap:5px ;
`;

const SlotDetailsContainer = styled(Box)`
font-weight:500 ;
font-family:Inter Variable ;
display:flex ;

`;
const SlotDetailsText = styled(Box)`
font-family:Inter Variable ;
font-weight:500 ;

`;



const ColonText = styled(Box)`
font-family:Inter Variable ;
font-weight:500 ;
text-align:center ;
width:10px ;
padding-right:12px ;
margin-top:-2px ;
`;


const CenterNameText = styled(Box)`
font-weight:500 ;
font-family:Inter Variable ;

`;


const SlotDateHeading = styled(Box)`
font-family:Inter Variable ;
font-weight:500 ;
text-align:center ;

`;
const SlotDateText = styled(Box)`
font-family:Inter Variable ;
font-weight:500 ;
text-align:center ;


`;


export { CustomaCssButton, ButtonContainer, RestartHeading, SlotDetailsBox, SlotDetailsContainer, ColonText, CenterNameText, SlotDateText, SlotDetailsText, SlotDateHeading };

