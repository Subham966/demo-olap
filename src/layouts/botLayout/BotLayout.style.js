import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import DesktopTransparentBg from "@/assets/images/DesktopTransparentBg.png";
import DesktopTransparentBg2 from "@/assets/images/DesktopTransparentBg2.png";
import MobileTransparentBg from "@/assets/images/MobileTransparentBg.png";


const BotLayoutContainer = styled(Box)`
  display: flex ;
  flex-direction: column ;
  overflow:hidden ;
  position:relative ;
  height: 770px; 
`;


const BotRibben = styled(Stack)`
 width: 100%;
  display: ${(props) => (props.emb ? "none" : "flex")};
  height: ${(props) => (props.emb ? "0px" : "40px")};
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.primaryTheme};
  position: relative;
  top: 0px; 
  
`;

const BodyContainer = styled(Box)`
overflow: auto ;
width: 100% ;
justify-content: center ;
align-items: center ;

  
`;

const PopupBox = styled(Box)`
  position: absolute ;
  width: 100% ;
  height: 100% ;
  z-index: 9999 ;   
  
`;

const StepperContainer = styled(Box)`
  position:relative ;
  top: 0px ;
  display:${props => (props.isStepperPresent ? "auto" : "none")} ;
  height:${(props) => (props.emb ? "95px" : "65px")} ;
  padding-top:${props => (props.emb ? "15px" : "0px")} ;
  padding-bottom:${props => (props.emb ? "15px" : "0px")} ;  
  
`;
const ConversationTimeOutAlert= styled(Box)`
  font-size: 14px ; 
`;
const AppointmentBookingText = styled(Typography)`
  font-size: 20px ;
  text-align:center ; 
  
`;
const OfflineText = styled(Box)`
 text-align: center ;
  font-size: 20px ;
  color: white;
  position: absolute;
  width: 100% ; 
  
`;
const TimeoutContainer = styled(Box)`
margin: auto ;
text-align: center ;
padding: 5px ;
border-radius: 3px ;
align-content: center ;
position: absolute ;
z-index: 3 ;
width: 60% ;
left: 20%;
background-color: yellow ;
`;
const NeedHelpContainer = styled(Box)`
    position: relative;
    bottom: 0 ;
    right:0;
    font-style: italic ;
    font-size: 14px ;
    text-align: right ;
    padding: 5px 10px;
    cursor: pointer ;
    text-decoration:underline ;
    background-color: white ;
    bottom: 0px;
    height: ${props => (props.emb ? "35px" : "25px")} ;

`;
export { BotLayoutContainer,NeedHelpContainer, AppointmentBookingText ,BotRibben,ConversationTimeOutAlert,BodyContainer,StepperContainer,TimeoutContainer,PopupBox,OfflineText};

