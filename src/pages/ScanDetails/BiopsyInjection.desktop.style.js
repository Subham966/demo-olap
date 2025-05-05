import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Typography, styled } from "@mui/material";
import { CustomTextField } from "@/elements/CustomTextField";
import { Container, CustomConfirmButton,  CustomTextFieldBox, HeadingText, InputBoxHeadingText, ProcedureBox, RadioButtonText, StyledRadioGroup, SubmitButtonStack } from "./BiopsyInjection.style";

const ContainerDesktop = styled(Container)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
margin-top:20px ;
margin-left:16px;
margin-right:16px;
padding-left:20px ;
padding-right:20px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
margin-top:25px ;
margin-left:26px;
margin-right:26px;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
margin-top:30px ;
margin-left:36px;
margin-right:36px;
 }
;
`
const HeadingTextDesktop = styled(HeadingText)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    padding:0px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    margin: 0px;
    padding:0px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 24px;
    margin: 0px;
    padding:0px ;
 }
`;

const ProcedureBoxDesktop = styled(ProcedureBox)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-left:20px ;
  margin-right:20px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  padding-left:20px ;
  padding-right:20px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  padding-left:20px ;
  padding-right:20px ;
 }
`;
const RadioButtonTextDesktop = styled(RadioButtonText)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 15px;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
 }
`;

const CustomTextFieldBoxDesktop = styled(CustomTextFieldBox)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

 }
`;


const CustomConfirmButtonDesktop = styled(CustomConfirmButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top: 30px;
  height:30px ;
  font-size: 13px !important;
  padding: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: 40px;
    height:35px ;
  font-size: 15px  !important;
    padding: 8px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px  !important;
    padding: 15px;
    height:40px ;
   margin-top: 50px;
  }
`
const InputBoxHeadingTextDesktop = styled(InputBoxHeadingText)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    margin: 0px;
    padding:0px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    padding:0px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    margin: 0px;
    padding:0px ;
 }
`;

const StyledRadioGroupDesktop = styled(StyledRadioGroup)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

 }
`;

const SubmitButtonStackDesktop = styled(SubmitButtonStack)`
 
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

 }

`


export {
  ContainerDesktop,
  HeadingTextDesktop,
  RadioButtonTextDesktop,
  CustomConfirmButtonDesktop,
  InputBoxHeadingTextDesktop,
  CustomTextFieldBoxDesktop,
   ProcedureBoxDesktop,
   StyledRadioGroupDesktop,
  SubmitButtonStackDesktop
};
