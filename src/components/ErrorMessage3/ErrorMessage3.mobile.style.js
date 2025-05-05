import { COLORS } from "@/theme";
import { Box, Typography, styled } from "@mui/material";
import { CustomContainer, ErrorSubHeading, ErrorHeading, ErrorIconBox, HelpTextBox, HelpTextHeading, AdditionalMessage, CancelButton, ContactNumber } from "./ErrorMessage3.style";

const CustomContainerMobile = styled(CustomContainer)`
@media (min-width: 320px) and (max-width: 400px) {
  width:95%;
  height:50vh ;
  padding:10px ;
  padding-top:40px ;
  padding-bottom:40px ;
}
@media (min-width: 400px) and (max-width: 440px) {
  width:95%;
  height:50vh ;
  padding:10px ;
  padding-top:40px ;
  padding-bottom:40px ;
}
@media (min-width: 440px) and (max-width: 480px) {
  width:95%;
  height:50vh ;
  padding:10px ;
  padding-top:40px ;
  padding-bottom:40px ;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;


const ErrorHeadingMobile = styled(ErrorHeading)`

`;

const ErrorSubHeadingMobile = styled(ErrorSubHeading)`

`;
const ContactNumberMobile = styled(ContactNumber)`
  font-size:20px !important ;
`;

const HelpTextHeadingMobile = styled(HelpTextHeading)`

`;

const ErrorIconBoxMobile = styled(ErrorIconBox)`

`;


const HelpTextBoxMobile = styled(HelpTextBox)`
    margin-bottom:0px;
@media (min-width: 320px) and (max-width: 400px) {
  width:100% ;
  font-size:14px ;
}
@media (min-width: 400px) and (max-width: 440px) {
  width:100% ;
  font-size:14px ;
}
@media (min-width: 440px) and (max-width: 480px) {
  width:100% ;
  font-size:14px ;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const AdditionalMessageMobile = styled(AdditionalMessage)`
@media (min-width: 320px) and (max-width: 400px) {
  width:100% ;
  font-size:14px ;
}
@media (min-width: 400px) and (max-width: 440px) {
  width:100% ;
  font-size:14px ;
}
@media (min-width: 440px) and (max-width: 480px) {
  width:100% ;
  font-size:14px ;
}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

const CancelButtonMobile = styled(CancelButton)`
@media (min-width: 320px) and (max-width: 400px) {

}
@media (min-width: 400px) and (max-width: 440px) {

}
@media (min-width: 440px) and (max-width: 480px) {

}
@media (min-width: 480px) and (max-width: 780px) {
    
}
`;

export { CustomContainerMobile,ErrorIconBoxMobile, HelpTextBoxMobile ,ErrorHeadingMobile ,HelpTextHeadingMobile,ErrorSubHeadingMobile,AdditionalMessageMobile,CancelButtonMobile,ContactNumberMobile};
