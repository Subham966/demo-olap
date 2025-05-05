import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, ChildContainer, Container, CustomaCssButton, FastingQuestionContainer, GoBackHeading, ParentBox } from "./ConfirmGoBack.style";

const ContainerDesktop = styled(Container)`

`;
const ParentBoxDesktop = styled(ParentBox)`
  padding:60px 20px ;
  width: 60% ;
  margin: 10px ;
  margin-left: auto ;
  margin-right: auto ;
  margin-top: 15% ; 
  background-color: white ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  } 

`;
const FastingQuestionContainerDesktop = styled(FastingQuestionContainer)`
`;
const GoBackHeadingDesktop = styled(GoBackHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:15px  !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size:16px  !important;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:17px !important ;
  } 

`;
const ButtonContainerDesktop = styled(ButtonContainer)`

`;


const ChildContainerDesktop = styled(ChildContainer)`

`;

const CustomaCssButtonDesktop = styled(CustomaCssButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 12px !important;
    height: 30px;
    width: 140px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 13px !important;
    height: 30px;
    width: 160px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px !important;
    height: 30px;
    width: 200px;
  }
`;



export { ContainerDesktop, ChildContainerDesktop,CustomaCssButtonDesktop,FastingQuestionContainerDesktop,ButtonContainerDesktop, GoBackHeadingDesktop,ParentBoxDesktop};

