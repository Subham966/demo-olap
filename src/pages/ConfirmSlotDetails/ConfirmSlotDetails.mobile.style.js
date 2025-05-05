import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, SlotDetailsContainer, CenterNameText, ColonText, CustomaCssButton, RestartHeading, SlotDateHeading, SlotDateText, SlotDetailsBox, SlotDetailsText } from "./ConfirmSlotDetails.style";


const ButtonContainerMobile = styled(ButtonContainer)`
`;

const RestartHeadingMobile = styled(RestartHeading)`
  font-size:14px !important ;
`;

const CustomaCssButtonMobile = styled(CustomaCssButton)`
    height: 25px;
    width: 110px;
    font-size:10px !important ;
  @media (max-width: 450px) {
    height: 25px;
    width: 110px;
  }
`;

const SlotDetailsBoxMobile = styled(SlotDetailsBox)`
  @media (max-width: 450px) {

  }
`;

const SlotDetailsContainerMobile = styled(SlotDetailsContainer)`
padding-left:20px ;
  @media (max-width: 450px) {

  }
`;

const ColonTextMobile = styled(ColonText)`
  color:gray ;
  width:10px ;
  font-weight:400 ;
  @media (max-width: 450px) {

  }
`;

const CenterNameTextMobile = styled(CenterNameText)`
  font-size:14px ;
  text-align:left ;
    font-weight:400 ;
  @media (max-width: 450px) {

  }
`;

const SlotDateHeadingMobile = styled(SlotDateHeading)`
  text-align:left ;
  font-weight:400 ;
  font-size:14px ;
  color:gray ;
  width:50px ;
  @media (max-width: 450px) {

  }
`;


const SlotDetailsTextMobile = styled(SlotDetailsText)`
  font-weight:400 ;
  font-size:14px ;
  @media (max-width: 450px) {

  }
`;


export { CustomaCssButtonMobile, ButtonContainerMobile, SlotDetailsContainerMobile, ColonTextMobile, SlotDateHeadingMobile, RestartHeadingMobile, SlotDetailsBoxMobile, CenterNameTextMobile, SlotDetailsTextMobile };

