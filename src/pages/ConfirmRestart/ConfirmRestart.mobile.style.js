import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, CustomaCssButton, RestartHeading } from "./ConfirmRestart.style";


const ButtonContainerMobile = styled(ButtonContainer)`
`;

const RestartHeadingMobile = styled(RestartHeading)`
font-size: 16px !important;
`;

const CustomaCssButtonMobile = styled(CustomaCssButton)`
height:30px;
width:100px  ;
margin-top:10px ;
font-size: 12px !important;
  @media (max-width: 450px) {
    height: 30px;
    width: 100px;
  }
`;



export { CustomaCssButtonMobile, ButtonContainerMobile, RestartHeadingMobile };

