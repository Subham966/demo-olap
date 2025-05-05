import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import { ButtonOptionsContainer, ChildContainer, Container, CustomCssButton, GreetingMessageContainer, HeadingText, QuestionBox, QuestionText } from "./EreferralLandingPage.style";

const ContainerDesktop = styled(Container)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
margin-top:20px ;
margin-left:15px;
margin-right:15px;
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
`;

const ChildContainerDesktop= styled(ChildContainer)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

 }
`;

const HeadingTextDesktop = styled(HeadingText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    margin-top: 15px;
    margin-bottom: 10px;
    padding:0px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding:0px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
    margin: 17px;
    padding:0px ;
  }
`;
const QuestionBoxDesktop  = styled(QuestionBox)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

 }
`;

const QuestionTextDesktop =  styled(QuestionText)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

 }
`;

const ButtonOptionsContainerDesktop = styled(ButtonOptionsContainer)`

`;

const CustomCssButtonDesktop = styled(CustomCssButton)`
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


const GreetingMessageContainerDesktop = styled(GreetingMessageContainer)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

 }
`;



export {ContainerDesktop,ChildContainerDesktop,HeadingTextDesktop,QuestionBoxDesktop,QuestionTextDesktop,ButtonOptionsContainerDesktop,CustomCssButtonDesktop,GreetingMessageContainerDesktop} ;