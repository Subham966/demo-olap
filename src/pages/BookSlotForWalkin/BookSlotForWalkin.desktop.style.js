import { CustomButton } from "@/elements/CustomButton";
import { COLORS } from "../../theme/theme";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { ButtonContainer, Container, CustomContainer, CustomaCssButton, HeadingContainer, HeadingText, SubHeadingText } from "./BookSlotForWalkin.style";


const ContainerDesktop = styled(Container)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  margin-top: 30px;
  padding-left:30px;
  padding-right:30px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  margin-top: 40px;
  padding-left:30px;
  padding-right:30px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  margin-top: 50px;
  padding-left:30px;
  padding-right:30px ;
  }
  
`;

const CustomContainerDesktop = styled(CustomContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
padding-top:80px ;
padding-bottom:80px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
padding-top:40px ;
padding-bottom:40px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
padding-top:40px ;
padding-bottom:40px ;
  }
`;


const HeadingTextDesktop = styled(HeadingText)`
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


const SubHeadingTextDesktop = styled(SubHeadingText)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    margin: 0px;
    padding:0px ;
    margin-top: 10px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    margin: 0px;
    padding:0px ;
    margin-top: 10px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    margin: 0px;
    padding:0px 
    margin-top: 10px ;;
 }
`;

const ButtonContainerDesktop = styled(ButtonContainer)`
 width: 45% ;
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 width: 45% ;
gap: 10px ;
 margin-top: 20px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 width: 45% ;
 gap: 15px ;
  margin-top: 20px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 width: 45% ;
gap: 15px ;
 }
`;

const CustomaCssButtonDesktop = styled(CustomaCssButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px !important;
    max-height: 30px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px !important;
    max-height: 35px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px !important;
  }
`;

const HeadingContainerDesktop = styled(HeadingContainer)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 padding:0px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 padding:10px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  padding:15px ;
 }
`;
export {
  ContainerDesktop,
  CustomContainerDesktop,
  CustomaCssButtonDesktop,
  HeadingTextDesktop,
  SubHeadingTextDesktop,
  ButtonContainerDesktop,
  HeadingContainerDesktop
};
