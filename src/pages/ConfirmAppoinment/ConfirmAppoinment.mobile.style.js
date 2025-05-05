import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Grid, Typography, styled } from "@mui/material";
import { CustomTextField } from "@/elements/CustomTextField";
import { CustomDateField } from "@/elements/CustomDateField";
import { CustomConfirmButton, CustomDateDetailsField, CustomTextDetailsField, FieldContainer, FieldName, FieldParentBox, HeadingText, HelpText, OptionalHeadingText, ProvisionalBookingText } from "./ConfirmAppoinment.style";

const HeadingTextMobile = styled(HeadingText)`
  @media (min-width: 320px) and (max-width: 400px) {
       font-size: 18px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
       font-size: 18px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 18px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const CustomTextDetailsFieldMobile = styled(CustomTextDetailsField)`
  width: 100% ;
  @media (min-width: 320px) and (max-width: 400px) {

  }

  @media (min-width: 400px) and (max-width: 440px) {

  }

  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;
const CustomDateDetailsFieldMobile = styled(CustomDateDetailsField)`
  width: 100% ;
  @media (min-width: 320px) and (max-width: 400px) {

  }

  @media (min-width: 400px) and (max-width: 440px) {

  }

  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const FieldContainerMobile = styled(FieldContainer)`
  width: 100% ;
  height:300px ;
  @media (min-width: 320px) and (max-width: 400px) {
    padding:0px 0px ;
    justify-content:center ;
    margin-top:0px ;
  }

  @media (min-width: 400px) and (max-width: 440px) {
  padding:0px 0px ;
    justify-content:center ;
    margin-top:0px ;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    padding:0px 0px ;
    justify-content:center ;
    margin-top:0px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;
const FieldNameMobile = styled(FieldName)`
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 14px;
    margin-bottom: 3px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    font-size: 14px;
    margin-bottom: 3px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const OptionalHeadingTextMobile = styled(OptionalHeadingText)`
 font-weight: 350;
  @media (min-width: 320px) and (max-width: 400px) {
 font-size: 15px;
    margin-top: 10px;
    margin-bottom: -10px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
 font-size: 15px;
    margin-top: 10px;
    margin-bottom: -10px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
 font-size: 15px;
    margin-top: 10px;
    margin-bottom: -10px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const HelpTextMobile = styled(HelpText)`
  @media (min-width: 320px) and (max-width: 400px) {
    padding-top:11px ;
    font-size: 12px;
  }

  @media (min-width: 400px) and (max-width: 440px) {
    padding-top:11px ;
    font-size: 12px;
  }

  @media (min-width: 440px) and (max-width: 480px) {
    padding-top:11px ;
    font-size: 12px;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const ProvisionalBookingTextMobile = styled(ProvisionalBookingText)`
  @media (min-width: 320px) and (max-width: 400px) {
font-size:12px ;
  }

  @media (min-width: 400px) and (max-width: 440px) {
font-size:12px ;
  }

  @media (min-width: 440px) and (max-width: 480px) {
font-size:12px ;
  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`;

const CustomConfirmButtonMobile = styled(CustomConfirmButton)`
   font-size: 14px;
    margin-top:20px ;
    height:40px ;
  @media (min-width: 320px) and (max-width: 400px) {

  }

  @media (min-width: 400px) and (max-width: 440px) {

  }

  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
`

const FieldParentBoxMobile = styled(FieldParentBox)`
height:340px ;
overflow:auto ;
  @media (min-width: 320px) and (max-width: 400px) {

  }

  @media (min-width: 400px) and (max-width: 440px) {

  }

  @media (min-width: 440px) and (max-width: 480px) {

  }
  @media (min-width: 480px) and (max-width: 780px) {
    
  }
    @media (min-height: 600px) and (max-height: 700px) and (max-width: 750px) {
    height:340px ;
  }


  @media (min-height: 700px) and (max-height: 800px) and (max-width: 750px) {
    height:390px ;
  }

 @media (min-height: 800px) and (max-height: 900px) and (max-width: 750px) {
    height:420px ;  
  }
`;


export { FieldParentBoxMobile, OptionalHeadingTextMobile, HelpTextMobile, FieldContainerMobile, FieldNameMobile, HeadingTextMobile, CustomTextDetailsFieldMobile, CustomDateDetailsFieldMobile, CustomConfirmButtonMobile, ProvisionalBookingTextMobile };
