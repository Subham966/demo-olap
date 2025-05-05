import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, CustomaCssButton, MessageText } from "./SlotGetsBooked.style";


const ButtonContainerDesktop = styled(ButtonContainer)`
`;

const MessageTextDesktop = styled(MessageText)`
  font-size:20px  !important;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size:16px  !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size:18px  !important;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size:19px !important ;
  } 

`;

const CustomaCssButtonDesktop = styled(CustomaCssButton)`
    height: 35px;
    width: 220px;
    margin-top: 20px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 12px !important;
    height: 30px;
    width: 220px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    margin-top: 0px;
    height: 35px;
    font-size: 13px !important;
    height: 30px;
    width: 220px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 14px !important;
    height: 30px;
    width: 240px;
  }
`;



export {CustomaCssButtonDesktop,ButtonContainerDesktop, MessageTextDesktop};

