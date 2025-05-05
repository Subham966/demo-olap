import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Stack, Typography, styled } from "@mui/material";

const Container = styled(Box)`
margin:auto ;
// margin-top:40px ;
// margin-left:46px;
// margin-right:46px;
display: flex ;
justify-content: center;
 align-items: center; 
 height: 700px;
`;

const ChildContainer= styled(Box)`
`;

const HeadingText = styled(Typography)`
  margin-top: 22px;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color};
  font-size: 22px;
`;
const QuestionBox  = styled(Box)`
margin-top:30px ;
`;

const QuestionText=  styled(Typography)`
font-weight:600 ;
text-align:center ;
`;

const ButtonOptionsContainer = styled(Box)`
display: flex ;
gap: 10px ; 
justify-content: center ;
margin-top:40px ;
`;

const CustomCssButton = styled(CustomButton)`

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


const GreetingMessageContainer = styled(Box)`
width:80% ;
margin:auto ;
margin-top:30px ;

padding:30px ;
background-color: ${COLORS.GREY_2};
border-radius:5px ;
`;



export {Container,ChildContainer,HeadingText,QuestionBox,QuestionText,ButtonOptionsContainer,CustomCssButton,GreetingMessageContainer} ;