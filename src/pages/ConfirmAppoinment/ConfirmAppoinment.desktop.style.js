import { CustomButton } from "@/elements/CustomButton";
import { COLORS, BORDERS } from "../../theme/theme";
import { Avatar, Box, Button, Grid, Typography, styled } from "@mui/material";
import { CustomTextField } from "@/elements/CustomTextField";
import { CustomDateField } from "@/elements/CustomDateField";
import { CustomConfirmButton, CustomDateDetailsField, CustomTextDetailsField, FieldContainer, FieldName, FieldParentBox, HeadingText, HelpText, OptionalHeadingText, ProvisionalBookingText } from "./ConfirmAppoinment.style";

const HeadingTextDesktop = styled(HeadingText)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 10px;
    padding:0px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
    font-size: 20px;
    margin: 0px;
    margin-top: 5px;
    margin-bottom: 15px;
    padding:0px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 24px;
    margin: 0px;
    margin-top: 5px;
    margin-bottom: 15px;
    padding:0px ;
 }
`;

const CustomTextDetailsFieldDesktop = styled(CustomTextDetailsField)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 width:240px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 width: 300px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 width: 330px ;
 }
`;
const CustomDateDetailsFieldDesktop = styled(CustomDateDetailsField)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
 width:230px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
 width: 300px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
 width: 340px ;
 }
`;

const FieldContainerDesktop = styled(FieldContainer)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   padding:0px 30px ;
   height:130px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   padding:0px 30px ;
   height:140px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
padding:0px 30px ;
 height:190px ;
 }
`;
const FieldNameDesktop = styled(FieldName)`
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  font-size: 13px;
  margin-bottom: 5px;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  font-size: 15px;
  margin-bottom: 5px;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
  font-size: 17px;
 }
`;

const OptionalHeadingTextDesktop = styled(OptionalHeadingText)`
 font-weight: 350;
 @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   font-size: 13px;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size: 15px;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   font-size: 15px;
 }
`;

const HelpTextDesktop = styled(HelpText)`
   padding-left:0px ;
   @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   font-size: 11px;
   padding-top:5px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size: 13px;
   padding-top:10px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   font-size: 15px;
 }
`;

const ProvisionalBookingTextDesktop = styled(ProvisionalBookingText)`
   @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
   font-size: 12px;
   width:90%;
   margin:auto ;
   padding-top:5px ;
   margin-top: 0px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
   font-size: 13px;
   padding-top:10px ;
   margin-top: 0px ;
   margin-bottom: 0px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
   font-size: 15px;
    margin-bottom: 0px ;
 }
`;

const CustomConfirmButtonDesktop = styled(CustomConfirmButton)`
  @media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
  height:33px ;
  font-size: 11px !important;
  padding: 8px;
  }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
  height:30px ;
  font-size: 13px  !important;
    padding: 8px;
  }

  @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
    font-size: 18px  !important;
    padding: 15px;
    height:40px ;

  }
`

const FieldParentBoxDesktop = styled(FieldParentBox)`
height:550px ;
@media (min-height: 400px) and (max-height: 700px) and (min-width: 750px) {
height:350px ;
margin-left:20px ;
margin-right:20px ;
 }
  @media (min-height: 700px) and (max-height: 800px) and (min-width: 750px) {
height:410px ;
margin-left:20px ;
margin-right:20px ;
margin-top:-10px ;
 }

 @media (min-height: 800px) and (max-height: 900px) and (min-width: 750px) {
height:490px ;
margin-left:20px ;
margin-right:20px ;
 }
`;


export { FieldParentBoxDesktop, OptionalHeadingTextDesktop, HelpTextDesktop, FieldContainerDesktop, FieldNameDesktop, HeadingTextDesktop, CustomTextDetailsFieldDesktop, CustomDateDetailsFieldDesktop, CustomConfirmButtonDesktop, ProvisionalBookingTextDesktop };
