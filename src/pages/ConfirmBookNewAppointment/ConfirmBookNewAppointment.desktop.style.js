import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, Container, CustomaCssButton, HeadinText, RestartHeading } from "./ConfirmBookNewAppointment.style";

const ContainerDesktop = styled(Container)`
margin-top: 120px ;
padding:  30px 20px ;
width:60% ;
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
margin-top: 40px ;
padding:  30px 20px ;
width:60% ;
}
@media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
margin-top: 60px ;
padding:  60px 20px ;
width:60% ;
}

@media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
margin-top: 60px ;
padding:  60px 20px ;
width:60% ;
} 
`;
const ButtonContainerDesktop = styled(ButtonContainer)`
`;

const RestartHeadingDesktop = styled(RestartHeading)`
  font-size:20px  !important;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:16px  !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size:18px  !important;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:20px !important ;
  } 

`;

const CustomaCssButtonDesktop = styled(CustomaCssButton)`
    height: 45px;
    width: 180px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 0px;
    height: 30px;
    font-size: 12px !important;
    height: 40px;
    width: 120px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 15px !important;
    height: 40px;
    width: 140px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px !important;
    height: 45px;
    width: 160px;
  }
`;

const HeadinTextDesktop = styled(HeadinText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:20px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;


export {CustomaCssButtonDesktop,ButtonContainerDesktop, RestartHeadingDesktop, HeadinTextDesktop,ContainerDesktop};

