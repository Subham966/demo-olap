import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, Container, CustomaCssButton, HeadinText, RestartHeading } from "./ConfirmBookNewAppointment.style";

const ContainerMobile = styled(Container)`
padding: 30px 10px ;
width: 90% ;
margin: 40px 20px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const ButtonContainerMobile = styled(ButtonContainer)`
`;

const RestartHeadingMobile = styled(RestartHeading)`
font-size:20px !important;
`;

const CustomaCssButtonMobile = styled(CustomaCssButton)`
  @media (max-width: 450px) {
    height: 35px;
    width: 130px;
  }
`;

const HeadinTextMobile = styled(HeadinText)`
font-size:20px ;
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

export {CustomaCssButtonMobile,ButtonContainerMobile, RestartHeadingMobile,HeadinTextMobile,ContainerMobile};

