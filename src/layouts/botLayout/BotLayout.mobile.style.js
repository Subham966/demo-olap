import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import DesktopTransparentBg from "@/assets/images/DesktopTransparentBg.png";
import DesktopTransparentBg2 from "@/assets/images/DesktopTransparentBg2.png";
import MobileTransparentBg from "@/assets/images/MobileTransparentBg.png";
import { AppointmentBookingText, BodyContainer, BotLayoutContainer, BotRibben, ConversationTimeOutAlert, NeedHelpContainer, OfflineText, PopupBox, StepperContainer, TimeoutContainer } from "./BotLayout.style";


const BotLayoutContainerMobile = styled(BotLayoutContainer)`
 @media (min-width: 320px) and (max-width: 400px) {
  
  }
  
  @media (min-width: 400px) and (max-width: 440px) {

  }

  @media (min-width: 440px) and (max-width: 480px) { 

  }

  @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {
    height:600px ;
  }


  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
    height:650px ;
  }

 @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
    height:720px ;  
  }
`;


const BotRibbenMobile = styled(BotRibben)`
  @media (max-width: 780px) {
   height:40px ;
  }
  
`;

const BodyContainerMobile = styled(BodyContainer)`
  @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {
    height:${(props) => (props.isStepperPresent ? "470px" : "540px")} ;
  }


  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
    height:${(props) => (props.isStepperPresent ? "520px" : "590px")} ;
    
  }

 @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
    height:${(props) => (props.isStepperPresent ? "590px" : "660px")} ;
  }

`;

const PopupBoxMobile = styled(PopupBox)`
  @media (max-width: 780px) {

  }
`;

const StepperContainerMobile = styled(StepperContainer)`
  padding-top:${props => (props.emb ? "15px" : "0px")} ;
  padding-bottom:${props => (props.emb ? "15px" : "0px")} ;

  @media (max-width: 780px) {
  height:${(props) => (props.emb ? "95px" : "65px")} ;
  }

  
`;

const ConversationTimeOutAlertMobile= styled(ConversationTimeOutAlert)`
  @media (max-width: 780px) {
  font-size: 12px;
  }
  
  
`;
const AppointmentBookingTextMobile = styled(AppointmentBookingText)`
  @media (max-width: 780px) {
  font-size: 17px;
  }

  
`;
const OfflineTextMobile = styled(TimeoutContainer)`
  @media (max-width: 780px) {
  font-size: 17px;
  }

  
`;
const TimeoutContainerMobile = styled(Box)`
text-align: center ;
background-color: yellow ;
width: 100% ;
margin:auto ,
left:0% ;
position:absolute;
z-index:30 ;
padding:5px ;
padding-left:10px ;
padding-right:10px ;
@media (max-width: 780px) {
margin-top: 2px,
}

`;
const NeedHelpContainerMobile = styled(NeedHelpContainer)`
  @media (max-width: 780px) {
        font-size: 12px ;
  }
  
`;
export { BotLayoutContainerMobile,NeedHelpContainerMobile, AppointmentBookingTextMobile ,BotRibbenMobile,ConversationTimeOutAlertMobile,BodyContainerMobile,StepperContainerMobile,TimeoutContainerMobile,PopupBoxMobile,OfflineTextMobile};

