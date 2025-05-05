import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
const Container = styled(Stack)`
`;

const QuestionHeading = styled(Typography)`
`;
const AdditionalCostQuestionContainer = styled(Box)`
display:grid ;
margin:30px;
padding:30px 10px;
gap:30px ;
background-color: ${COLORS.GREY_2};
border-radius: 5px ;
border: 0px ;
text-align: center ;
border-radius: 5px ,
padding: 10px ;
`;

const ButtonContainer = styled(Box)`
display: flex ;
gap: 10px ; 
justify-content: center ;
  
`;


const ChildContainer = styled(Box)`
border:1px solid gray ;
width:40vw ;
margin:auto ; 
padding:5px ;
font-size:14px ;
`;

const CustomaCssButton = styled(CustomButton)`
background-color: ${({ theme }) => theme.palette.primary.activeButton};
color: ${({ theme }) => theme.palette.text.activeButtonText};
font-size: 16px;
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

const AdditionalCostQuestionText  = styled(Box)`
font-size:16px ;
`;


export { Container, ChildContainer,CustomaCssButton,AdditionalCostQuestionContainer,ButtonContainer, AdditionalCostQuestionText,QuestionHeading};

