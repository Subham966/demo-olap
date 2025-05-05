import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
const Container = styled(Stack)`
// margin-top: 138px; 
// @media (max-width: 450px) {
//     margin-top: 43px; 
//   }
`;

const QuestionHeading = styled(Typography)`
  @media (min-width: 451px) and (max-width: 780px) {
  }
  @media (max-width: 450px) {
  }

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    padding: 0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 19px;
    margin: 5px;
    padding: 5px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
    margin: 5px;
    padding: 5px;
  }
`;
const FastingQuestionContainer = styled(Box)`
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

@media (max-width: 450px) {
  margin: 20px 10px;
}
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin:10px;
  padding:20px;
  gap:15px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin:10px;
  padding:20px;
  gap:15px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin:10px;
  padding:30px;
  gap:15px ;
  }
`;

const ButtonContainer = styled(Box)`
display: flex ;
gap: 10px ; 
justify-content: center ;
  
@media (max-width: 450px) {
// margin: 4vh 
}
`;

const FastingHours = styled(Typography)`
font-size:17px ;
font-weight:600 ;
@media (max-width: 450px) {
font-size:14px ;
}

 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
font-size:14px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
font-size:15px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
font-size:16px ;
  }
`;


const ChildContainer = styled(Box)`
border:1px solid gray ;
width:40vw ;
margin:auto ; 
padding:5px ;
font-size:14px ;

@media (max-width: 450px) {
width:89vw ;
}
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

  @media (max-width: 450px) {
    max-height:50px;
    font-size: 14px;
  }
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px !important;
    max-height: 25px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px !important;
    max-height: 35px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 15px !important;
  }
`;

const FastingQuestionText  = styled(Box)`
font-size:16px ;

@media (max-width: 450px) {
  font-size:12px ;
}
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
font-size:14px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
font-size:15px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
font-size:16px ;
  }
`;

const FastingDurationText  = styled(Box)`
font-size:17px ;

@media (max-width: 450px) {
  font-size:13px ;
}
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
font-size:15px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
font-size:16px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
font-size:17px ;
  }
`;

export { Container, ChildContainer,CustomaCssButton,FastingQuestionContainer,ButtonContainer, FastingHours, FastingQuestionText,QuestionHeading,FastingDurationText};
