import { COLORS } from "@/theme";
import { Box, Typography, styled } from "@mui/material";
import { CustomContainer, ErrorHeading, ErrorIconBox, HelpTextBox, HelpTextHeading } from "./ErrorMessage.style";

const CustomContainerDesktop = styled(CustomContainer)`
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
padding-top:30px ;
padding-bottom:30px ;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
padding-top:50px ;
padding-bottom:50px ;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
padding-top:80px ;
padding-bottom:80px ;
  }
`;


const ErrorHeadingDesktop = styled(ErrorHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 17px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px;
  }
`;

const HelpTextHeadingDesktop = styled(HelpTextHeading)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 14px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 15px;
  }
  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 16px;
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


export { CustomContainerDesktop, ErrorIconBoxDesktop, HelpTextBoxDesktop, ErrorHeadingDesktop, HelpTextHeadingDesktop };
