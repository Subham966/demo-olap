import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import { CustomButton } from '@/elements/CustomButton'
import { COLORS } from "@/theme";
import { ButtonContainer, SlotDetailsContainer, CenterNameText, ColonText, CustomaCssButton, RestartHeading, SlotDateHeading, SlotDateText, SlotDetailsBox, SlotDetailsText } from "./ConfirmSlotDetails.style";


const ButtonContainerDesktop = styled(ButtonContainer)`
`;

const RestartHeadingDesktop = styled(RestartHeading)`
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

const SlotDetailsBoxDesktop = styled(SlotDetailsBox)`
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
const SlotDetailsContainerDesktop = styled(SlotDetailsContainer)`
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

const ColonTextDesktop= styled(ColonText)`
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

const CenterNameTextDesktop = styled(CenterNameText)`
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

const SlotDateHeadingDesktop = styled(SlotDateHeading)`
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

const SlotDetailsTextDesktop = styled(SlotDetailsText)`
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


export {CustomaCssButtonDesktop,ButtonContainerDesktop,SlotDetailsContainerDesktop,ColonTextDesktop,SlotDateHeadingDesktop, RestartHeadingDesktop,SlotDetailsTextDesktop,CenterNameTextDesktop,SlotDetailsBoxDesktop};

