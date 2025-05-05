import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import DesktopTransparentBg from "@/assets/images/DesktopTransparentBg.png";
import DesktopTransparentBg2 from "@/assets/images/DesktopTransparentBg2.png";
import MobileTransparentBg from "@/assets/images/MobileTransparentBg.png";
import { AppointmentBookingText, BodyContainer, BotLayoutContainer, BotRibben, ConversationTimeOutAlert, NeedHelpContainer, OfflineText, PopupBox, StepperContainer, TimeoutContainer } from "./BotLayout.style";


const BotLayoutContainerDesktop = styled(BotLayoutContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height: 520px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   height: 600px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  height: 700px;
  } 
  
`;


const BotRibbenDesktop = styled(BotRibben)`


  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   height:33px ;
   padding:5px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  height:43px ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 height:43px ;
  }   
  
`;

const BodyContainerDesktop = styled(BodyContainer)`

height : ${(props) => (props.isStepperPresent ? "640px" : "735px")} ;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height :${(props) => (props.isStepperPresent ? "500px" : "595px")} ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  height :${(props) => (props.isStepperPresent ? "600px" : "695px")} ;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  height :${(props) => (props.isStepperPresent ? "600px" : "695px")} ;
  }   
  
`;

const PopupBoxDesktop = styled(PopupBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }   
  
`;

const StepperContainerDesktop = styled(StepperContainer)`
  height:${(props) => (props.emb ? "95px" : "65px")} ;
  padding-top:${props => (props.emb ? "15px" : "0px")} ;
  padding-bottom:${props => (props.emb ? "15px" : "0px")} ;;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }   
  
`;

const ConversationTimeOutAlertDesktop= styled(ConversationTimeOutAlert)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 12px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 13px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 14px;
  }   
  
`;
const AppointmentBookingTextDesktop = styled(AppointmentBookingText)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 15px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 20px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 20px;
  }   
  
`;
const OfflineTextDesktop = styled(OfflineText)`

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 15px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 20px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 20px;
  }   
  
`;
const TimeoutContainerDesktop = styled(TimeoutContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {

  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }   
  
`;
const NeedHelpContainerDesktop = styled(NeedHelpContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 12px;
  padding: 2px 10px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 12px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 13px;
  } 
  
`;
export { BotLayoutContainerDesktop,NeedHelpContainerDesktop, AppointmentBookingTextDesktop ,BotRibbenDesktop,ConversationTimeOutAlertDesktop,BodyContainerDesktop,StepperContainerDesktop,TimeoutContainerDesktop,PopupBoxDesktop,OfflineTextDesktop};

