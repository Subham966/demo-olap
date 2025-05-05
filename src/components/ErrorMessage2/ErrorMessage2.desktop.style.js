import { COLORS } from "@/theme";
import { Box, Typography, styled } from "@mui/material";
import { CustomContainer, ErrorSubHeading, ErrorHeading, ErrorIconBox, HelpTextBox, HelpTextHeading, AdditionalMessage, CancelButton } from "./ErrorMessage2.style";

const CustomContainerDesktop = styled(CustomContainer)`
padding-top:40px ;
padding-bottom:40px ;
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
padding-top:20px ;
padding-bottom:20px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
padding-top:30px ;
padding-bottom:30px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
padding-top:50px ;
padding-bottom:50px ;
  }
`;


const ErrorHeadingDesktop = styled(ErrorHeading)`
  font-size: 24px !important;
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

const ErrorSubHeadingDesktop = styled(ErrorSubHeading)`
padding-top:30px ;
padding-bottom:10px ;
font-size: 20px;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    padding-top:10px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 18px;
    padding-top:10px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 20px;
    padding-top:10px ;
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

`;


const HelpTextBoxDesktop = styled(HelpTextBox)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 12px;
    margin-bottom:0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 14px;
    margin-bottom:0px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
    margin-bottom:0px;
  }
`;

const AdditionalMessageDesktop = styled(AdditionalMessage)`
  font-size: 18px;
  padding-top:20px ;
  padding-bottom:20px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
    padding-top:0px ;
    margin-bottom:0px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 16px;
    padding-top:10px ;
    margin-bottom:10px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
    padding-top:10px ;
    margin-bottom:10px;
  }
`;

const CancelButtonDesktop = styled(CancelButton)`
padding-top:20px ;
padding-bottom:20px ;
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {

  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
padding-top:10px ;
padding-bottom:10px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {

  }
`;

export { CustomContainerDesktop,ErrorIconBoxDesktop, HelpTextBoxDesktop ,ErrorHeadingDesktop ,HelpTextHeadingDesktop,ErrorSubHeadingDesktop,AdditionalMessageDesktop,CancelButtonDesktop};
