import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, ChildContainer, Container, CustomaCssButton, FastingDurationText, FastingHours, FastingQuestionContainer, FastingQuestionText, QuestionHeading } from "./FastingQuestion.style";
const ContainerMobile = styled(Container)`
  @media (min-width: 320px) and (max-width: 400px) {

  }

  @media (min-width: 400px) and (max-width: 440px) {

  }

  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const QuestionHeadingMobile = styled(QuestionHeading)`
  @media (min-width: 320px) and (max-width: 400px) {

  }

  @media (min-width: 400px) and (max-width: 440px) {

  }

  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;
const FastingQuestionContainerMobile = styled(FastingQuestionContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
  margin: 20px 10px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
   margin: 20px 10px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
  margin: 20px 10px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const ButtonContainerMobile = styled(ButtonContainer)`
  @media (min-width: 320px) and (max-width: 400px) {

  }

  @media (min-width: 400px) and (max-width: 440px) {
 
  }

  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {

  }
`;

const FastingHoursMobile = styled(FastingHours)`
  @media (min-width: 320px) and (max-width: 400px) {
 font-size:14px ;
  }

  @media (min-width: 400px) and (max-width: 440px) {
 font-size:14px ;
  }

  @media (min-width: 440px) and (max-width: 480px) {
 font-size:14px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;


const ChildContainerMobile = styled(ChildContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
  width:89vw ;
  }

  @media (min-width: 400px) and (max-width: 440px) {
  width:89vw ;
  }

  @media (min-width: 440px) and (max-width: 480px) {
  width:89vw ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const CustomaCssButtonMobile = styled(CustomaCssButton)`
  @media (min-width: 320px) and (max-width: 400px) {
    max-height:30px;
    font-size: 14px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    max-height:30px;
    font-size: 14px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    max-height:30px;
    font-size: 14px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    max-height:30px;
    font-size: 14px;
  }
`;

const FastingQuestionTextMobile = styled(FastingQuestionText)`
  @media (min-width: 320px) and (max-width: 400px) {
  font-size:12px ;
  }

  @media (min-width: 400px) and (max-width: 440px) {
  font-size:12px ;
  }

  @media (min-width: 440px) and (max-width: 480px) {
  font-size:12px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const FastingDurationTextMobile = styled(FastingDurationText)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size:13px ;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size:13px ;
  }

  @media (min-width: 440px) and (max-width: 480px) {
  font-size:13px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
  
`;

export { ContainerMobile, ChildContainerMobile, CustomaCssButtonMobile, FastingQuestionContainerMobile, ButtonContainerMobile, FastingHoursMobile, FastingQuestionTextMobile, QuestionHeadingMobile, FastingDurationTextMobile };

