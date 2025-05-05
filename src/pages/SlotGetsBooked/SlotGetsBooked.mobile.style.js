import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, CustomaCssButton, MessageText } from "./SlotGetsBooked.style";


const ButtonContainerMobile = styled(ButtonContainer)`
`;

const MessageTextMobile = styled(MessageText)`
  font-size:14px  !important;
`;

const CustomaCssButtonMobile = styled(CustomaCssButton)`
  font-size: 10px !important;
    height: 30px;
    width: 190px;
    margin-top:20px ;
  @media (max-width: 450px) {
    height: 30px;
    width: 190px;
    font-size: 10px !important;
  }
`;



export {CustomaCssButtonMobile,ButtonContainerMobile, MessageTextMobile};

