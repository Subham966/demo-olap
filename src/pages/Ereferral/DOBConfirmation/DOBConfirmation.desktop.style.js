import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "@/theme";
import { Box, Stack, Typography, styled } from "@mui/material";
import { ChildContainer, ConfirmDOBContainer, Container, CustomConfirmButton, DOBContainer, DobBox, DobLabel, GreetingMessageContainer, HeadingText, InformationText, InputBoxContainer, QuestionText, SubHeadingText } from "./DOBConfirmation.style";

const ContainerDesktop = styled(Container)`
width:100% ;
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

 }
`;

const ChildContainerDesktop = styled(ChildContainer)`
width:50%;
height: 600px; 
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
width:60%;
height: 350px; 
}
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
height: 400px; 
width:60%;
 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
height: 450px; 
 }
`;

const GreetingMessageContainerDesktop = styled(GreetingMessageContainer)`
margin:auto ;
justify-content: center;
align-items: center; 
height: 350px; 
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
height: 250px; 
}
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
height: 300px; 
}

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
height: 300px;
 }
`;



const DobBoxDesktop  = styled(DobBox)`
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

const HeadingTextDesktop = styled(HeadingText)`
  font-size: 24px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    margin-top: 15px;
    margin-bottom: 10px;
    padding:0px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 20px;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding:0px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding:0px ;
  }
`;



const ConfirmDOBContainerDesktop = styled(ConfirmDOBContainer)`
`;

const DOBContainerDesktop = styled(DOBContainer)`
width:500px ;
margin-top:70px ;
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
margin-top:40px ;
width:400px ;
 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
margin-top:50px ;
width:450px ;
 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
margin-top:60px ;
width:500px ;
 }
`;



const CustomConfirmButtonDesktop = styled(CustomConfirmButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top: 0px;
  height:35px ;
  font-size: 13px !important;
  padding: 5px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: 0px;
  height:40px ;
  font-size: 13px  !important;
  padding: 10px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top: 0px;
  height:45px ;
  font-size: 15px  !important;
  padding: 8px;
  }
`;

const DobLabelDesktop = styled(DobLabel)`
font-size: 19px ;
margin-top: 50px ;
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
font-size:14px !important;
margin-top: 20px ;
 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
font-size:16px !important ;
margin-top: 20px ;
 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
font-size:18px !important;
margin-top: 30px ;
 }
`;

const InformationTextDesktop = styled(InformationText)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
font-size:12px ;
width:90%;
 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
width:80%;
 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
width:80%;
 }
 `
 const InputBoxContainerDesktop= styled(InputBoxContainer)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
gap: 0px ;
margin-top: 5px ;
grid-template-columns: 2fr 3fr 2fr 1fr ;
 }
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
margin-top: 5px ;
gap: 0px ;
grid-template-columns: 2fr 3fr 2fr 1fr ;
 }

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
margin-top: 5px ;
gap: 0px ;
grid-template-columns: 2fr 3fr 2fr 2fr ;
 }
 `

export {ContainerDesktop,ConfirmDOBContainerDesktop,DobBoxDesktop,QuestionTextDesktop,DOBContainerDesktop,HeadingTextDesktop, CustomConfirmButtonDesktop,ChildContainerDesktop,GreetingMessageContainerDesktop,DobLabelDesktop,InformationTextDesktop,InputBoxContainerDesktop} ;