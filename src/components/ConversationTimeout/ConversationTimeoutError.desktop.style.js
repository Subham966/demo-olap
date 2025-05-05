import { COLORS } from "@/theme";
import { Box, Typography, styled } from "@mui/material";
import { CustomContainer, ErrorSubHeading, ErrorHeading, ErrorIconBox, HelpTextBox, HelpTextHeading, AdditionalMessage, CancelButton, ContactNumber } from "./ConversationTimeoutError.style";

const CustomContainerDesktop = styled(CustomContainer)`
padding-top:120px ;
padding-bottom:120px ;
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
padding-top:50px ;
padding-bottom:50px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
padding-top:70px ;
padding-bottom:70px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
padding-top:60px ;
padding-bottom:60px ;
  }
`;


const ErrorHeadingDesktop = styled(ErrorHeading)`
  font-size: 24px !important;
  font-weight:500 ;
  width:85% ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 18px !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 20px !important;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 22px !important;
  }
`;
const ContactNumberDesktop = styled(ContactNumber)`
  font-size: 30px !important;
  width:85% ;
  padding-bottom:10px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 24px !important;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 24px !important;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 26px !important;
  }
`;

const ErrorSubHeadingDesktop = styled(ErrorSubHeading)`
padding-top:30px ;
font-size: 20px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    padding-top:10px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 20px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
  }
`;

const HelpTextHeadingDesktop = styled(HelpTextHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
  }
`;

const ErrorIconBoxDesktop = styled(ErrorIconBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
  }
`;


const HelpTextBoxDesktop = styled(HelpTextBox)`
   font-size:18px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin-bottom:0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    margin-bottom:0px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    margin-bottom:0px;
  }
`;

const AdditionalMessageDesktop = styled(AdditionalMessage)`
  font-size: 18px;
  padding-top:20px ;
  padding-bottom:20px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    margin-bottom:20px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    margin-bottom:20px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    margin-bottom:30px;
  }
`;

const CancelButtonDesktop = styled(CancelButton)`
padding-top:20px ;
padding-bottom:20px ;

  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
padding-top:20px ;
padding-bottom:20px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
padding-top:20px ;
padding-bottom:20px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
padding-top:20px ;
padding-bottom:20px ;
  }
`;

export { CustomContainerDesktop,ErrorIconBoxDesktop, HelpTextBoxDesktop ,ErrorHeadingDesktop ,HelpTextHeadingDesktop,ErrorSubHeadingDesktop,AdditionalMessageDesktop,CancelButtonDesktop,ContactNumberDesktop};
