import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { AdditionalCostQuestionContainer, AdditionalCostQuestionText, ButtonContainer, ChildContainer, Container, CustomaCssButton, QuestionHeading } from "./AdditionalCostQuestion.style";
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
const AdditionalCostQuestionContainerMobile = styled(AdditionalCostQuestionContainer)`
  @media (min-width: 320px) and (max-width: 400px) {
margin:10px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
margin:10px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
margin:10px;
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
     height:30px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
     height:30px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
     height:30px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;

const AdditionalCostQuestionTextMobile  = styled(AdditionalCostQuestionText)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 14px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 14px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 14px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
  }
`;


export { ContainerMobile, ChildContainerMobile,CustomaCssButtonMobile,AdditionalCostQuestionContainerMobile,ButtonContainerMobile, AdditionalCostQuestionTextMobile,QuestionHeadingMobile};

