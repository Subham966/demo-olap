import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import { CustomTextField } from "@/elements/CustomTextField";
import { Container, CustomConfirmButton, CustomTextFieldBox, HeadingText, InputBoxHeadingText, ProcedureBox, RadioButtonText, StyledRadioGroup, SubmitButtonStack } from "./BiopsyInjection.style";

const ContainerMobile = styled(Container)`
  margin-left:16px;
  margin-right:16px;
  margin-bottom:16px ;
  
  @media (min-width: 320px) and (max-width: 400px) {
  margin-left:5px;
  margin-right:5px;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  margin-left:10px;
  margin-right:10px;
  }
  @media (min-width: 440px) and (max-width: 480px) {
  margin-left:10px;
  margin-right:10px;
  }
  @media (min-width: 480px) and (max-width: 780px) {

  }
;
`
const HeadingTextMobile = styled(HeadingText)`
  @media (min-width: 320px) and (max-width: 400px) {
  font-size:18px ;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size:18px ;
  }
  @media (min-width: 440px) and (max-width: 480px) {
  font-size:18px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }

`;

const ProcedureBoxMobile = styled(ProcedureBox)`
  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {

  }
  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }


`;
const RadioButtonTextMobile = styled(RadioButtonText)`
  @media (min-width: 320px) and (max-width: 400px) {
  font-size:18px ;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size:18px ;
  }
  @media (min-width: 440px) and (max-width: 480px) {
  font-size:18px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const CustomTextFieldBoxMobile = styled(CustomTextFieldBox)`
  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {

  }
  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }

`;

const CustomConfirmButtonMobile = styled(CustomConfirmButton)`
  font-size: 14px;
  margin-top:50px ;
  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {

  }
  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }

`
const SubmitButtonStackMobile = styled(SubmitButtonStack)`
  margin-top:20px ;
  @media (min-width: 320px) and (max-width: 400px) {

  }
  @media (min-width: 400px) and (max-width: 440px) {

  }
  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }

`
const InputBoxHeadingTextMobile = styled(InputBoxHeadingText)`
  margin-top:20px ;
  @media (min-width: 320px) and (max-width: 400px) {
  font-size: 14px !important;
  }
  @media (min-width: 400px) and (max-width: 440px) {
  font-size: 15px !important;
  }
  @media (min-width: 440px) and (max-width: 480px) {
  font-size: 16px !important;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;
const StyledRadioGroupMobile = styled(StyledRadioGroup)`
 & .MuiSvgIcon-root {
    font-size: 20px;
  }
  @media (min-width: 320px) and (max-width: 400px) {
  & .MuiSvgIcon-root {
    font-size: 18px;
  }
  }
  @media (min-width: 400px) and (max-width: 440px) {
   & .MuiSvgIcon-root {
    font-size: 20px;
  }
  } 
  @media (min-width: 440px) and (max-width: 480px) {
   & .MuiSvgIcon-root {
    font-size: 20px;
  }
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;
export {
  ContainerMobile,
  HeadingTextMobile,
  RadioButtonTextMobile,
  CustomConfirmButtonMobile,
  InputBoxHeadingTextMobile,
  CustomTextFieldBoxMobile,
  ProcedureBoxMobile,
  StyledRadioGroupMobile,
  SubmitButtonStackMobile
};
